import axios from "axios";
import {debounce, throttle} from "lodash";
import {top_selling} from "./Api";



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
// them gio hang
export  const addCart=(user_id, product_id, quanitity, price)=>{
    return async dispatch =>{
        try {
            const response = await axios.get(`/addCart?user_id=${user_id}&product_id=${product_id}&quantity=${quanitity}&price=${price}`);
            const data = response.data;
            dispatch({type: 'ADD_CART_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'ADD_CART_ERROR', payload: errorMessage});

        }
    }
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


export const throttledCountCart = throttle((user_id, dispatch) => {
    count(user_id)(dispatch);
}, 3000, { leading: true });

export  const  updateCart =(cart_item_id, quantity,price)=>{
    return async dispatch => {
        try {
            const response = await axios.get(`/updateCart?cart_item_id=${cart_item_id}&quantity=${quantity}&price=${price}`);
            const data = response.data;
            dispatch({type: 'UPDATE_CART_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'UPDATE_CART_ERROR', payload: errorMessage});

        }
    };
}
/**
 * cap nhap gio hang sau khi thanh toan thanh cong
 */
export const updateCheckout = (user_id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/updateCartCheckOut?user_id=${user_id}`);
            const data = response.data;
            dispatch({type: 'UPDATE_CHECKOUT_CART_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'UPDATE_CHECKOUT_CART_ERROR', payload: errorMessage});

        }
    };
}

