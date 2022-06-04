/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ addNewTodo }) => {
  const [todoItem, setTodoItem] = useState(
    {
      id: uuidv4(),
      title: '',
      completed: false,
    },
  );

  const handleChange = (e) => {
    e.preventDefault();
    setTodoItem({
      ...todoItem,
      title: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(todoItem);
    e.target.children[0].firstChild.value = '';
    setTodoItem({
      ...todoItem,
      id: uuidv4(),
    });
  };
  return (
    <div className="add-todos">
      <form onSubmit={handleSubmit} className="add-input-form d-flex">
        <div className="input-group">
          <input type="text" className="add-input-field" name="todo" id="todo" onChange={handleChange} placeholder="Add todo ..." />
        </div>
        <div>
          <button type="submit" className="add-btn" name="todo" id="todo"> +</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
