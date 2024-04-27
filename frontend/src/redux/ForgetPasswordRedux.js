import {
    CONFIRM_PASSWORD,
    EMAIL,
    NEW_PASSWORD, RESET_SUCCESS,
    SET_CONFIRM_PASSWORD,
    SET_EMAIL,
    SET_ERROR,
    SET_NEW_PASSWORD
} from "./ForgetPasswordAction";

const initialState = {
    success: '',
    errorsMessage: '',
    email: '',
    isForget :false,
    isPage :false,
    idUser :0,
    new_password :'',
    confirm_password :''

}

const forgetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_EMAIL_FORGET_SUCCESS' :
            return {
                ...state,
                errorsMessage: '',
                isPage : true
            }
        case 'CHECK_EMAIL_FORGET_ERROR' :
            return {
                ...state,
                errorsMessage: action.payload
            }
        case  EMAIL :
            return {
                ...state,
                email: state.email

            }
        case  SET_EMAIL :
            return  {
                ...state,
                email: action.payload
            }
        case  SET_ERROR :
            return {
                ...state,
                errorsMessage: action.payload
            }
        case 'OTP_FORGET_SUCCESS':
            return {
                ...state,
                isForget :!state.isForget,
                email: '',
                errorsMessage: '',
                success: ''
            }
        case 'GET_ID_SUCCESS' :
            return {
                ...state,
               idUser :action.payload
            }
        case 'UPDATE_PASSWORD_FORGET_SUCCESS':
            return {
                ...state,
                success: action.payload,
                errorsMessage:''
            }
        case  NEW_PASSWORD :
            return{
                ...state,
                new_password: state.newPassword
            }
        case SET_NEW_PASSWORD :
            return {
                ...state,
                new_password: action.payload
            }
        case  CONFIRM_PASSWORD :
            return {
                ...state,
               confirm_password: state.confirm_password
            }
        case SET_CONFIRM_PASSWORD :
            return {
                ...state,
                confirm_password: action.payload
            }
        case  RESET_SUCCESS :
            return {
                ...state,
                success: '',
            }
        default :
            return state

    }
}
export default forgetPasswordReducer;