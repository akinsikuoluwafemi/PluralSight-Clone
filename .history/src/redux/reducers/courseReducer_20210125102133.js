import * as types from '../actions/actionTypes';


export default function courseReducer  (state = [], action)  {
    switch(action.type){
        case types.CREATE_COURSE:
            return [...state, { ...action.course }];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case typs
        default:
            return state 
    }
}