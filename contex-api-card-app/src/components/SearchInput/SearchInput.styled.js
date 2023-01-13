import styled from 'styled-components'

export const Search = styled.div `
    background-color:transparent;
    width: 50%;
    margin: 2rem auto;
    input{
      width:100%;
      padding: 0.5rem ;
      outline:none;
      text-align: center;
      font-size: 16px;
      font-family: 'Roboto Mono',monospace;
      font-weight: 600;
      border:none;
      border-radius:0.4rem;
      -webkit-box-shadow: 0px 5px 10px 7px rgba(246,247,242,1);
      -moz-box-shadow: 0px 5px 10px 7px rgba(246,247,242,1);
       box-shadow: 0px 5px 10px 7px rgba(246,247,242,1);
      &:focus{
        -webkit-box-shadow: 0px 5px 10px 7px rgba(167, 131, 32, 0.7);
        -moz-box-shadow: 0px 5px 10px 7px rgba(167, 131, 32, 0.7);
        box-shadow: 0px 5px 10px 7px rgba(167, 131, 32, 0.7);
        border-radius:2rem;
      }
    }
  
`