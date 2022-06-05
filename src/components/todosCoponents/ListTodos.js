/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const ListTodos = ({
  todos, handleChange, editTodo, deleteTodo,
}) => (
  <div>
    {todos.todoList.map((todo) => (
      <div className="list-todos-container" key={todo.id}>
        <TodoItem todo={todo} todos={todos} handleChange={handleChange} editTodo={editTodo} deleteTodo={deleteTodo} />
        <hr />
      </div>
    ))}
  </div>
);

export default ListTodos;
