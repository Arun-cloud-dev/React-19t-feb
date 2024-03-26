// TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from './actions';

const TodoList = ({ todos, removeTodo }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => removeTodo(todo.id)}>Remove</button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { removeTodo })(TodoList);
