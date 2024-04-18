// frontend/src/admin/redux/actions/ProductActions.js
// Correct placement of import statements
import {addProduct as addProductApi} from '../../Api/ProductApi';

// Action type declarations
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR';
export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_TOTAL_QUANTITY = 'SET_TOTAL_QUANTITY';
export const QUANTITY = 'QUANTITY';
export const TOTAL_QUANTITY = 'TOTAL_QUANTITY';
export const PRODUCTS = 'PRODUCTS';
export const SET_PRODUCTS = ' SET_PRODUCTS';
export const VIEW_MODE = 'VIEW_MODE'
export const SET_VIEW_MODE = 'SET_VIEW_MODE'

export const PRODUCT_NAME = 'PRODUCT_NAME';
export const SET_PRODUCT_NAME = 'SET_PRODUCT_NAME';
export const DESCRIPTION = 'DESCRIPTION'
export const SET_DESCRIPTION = 'SET_DESCRIPTION'
export const PRICE = 'PRICE';
export const SET_PRICE = 'SET_PRICE'
export const STOCK_QUANTITY = 'STOCK_QUANTITY'
export const SET_STOCK_QUANTITY = 'SET_STOCK_QUANTITY_PRODUCT'
export  const  SELECTED_CATEGORY_PRODUCT ='SELECTED_CATEGORY_PRODUCT';
export  const  SET_SELECTED_CATEGORY_PRODUCT ='SET_SELECTED_CATEGORY__PRODUCT';
export const quantity = () => ({
    type: QUANTITY,
});
export const products = () => ({
    type: PRODUCTS,
});
export const setProducts = (products) => (
    {
        type: SET_PRODUCTS,
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
export const viewMode = () => ({
    type: VIEW_MODE
})
export const setViewMode = (viewMode) => ({
    type: SET_VIEW_MODE,
    payload: viewMode
})

export const productName = () => ({
    type: PRODUCT_NAME

})
export const setProductName = (productName) => ({
    type: SET_PRODUCT_NAME,
    payload: productName
})
export const description = () => ({
    type: DESCRIPTION
})
export const setDescription = (description) => ({
    type: SET_DESCRIPTION,
    payload: description
})
export const price = () => ({
    type: PRICE
})
export const setPrice = (price) => ({
    type: SET_PRICE,
    payload: price

})
export const stockQuantity = () => ({
    type: STOCK_QUANTITY
})
export const setStockQuantity = (stockQuantity) => ({
    type: SET_STOCK_QUANTITY,
    payload: stockQuantity
})
export  const selectedCategory = () =>({
 type : SELECTED_CATEGORY_PRODUCT
})
export  const setSelectedCategory = (selectedCategory) => ({
    type :SET_SELECTED_CATEGORY_PRODUCT,
    payload : selectedCategory
})