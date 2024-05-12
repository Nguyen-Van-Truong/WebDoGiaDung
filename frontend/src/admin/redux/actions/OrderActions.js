// src/redux/actions/OrderActions.js

import axios from "axios";

export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
});

// Action creators
export const fetchOrdersSuccess = (orders, totalPages) => ({
    type: FETCH_ORDERS_SUCCESS,
    payload: { orders, totalPages }
});

export const fetchOrdersFailure = (error) => ({
    type: FETCH_ORDERS_FAILURE,
    payload: error
});

export const fetchOrders = (page, size) => dispatch => {
    dispatch({ type: FETCH_ORDERS_REQUEST });
    axios.get(`/api/admin/orders?page=${page}&size=${size}&sortDirection=asc&sortBy=orderDate`)
        .then(response => {
            dispatch(fetchOrdersSuccess(response.data.content, response.data.totalPages));
        })
        .catch(error => {
            dispatch(fetchOrdersFailure(error.response ? error.response.data.message : error.message));
        });
};
