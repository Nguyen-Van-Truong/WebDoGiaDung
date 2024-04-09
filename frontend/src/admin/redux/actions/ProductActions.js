export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_TOTAL_QUANTITY = 'SET_TOTAL_QUANTITY';
export  const QUANTITY ='QUANTITY'
export  const TOTAL_QUANTITY = 'TOTAL_QUANTITY';

export const quantity = () =>({
    type : QUANTITY
});
export const totalQuantity = () => ({
    type : TOTAL_QUANTITY
})
export const setQuantity = (quantity) => ({
    type: SET_QUANTITY,
    payload: quantity,
});

export const setTotalQuantity = (totalQuantity) => ({
    type: SET_TOTAL_QUANTITY,
    payload: totalQuantity,
});
