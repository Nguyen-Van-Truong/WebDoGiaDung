import {CONFIRM_PASSWORD, NEW_PASSWORD, SET_CONFIRM_PASSWORD, SET_ERROR, SET_NEW_PASSWORD} from "./ProfileAction";

const initialState = {
    success: '',
    error: '',
    newPassword:'',
    confirmPassword :''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PASSWORD_SUCCESS' :
            return {
                ...state,
                success: action.payload,
                error: '',
                newPassword:'',
                confirmPassword :''
            }
        case 'UPDATE_PASSWORD_ERROR' :
            return {
                ...state,
                success: '',
                error: action.payload
            }
        case  NEW_PASSWORD:
            return {
                ...state,
                newPassword: state.newPassword
            }
        case SET_NEW_PASSWORD:
            return {
                ...state,
                newPassword: action.payload
            }
        case  CONFIRM_PASSWORD :
            return {
                ...state,
                confirmPassword: state.confirmPassword
            }
        case  SET_CONFIRM_PASSWORD :
            return {
                ...state,
                confirmPassword:action.payload
            }
        case SET_ERROR :
            return {
                ...state,
                error: action.payload
            }
        default :
            return state;
    }
}
export  default profileReducer;