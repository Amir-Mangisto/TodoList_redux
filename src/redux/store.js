import { createStore } from "redux";
import globalReducer from "./reducers";

const store = createStore(globalReducer, {
  todos: [
    { title: "do action", isCompleted: false },
    { title: "do some", isCompleted: false },
  ],
});

export default store;
