import React from 'react';
import './Input.styles.scss';

type InputProps = {
  type: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todo: string;
};

const Input = ({ type, todo, setTodo }: InputProps) => {
  return (
    <input
      onChange={(e) => setTodo(e.target.value)}
      value={todo}
      className='input'
      placeholder='Todo Giriniz'
      type={type}
    />
  );
};

export default Input;
