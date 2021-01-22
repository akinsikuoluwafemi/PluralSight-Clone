import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvaria


export default function configureStore(initialState){
    return createStore(rootReducer, initialState, applyMiddleware())
}