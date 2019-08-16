
import * as action from '../actions/serveyDashboard';
const servey = {
    Questions: [
        {
            "ElementType": "Type",
            "Question": "Test",
            "SurveyId": "1",
            "Comments": "",
            "Enabled": "1",
            "Sequence": "",
            "CreatedBy": "1",
            "UpdatedBy": "1",
            "Options":
                [
                    {
                        "Options": "Test",
                        "Sequence": "test",
                        "Enabled": "1",
                        "CreatedBy": "1",
                        "UpdatedBy": "1"
                    },
                    {
                        "Options": "Options12",
                        "Sequence": "Sequence3",
                        "Enabled": "1",
                        "CreatedBy": "1",
                        "UpdatedBy": "1"
                    }
                ]
        }, {
            "Question": "B",
            "SurveyId": "1",
            "Comments": "",
            "Enabled": "1",
            "Sequence": "",
            "UpdatedBy": "1",
            "Options":
                [
                ]
        }
    ]
}


export const fetchServey = (id) => {
    return dispatch => {
        dispatch(action.fetchServeyPending());
        // mimicking service
        setTimeout(function () {
            dispatch(action.fetchServeySuccess(servey));           
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