// frontend/src/admin/redux/reducers/RootReducer.js

import {combineReducers} from "redux";
import appReducer from "../../../redux/AppReducer";
import productReducer from "./ProductReducer";
import categoryReducer from "./CategoryReducer";
import notificationReducer from "./NotificationsReducer";
import currentPageReducer from "./CurrentPageReducer";
import profileReducer from "../../../redux/ProfileReducer";
import notifiCationReducer from "../../../redux/NotificationReducer";
import customerReducer from "./CustomerReducer";
import forgetPasswordReducer from "../../../redux/ForgetPasswordRedux";
import product_Details_Reducer from "../../../redux/Product_Details_Reducer";
import cartReducer from "../../../redux/CartReducer";
import cartHistoryReducer from "../../../redux/HistoryCartReducer";
import paymentReducer from "../../../redux/paymentReducer";
import orderReducer from "./OrderReducer";
import SearchReducer from "../../../redux/SearchReducer";
import categoryUserReducer from "./CategoryReducer";
import productUserReducer from "../../../redux/ProductRedux";
import currentPageUserReducer from "../../../redux/CurrentPageReducer";
import languageReducer from "../../../redux/languageSlice";


const rootReducer = combineReducers({
    appUser: appReducer,
    productAdmin: productReducer,
    productUser :productUserReducer,
    category: categoryReducer,
    categoryUser: categoryUserReducer,
    page: currentPageReducer,
    pageUser :currentPageUserReducer,
    notifications: notificationReducer,
    profile: profileReducer,
    notification: notifiCationReducer,
    customer: customerReducer,
    forget: forgetPasswordReducer,
    details: product_Details_Reducer,
    cart: cartReducer,
    history: cartHistoryReducer,
    paymentReducer: paymentReducer,
    orderReducer: orderReducer,
    search :SearchReducer,
    language: languageReducer,

});

export default rootReducer;