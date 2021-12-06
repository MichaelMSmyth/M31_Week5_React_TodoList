import React from "react";
import { Todo } from "./Todo";

// The Todo component which is nested in the Todo list
export function TodoList({ todos, toggleTodo }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
}
