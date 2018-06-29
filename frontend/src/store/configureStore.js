import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );
}