import React from 'react'
import { NavLink } from 'react-router-dom'
import Kiymetlim from '../../assets/kiymetlim.png';
import { HeaderStyled } from './Header.styled';


const Header = () => {
  return (
    <HeaderStyled>
         <NavLink to="/">Kitap Listesi</NavLink>
          <img className='ring' src={Kiymetlim} alt="" />
          <NavLink to="/card">Sepetim</NavLink>
    </HeaderStyled>
       
        
  )
}

export default Header