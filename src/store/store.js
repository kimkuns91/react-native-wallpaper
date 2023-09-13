import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from "redux-logger";
import { favoriteListReducer } from "../reducers/favoriteRecuer";

const rootReducer = combineReducers({
    favorite:favoriteListReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store);

export { store, persistor };
