import * as action from '../actions/configurations';


const configurations = [
    {
        "config": "Configuration 1",
        "options": [
            "option 1",
            "option 2",
            "option 3",
            "option 4"
        ]
    },
    {
        "config": "Configuration 2",
        "options": [
            "option 1",
            "option 2",
            "option 3",
            "option 4"
        ]
    }
];

export const fetchConfigurations = () => {
    return dispatch => {
        dispatch(action.fetchConfigurationsPending());
        // mimicking service
        setTimeout(function () {
            dispatch(action.fetchConfigurationsSuccess(configurations));           
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

export const toggleConfigurationsDialog = (flag) => { return dispatch => dispatch(action.toggleConfigurationsDialog(flag)); };
