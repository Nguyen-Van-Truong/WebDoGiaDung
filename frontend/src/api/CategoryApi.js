// frontend/src/admin/Api/CategoryApi.js
import axios from "axios";
import {FETCH_CATEGORIES_ERROR, FETCH_CATEGORIES_SUCCESS} from "../redux/CategoryActions";


export const fetchCategories = () => async dispatch => {
    try {
        const response = await axios.get('/api/categories/getCategories');
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_CATEGORIES_ERROR,
            payload: error.message,
        });
    }
};