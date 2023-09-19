import {
    compose,
    createStore,
    applyMiddleware
} from "redux";
import {
    persistStore,
    persistReducer
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import {
    rootReducer
} from "./root-reducer";

/*
middlewares => kind of like little library helpers, that run before an action hits the reducer, so whenever you dispatch an action, before that action hits the reducers, it hits the middleware first
*/
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);