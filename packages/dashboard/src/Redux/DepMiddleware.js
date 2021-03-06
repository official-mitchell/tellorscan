/**
 * There are cases where we want state changes to
 * globally update multiple downstream things. And, more importantly,
 * some of those updates might include asynchronous actions that need
 * be executed as a result of the one state change.
 *
 * This middleware will notify all registered dependencies for a
 * state change type. Dependencies are registered in DepManager.
**/


import _ from 'lodash';
import uuid from 'uuid/v4';
import {toastr} from 'react-redux-toastr';

let instance = null;

const _err = e => {
  toastr.error("Error", e.message);
}

class DepManager {

  static instance() {
    if(!instance) {
      instance = new DepManager();
    }
    return instance;
  }

  constructor() {
    this.callbacks = {};

    [
      'addDependency',
      'addDependencies',
      'removeDependency',
      'notify'
    ].forEach(fn=>{
      this[fn] = this[fn].bind(this);
    })
  }

  addDependencies(types, id, callback) {
    if(!Array.isArray(types)) {
      let a = [types];
      types = a;
    }
    types.forEach((t,i)=>{
      this.addDependency(t, id + "." + i, callback)
    });
  }

  addDependency(type, id, callback) {
    let set = this.callbacks[type] || {};
    set[id] = callback;
    this.callbacks[type] = set;
  }

  removeDependency(type, id) {
    let set = this.callbacks[type];
    delete set[id];
    this.callbacks[type] = set;
  }

  notify(obj, dispatch, getState) {
    let set = this.callbacks[obj.type];
    let setKeys = _.keys(set);
    
    return new Promise((done,err)=>{
      if(setKeys.length === 0) {
        return done();
      }

      setTimeout(async ()=>{
        for(let i=0;i<setKeys.length;++i) {
          let id = setKeys[i];
          let cb = set[id];
          try {
            let r = await cb(obj, dispatch, getState);
            if(r instanceof Promise) {
              r.catch(err);
            }
          } catch (e) {
            console.log("Problem in callback with id: " + id, e);
            err(e);
          }
        }
        done();
      },1);
    });
  }
}

export const registerDeps = (deps, callback) => {
  DepManager.instance().addDependencies(deps, uuid(), callback);
}

export default () =>  ({dispatch, getState}) => next => async action => {

    //apply the action
    let retValue = await next(action);

    //call dependent items
    await DepManager.instance().notify(action, dispatch, getState);

    //return orig result
    return retValue;
}
