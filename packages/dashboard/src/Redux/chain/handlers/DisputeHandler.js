import {Handler} from 'eth-pipeline';
import * as DBNames from 'Storage/DBNames';
import Factory from "Chain/LogEvents/EventFactory"
import {Logger} from 'buidl-utils';
import {default as dispOps} from 'Redux/disputes/operations';
import * as ethUtils from 'web3-utils';

const log = new Logger({component: "DisputeHandler"});

export default class DisputeHandler extends Handler {
    constructor(props) {
        super({name: "DisputeHandler"});
        [
            'newBlock'
        ].forEach(fn=>this[fn]=this[fn].bind(this));
    }

    async newBlock(ctx, block, next, reject) {
        let txns = block.transactions || [];
        for(let i=0;i<txns.length;++i) {
            let t = txns[i];
            let logEvents = t.logEvents || {};
            let dispEvents = logEvents[DBNames.NewDispute] || [];
            if(dispEvents.length === 0) {
                continue;
            }

            let dispute = Factory({
                event: DBNames.NewDispute,
                ...dispEvents[0]
            });
            log.info("Created dispute", dispute);

            if(!dispute.sender && dispute.transactionHash) {
                log.info("Getting sender for dispute event...");
                //retrieve txn info 
                let web3 = ctx.getState().chain.web3;
                let rec = await web3.eth.getTransactionReceipt(dispute.transactionHash);
                if(rec) {
                    log.info("Have receipt for dispute", rec);
                    dispute.sender = rec.from.toLowerCase();
                } else {
                    log.warn("Could not get receipt for txn", dispute.transactionHash);
                }
            } else if(!dispute.sender) {
                log.warn("Dispute event does not have a transaction hash!", dispute);
            }

            ctx.store({
                database: DBNames.NewDispute,
                key: dispute.id,
                data: dispute.toJSON()
            });
            let key = ethUtils.sha3(""+dispute.requestId + ""+dispute.mineTime);
            log.info("Challenge-match key", key);
            let matchingChallenge = ctx.getState().challenges.byIdAndTime[key];
            if(matchingChallenge) {
                matchingChallenge.nonces.forEach(n=>{
                    if(n.miner === dispute.miner) {
                        dispute.targetNonce = n;
                        dispute.targetChallenge = matchingChallenge;
                    }
                })
            }
            await ctx.cache.reduce(DBNames.NewDispute, state=>{
                if(!state) {
                    state = [];
                }
                return [
                    ...state,
                    dispute
                ]
            });
        }

        let all = ctx.cache.get(DBNames.NewDispute);
        if(all && all.length > 0) {
            await ctx.dispatch(dispOps.addDisputes(all));
        }

        return next();
    }
}