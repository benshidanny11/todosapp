import React, { useState } from 'react';

const Item = ({
   handleChange, editTodo,todo
}) => {
  const [editState, setEditState] = useState(true);

  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(todo, e.target.value);
  };

  const setClassName = (todo) => `input-field ${todo.completed && 'completed'}`;

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
      </form>
    </div>
  );
};

export default Item;