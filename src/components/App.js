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


  return (
    <div className="App d-flex">
      <div className='container'>
        <h1 className="todo-header">todos</h1>
        <AddTodo addNewTodo={addNewTodo} todos={todos} />
      <ListTodo todos={todos} setTodos={setTodos} changeHandler={setCheck}/>
      </div>
    </div>
  );
}

export default App;
