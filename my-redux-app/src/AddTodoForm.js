// AddTodoForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect(null, { addTodo })(AddTodoForm);
