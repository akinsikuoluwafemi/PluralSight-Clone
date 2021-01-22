import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxI


export default function configureStore(initialState){
    return createStore(rootReducer, initialState, applyMiddleware())
}