

import {combineReducers} from "redux";
import appReducer from "../../../redux/AppReducer";
import productReducer from "./ProductReducer";
import categoryReducer from "./CategoryReducer";
import notificationReducer from "./NotificationsReducer";


const rootReducer = combineReducers({
    appUser: appReducer,
    productAdmin: productReducer,
    category: categoryReducer,
    notifications: notificationReducer,

});

export default rootReducer;