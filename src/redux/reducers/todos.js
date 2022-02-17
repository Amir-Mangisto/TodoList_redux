import {todoTypes} from "../types";

const reducer = (state,action)=>{
const {type,payload} = action;
switch (type) {
    case todoTypes.addTodo:
        return [...state,payload]
        break;

    default:
        break;
}
}

export default reducer;