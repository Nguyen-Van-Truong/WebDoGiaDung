import {CLICK_SEARCH_SUCCESS, SET_SEARCH_ITEMS} from "./SearchAction";


const initialState = {

    lisProduct:[],
    keyword : ''
}
const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS' :
            return {
                ...state,
               lisProduct: action.payload,
               
            }
        case 'SEARCH_ERROR' :
            return {
                ...state ,
                listNotification: action.payload
            }
        case SET_SEARCH_ITEMS :
            return {
                ...state,
                keyword: action.payload,
                lisProduct:[]
            }

        case  CLICK_SEARCH_SUCCESS :
            return  {
                ...state,
                keyword: ''

            }

        default :
            return state;
    }
}
export default SearchReducer;