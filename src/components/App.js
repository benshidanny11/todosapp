import React, { useState } from 'react';
import '../styles/main.css';
import AddTodo from './addtodo';
import ListTodo from './listtodo';

function App() {

  const [todos, setTodos] = useState({
    todoList: [],
  });

  const addNewTodo = (todo) => {
    if (todo.title.length !== 0) {
      setTodos((prev) => ({
        todoList: [...prev.todoList, todo],
      }));
    }
  };

  const setCheck = (todo) => {
    setTodos((prev) => ({
      todoList: prev.todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    }));
  };

  const editTodo = (todo, editedTitle) => {
    setTodos((prevState) => ({
      todoList: prevState.todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, title: editedTitle };
        }
        return item;
      }),
    }));
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => ({
      todoList: prevState.todoList.filter((item) => item.id !== todo.id),
    }));
  };

  return (
    <div className="App d-flex">
      <div className='container'>
        <h1 className="todo-header">todos</h1>
        <AddTodo addNewTodo={addNewTodo} todos={todos} />
      <ListTodo todos={todos} setTodos={setTodos} handleChange={setCheck} editTodo={editTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
