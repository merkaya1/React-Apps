import { type } from 'os';
import React from 'react';
import './Button.styles.scss';

interface ButtonProps {
  text: string;
  width?: string;
  type: string;
}

const Button: React.FC<ButtonProps> = ({ text, width, type }) => {
  return <button className={`btn ${width} ${type}`}>{text}</button>;
};

export default Button;
