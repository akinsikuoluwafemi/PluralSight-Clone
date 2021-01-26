import * as types from '../actions/actionTypes';
import initialState from './initialState';


function actionTypeEndsInSuccess(type){
    return type.substring(type.length - 8) === "_SUCCESS";
}


export default function apiCallStatusReducer(state = initialState.apiCallsInProgress, action){
    if(action.type === types.BEGIN_API_CALL){
        
    }else if(actionTypeEndsInSuccess(action.type)){
        return state - 1
    }
  }
}