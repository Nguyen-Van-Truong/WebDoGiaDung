export const EMAIL = 'EMAIL'
export const SET_EMAIL = 'SET_EMAIL'
export const SET_ERROR = 'SET_ERROR'
export  const  NEW_PASSWORD = 'NEW_PASSWORD'
export const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD'
export  const  CONFIRM_PASSWORD = 'CONFIRM_PASSWORD'
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD'

export  const  RESET_SUCCESS =' RESET_SUCCESS'

export const email = () => ({
    type: EMAIL
})
export  const  setEmail= (email)=>({
    type: SET_EMAIL,
    payload: email
})
export  const  setErrorForget= (error)=>({
    type: SET_ERROR,
    payload: error
})
export   const  new_password =()=>({
    type: NEW_PASSWORD
})
export  const set_new_password =(new_password)=>({
    type : SET_NEW_PASSWORD,
    payload : new_password
})
export  const  confirm_password =()=>({
    type: CONFIRM_PASSWORD
})
export  const  set_confirm_password =(confirm_password)=>({
    type: SET_CONFIRM_PASSWORD,
    payload : confirm_password
})
export  const reset =(success)=>({
    type : RESET_SUCCESS,
    payload : success
})