import { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DATA } from './data';
import Product from './pages/Product';
import Card from './pages/Card';

export const BooksContext = createContext();

function App() {

  const [state, setState] = useState({
    bookList: DATA,
    cart: []
  })

  const addToCart = (book) => 
    setState({
    ...state,
    cart: state.cart.find(cartItem => cartItem.id === book.id)
    ? state.cart.map(cartItem => cartItem.id === book.id ? {...cartItem, count: cartItem.count +1} : cartItem)
    : [...state.cart, {...book, count: 1}]
  
  })

  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter(cartItem => cartItem.id !== id )
    })
  }

  const increase = (id) => {
    setState({
      ...state,
      cart:state.cart.map(cartItem => cartItem.id === id ? {...cartItem, count: cartItem.count +1} : cartItem)
    })
  }

  const decrease = (id) => {
    // kitap sayısı 1'in altına inemez 
    setState({
      ...state,
      cart:state.cart.map(cartItem => cartItem.id === id ? {...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1} : cartItem)
    })
  }

  return (
    <BooksContext.Provider value={{state:state, addToCart, increase, decrease, removeFromCart}}>
      
       <BrowserRouter>
        
        <Routes>
          <Route path='/' element = {<Product/>}/>
          <Route path='/card' element = {<Card/>}/>
        </Routes>
   
      </BrowserRouter>
    </BooksContext.Provider>
   
  );
}

export default App;
