

import {QUANTITY, SET_QUANTITY, SET_TOTAL_QUANTITY, TOTAL_QUANTITY} from '../actions/ProductActions';


const initialState = {
    quantity: 0,
    totalQuantity: 100,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUANTITY:
            return {
                ...state,
                quantity: state.quantity ,
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

export default  productReducer;
