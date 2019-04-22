import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistCombineReducers, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createLogger } from 'redux-logger';
import axiosMiddleware from 'redux-axios-middleware';

import rootReducers from './reducers'; // where reducers is a object of reducers
import api from '../utils/api';

const config = {
    key: 'root',
    storage,
//    blacklist: ['app'],
    debug: true
};
const middleware = [];

middleware.push(axiosMiddleware(api));

if (__DEV__) {
    middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, { app: rootReducers });
const enhancers = [applyMiddleware(...middleware)];
const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, initialState, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
//    console.log('Test', store.getState());
});
const configureStore = () => {
    return { persistor, store };
};

export default configureStore;
