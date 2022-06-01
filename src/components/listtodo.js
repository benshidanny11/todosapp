import React from 'react';
import Item from './item';

const ListTodo = ({
  todos, editTodo,changeHandler
}) => (
  <div>
    {todos.todoList.map((todo) => (
      <div className="list-todos-container" key={todo.id}>
        <Item todo={todo} todos={todos} changeHandler={changeHandler} editTodo={editTodo} />
        <hr />
      </div>
    ))}
  </div>
);

export default ListTodo;