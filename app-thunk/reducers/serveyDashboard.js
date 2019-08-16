import _ from 'lodash';
import { FETCH_SERVEY_PENDING, FETCH_SERVEY_SUCCESS, FETCH_SERVEY_ERROR, ON_ADD_NEW_QUESTION } from '../actions/serveyDashboard';

const initialState = {
    pending: false,
    survey: {},
    error: null,
    toggleServeyDialog: false
}

export function serveyDashboardReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SERVEY_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_SERVEY_SUCCESS:
            return {
                ...state,
                pending: false,
                survey: action.payload
            }
        case FETCH_SERVEY_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case ON_ADD_NEW_QUESTION:
            const survey = _.cloneDeep(state.survey);
            survey.Questions = survey.Questions.concat(action.payload);
            return {
                ...state,
                survey: survey
            }
        default:
            return state;
    }
}

export const getServey = state => state.serveyDashboard.survey;
export const getServeyPending = state => state.serveyDashboard.pending;
export const getServeyError = state => state.serveyDashboard.error;