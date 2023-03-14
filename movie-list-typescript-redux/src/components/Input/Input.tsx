import React from 'react';
import './Input.styles.scss';

interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  text: string;
}

const Input: React.FC<InputProps> = ({ type, id, name, placeholder, text }) => {
  return (
    <label htmlFor={id}>
      {text}
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </label>
  );
};

export default Input;
