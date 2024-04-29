const initialState = {
    ListCart: [],

}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_CART_SUCCESS':
            return {
                ...state,
                ListCart: action.payload
            }
        default :
            return state;

    }
}
export  default  cartReducer;