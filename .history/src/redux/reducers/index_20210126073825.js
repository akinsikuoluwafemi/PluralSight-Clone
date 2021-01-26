import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import apiCallsInProgress

const rootReducer = combineReducers({
    courses,
    authors
})

export default rootReducer;