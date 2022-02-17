import { createStore,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import globalReducer from "./reducers";

const Middleware = [thunk];

const store = createStore(globalReducer, {
  todos: [
    { title: "do action", isCompleted: false },
    { title: "do some", isCompleted: false },
  ],
},
compose(applyMiddleware(...Middleware))
);

export default store;
/// the applyMiddleware is like a way who connect the function to the object
// compose gathering all together 
//thunk is a specific agent who do the actual connect