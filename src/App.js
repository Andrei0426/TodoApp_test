// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, changeTodoState } from './actions';
import './App.css';

const App = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const title = prompt('Enter the todo title:');
    if (title) {
      dispatch(addTodo({
        title,
        description: '',
        done: false
      }));
    }
  };

  const handleToggleTodo = index => {
    dispatch(changeTodoState(index));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      <button className="add-button" onClick={handleAddTodo}>Add Todo</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${todo.done ? 'done' : ''}`}
            onClick={() => handleToggleTodo(index)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
