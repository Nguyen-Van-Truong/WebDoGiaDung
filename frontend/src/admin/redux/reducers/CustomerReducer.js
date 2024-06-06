import {
    FETCH_CUSTOMER_DETAIL_ORDERS_FAILURE,
    FETCH_CUSTOMER_DETAIL_ORDERS_SUCCESS,
    FETCH_CUSTOMERS_SUCCESS,
} from '../actions/CustomerActions';

const initialState = {
    customers: [],
    detailCustomer: {},
    detailCustomerData: [],
    error: null,
    totalPages: 0
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CUSTOMERS_SUCCESS:
            return {
                ...state,
                customers: action.payload.content,
                totalPages: action.payload.totalPages,
            };
        case FETCH_CUSTOMER_DETAIL_ORDERS_SUCCESS:
            const detailCustomer = action.payload.content && action.payload.content.length > 0 ? action.payload.content[0] : {};
            return {
                ...state,
                detailCustomer: detailCustomer,
                detailCustomerData: action.payload.content,
                totalPages: action.payload.totalPages,
                error: null
            };
        case FETCH_CUSTOMER_DETAIL_ORDERS_FAILURE:
            return {...state, error: action.payload};
        default:
            return state;
    }
};

export default customerReducer;
