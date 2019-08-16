export const FETCH_SERVEY_PENDING = 'FETCH_SERVEY_PENDING';
export const FETCH_SERVEY_SUCCESS = 'FETCH_SERVEY_SUCCESS';
export const FETCH_SERVEY_ERROR = 'FETCH_SERVEY_ERROR';


export const fetchServeyPending = () => {
    return {
        type: FETCH_SERVEY_PENDING
    }
}

export const fetchServeySuccess = (servey) => {
    return {
        type: FETCH_SERVEY_SUCCESS,
        payload: servey
    }
}

export const fetchServeyError = (error) => {
    return {
        type: FETCH_SERVEY_ERROR,
        payload: error
    }
}