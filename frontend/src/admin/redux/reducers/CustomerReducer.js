// src/redux/reducers/CustomerReducer.js
import {FETCH_CUSTOMERS_SUCCESS} from '../actions/CustomerActions';

const initialState = {
    customers: [],
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CUSTOMERS_SUCCESS:
            console.log('Fetching customerReducer successful:', JSON.stringify(action.payload));
            return {
                ...state,
                loading: false,
                customers: action.payload.content,
                totalPages: action.payload.totalPages,
                error: '',
            };
        default:
            return state;
    }
};

export default customerReducer;
