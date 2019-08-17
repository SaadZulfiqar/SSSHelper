import { connectRouter } from 'connected-react-router'

import { combineReducers } from 'redux';
import { serveysReducer } from './serveys';
import { serveyDashboardReducer } from './serveyDashboard';
import { configurationsReducer } from './configurations';

import history from '../utils/history';

const allReducers = combineReducers({
    serveys: serveysReducer,
    serveyDashboard: serveyDashboardReducer,
    configurations: configurationsReducer,
    router: connectRouter(history)
});

export default allReducers
