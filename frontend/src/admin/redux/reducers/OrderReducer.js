// src/redux/reducers/OrderReducer.js

import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE } from '../actions/OrderActions';

const initialState = {
    orders: [],
    totalPages: 0,
    loading: false,
    error: null
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload.orders,
                totalPages: action.payload.totalPages,
                loading: false,
                error: null
            };
        case FETCH_ORDERS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default orderReducer;
