import axios from 'axios';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';

const fetchCustomersSuccess = (data) => ({
    type: FETCH_CUSTOMERS_SUCCESS,
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