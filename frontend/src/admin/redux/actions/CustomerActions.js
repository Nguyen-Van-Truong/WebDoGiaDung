import axios from 'axios';

export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_DETAIL_CUSTOMER_SUCCESS = 'FETCH_DETAIL_CUSTOMER_SUCCESS';

const fetchCustomersSuccess = (data) => ({
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: data
});

const fetchDetailCustomerSuccess = (data) => ({
    type: FETCH_DETAIL_CUSTOMER_SUCCESS,
    payload: data
});

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

export const fetchDetailCustomer = (userId) => {
    return (dispatch) => {
        axios.get(`/api/users/admin/getUser/${userId}`)
            .then(response => {
                // console.log('API Response:', response);
                if (response.data) {
                    dispatch(fetchDetailCustomerSuccess(response.data));
                } else {
                    console.log('No data received:', response);
                }
            })
            .catch(error => {
                console.error('Error fetching detail customer:', error);
                console.log('Error details:', error.response ? error.response : error);
            });

    };
}