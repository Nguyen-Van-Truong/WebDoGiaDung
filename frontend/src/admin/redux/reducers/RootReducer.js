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


const rootReducer = combineReducers({
    appUser: appReducer,
    productAdmin: productReducer,
    category: categoryReducer,
    page: currentPageReducer,
    notifications: notificationReducer,
    profile: profileReducer,
    notification: notifiCationReducer,
    customer: customerReducer,
    forget: forgetPasswordReducer,
    details: product_Details_Reducer,
    cart : cartReducer,
});

export default rootReducer;