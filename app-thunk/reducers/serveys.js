import { FETCH_SERVEYS_PENDING, FETCH_SERVEYS_SUCCESS, FETCH_SERVEYS_ERROR, SUBMIT_SERVEY_PENDING, SUBMIT_SERVEY_SUCCESS, SUBMIT_SERVEY_ERROR, TOGGLE_SERVEY_DIALOG } from '../actions/serveys';

const initialState = {
    pending: false,
    serveys: [],
    error: null,
    toggleServeyDialog: false
}

export function serveysReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SERVEYS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_SERVEYS_SUCCESS:
            return {
                ...state,
                pending: false,
                serveys: action.payload
            }
        case FETCH_SERVEYS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }

        case SUBMIT_SERVEY_PENDING:
            return {
                ...state,
                pending: true
            }
        case SUBMIT_SERVEY_SUCCESS:
            return {
                ...state,
                pending: false,
                toggleServeyDialog: false,
                serveys: state.serveys.concat(action.payload)
            }
        case SUBMIT_SERVEY_ERROR:
            return {
                ...state,
                pending: true,
                toggleServeyDialog: true,
                error: action.error
            }
        case TOGGLE_SERVEY_DIALOG:
            return {
                ...state,
                toggleServeyDialog: action.payload
            };
        default:
            return state;
    }
}

export const getServeys = state => state.serveys.serveys;
export const getServeysPending = state => state.serveys.pending;
export const getServeysError = state => state.serveys.error;
export const getToggleServeyDialog = state => state.serveys.toggleServeyDialog;