import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    padding: 0.5rem 1rem;
    border-radius:10px;
    border:none;
    font-size:14px;
    font-weight:600;
    box-shadow: 0px 5px 5px;
    background-image: linear-gradient(to right, #1d1b14, #453c1b, #735f1e, #a8831f, #e3a71f);
    :hover {
        cursor: pointer;
        scale:1.05;
        /* transform:rotateX(360deg); */
        background-image: linear-gradient(to left, #1d1b14, #453c1b, #735f1e, #a8831f, #e3a71f);
    }

`;

const Button = ({text, onClick}) => {
  return (
    <Btn onClick={onClick}>{text}</Btn>
  )
}

export default Button