import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Pending from './Pending';
import moment from 'moment';
import * as navs from 'Navs';
import _ from 'lodash';
import Dispute from 'Redux/events/tree/model/Dispute';

/*
let disp1 = {
  id: '_dispId',
  requestId: req.id,
  timestamp: 1555089275,
  tally: 50,
  value: 154.32,
  miner: '0x123456789abcde0123456789abcde',
  timeRemaining: d => {
    let now = Math.floor(Date.now()/1000);
    let rem = (7*86400) - (now-d.timestamp);
    return moment.duration(rem*1000);
  },
  request: req
};
let disp2 = {
  id: '_dispId2',
  requestId: req.id,
  timestamp: 1555421599,
  tally: -20,
  value: 104.32,
  miner: '0x123456789abcde0123456789abcde',
  timeRemaining: d => {
    let now = Math.floor(Date.now()/1000);
    let rem = (7*86400) - (now-d.timestamp);
    return moment.duration(rem*1000);
  },
  request: req
};
let disp3 = {
  id: '_dispId2',
  requestId: req.id,
  timestamp: 1555421599,
  tally: 0,
  value: 104.32,
  miner: '0x123456789abcde0123456789abcde',
  timeRemaining: d => {
    let now = Math.floor(Date.now()/1000);
    let rem = (7*86400) - (now-d.timestamp);
    return moment.duration(rem*1000);
  },
  request: req
};
*/

const s2p = (state,own) => {
  let reqsById = state.events.tree.byId;
  let chain = state.chain.chain || {};
  let user = chain.ethereumAccount || "";
  user = user.toLowerCase();

  let all = [];
  _.values(reqsById).forEach(r=>{
    let ds = r.disputes || {};
    let challenges = r.challenges || {};

  _.values(ds).forEach(d=>{
    let canVote = true;
    let voteReason = null;
    if(d.userVoted) {
      canVote = false;
      voteReason = "already voted"
    }
    if(d.disputer === user) {
      canVote = false;
      voteReason = "dispute owner";
    }

    all.push({
        ...d,
        request: r,
        timeRemaining: Dispute.timeRemaining,
        canVote,
        voteReason
      });
    })
  });
  all.sort((a,b)=>{
    let aRem = Dispute.timeRemaining(a);
    let bRem = Dispute.timeRemaining(b);
    return aRem - bRem;
  }); //those ending first

  return {
    disputes: all,
    loading: false
  }
}

const d2p = (dispatch,own) => {
  return {
    viewRequestDetails: id => {
      let url = navs.DETAILS_HOME + '/' + id;
      own.history.push(url);
    }
  }
}

export default withRouter(connect(s2p,d2p)(Pending));
