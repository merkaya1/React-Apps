import React from 'react';
import Button from '../Button/Button';
import './TodoItem.styles.scss';
import check from '../../assets/icons/check.svg';
import deleteIcons from '../../assets/icons/delete.svg';
import { useDispatch } from 'react-redux';
import { completedTodo, removeTodo } from '../../redux/todoSlice';

type TodoItemProps = {
  todo: string;
  id: number;
  completed: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, id, completed }) => {
  const dispatch = useDispatch();

  const success: () => void = () => {
    dispatch(completedTodo({ id: id, completed: !completed }));
  };

  const remove: () => void = () => {
    dispatch(removeTodo({ id: id }));
  };

  return (
    <div className={`todo-item ${completed && 'success'}`}>
      <div className='todo-item-title'>
        <input type='checkbox' disabled checked={completed} />
        <p className={`todo-item-text ${completed && 'finish'}`}>{todo}</p>
      </div>
      <div className='todo-item-buttons'>
        <Button onclick={() => success()} size='sm' type='success' imgUrl={check} />
        <Button onclick={() => remove()} size='sm' type='delete' imgUrl={deleteIcons} />
      </div>
    </div>
  );
};

export default TodoItem;
