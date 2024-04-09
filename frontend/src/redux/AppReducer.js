import {
  IS_ALL,
  IS_TOP_SELLING, NEW_PRODUCTS, SET_ALL,
  SET_CATEGORY,
  SET_IS_CART,
  SET_IS_MENU, SET_NEW_PRODUCTS, SET_TOP_SELLING,
  SET_USER_MIN,
  TOGGLE_IS_CART,
  TOGGLE_MENU_OPEN,
  TOOGLE_CATEGORY
} from "./Action";
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import rootReducer from "../admin/redux/reducers/RootReducer";



// khởi tạo trạng thái ban đầu
const initialState = {
    menuOpen: false,
    isMenu: false,
    isUserMin: false,
    isCategory: false ,
    isCart : false,
    isTopSelling : false,
    products :[],
    top_selling :[],
    products_new :[],
  provinces :[],
  districts :[] ,
  communes :[],
    is_new :false,
    isAll :false,
    error :null
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
      case  IS_TOP_SELLING :
        return {
          ...state ,
          isTopSelling: !state.isTopSelling
        }
      case SET_TOP_SELLING :
        return {
          ...state ,
          isTopSelling: action.payload
        }
      case IS_ALL :
        return  {
          ...state,
          isAll: !state.isAll
        }
      case SET_ALL:
        return  {
          ...state ,
          isAll: !action.payload
        }
      case NEW_PRODUCTS:
        return {
          ...state,
          is_new: !state.is_new
        }
      case SET_NEW_PRODUCTS :
        return {
          ...state,
          is_new: action.payload
        }
      case  'FETCH_PRODUCTS_SUCCESS' :
            return {
          ...state ,
              products: action.payload,
              error: null
            }
      case 'FETCH_PRODUCTS_ERROR' :
        return {
          ...state,
          error: action.payload
        }
      case 'TOP_SELLING_SUCCESS' :
        return {
          ...state,
          top_selling: action.payload ,
          error: null
        }
      case 'TOP_SELLING_ERROR' :
        return {
          ...state ,
          error: action.payload
        }
      case 'PRODUCTS_NEW_SUCCESS' :
        return {
          ...state,
          products_new: action.payload,
          error: null
        }
      case 'PRODUCTS_NEW_ERROR' :
        return {
          ...state,
          error: action.payload
        }
      case 'PROVINCE_SUCCESS' :
        return {
          ...state,
          provinces: action.payload,
          error: null
        }
      case 'PROVINCE_ERROR' :
        return {
          ...state,
          error: action.payload
        }
      case 'DISTRICT_SUCCESS' :
        return {
          ...state,
         districts: action.payload,
          error: null
        }
      case 'DISTRICT_ERROR' :
        return {
          ...state,
          error: action.payload
        }
      case 'COMMUNE_SUCCESS' :
        return {
          ...state,
          communes: action.payload,
          error: null
        }
      case 'COMMUNE_ERROR' :
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  };
const store = createStore(
    // rootReducer, // Use the rootReducer here

    appReducer,
    applyMiddleware(thunk)
);
 export  default  store;