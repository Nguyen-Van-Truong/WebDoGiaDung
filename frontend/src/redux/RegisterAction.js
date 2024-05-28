export const CHECK_REGISTER = 'CHECK_REGISTER'
export const CHECK_SUCCESS = 'CHECK_SUCCESS'
export const check = (isRegister) => ({
    type: CHECK_REGISTER,
    payload: isRegister
})
export const check_success = (success) => ({
    type: CHECK_SUCCESS,
    payload: success
})