import axios from "axios";

export const getUser = (username) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/getUser?username=${username}`);
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
            const response = await axios.get(`/getUsernameSender`);
            const data = response.data;
            dispatch({type: 'GET_USER_NAME_MESS_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'GET_USER_NAME_MESS_ERROR', payload: errorMessage});

        }
    };
}