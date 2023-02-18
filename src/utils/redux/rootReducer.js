import {combineReducers} from "redux";
import {asyncReducer} from "./async/reducer";

export const rootReducer = combineReducers({
    asyncReducer: asyncReducer
})