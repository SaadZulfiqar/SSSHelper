import { connectRouter } from 'connected-react-router'

import { combineReducers } from 'redux';
import { serveysReducer } from './serveys';

import history from '../utils/history';

const allReducers = combineReducers({
    serveys: serveysReducer,
    router: connectRouter(history)
});

export default allReducers
