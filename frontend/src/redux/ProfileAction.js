
export  const NEW_PASSWORD ='NEW_PASSWORD';
export  const  SET_NEW_PASSWORD ='SET_NEW_PASSWORD';
export  const  CONFIRM_PASSWORD ='CONFIRM_PASSWORD';
export  const  SET_CONFIRM_PASSWORD ='SET_CONFIRM_PASSWORD';
export const  SET_ERROR ='SET_ERROR'
export  const SET_SUCCESS ='SET_SUCCESS'
export const SET_FULL_NAME_PROFILE = 'SET_FULL_NAME_PROFILE';
export const UPDATE_FULL_NAME_SUCCESS = 'UPDATE_FULL_NAME_SUCCESS';
export const UPDATE_FULL_NAME_ERROR = 'UPDATE_FULL_NAME_ERROR';
export const SET_PASSWORD_PROFILE ='SET_PASSWORD'

export const setFullName = (fullName) => ({
    type: SET_FULL_NAME_PROFILE,
    payload: fullName,
});
export const  setPassword=(password)=>({
    type :SET_PASSWORD_PROFILE,
    payload:password
})



export const setSuccess =(success)=>({
    type :SET_SUCCESS,
    payload :success
})


export  const  newPassword =()=>({
    type: NEW_PASSWORD
})
export const  setNewPassword =(newPassword)=>({
    type: SET_NEW_PASSWORD,
    payload :newPassword
})
export const  confirmPassword = () =>({
    type: CONFIRM_PASSWORD
})
export  const  setConfirmPassword =(confirmPassword)=>({
    type :SET_CONFIRM_PASSWORD,
    payload: confirmPassword
})
export  const  setError =(error)=> ({
    type: SET_ERROR,
    payload : error
});
