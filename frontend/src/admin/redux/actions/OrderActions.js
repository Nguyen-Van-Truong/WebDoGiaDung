import axios from "axios";

export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const FETCH_ORDER_DETAILS_REQUEST = 'FETCH_ORDER_DETAILS_REQUEST';
export const FETCH_ORDER_DETAILS_SUCCESS = 'FETCH_ORDER_DETAILS_SUCCESS';
export const FETCH_ORDER_DETAILS_FAILURE = 'FETCH_ORDER_DETAILS_FAILURE';
export const UPDATE_ORDER_STATUS_SUCCESS = 'UPDATE_ORDER_STATUS_SUCCESS';
export const UPDATE_ORDER_STATUS_FAILURE = 'UPDATE_ORDER_STATUS_FAILURE';

const fetchOrderDetailsRequest = () => ({
    type: FETCH_ORDER_DETAILS_REQUEST
});

const fetchOrderDetailsSuccess = (order) => ({
    type: FETCH_ORDER_DETAILS_SUCCESS,
    payload: order
});

const fetchOrderDetailsFailure = (error) => ({
    type: FETCH_ORDER_DETAILS_FAILURE,
    payload: error
});

const updateOrderStatusSuccess = (order) => ({
    type: UPDATE_ORDER_STATUS_SUCCESS,
    payload: order
});

const updateOrderStatusFailure = (error) => ({
    type: UPDATE_ORDER_STATUS_FAILURE,
    payload: error
});

export const fetchOrderDetails = (orderId) => dispatch => {
    dispatch(fetchOrderDetailsRequest());
    axios.get(`/api/admin/orders/${orderId}`)
        .then(response => {
            dispatch(fetchOrderDetailsSuccess(response.data));
        })
        .catch(error => {
            dispatch(fetchOrderDetailsFailure(error.response ? error.response.data.message : error.message));
        });
};

export const updateOrderStatus = (orderId, status) => dispatch => {
    axios.put(`/api/admin/orders/${orderId}/update`, null, {
        params: { status }
    })
        .then(response => {
            dispatch(updateOrderStatusSuccess(response.data));
        })
        .catch(error => {
            dispatch(updateOrderStatusFailure(error.response ? error.response.data.message : error.message));
        });
};

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
});

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
