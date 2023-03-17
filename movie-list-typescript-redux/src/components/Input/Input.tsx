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
  value?: string | number;
  disabled?: boolean;
  display?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  placeholder,
  text,
  register,
  error,
  value,
  disabled,
  display
}) => {
  return (
    <label htmlFor={id} className={`${display}`}>
      {text}
      <input
        {...register(`${name}`)}
        type={type}
        value={value}
        name={name}
        id={id}
        placeholder={placeholder}
        required
        disabled={disabled}
      />
      {/* {error && <span style={{ color: 'red' }}>Boş veya eksik bilgi girdiniz</span>} */}
    </label>
  );
};

export default Input;
