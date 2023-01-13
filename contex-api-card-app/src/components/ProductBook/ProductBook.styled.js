import styled from "styled-components";

export const ProductBookStyled = styled.div`
   
    font-family: 'Roboto Mono', monospace;
    background-color: rgba(238, 187, 45, 0.7);
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem 1rem;
    margin: 1.5rem 0;
    border-radius:2rem;
    box-shadow: rgba(245, 242, 238, 0.7) 0px 3px 7px;
    color: #181717;
    img{
      max-width: 140px;
      border-radius:.5rem;
    }
    .book-info{
      display: flex;
      flex-direction: column;
      gap: .8rem;
      h4{
      font-size: 1.5rem;
      margin-bottom:1rem;
      text-decoration:underline;
      }
      .price{
        font-size:20px;
        font-weight:600;
      }
    }
    
  
`