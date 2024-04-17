import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_ERROR,
    SELECTED_CATEGORY,
    SET_SELECTED_CATEGORY
} from '../actions/CategoryActions';

const initialState = {
    categories: [],
    error: null,
    selectedCategory: ''
};

const categoryReducer = (state = initialState, action) => {
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

export default categoryReducer;
