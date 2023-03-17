import { type } from 'os';
import React from 'react';
import './Button.styles.scss';

interface ButtonProps {
  text: string;
  width?: string;
  bg: string;
  onclick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, width, bg, onclick }) => {
  return (
    <button onClick={onclick} className={`btn ${width} ${bg}`}>
      {text}
    </button>
  );
};

export default Button;
