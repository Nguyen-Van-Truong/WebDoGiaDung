
export  const NEW_PASSWORD ='NEW_PASSWORD';
export  const  SET_NEW_PASSWORD ='SET_NEW_PASSWORD';
export  const  CONFIRM_PASSWORD ='CONFIRM_PASSWORD';
export  const  SET_CONFIRM_PASSWORD ='SET_CONFIRM_PASSWORD';
export const  SET_ERROR ='SET_ERROR'


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
