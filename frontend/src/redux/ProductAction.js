


export const PRODUCTS = 'PRODUCTS';
export const SET_PRODUCTS = ' SET_PRODUCTS';

export const products = () => ({
    type: PRODUCTS,
});
export const setProducts = (products) => (
    {
        type: SET_PRODUCTS,
        payload: products,

    }
)

