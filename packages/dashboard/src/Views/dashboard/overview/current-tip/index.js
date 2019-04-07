import {connect} from 'react-redux';
import Tip from './CurrentTip';

const s2p = state => {
  let current = state.current.currentChallenge;
  if(!current) {
    return {
      tip: 0
    }
  }
  return {
    tip: current.value
  }
}

const d2p = dispatch => {
  return {

  }
}

export default connect(s2p, d2p)(Tip);
