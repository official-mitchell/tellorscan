import {connect} from 'react-redux';
import Menu from './TopMenu';
import {withRouter} from 'react-router-dom';
import * as navs from 'Navs';
import {default as tokenOps} from 'Redux/token/operations';
import {default as setOps} from 'Redux/settings/operations';
import {humanizeTellor, toFixed} from 'Utils/token';

const s2p = state => {
  return {
    loading: state.requests.loading || state.init.loading,
    balance: humanizeTellor(toFixed(state.token.balance)),
    tokenLoading: state.token.loading,
    realtimeRunning: state.settings.realtimeRunning
  }
}

const d2p = (dispatch,own) => {
  return {
    goHome: () => own.history.push(navs.HOME),
    toDisputes: () => own.history.push(navs.DISPUTE_HOME),
    toSettings: () => own.history.push(navs.SETTINGS_HOME),
    toMining: () => own.history.push(navs.MINER_HOME),
    getTokens: () => dispatch(tokenOps.getTokens()),
    getBalance: () => dispatch(tokenOps.getBalance()),
    toggleRealtime: () => dispatch(setOps.toggleRealtime())
  }
}

export default withRouter(connect(s2p, d2p)(Menu));
