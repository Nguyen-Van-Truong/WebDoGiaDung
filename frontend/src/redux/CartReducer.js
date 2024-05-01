import {SET_UPDATE_CART} from "./CartAction";

const initialState = {
    ListCart: [],
    countCart :0,
    product_id :0

}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_CART_SUCCESS':
            const ListCart = action.payload;
            return {
                ...state,
                ListCart: ListCart,
                product_id: ListCart.product_id

            }
        case 'COUNT_CART_SUCCESS':
            return {
                ...state,
                countCart: action.payload
            }
        case SET_UPDATE_CART:
            return {
                ...state,
                ListCart: state.ListCart.map(item =>
                    item.cart_item_id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };
        default :
            return state;

    }
}
export  default  cartReducer;