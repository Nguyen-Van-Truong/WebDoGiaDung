// Correct placement of import statements
import { addProduct as addProductApi } from '../../Api/ProductApi';

// Action type declarations
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR';
export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_TOTAL_QUANTITY = 'SET_TOTAL_QUANTITY';
export const QUANTITY = 'QUANTITY';
export const TOTAL_QUANTITY = 'TOTAL_QUANTITY';

// Action creators
export const addProduct = (productData) => async (dispatch) => {
    try {
        const data = await addProductApi(productData);
        dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ADD_PRODUCT_ERROR, payload: error.message });
    }
};

export const quantity = () => ({
    type: QUANTITY,
});

export const totalQuantity = () => ({
    type: TOTAL_QUANTITY,
});

export const setQuantity = (quantity) => ({
    type: SET_QUANTITY,
    payload: quantity,
});

export const setTotalQuantity = (totalQuantity) => ({
    type: SET_TOTAL_QUANTITY,
    payload: totalQuantity,
});
