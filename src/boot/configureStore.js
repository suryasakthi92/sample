// @flow
import { AsyncStorage, Platform } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";
import {createLogger} from 'redux-logger'

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__})

import {rootReducer} from "../reducers";

const enhancer = compose(
    applyMiddleware(thunk, loggerMiddleware),
);

const store = createStore(rootReducer, enhancer, autoRehydrate());
persistStore(store, { storage: AsyncStorage, whitelist: ['authenticationReducer', 'pushReducer'] });

export {store}