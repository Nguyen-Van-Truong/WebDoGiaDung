import axios from "axios";

export const getNotification = (id) => {
    return async dispatch => {
        try {
            const numericId = Number(id);
            const reponse = await axios.get(`/getNotifications?user_id=${numericId}`);
            const data = reponse.data

            dispatch({type: 'GET_NOTIFICATION_SUCCESS', payload: data});
        } catch (error) {
            dispatch({type: 'GET_NOTIFICATION_ERROR', payload: error.message});
        }
    }
}
export const updateIsRead = (id) => {
    return async dispatch => {
        try {
            const numericId = Number(id);
            const reponse = await axios.get(`/updatetNotifications?user_id=${numericId}`);
            const data = reponse.data

            dispatch({type: 'UPDATE_IS_READ_NOTIFICATION_SUCCESS', payload: data});
        } catch (error) {
            dispatch({type: 'UPDATE_IS_READ_NOTIFICATION_ERROR', payload: error.message});
        }
    }
}