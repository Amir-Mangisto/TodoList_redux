import React, { useState } from "react";
import { connect } from "react-redux";
import {addNewTodo} from "../../redux/actions/todo";

function Todos(props) {
    const [text,setText] = useState("")
  return (
    <div>
      <h1>
          <div>
              <input type="text" name="" id=""  onChange={(e)=>setText(e.target.value)}/>
              <button onClick={() =>props.addNewTodo(text)}>add</button>
          </div>
        Todos:
        {props.todos.map((item) => (
          <div>
            <h1>{item.title}</h1>
            <h1>{String(item.isCompleted)}</h1>

          </div>
        ))}
      </h1>
    </div>
  );
}
export default connect(
    //this part connect the comp to the global state
    (state) => ({ todos: state.todos }),
    //this part works like dispatch - this works for us to change the state
     {addNewTodo})(Todos);
