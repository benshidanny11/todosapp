/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const TodoItem = ({
  todo, todos, handleChange, editTodo, deleteTodo,
}) => {
  const [editState, setEditState] = useState(true);

  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(todo, e.target.value);
  };

  const setClassName = (todo) => `input-field ${todo.completed && 'completed'}`;

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setEditState(!editState);
    }
  };
  return (
    <div>
      <form className="list-todos d-flex">
        <div className="list-input-group d-flex">
          <div>
            <input
              type="checkbox"
              name="mark"
              onChange={() => handleChange(todo)}
              checked={todo.completed}
            />
          </div>
          <input
            type="text"
            onChange={handleEdit}
            onDoubleClick={() => setEditState(!editState)}
            onKeyDown={handleKeyDown}
            className={setClassName(todo)}
            name="todo"
            value={todo.title}
            readOnly={editState}
          />
        </div>
        <div>
          <i
            role="button"
            aria-label="c"
            className="fas fa-trash"
            onClick={() => deleteTodo(todo, todos)}
            onKeyDown={() => handleOnKeyDown}
          />
          {' '}
        </div>
      </form>
    </div>
  );
};

export default TodoItem;
