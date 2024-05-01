import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // đúng cách nhập storage

import rootReducer from '../admin/redux/reducers/RootReducer';

const persistConfig = {
    key: 'root',
    storage ,
};

// Tạo một reducer đã được persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store với rootReducer và middleware
const store = createStore(
    persistedReducer, // sử dụng persistedReducer thay vì rootReducer trực tiếp
    applyMiddleware(thunk)
);

// Tạo một persistor để lưu trữ
const persistor = persistStore(store);

export { store, persistor };
