

import {combineReducers} from "redux";
import appReducer from "../../../redux/AppReducer";
import productReducer from "./ProductReducer";


const rootReducer = combineReducers({
    appUser: appReducer,
    productAdmin: productReducer,
});

export default rootReducer;