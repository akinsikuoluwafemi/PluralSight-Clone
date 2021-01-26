import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import api

const rootReducer = combineReducers({
    courses,
    authors
})

export default rootReducer;