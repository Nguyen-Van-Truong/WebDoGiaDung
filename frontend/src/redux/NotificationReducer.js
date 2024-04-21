import {
    IS_NOTIFICATION,
    isNotification,
    NOTIFICATION_COUNT,
    SET_IS_NOTIFICATION,
    SET_NOTIFICATION_COUNT
} from "./NotificationAction";

const initialState = {
    count: 0,
    listNotification:[],
    notificationCount: 0,
    isNotification : false
}
const notifiCationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNT_NOTIFICATION_SUCCESS' :
            return {
                ...state,
                count: action.payload,
            }
        case 'GET_NOTIFICATION_SUCCESS' :
            return {
                ...state ,
                listNotification: action.payload
            }
        case 'GET_NOTIFICATION_ERROR' :
            return {
                ...state,
                listNotification: []
            }
        case NOTIFICATION_COUNT :
            return {
                ...state,
                notificationCount: state.notificationCount
            }
        case SET_NOTIFICATION_COUNT :
            return {
                ...state,
                notificationCount: action.payload
            }
        case  IS_NOTIFICATION :
            return {
                ...state,
                isNotification : state.isNotification
            }
        case SET_IS_NOTIFICATION :
            return {
                ...state,
                isNotification : action.payload
            }
        default :
            return state;
    }
}
export default notifiCationReducer;