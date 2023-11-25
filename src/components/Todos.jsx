import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <div>todo list</div>
      {todos ? (
        <>
          {todos.map((todo) => (
            <div key={todo.id}>
              <h1>{todo.title}</h1>
              <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
                remove
              </button>
            </div>
          ))}
        </>
      ) : (
        <>
          <h1>empty todo</h1>
        </>
      )}
    </div>
  );
};

export default Todos;
