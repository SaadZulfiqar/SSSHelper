
import * as action from '../actions/serveyDashboard';

const survey = {
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
                        "Options": "This is option 1",
                        "Sequence": "test",
                        "Enabled": "1",
                        "CreatedBy": "1",
                        "UpdatedBy": "1"
                    },
                    {
                        "Options": "This is option 2",
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
                    {
                        "Options": "This is option 1",
                        "Sequence": "test",
                        "Enabled": "1",
                        "CreatedBy": "1",
                        "UpdatedBy": "1"
                    },
                    {
                        "Options": "This is option 2",
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
                    {
                        "Options": "This is option 1",
                        "Sequence": "test",
                        "Enabled": "1",
                        "CreatedBy": "1",
                        "UpdatedBy": "1"
                    },
                    {
                        "Options": "This is option 2",
                        "Sequence": "Sequence3",
                        "Enabled": "1",
                        "CreatedBy": "1",
                        "UpdatedBy": "1"
                    }
                ]
        }
    ]
}

const question = {
    "Question": "Hey there !!!!!!!",
    "SurveyId": "1",
    "Comments": "",
    "Enabled": "1",
    "Sequence": "",
    "UpdatedBy": "1",
    "Options":
        [
            {
                "Options": "Hey there !!!!!!! 1",
                "Sequence": "test",
                "Enabled": "1",
                "CreatedBy": "1",
                "UpdatedBy": "1"
            },
            {
                "Options": "Hey there !!!!!!! 2",
                "Sequence": "Sequence3",
                "Enabled": "1",
                "CreatedBy": "1",
                "UpdatedBy": "1"
            }
        ]
};


export const fetchServey = (id) => {
    return dispatch => {
        dispatch(action.fetchServeyPending());
        // mimicking service
        setTimeout(function () {
            dispatch(action.fetchServeySuccess(survey));
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

export const onAddNewQuestion = () => {
    return dispatch => {
        dispatch(action.onAddNewQuestion(question));
    }
};