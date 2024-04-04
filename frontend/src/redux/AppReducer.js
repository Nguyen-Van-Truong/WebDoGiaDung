import {
  SET_CATEGORY,
  SET_IS_CART,
  SET_IS_MENU,
  SET_USER_MIN,
  TOGGLE_IS_CART,
  TOGGLE_MENU_OPEN,
  TOOGLE_CATEGORY
} from "./Action";
import {createStore} from "redux";

// khởi tạo trạng thái ban đầu
const initialState = {
    menuOpen: false,
    isMenu: false,
    isUserMin: false,
    isCategory: false ,
    isCart : false
  };
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_MENU_OPEN:
        return {
          ...state,
          menuOpen: !state.menuOpen
        };
        case TOOGLE_CATEGORY:
        return {
          ...state,
          isCategory: !state.menuOpen
        };
      case SET_IS_MENU:
        return {
          ...state,
          isMenu: action.payload
        };
      case SET_USER_MIN:
        return {
          ...state,
          isUserMin: action.payload
        };
      case TOGGLE_IS_CART :
        return {
          ...state ,
          isCart : !state.isCart
        }
      case SET_CATEGORY:
        return {
          ...state,
          isCategory: action.payload
        };
      case SET_IS_CART :
        return {
          ...state ,
          isCart : action.payload
        }
      default:
        return state;
    }
  };
 const  store = createStore(appReducer);
 export  default  store;