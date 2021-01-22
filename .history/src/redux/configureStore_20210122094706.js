import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateI


export default function configureStore(initialState){
    return createStore(rootReducer, initialState, applyMiddleware())
}