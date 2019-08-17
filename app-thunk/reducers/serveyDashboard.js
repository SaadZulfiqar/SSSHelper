import _ from 'lodash';
import { FETCH_SERVEY_PENDING, FETCH_SERVEY_SUCCESS, FETCH_SERVEY_ERROR, ON_ADD_NEW_QUESTION, ON_ADD_NEW_QUESTION_OPTION, ON_CHANGE_QUESTION } from '../actions/serveyDashboard';

const initialState = {
    pending: false,
    survey: {},
    error: null,
    toggleServeyDialog: false
}

export function serveyDashboardReducer(state = initialState, action) {

    let survey = null;

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
            survey = _.cloneDeep(state.survey);
            survey.Questions.unshift(action.payload);
            return {
                ...state,
                survey: survey
            }
        case ON_ADD_NEW_QUESTION_OPTION:
            survey = _.cloneDeep(state.survey);
            survey.Questions[action.payload.questionIndex].Options.push(action.payload.option);
            return {
                ...state,
                survey: survey
            }
        case ON_CHANGE_QUESTION:
            console.log(action);
            survey = _.cloneDeep(state.survey);
            survey.Questions[action.payload.questionIndex].Question = action.payload.value;
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