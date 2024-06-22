import axios from "axios";
import {resetRegistrationMessage} from "../redux/Action";
import {reset} from "../redux/ForgetPasswordAction";
import API_BASE_URL from "../config";


export const checkEmailForget = (email) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_BASE_URL}checkEmailForgetPassword`, {email});
            const data = response.data;
            dispatch({type: 'CHECK_EMAIL_FORGET_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'CHECK_EMAIL_FORGET_ERROR', payload: errorMessage});

        }
    };
}
export const otpForget = (email, code, onSuccess) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_BASE_URL}sendOtpForgetPassword`, {email, code});
            const data = response.data;
            dispatch({type: 'OTP_FORGET_SUCCESS', payload: data});
            setTimeout(() => {
                if (onSuccess) onSuccess(code);
                dispatch(resetRegistrationMessage());
            }, 1000);
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'OTP_FORGET_ERROR', payload: errorMessage});

        }
    };
}
/**
 * lay id nguoi dung
 */
export const getId = (email) => {
    return async dispatch => {
        try {

            const response = await axios.get(`${API_BASE_URL}api/users/getUserId?email=${email}`);
            const data = response.data;
            console.log(data);
            dispatch({type: 'GET_ID_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'GET_ID_ERROR', payload: errorMessage});

        }
    }
}

export const update_password = (id, password, onSuccess) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_BASE_URL}api/users/updateForgetPassword/${id}`, null, {
                params: { password },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = response.data;

            dispatch({ type: 'UPDATE_PASSWORD_FORGET_SUCCESS', payload: data });

            setTimeout(() => {
                if (onSuccess) onSuccess();
                dispatch({ type: 'RESET_PASSWORD_STATE' });
            }, 1000);
        } catch (error) {
            const errorMessage = error.response?.data || 'Network Error';
            console.error('Error from API:', errorMessage);
            dispatch({ type: 'UPDATE_PASSWORD_FORGET_ERROR', payload: errorMessage });
        }
    };
};
