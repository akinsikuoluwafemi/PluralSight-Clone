import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxi


export default function configureStore(initialState){
    return createStore(rootReducer, initialState, applyMiddleware())
}