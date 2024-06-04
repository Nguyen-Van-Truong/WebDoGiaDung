// src/redux/reducers/OrderReducer.js

import {
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILURE,
    FETCH_ORDER_DETAILS_REQUEST, FETCH_ORDER_DETAILS_SUCCESS, FETCH_ORDER_DETAILS_FAILURE
} from '../actions/OrderActions';

const initialState = {
    orders: [],
    orderDetails: {},
    totalPages: 0,
    loading: false,
    error: null
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload.orders,
                totalPages: action.payload.totalPages,
                loading: false,
                error: null
            };
        case FETCH_ORDERS_FAILURE:
            return {...state, loading: false, error: action.payload};
        case FETCH_ORDERS_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload.orders,
                totalPages: action.payload.totalPages,
                loading: false,
                error: null
            };
        case FETCH_ORDERS_FAILURE:
            return {...state, loading: false, error: action.payload};
        case FETCH_ORDER_DETAILS_REQUEST:
            return {...state, loading: true};
        case FETCH_ORDER_DETAILS_SUCCESS:
            console.log('FETCH_ORDER_DETAILS_SUCCESS:', JSON.stringify(action.payload));

            return {...state, orderDetails: action.payload, loading: false};
        case FETCH_ORDER_DETAILS_FAILURE:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
};

export default orderReducer;
