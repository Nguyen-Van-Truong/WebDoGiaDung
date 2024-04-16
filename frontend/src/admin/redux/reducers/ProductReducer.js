// frontend/src/admin/redux/reducers/ProductReducer.js
import {
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS, PRODUCTS,
    QUANTITY, SET_PRODUCTS,
    SET_QUANTITY,
    SET_TOTAL_QUANTITY, SET_VIEW_MODE,
    TOTAL_QUANTITY, VIEW_MODE
} from '../actions/ProductActions';


const initialState = {
    quantity: 0,
    totalQuantity: 100,
    products :[],
    viewMode : 'list',
    sortOrder :'desc',
    sortBy : 'created_at',


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
        case  PRODUCTS :
            return {
                ...state,
                products: action.payload
            }
        case SET_PRODUCTS :
            return {
                ...state,
                products: action.payload,
            }
        case  VIEW_MODE :
            return {
                ...state,
                viewMode: state.viewMode
            }
        case  SET_VIEW_MODE :
            return  {
                ...state,
                viewMode: action.payload
            }
        default:
            return state;
    }
};
export default productReducer;
