import {CURRENT_PAGE, PAGE_COUNT, SET_CURRENT_PAGE, SET_PAGE_COUNT} from "../actions/CurrentPageAction";

const initialState = {
    currentPage: 0,
    pageCount :0
};

const currentPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case   CURRENT_PAGE :
            return {
                ...state,
                currentPage: state.currentPage

            }
        case SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.payload
            }
        case  PAGE_COUNT :
            return {
                ...state,
                pageCount: state.pageCount
            }
        case SET_PAGE_COUNT :
            return {
                ...state,
                pageCount: action.payload
            }

        default:
            return state;
    }

}
export default currentPageReducer;