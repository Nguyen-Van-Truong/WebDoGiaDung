// frontend/src/admin/Api/CategoryApi.js
import axios from "axios";
import {FETCH_CATEGORIES_ERROR, FETCH_CATEGORIES_SUCCESS} from "../redux/actions/CategoryActions";
import API_BASE_URL from "../../config";

export const fetchCategories = () => async dispatch => {
    try {
        const response = await axios.get(`${API_BASE_URL}api/categories/getCategories`);

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
