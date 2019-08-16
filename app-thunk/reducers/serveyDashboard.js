import { FETCH_SERVEY_PENDING, FETCH_SERVEY_SUCCESS, FETCH_SERVEY_ERROR } from '../actions/serveyDashboard';

const initialState = {
    pending: false,
    servey: {},
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
                servey: action.payload
            }
        case FETCH_SERVEY_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }

        default:
            return state;
    }
}

export const getServey = state => state.serveys.servey;
export const getServeyPending = state => state.serveys.pending;
export const getServeyError = state => state.serveys.error;