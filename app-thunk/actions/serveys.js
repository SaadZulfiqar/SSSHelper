export const FETCH_SERVEYS_PENDING = 'FETCH_SERVEYS_PENDING';
export const FETCH_SERVEYS_SUCCESS = 'FETCH_SERVEYS_SUCCESS';
export const FETCH_SERVEYS_ERROR = 'FETCH_SERVEYS_ERROR';

export const SUBMIT_SERVEY_PENDING = 'SUBMIT_SERVEY_PENDING';
export const SUBMIT_SERVEY_SUCCESS = 'SUBMIT_SERVEY_SUCCESS';
export const SUBMIT_SERVEY_ERROR = 'SUBMIT_SERVEY_ERROR';

export const TOGGLE_SERVEY_DIALOG = 'TOGGLE_SERVEY_DIALOG';

export const fetchServeysPending = () => {
    return {
        type: FETCH_SERVEYS_PENDING
    }
}

export const fetchServeysSuccess = (serveys) => {
    return {
        type: FETCH_SERVEYS_SUCCESS,
        payload: serveys
    }
}

export const fetchServeysError = (error) => {
    return {
        type: FETCH_SERVEYS_ERROR,
        payload: error
    }
}

export const submitServeyPending = () => {
    return {
        type: SUBMIT_SERVEY_PENDING
    }
}

export const submitServeySuccess = (servey) => {
    return {
        type: SUBMIT_SERVEY_SUCCESS,
        payload: servey
    }
}

export const submitServeyError = (error) => {
    return {
        type: SUBMIT_SERVEY_ERROR,
        payload: error
    }
}

export const toggleServeyDialog = (flag) => {
    return {
        type: TOGGLE_SERVEY_DIALOG,
        payload: flag
    }
}