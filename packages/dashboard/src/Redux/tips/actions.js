import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  initStart: null,
  initSuccess: ['tips'],
  addTips: ['tips'],
  selectForTip: ['request'],
  failure: ['error']
},{prefix: "tips."});
export {
  Types,
  Creators
}
