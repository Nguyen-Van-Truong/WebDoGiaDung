import axios from 'axios';

export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMER_DETAIL_ORDERS_SUCCESS = 'FETCH_CUSTOMER_DETAIL_ORDERS_SUCCESS';
export const FETCH_CUSTOMER_DETAIL_ORDERS_FAILURE = 'FETCH_CUSTOMER_DETAIL_ORDERS_FAILURE';
const fetchCustomersSuccess = (data) => ({
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: data
});
const fetchCustomerDetailOrdersSuccess = (data) => ({
    type: FETCH_CUSTOMER_DETAIL_ORDERS_SUCCESS,
    payload: data
});

const fetchCustomerDetailOrdersFailure = (error) => ({
    type: FETCH_CUSTOMER_DETAIL_ORDERS_FAILURE,
    payload: error
});

export const fetchCustomerDetailOrders = (userId, page, size, sortDirection = 'desc', sortBy = 'orderDate') => {
    return (dispatch) => {
        axios.get(`/api/users/admin/getUser/${userId}?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`)
            .then(response => {
                dispatch(fetchCustomerDetailOrdersSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchCustomerDetailOrdersFailure(error.response ? error.response.data.message : error.message));
            });
    };
};

export const fetchCustomers = (page, size) => {
    return (dispatch) => {
        axios.get(`/api/users/admin/getAllUsers?page=${page}&size=${size}`)
            .then(response => {
                dispatch(fetchCustomersSuccess(response.data));
                // console.log('Fetching customers successful:', JSON.stringify(response.data));
            })
            .catch(error => {
                const errorMsg = error.response ? error.response.data.message : error.message;
                console.error('Error fetching customers:', errorMsg);
            });
    };

};
