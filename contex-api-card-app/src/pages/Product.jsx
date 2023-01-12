import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BooksContext} from '../App'
import styled from 'styled-components'
import Button from '../components/Button'
import Kiymetlim from '../assets/kiymetlim.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import eyeOfSauron from '../assets/eye-of-sauron.png';

const ProductContainer = styled.div`
  color: #fff;
  margin: 1rem auto;
  .input{
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
    
  }
`;

const Product = (props) => {

const [search, setSearch] = useState('')

const context = useContext(BooksContext)
console.log(context)


const notify = ((basketBook) => {
  return context.state.bookList.filter(book => {
    if(book.id === basketBook.id && basketBook.name.includes('Yüzük')) {
      
       return toast(`Kral Adamsın Brooo Bravo !!!!`, {
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
    return toast.success(`${book.name}  Sepete Eklendi`, {
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

const onSearchChange = (e) => {
  const searchFieldString = e.target.value.toLowerCase()
  setSearch(searchFieldString)
  console.log(searchFieldString)
}
const handleClick = (book) => {
  context.addToCart(book)
  notify(book) 
}


const filteredBook = context.state.bookList.filter(item => item.name.toLowerCase().includes(search))
console.log('fil', filteredBook);
  return (
   
    <div className='product'>
       
       <ProductContainer>
        <h2>
          <span>Kitap Listesi</span>
          <img className='ring' src={Kiymetlim} alt="" />
          <Link to="/card">Sepetim</Link>
        </h2>
        <div className='input'>
          <input type="text" placeholder='Search Book' onChange={onSearchChange}/>
        </div>
        {
          filteredBook.map((book, index) => (
            <div className="book" key={index}>
              <img src={book.image} alt={book.name} />
              <div className='book-info'>
                <h4 >{book.name}</h4>
                <p>Type : {book.type}</p>
                <p>Author : {book.author} </p>
                <span className='price'>Price : {book.price} &#8378;</span>
                <div>
                  {/* Bu Bölümü Sormam Lazım */}
                  <Button text = "Sepete Ekle" onClick = {() => handleClick(book)  }/>
                  
                  
                  <ToastContainer />
                </div>
               
              </div>
            </div>
          ))
        }
        
    </ProductContainer>
    
    </div>
  )
}

export default Product