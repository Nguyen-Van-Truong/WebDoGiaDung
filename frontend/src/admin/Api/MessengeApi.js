import axios from "axios";
import API_BASE_URL from "../../config";

export const getUser = (username) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_BASE_URL}getUser?username=${username}`);
            const data = response.data;
            dispatch({type: 'GET_USER_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'GET_USER_ERROR', payload: errorMessage});

        }
    };
}
export const getUserNameMess = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_BASE_URL}getUsernameSender`);
            const data = response.data;
            dispatch({type: 'GET_USER_NAME_MESS_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'GET_USER_NAME_MESS_ERROR', payload: errorMessage});

        }
    };
}
