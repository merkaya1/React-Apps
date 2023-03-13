import React from 'react';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoList from '../TodoList/TodoList';
import TotalCompletedTodos from '../TotalCompletedTodos/TotalCompletedTodos';
import './Todos.Container.styles.scss';

const TodosContainer = () => {
  return (
    <div className='todos-container'>
      <TodoAdd />
      <TodoList />
      <TotalCompletedTodos />
    </div>
  );
};

export default TodosContainer;
