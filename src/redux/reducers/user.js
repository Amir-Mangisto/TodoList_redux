import { todoTypes } from "../types";

const userReducer = (state,action)=>{
    const {type,payload} = action;
    switch (type) {
        case todoTypes.user:
            return {...state,payload}
    
        default:
            return state
    }
}

export default userReducer;