

import {combineReducers} from "redux";
import appReducer from "../../../redux/AppReducer";
import productReducer from "./ProductReducer";
import categoryReducer from "./CategoryReducer";


const rootReducer = combineReducers({
    appUser: appReducer,
    productAdmin: productReducer,
    category: categoryReducer,

});

export default rootReducer;