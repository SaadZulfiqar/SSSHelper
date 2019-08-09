import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from 'actions';

const servey = [
    {
        "Id": 1,
        "Title": "Test",
        "Description": "Test",
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
        "Title": "test",
        "Description": "test",
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
    

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());

        // mimicing service
        setTimeout(function () {
            dispatch(fetchProductsSuccess(servey));           
        }, 3000);

        // fetch('https://exampleapi.com/products')
        // .then(res => res.json())
        // .then(res => {
        //     if(res.error) {
        //         throw(res.error);
        //     }
        //     dispatch(fetchProductsSuccess(res.products);
        //     return res.products;
        // })
        // .catch(error => {
        //     dispatch(fetchProductsError(error));
        // })
    }
}

export default fetchProducts;
