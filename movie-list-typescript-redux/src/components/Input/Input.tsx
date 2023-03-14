import React from 'react';
import './Input.styles.scss';

interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  text: string;
  register: any;
  error: any;
}

const Input: React.FC<InputProps> = ({ type, id, name, placeholder, text, register, error }) => {
  return (
    <label htmlFor={id}>
      {text}
      <input {...register(`${name}`)} type={type} name={name} id={id} placeholder={placeholder} required />
      {/* {error && <span style={{ color: 'red' }}>Boş veya eksik bilgi girdiniz</span>} */}
    </label>
  );
};

export default Input;
