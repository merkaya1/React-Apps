import styled from "styled-components";

export const HeaderStyled = styled.h2`
  
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    font-family: 'Noto Serif', serif;
    letter-spacing: 2px;
    margin-top:2rem;
    span {
      background-color: rgba(255, 255, 255, 0.7);
      color: #000;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
    }
    .active {
      
      background-color:  rgba(255, 255, 255, 0.3);
      color:#fff;
    }
    a{
      color: rgba(255, 255, 255, 0.3);
      padding: .7rem 1.2rem;
      border-radius: 1.4rem;
      &:hover{
        color: rgb(255, 255, 255);
      }
    }
    .ring{
    -webkit-animation: spin 8s linear infinite;
    -moz-animation: spin 8s linear infinite;
    max-width:150px;
    
  }
 @-webkit-keyframes spin {
  100%{-webkit-transform: rotate(360deg)}
 }
 @-moz-keyframes spin {
  100%{-webkit-transform: rotate(360deg)}
 }
 @keyframes spin {
  100%{-webkit-transform: rotate(360deg)}
 }

`