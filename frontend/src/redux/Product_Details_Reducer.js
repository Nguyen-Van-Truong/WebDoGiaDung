const initialState = {
    array_product_details: [],
    price :0
}
const product_details = (state = initialState, action) => {
    switch (action.type) {
        case 'DETAILS_SUCCESS' :
            return {
                ...state,
                array_product_details: action.payload,
                price: action.payload.price
            }
        default :
            return state;

    }
}
export  default product_details ;