import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.styles.scss';
import { useSelector } from 'react-redux';

type State = {
  id: number;
  title: string;
  completed: boolean;
};

const TodoList = () => {
  const todos: State[] = useSelector((state: any) => state.todos);

  todos.map((i) => console.log(i));

  console.log('TODOS', todos);
  return (
    <div className='todo-list'>
      <h2 className='todo-list-title'>Todo List</h2>
      <div className='todos'>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              <TodoItem id={item.id} todo={item.title} completed={item.completed} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
