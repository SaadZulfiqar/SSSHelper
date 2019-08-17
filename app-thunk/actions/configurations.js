export const FETCH_CONFIGURATIONS_PENDING = 'FETCH_CONFIGURATIONS_PENDING';
export const FETCH_CONFIGURATIONS_SUCCESS = 'FETCH_CONFIGURATIONS_SUCCESS';
export const FETCH_CONFIGURATIONS_ERROR = 'FETCH_SERVEYS_ERROR';

export const TOGGLE_CONFIGURATIONS_DIALOG = 'TOGGLE_CONFIGURATIONS_DIALOG';


export const fetchConfigurationsPending = () => {
    return {
        type: FETCH_CONFIGURATIONS_PENDING
    }
}

export const fetchConfigurationsSuccess = (configurations) => {
    return {
        type: FETCH_CONFIGURATIONS_SUCCESS,
        payload: configurations
    }
}

export const fetchServeysError = (error) => {
    return {
        type: FETCH_SERVEYS_ERROR,
        payload: error
    }
}

export const toggleConfigurationsDialog = (flag) => {
    return {
        type: TOGGLE_CONFIGURATIONS_DIALOG,
        payload: flag
    }
}