import * as types from '../actions/actionTypes';
export default function courseReducer  (state = [], action)  {
    switch(action.type){
        case types.:

            return [...state, { ...action.course }];
        default:
            return state
    }
}