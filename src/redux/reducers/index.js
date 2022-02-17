import { combineReducers } from "redux";
import userReducer from "./user";
import todosReducer from "./todos";

const globalReducer = combineReducers({
    todos:todosReducer,
    user:userReducer
})
export default globalReducer;