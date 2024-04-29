import axios from "axios";



export const getListCart = (user_id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/getListCart?user_id=${user_id}`);
            const data = response.data;
            dispatch({type: 'GET_CART_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'GET_CART_ERROR', payload: errorMessage});

        }
    };
}
export const count = (user_id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/countCart?user_id=${user_id}`);
            const data = response.data;
            dispatch({type: 'COUNT_CART_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'COUNT_CART_ERROR', payload: errorMessage});

        }
    };
}