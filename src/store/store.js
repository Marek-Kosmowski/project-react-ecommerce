import {
    compose,
    createStore,
    applyMiddleware
} from "redux";
import logger from "redux-logger";

import {
    rootReducer
} from "./root-reducer";

/*
middlewares => kind of like little library helpers, that run before an action hits the reducer, so whenever you dispatch an action, before that action hits the reducers, it hits the middleware first
*/
const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);