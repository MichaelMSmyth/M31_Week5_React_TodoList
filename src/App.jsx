import React, { useState, useRef, useEffect } from "react";
// UUID is a 3rd party module for unique id's as the 'crypto' node core module don't work in React for some reason
import { uuid } from "uuidv4"; 
import { TodoList } from "./components/TodoList";

const LOCAL_STORAGE_KEY = "todoApp.todos"; 

export default function App() { 
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const handleAddTodo = (event) => {
    const name = todoNameRef.current.value;

    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  };

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  // App() returns the Todo list component
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />

      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter((todo) => !todo.complete).length}</div>
    </>
  );

}


