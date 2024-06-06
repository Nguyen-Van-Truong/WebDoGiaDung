import {ADD_MESSAGE, RESET_MESSAGES, SET_GET_MESSAGES, SET_MESSAGES, SET_STATUS} from "./MessageActions";



const initialState = {
    messages: [],
    status: false,
    check_click :false,
    isAdmin: false,
};

const isValidDate = (date) => {
    const d = new Date(date);
    return d instanceof Date && !isNaN(d);
};

const messageReducer = (state = initialState, action) => {
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
        case RESET_MESSAGES:
            return {
                ...state,
                messages: []
            };
        case 'RESET_LOGOUT' :
            return {
                ...state,
                messages: action.payload,
                status: false
            }

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

export default messageReducer;
