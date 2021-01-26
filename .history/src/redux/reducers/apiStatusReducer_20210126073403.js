import * as types from '../actions/actionTypes';
import initialState from './initialState';


function actionTypeEndsInSuccess(type){
    return type.substring(type.length - 8) === "_"
}


export default function apiCallStatusReducer(state = initialState.apiCallsInProgress, action){
  switch(action.type){
      case types.BEGIN_API_CALL:
          return state + 1;
      default:
          return state;
  }
}