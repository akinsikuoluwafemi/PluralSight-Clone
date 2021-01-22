import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'red'


export default function configureStore(initialState){
    return createStore(rootReducer, initialState, applyMiddleware())
}