import React from 'react'
import Kiymetlim from '../assets/kiymetlim.png';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useContext } from 'react'
import { BooksContext} from '../App'
import Button from '../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardContainer = styled.div`
  color: #fff;
  margin: 1rem auto;
  .total{
    max-width: 50%;
    margin: 1rem auto;
    text-align:center;
    border: 3px solid #A78320;
    h4{
      padding: 0.8rem 2rem;
      background-color: #A78320;
      font-size: 1.8rem;
      color: #181717;
    }
    p{
      padding: 1.5rem 0;
      font-size:1.5rem;
      color: #A78320;
    }
  }
  h2{
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
    a{
      color: rgba(255, 255, 255, 0.3);
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

  }
  .book{
    position:relative;
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
      min-width: 200px;
      h4{
      font-size: 1.5rem;
      margin-bottom:1rem;
      text-decoration:underline;
      }
      .amount{
        display: flex;
        gap: 5rem;
        span{
        font-size:20px;
        font-weight:600;
      }
      .count {
        position:absolute;
        top:5%;
        left:95%;
        transform:translateY(-50%);
        background-color: rgba(255, 255, 255, 0.7);
        padding: 0.5rem;
        border-radius: 50%;
        font-size: 2rem;
      }
      }
      .btn-items{
        display:flex;
        gap: 1.5rem;
      }
    }
    
  }
`;

const Card = () => {
  const context = useContext(BooksContext)
  console.log('cart', context.state.cart)
  let amount = context.state.cart.map(book => {
   return {count:book.count, total:book.price}
  })
  console.log("amount", amount);
  let total = amount.map(item => Number((item.count * item.total).toFixed(2)))
  console.log('total',typeof total, total)
  const notify = ((basketBook) => {
    return context.state.bookList.filter(book => {
      if(book.id === basketBook.id && basketBook.name.includes('Yüzük')) {
        
         return toast(`Senin Adına Üzüldüm Kardeşim`, {
          className: 'toast',
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
     }else if(book.id === basketBook.id){
      return toast.success(`${book.name}  Sepetten Çıkarıldı`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
     }
    })
  })

  return (
    <div className='card'>

       <CardContainer>
       <ToastContainer />
        <h2>
        <Link to="/">Kitap Listesi</Link>
          
          <img className='ring' src={Kiymetlim} alt="" />
          <span>Sepetim</span>
        </h2>

        <div className='total'>
          <h4>
            Total Amount 
          </h4>
          <p>{total.reduce((a,b) => a+b , 0)} &#8378;</p>
        </div>
        {
          context.state.cart.map((book, index) => {
           
            if(book.count > 1) {
           return   <div className="book" key={index}>
             
              <img src={book.image} alt={book.name} />
              <div className='book-info'>
                <h4 >{book.name}</h4>
                <p>Type : {book.type}</p>
                <p>Author : {book.author} </p>
                <div className='amount'>
                   <span className='price'>Price : {book.price} &#8378;</span>
                   <span>{`Total Amount : ${(book.price * book.count).toFixed(2)} ` } &#8378; </span>
                   <span className='count'>X{book.count}</span>
                </div>
                <div className='btn-items'>
                  <Button text='-' onClick={() => context.decrease(book.id)}/>
                  <Button text = "Sepetten Çıkar"onClick={() =>notify(book) && context.removeFromCart(book.id)} />
                  <Button text='+' onClick={() => context.increase(book.id)}/>
                 
                </div>
              </div>
            </div>
             } else {
              return   <div className="book" key={index}>
              <img src={book.image} alt={book.name} />
              <div className='book-info'>
                <h4 >{book.name}</h4>
                <p>Type : {book.type}</p>
                <p>Author : {book.author} </p>
                <div>
                   <span className='price'>Price : {book.price} &#8378;</span>
                  
                  
                </div>
                <div className='btn-items'>
                  <Button text='-' onClick={() => context.decrease(book.id)}/>
                  <Button text = "Sepetten Çıkar"onClick={() =>notify(book) && context.removeFromCart(book.id)} />
                  <Button text='+' onClick={() => context.increase(book.id)}/>
                </div>
              </div>
            </div>

             }
          }
          
          )
        }
    </CardContainer>
    </div>
  )
}

export default Card