import React from 'react'
import { Btn } from './Button.styled'


const Button = ({text, onClick}) => {
  return (
    <Btn onClick={onClick}>{text}</Btn>
  )
}

export default Button