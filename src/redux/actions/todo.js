import {todoTypes} from "../types"

export const addNewTodo = (text) => (dispatch) => {
    const todo = {title:text,isCompleted:true}
    dispatch({type:todoTypes.addTodo,payload:todo})
    
    //it can work like that as well
    // dispatch({type:todoTypes.addTodo,payload:todo})
    
}