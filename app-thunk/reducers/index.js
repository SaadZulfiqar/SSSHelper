import { connectRouter } from 'connected-react-router'

import { combineReducers } from 'redux';
import { serveysReducer } from './serveys';
import { serveyDashboardReducer } from './serveyDashboard';

import history from '../utils/history';

const allReducers = combineReducers({
    serveys: serveysReducer,
    serveyDashboard: serveyDashboardReducer,
    router: connectRouter(history)
});

export default allReducers
