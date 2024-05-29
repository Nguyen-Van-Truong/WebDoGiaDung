import {PRODUCTS, SET_PRODUCTS} from "./ProductAction";


const initialState = {

    products :[],
    sortOrder :'desc',
    sortBy : 'created_at',
};
const productUserReducer = (state = initialState, action) => {
    switch (action.type) {

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

        default:
            return state;
    }
};
export default  productUserReducer;