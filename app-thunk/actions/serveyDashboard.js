export const FETCH_SERVEY_PENDING = 'FETCH_SERVEY_PENDING';
export const FETCH_SERVEY_SUCCESS = 'FETCH_SERVEY_SUCCESS';
export const FETCH_SERVEY_ERROR = 'FETCH_SERVEY_ERROR';

export const ON_ADD_NEW_QUESTION = 'ON_ADD_NEW_QUESTION';


export const fetchServeyPending = () => {
    return {
        type: FETCH_SERVEY_PENDING
    }
}

export const fetchServeySuccess = (survey) => {
    return {
        type: FETCH_SERVEY_SUCCESS,
        payload: survey
    }
}

export const fetchServeyError = (error) => {
    return {
        type: FETCH_SERVEY_ERROR,
        payload: error
    }
}

export const onAddNewQuestion = (question) => {
    return {
        type: ON_ADD_NEW_QUESTION,
        payload: question
    }
}