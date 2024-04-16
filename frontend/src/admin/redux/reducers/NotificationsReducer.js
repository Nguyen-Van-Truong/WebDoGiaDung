import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../actions/NotificationsActions';

const initialState = {
    message: '',
    type: '', // 'success' or 'error'
    show: false
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {
                ...state,
                message: action.payload.message,
                type: action.payload.type,
                show: true
            };
        case HIDE_NOTIFICATION:
            return {
                ...state,
                show: false
            };
        default:
            return state;
    }
};

export default notificationReducer;
