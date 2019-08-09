import { connectRouter } from 'connected-react-router'

import { combineReducers } from 'redux';
import { productsReducer } from './products';

import history from '../utils/history';

const allReducers = combineReducers({
    productsReducer: productsReducer,
    router: connectRouter(history)
});

export default allReducers
