import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './TodoAdd.styles.scss';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

const TodoAdd = () => {
  const [todo, setTodo] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addTodo({
        title: todo
      })
    );
    alert('Todo Eklendi');
    setTodo('');
  };

  return (
    <div className='todo-add'>
      <h2 className='todo-add-title'>New Todo</h2>
      <div className='todo-add-form'>
        <Input todo={todo} setTodo={setTodo} type={'text'} />
        <Button onclick={() => handleSubmit()} size='lg' text='Add Todo' type='add' />
      </div>
    </div>
  );
};

export default TodoAdd;
