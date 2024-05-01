import axios from "axios";

export const history = (user_id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/getListHistory?user_id=${user_id}`);
            const data = response.data;
            dispatch({type: 'HISTORY_CART_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'HISTORY_CART_ERROR', payload: errorMessage});

        }
    };
}
export const deleteCart = (cart_id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/deleteCart?cart_id=${cart_id}`);
            const data = response.data;
            dispatch({type: 'DELETE_CART_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'DELETE_CART_ERROR', payload: errorMessage});

        }
    };
}