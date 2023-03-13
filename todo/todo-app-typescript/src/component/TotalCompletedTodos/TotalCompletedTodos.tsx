import React from 'react';
import './TotalCompletedTodos.styles.scss';
import { useSelector } from 'react-redux';
interface todo {
  id: number;
  title: string;
  completed: boolean;
}

const TotalCompletedTodos = () => {
  const completedTodos = useSelector((state: any) => state.todos.filter((todo: todo) => todo.completed === true));
  return (
    <div className='total'>
      <h2>Total Completed Items: {completedTodos.length}</h2>
    </div>
  );
};

export default TotalCompletedTodos;
