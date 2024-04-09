import {createStore, applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk'; // Adjusted import statement
import adminRootReducer from './reducers/RootReducer';

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = undefined;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const adminStore = createStore(
    adminRootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default adminStore;
