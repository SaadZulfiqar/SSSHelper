import { FETCH_CONFIGURATIONS_PENDING, FETCH_CONFIGURATIONS_SUCCESS, FETCH_CONFIGURATIONS_ERROR, TOGGLE_CONFIGURATIONS_DIALOG } from '../actions/configurations';

const initialState = {
    pending: false,
    configurations: [],
    error: null,
    toggleConfigurationsDialog: false
}

export function configurationsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CONFIGURATIONS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_CONFIGURATIONS_SUCCESS:
            return {
                ...state,
                pending: false,
                configurations: action.payload
            }
        case FETCH_CONFIGURATIONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case TOGGLE_CONFIGURATIONS_DIALOG:
            return {
                ...state,
                toggleConfigurationsDialog: action.payload
            };
        default:
            return state;
    }
}

export const getConfigurations = state => state.configurations.configurations;
export const getConfigurationsPending = state => state.configurations.pending;
export const getConfigurationsError = state => state.configurations.error;
export const getToggleConfigurationsDialog = state => state.configurations.toggleConfigurationsDialog;