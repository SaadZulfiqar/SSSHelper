import * as action from '../actions/serveys';

const serveys = [
    {
        "Id": 1,
        "Title": "Survey 1",
        "Description": "Description 1",
        "PopupLocation": "test",
        "WhenToLoad": null,
        "HowOftenToLoad": null,
        "MetaDataId": 44,
        "MetaDataInternalName": "GCSR",
        "Enabled": 1,
        "CreatedBy": null,
        "CreationDate": null,
        "UpdatedBy": null,
        "UpdateDate": null
    },
    {
        "Id": 2,
        "Title": "Survey 2",
        "Description": "Description 2",
        "PopupLocation": "test",
        "WhenToLoad": null,
        "HowOftenToLoad": null,
        "MetaDataId": 45,
        "MetaDataInternalName": "eco",
        "Enabled": 1,
        "CreatedBy": null,
        "CreationDate": null,
        "UpdatedBy": null,
        "UpdateDate": null
    }
];
    

export const fetchServeys = () => {
    return dispatch => {
        dispatch(action.fetchServeysPending());
        // mimicking service
        setTimeout(function () {
            dispatch(action.fetchServeysSuccess(serveys));           
        }, 1000);

        // fetch('https://exampleapi.com/products')
        // .then(res => res.json())
        // .then(res => {
        //     if(res.error) {
        //         throw(res.error);
        //     }
        //     dispatch(action.fetchProductsSuccess(res.products);
        //     return res.products;
        // })
        // .catch(error => {
        //     dispatch(action.fetchProductsError(error));
        // })
    }
}

export const submitServey = (servey) => {

    return dispatch => {
        dispatch(action.submitServeyPending());
        // mimicking service
        setTimeout(function () {
            dispatch(action.submitServeySuccess(servey));           
        }, 2000);

        // fetch('https://exampleapi.com/products')
        // .then(res => res.json())
        // .then(res => {
        //     if(res.error) {
        //         throw(res.error);
        //     }
        //     dispatch(action.fetchProductsSuccess(res.products);
        //     return res.products;
        // })
        // .catch(error => {
        //     dispatch(action.fetchProductsError(error));
        // })
    }
}

export const toggleServeyDialog = (flag) => { return dispatch => dispatch(action.toggleServeyDialog(flag)); };
