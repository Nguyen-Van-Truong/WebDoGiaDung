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
export const  IS_SEARCH = 'IS_SEACH';
export  const  SET_IS_SEACH ='SET_IS_SEACH';
export const UPDATE_FORM = 'UPDATE_FORM'
export  const  ERROR ='ERROR';
export  const  SET_ERROR ='SET_ERROR';

// reset lại trạng thái cua form khi dang khi thanh cong
export const RESET_REGISTRATION_MESSAGE = 'RESET_REGISTRATION_MESSAGE';
/**
 * thiet lap cac thuoc tinh cho email
 * @returns {{type: string}}
 */

export  const  EMAIL = 'EMAIL';
export  const  SET_EMAIL ='SET_EMAIL';
 export const  PASSWORD_LOGIN = 'PASSWORD_LOGIN';
 export  const  SET_PASSWORD_LOGIN = 'SET_PASSWORD_LOGIN';



 export const  email = () => {
     return {
         type : EMAIL
     }
 }
 export  const  setEmail = (email)=>{
     return {
         type: SET_EMAIL,
         payload: email
     };
 }
 export  const  password_Login = () => {
     return {
         type : PASSWORD_LOGIN
     }
 }
export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};

export  const  setPassword = (password)=>{
    return {
        type: SET_PASSWORD_LOGIN,
        payload: password
    };
}
export const resetRegistrationMessage = () => {
    return {
        type: RESET_REGISTRATION_MESSAGE
    };
};
export const  tabTopSelling = () =>({
    type : IS_TOP_SELLING
})
export  const  error = () => ({
    type : ERROR
})
export const setError = (errorMessage) => {
    return {
        type: SET_ERROR,
        payload: errorMessage
    };
};
export const setFormData = (name, value) => {
    console.log("Setting form data:", name, value);
    return {
        type: 'SET_FORM_DATA',
        payload: { name, value }
    };
};

export const updateForm = (name, value) => ({
    type: UPDATE_FORM,
    payload: { name, value }
});
export const  setTabTopSelling = () => ({
    type : SET_TOP_SELLING
});
export  const  tabIsSeach = () => ({
    type : IS_SEARCH
});
export  const  setIsSeach = () => ({
    type : SET_IS_SEACH
})
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

