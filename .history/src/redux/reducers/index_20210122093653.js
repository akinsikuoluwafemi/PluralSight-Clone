import { combineReducers, compose } from 'redux';

import courses from './courseReducer';

const rootReducer = combineReducers({
    courses: courses
})