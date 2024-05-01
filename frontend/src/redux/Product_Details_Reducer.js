const initialState = {
    array_product_details: []
}
const product_details = (state = initialState, action) => {
    switch (action.type) {
        case 'DETAILS_SUCCESS' :
            return {
                ...state,
                array_product_details: action.payload
            }


        default :
            return state;

    }
}
export  default product_details ;