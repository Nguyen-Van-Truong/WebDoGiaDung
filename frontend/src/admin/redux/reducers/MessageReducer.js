import {ADD_MESSAGE, SET_MESSAGES, SET_STATUS} from "../actions/MessageActions";
import {RESET_MESSAGES, SET_GET_MESSAGES} from "../../../redux/MessageActions";

const initialState = {
    messages: [],
    status: false,
    userData: null,
    user_id: 0,
    usernameMess: '',
    userList: [],
    check_click :false,
    isAdmin :false
};

const isValidDate = (date) => {
    const d = new Date(date);
    return d instanceof Date && !isNaN(d);
};

const messageAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: Array.isArray(action.payload)
                    ? action.payload.map(msg => ({
                        ...msg,
                        create: isValidDate(msg.create) ? new Date(msg.create).toISOString() : null
                    }))
                    : []
            };
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    ...action.payload,
                    create: isValidDate(action.payload.create) ? new Date(action.payload.create).toISOString() : null
                }]
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            };
        case SET_GET_MESSAGES:
            return {
                ...state,
                messages: Array.isArray(action.payload)
                    ? action.payload.map(msg => ({
                        ...msg,
                        create: isValidDate(msg.create) ? new Date(msg.create).toISOString() : null
                    }))
                    : []
            };
        case 'GET_USER_SUCCESS':
            const userData = action.payload;
            return {
                ...state,
                userData: userData,
                user_id: userData.user_id,
                usernameMess: userData.username
            };
        case 'GET_USER_NAME_MESS_SUCCESS':
            return {
                ...state,
                userList: action.payload
            };
        case RESET_MESSAGES:
            return {
                ...state,
                messages: []
            };
        case 'RESET_LOGOUT':
            return {
                ...state,
                messages: action.payload,
                status: false,
                userData: null,
                user_id: 0,
                usernameMess: '',
                userList: [],
            };
        case 'CHECK_CLICK_APP':
            return {
                ...state,
                check_click: action.payload
            }
        case 'SET_ADMIN':
            return {
                ...state,
                isAdmin: true
            };
        case 'SET_USER':
            return {
                ...state,
                isAdmin: false
            };
        default:
            return state;
    }
};

export default messageAdminReducer;
