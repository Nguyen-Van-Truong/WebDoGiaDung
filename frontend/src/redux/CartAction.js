
export  const  SET_UPDATE_CART = 'SET_UPDATE_CART'
export const setUpdateCart = (id, quantity) => ({
    type: SET_UPDATE_CART,
    payload: { id, quantity }
});