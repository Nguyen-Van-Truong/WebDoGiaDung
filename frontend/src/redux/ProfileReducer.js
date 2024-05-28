import {
    CONFIRM_PASSWORD,
    NEW_PASSWORD,
    SET_CONFIRM_PASSWORD,
    SET_ERROR, SET_FULL_NAME_PROFILE,
    SET_NEW_PASSWORD,
    SET_SUCCESS, UPDATE_FULL_NAME_ERROR, UPDATE_FULL_NAME_SUCCESS
} from "./ProfileAction";

const initialState = {
    success: '',
    error: '',
    newPassword: '',
    confirmPassword: '',
    userList: [],
    fullName: '',
    success_name :''

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PASSWORD_SUCCESS':
            return {
                ...state,
                success: action.payload,
                error: '',
                newPassword: '',
                confirmPassword: ''
            }
        case 'UPDATE_PASSWORD_ERROR':
            return {
                ...state,
                success: '',
                error: action.payload
            }
        case NEW_PASSWORD:
            return {
                ...state,
                newPassword: state.newPassword
            }
        case SET_NEW_PASSWORD:
            return {
                ...state,
                newPassword: action.payload
            }
        case CONFIRM_PASSWORD:
            return {
                ...state,
                confirmPassword: state.confirmPassword
            }
        case SET_CONFIRM_PASSWORD:
            return {
                ...state,
                confirmPassword: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_SUCCESS:
            return {
                ...state,
                success: '',
                success_name :''

            }
        case UPDATE_FULL_NAME_SUCCESS:
            return {
                ...state,
                success_name: 'Cập nhật thông tin người dùng thành công',
                userList: action.payload,


                error: ''
            }
        case UPDATE_FULL_NAME_ERROR:
            return {
                ...state,
                error: '',
                success: ''
            }
        case SET_FULL_NAME_PROFILE:
            return {
                ...state,
                fullName: action.payload
            }
        default:
            return state;
    }
}
export  default profileReducer;