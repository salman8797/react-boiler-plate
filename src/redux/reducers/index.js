import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";

export const rootReducer = combineReducers({
    user : exampleReducer
})