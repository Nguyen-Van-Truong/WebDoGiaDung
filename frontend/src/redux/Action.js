export const TOGGLE_MENU_OPEN = 'TOGGLE_MENU_OPEN';
export const TOOGLE_USER_MIN = 'TOGGLE_USER_MIN';
export const TOOGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const TOGGLE_IS_MENU = 'TOGGLE_IS_MENU'
export const SET_IS_MENU = 'SET_IS_MENU';
export const SET_USER_MIN = 'SET_USER_MIN';
export const SET_MENU_OPEN = 'SET_MENU_OPEN';
export const SET_CATEGORY = 'SET_CATEGORY';
export const TOGGLE_IS_CART = 'TOGGLE_IS_CART';
export const SET_IS_CART ='SET_IS_CART';

export  const  IS_TOP_SELLING = 'IS_TOP_SELLING';

export const SET_TOP_SELLING = 'SET_TOP_SELLING';
export  const  IS_ALL = 'IS_ALL';

export  const  SET_ALL = 'SET_IS_ALL';
export  const NEW_PRODUCTS = 'NEW_PRODUCTS';
export  const SET_NEW_PRODUCTS = 'SET_NEW_PRODUCTS';




export const  tabTopSelling = () =>({
    type : IS_TOP_SELLING
})
export const  setTabTopSelling = () => ({
    type : SET_TOP_SELLING
});
export  const  tabNewProducts = () => ({
    type:NEW_PRODUCTS
})
export  const  setTabNewProducts = () => ({
    type : SET_NEW_PRODUCTS
})
export  const  tabAll = () =>({
    type : IS_ALL
})
export  const setTabAll = () => ({
    type : SET_ALL
})
export const toggleMenuOpen = () => ({
    type : TOGGLE_MENU_OPEN
});
export const toggleUserMin = () => ({
    type : TOOGLE_USER_MIN
})
export const toggleCatogory =() => ({
    type : TOOGLE_CATEGORY
})
export const toggleIsMenu =() => ({
    type : TOGGLE_IS_MENU
})

export const setIsMenu = (isMenu) => ({
    type: SET_IS_MENU,
    payload: isMenu
});

export const setUserMin = (isUserMin) => ({
    type: SET_USER_MIN,
    payload: isUserMin
});

export const setCategory = (isCategory) => ({
    type: SET_CATEGORY,
    payload: isCategory
});
export const setMenuOpen = (menuOpen) => ({
    type : SET_MENU_OPEN ,
    payload : menuOpen
})
export const toggleIsCart =() => ({
    type :TOGGLE_IS_CART
})
export const setIsCart =(isCart) => ({
    type :SET_IS_CART ,
    payload : isCart
})