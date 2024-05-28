
import axios from "axios";
import {UPDATE_FULL_NAME_ERROR, UPDATE_FULL_NAME_SUCCESS} from "../redux/ProfileAction";


export const updateFullName = (id, full_name) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/api/users/updateFullName?id=${id}&full_name=${full_name}`);
            const data = response.data;
            console.log("API Response Data:", data);
            dispatch({ type: UPDATE_FULL_NAME_SUCCESS, payload: data });
        } catch (error) {
            const errorMessage = error.response ? error.response.data : error.message;
            console.log("API Error:", errorMessage);
            dispatch({ type: UPDATE_FULL_NAME_ERROR, payload: errorMessage });
        }
    };
};