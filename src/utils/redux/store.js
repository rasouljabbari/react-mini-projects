import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";
import {logger} from "redux-logger/src";
import {composeWithDevTools} from "redux-devtools-extension";


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))