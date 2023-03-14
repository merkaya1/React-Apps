import { type } from 'os';
import React from 'react';
import './Button.styles.scss';

interface ButtonProps {
  text: string;
  width?: string;
  bg: string;
}

const Button: React.FC<ButtonProps> = ({ text, width, bg }) => {
  return <button className={`btn ${width} ${bg}`}>{text}</button>;
};

export default Button;
