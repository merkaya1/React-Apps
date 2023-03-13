import React from 'react';
import './Button.styles.scss';

type ButtonProps = {
  text?: string;
  size: string;
  imgUrl?: string;
  type: string;
  onclick: () => void;
};

const Button = ({ text, size, imgUrl, type, onclick }: ButtonProps) => {
  return (
    <button onClick={onclick} className={`btn ${size} ${type}`}>
      {imgUrl ? <img src={imgUrl} alt='' /> : text}
    </button>
  );
};

export default Button;
