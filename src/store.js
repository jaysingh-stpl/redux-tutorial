/**
 * Created by jay on 5/4/19.
 */

import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

export default createStore(
    combineReducers({
        math,
        user
    }),
    {},
    applyMiddleware(logger,thunk,promise)
);