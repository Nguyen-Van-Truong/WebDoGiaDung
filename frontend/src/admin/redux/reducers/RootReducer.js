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


const rootReducer = combineReducers({
    appUser: appReducer,
    productAdmin: productReducer,
    category: categoryReducer,
    page : currentPageReducer,
    notifications: notificationReducer,
    profile : profileReducer,
    notification: notifiCationReducer,
    customer: customerReducer,
    forget :forgetPasswordReducer
});

export default rootReducer;