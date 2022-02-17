//
export const addNewTodo = (text) => (dispatch) => {
    const todo = {title:text,isCompleted:true}
    dispatch({type:"ADD_TODO",payload:todo})
}