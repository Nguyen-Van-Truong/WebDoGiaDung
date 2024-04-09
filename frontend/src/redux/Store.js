import { createStore, applyMiddleware } from 'redux';

import rootReducer from "../admin/redux/reducers/RootReducer";
import {thunk} from "redux-thunk";


// Tạo store với rootReducer và middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
