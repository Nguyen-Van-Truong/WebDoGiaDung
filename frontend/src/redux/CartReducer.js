const initialState = {
    ListCart: [],
    countCart :0

}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_CART_SUCCESS':
            return {
                ...state,
                ListCart: action.payload
            }
        case 'COUNT_CART_SUCCESS':
            return {
                ...state,
                countCart: action.payload
            }
        default :
            return state;

    }
}
export  default  cartReducer;