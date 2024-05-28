import {
  EMAIL,
  ERROR,
  IS_ALL, IS_SEARCH,
  IS_TOP_SELLING, NEW_PRODUCTS, PASSWORD_LOGIN, RESET_REGISTRATION_MESSAGE, SET_ALL,
  SET_CATEGORY, SET_EMAIL, SET_ERROR,
  SET_IS_CART,
  SET_IS_MENU, SET_IS_SEACH, SET_IS_SEARCH, SET_NEW_PRODUCTS, SET_PASSWORD_LOGIN, SET_TOP_SELLING,
  SET_USER_MIN,
  TOGGLE_IS_CART, TOGGLE_IS_MENU,
  TOGGLE_MENU_OPEN,
  TOOGLE_CATEGORY,
} from "./Action";
import {SET_RELOAD_STATUS} from "./ReloadAction";
import {SET_PASSWORD_PROFILE} from "./ProfileAction";
import {CHECK_REGISTER} from "./RegisterAction";


// khởi tạo trạng thái ban đầu
const initialState = {
    menuOpen: false,
    isMenu: false,
    isUserMin: false,
    isCategory: false ,
    isCart : false,
     isSearch : false,
    isTopSelling : false,
    products :[],
    top_selling :[],
    products_new :[],
  provinces :[],
  districts :[] ,
  communes :[],
    is_new :false,
    isAll :false,
    error :null,
   formData: {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
   },
  registrationMessage: null,
  errorsMessage :null,
  userInfo: null,
  errors : '',
  errorsOtp:'',
  password_login :'',
  email_login :'',
  userData: null,
  isAdmin: false,
  isStatus :false,
  errorLogin :'',
  code : '',
  isRegister :false,
  user_id :0,
  password :'',
  emailSetting :''
  };
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case ERROR :
        return  {
          ...state,
          errors:state.errors
        }
      case SET_PASSWORD_PROFILE :
        return {
          ...state,
          password: action.payload
        }
      case  SET_ERROR :
        return {
          ...state ,
          errors: action.payload,
          errorsOtp: action.payload,
          errorLogin: '',

        }

      case TOGGLE_MENU_OPEN:
        return {
          ...state,
          menuOpen: !state.menuOpen,

        };
        case TOOGLE_CATEGORY:
        return {
          ...state,
          isCategory: true,
          isMenu: true,
        };
      case TOGGLE_IS_MENU :
        return {
          ...state,
          isMenu: false,
          isCategory: false
        }
      case SET_IS_MENU:
        return {
          ...state,
          isMenu: action.payload,
          isCart :false,

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
          isCart : action.payload,
          isMenu: false

        }
      case  IS_TOP_SELLING :
        return {
          ...state ,
          isTopSelling: true
        }
      case SET_TOP_SELLING :
        return {
          ...state ,
          isTopSelling: action.payload
        }
      case IS_ALL :
        return  {
          ...state,
          isAll: false
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
      case IS_SEARCH :
        return  {
          ...state ,
          isSearch: !state.isSearch
        }
      case  SET_IS_SEARCH :
        return  {
          ...state,
          isSearch: action.payload
        }
      case RESET_REGISTRATION_MESSAGE :
        return {
          ...state,
          registrationMessage: ''
        };
      case EMAIL :
        return  {
          ...state ,
          email_login: action.payload
        }
      case SET_EMAIL :
        return {
          ...state,
          email_login:  action.payload,
        }
      case  PASSWORD_LOGIN :
        return {
          ...state,
          password_login: action.payload
        }
      case SET_PASSWORD_LOGIN :
        return  {
          ...state ,
          password_login: action.payload,
        }
       case 'SET_FORM_DATA':
        return {
          ...state,
          formData: {
            ...state.formData,
            [action.payload.name]: action.payload.value
          }
        };
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
      case  'REGISTER_SUCCESS' :
        return  {
          ...state,
          registrationMessage: action.payload,
          userInfo: action.payload.user,
          //load lai form xoa du lieu di
          formData: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          },
          error: null,
          errors: '',
          errorsMessage :''
        }
      case  'REGISTER_ERROR' :
        return {
          ...state,
          error: action.payload,
          registrationMessage:'',
          errorsMessage :action.payload,
          errors: '',
        }
      case 'LOGIN_SUCCESS':
        const userData = action.payload;
        return {
          ...state,
          userData : userData,
          isAdmin: action.payload,
          isStatus : !state.isStatus,
          errorLogin :'',
          errorsMessage: '',
          errors :'',
          user_id: userData.user_id,
          password: userData.password,
          emailSetting :userData.email
        };
      case 'LOGOUT':

        return {
          ...state,
          userData: null,
          isAdmin: false,
          isStatus:false,
          isMenu: false,
          user_id: 0,
          password: ''
        };

      case 'LOGIN_ERROR' :
        return {
          ...state,
          userData: null,
          isStatus: false,
          errorLogin :action.payload
        }
      case  'OTP_SUCCESS' :
        return {
          ...state,
          registrationMessage:action.payload,
          errorsMessage :'',
          isRegister : true

        }
      case  'OTP_ERROR' :
        return {
          ...state,
          registrationMessage:'',
          errorsMessage :action.payload,
        }
      case SET_RELOAD_STATUS :
        return {
          ...state,
          isStatus: action.payload
        }
      case 'CHECK_EMAIL_ERROR' :
        return {
          ...state,
          registrationMessage:'',
          errorsMessage :action.payload,
        }
      case 'CHECK_EMAIL_SUCCESS' :
        return {
          ...state,
          errorsMessage :'',
        }
      case CHECK_REGISTER:
        return {
          ...state,
          isRegister: action.payload,
        }
      default:
        return state;
    }

  };

 export  default  appReducer;