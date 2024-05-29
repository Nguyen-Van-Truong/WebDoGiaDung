import {
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORIES_SUCCESS,
    SELECTED_CATEGORY,
    SET_SELECTED_CATEGORY
} from "./CategoryActions";


const initialState = {
    categories: [],
    error: null,
    selectedCategory: ''
};

const  categoryUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
            };
        case FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case  SELECTED_CATEGORY :
            return {
                ...state,
                selectedCategory: state.selectedCategory
            }
        case SET_SELECTED_CATEGORY :
            return {
                ...state,
                selectedCategory: action.payload,
            }
        default:
            return state;
    }
};

export default  categoryUserReducer;
