import React from "react";
import { connect } from "react-redux";

function Todos(props) {
  return (
    <div>
      <h1>
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
export default connect((state) => ({ todos: state.todos }), {})(Todos);
