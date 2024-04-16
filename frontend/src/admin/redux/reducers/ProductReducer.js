// frontend/src/admin/redux/reducers/ProductReducer.js
import {
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS,
    QUANTITY,
    SET_QUANTITY,
    SET_TOTAL_QUANTITY,
    TOTAL_QUANTITY
} from '../actions/ProductActions';


const initialState = {
    quantity: 0,
    totalQuantity: 100,
};


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, action.payload],
                error: null,
            };
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case QUANTITY:
            return {
                ...state,
                quantity: state.quantity,
            };
        case TOTAL_QUANTITY:
            return {
                ...state,
                totalQuantity: state.totalQuantity,
            };
        case SET_QUANTITY:
            return {
                ...state,
                quantity: action.payload,
            };
        case SET_TOTAL_QUANTITY:
            return {
                ...state,
                totalQuantity: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
