// src/redux/reducers/CustomerReducer.js
import {FETCH_CUSTOMERS_SUCCESS, FETCH_DETAIL_CUSTOMER_SUCCESS} from '../actions/CustomerActions';

const initialState = {
    customers: [],
    detailCustomer: {},
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CUSTOMERS_SUCCESS:
            // console.log('Fetching customerReducer successful:', JSON.stringify(action.payload));
            return {
                ...state,
                customers: action.payload.content,
                totalPages: action.payload.totalPages,
            };
        case FETCH_DETAIL_CUSTOMER_SUCCESS:
            // console.log('Fetching detail customerReducer successful:', JSON.stringify(action.payload));
            return {
                ...state,
                detailCustomer: action.payload,
            };
        default:
            return state;
    }
};

export default customerReducer;
