// frontend/src/admin/redux/actions/ProductActions.js
// Correct placement of import statements
import { addProduct as addProductApi } from '../../Api/ProductApi';

// Action type declarations
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR';
export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_TOTAL_QUANTITY = 'SET_TOTAL_QUANTITY';
export const QUANTITY = 'QUANTITY';
export const TOTAL_QUANTITY = 'TOTAL_QUANTITY';
export  const  PRODUCTS ='PRODUCTS';
export  const  SET_PRODUCTS =' SET_PRODUCTS';
export const  VIEW_MODE ='VIEW_MODE'
export const  SET_VIEW_MODE ='SET_VIEW_MODE'


export const quantity = () => ({
    type: QUANTITY,
});
export  const  products = () =>({
    type : PRODUCTS,
});
export const  setProducts = (products) =>(
    {
        type : SET_PRODUCTS,
        payload: products,

    }
)

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
export const viewMode = () =>({
    type : VIEW_MODE
})
export  const   setViewMode =(viewMode) =>({
    type : SET_VIEW_MODE ,
    payload : viewMode
})

