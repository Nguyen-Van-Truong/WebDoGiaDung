
const initialState = {
    ListHistoryCart: [],


}

const cartHistoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'HISTORY_CART_SUCCESS':
            return {
                ...state,
                ListHistoryCart: action.payload
            }
         default :
            return state;

    }}
export  default  cartHistoryReducer;