import * as types from '../actions/actionTypes';
import initialState from './initialState';


function actionTypeEndsInSuccess(type){
    return type.substring(type.length - 8) === "_SUCCESS";
}


export default function apiCallStatusReducer(state = initialState.apiCallsInProgress, action){
    if(action.type)
  }
}