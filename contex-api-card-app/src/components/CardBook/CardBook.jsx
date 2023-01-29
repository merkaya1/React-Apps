import React from "react";
import Button from "../Button/Button";
import { CardBookStyled } from "./CardBook.styled";
import { ToastContainer } from "react-toastify";

const CardBook = ({ book,  handleRemove, context }) => {

  console.log("book-count", book.count);
  console.log("book-id", book.id);
  if (book.count > 1) {
    return (
      <CardBookStyled  >
        <img src={book.image} alt={book.name} />
        <div className="book-info">
          <h4>{book.name}</h4>
          <p>Type : {book.type}</p>
          <p>Author : {book.author} </p>
          <div className="amount">
            <span className="price">Price : {book.price} &#8378;</span>
            <span>
              {`Total Amount : ${(book.price * book.count).toFixed(2)} `}
              &#8378;
            </span>
            <span className="count">X{book.count}</span>
          </div>
          <div className="btn-items">
            <Button text="-" onClick={() => context.decrease(book.id)} />
            <Button text="Sepetten Çıkar" onClick={() => handleRemove(book)} />
            <Button text="+" onClick={() => context.increase(book.id)} />
            
          </div>
        </div>
      </CardBookStyled>
    );
  
  } else {
    return (
      <CardBookStyled >
        <img src={book.image} alt={book.name} />
        <div className="book-info">
          <h4>{book.name}</h4>
          <p>Type : {book.type}</p>
          <p>Author : {book.author} </p>
          <div>
            <span className="price">Price : {book.price} &#8378;</span>
          </div>
          <div className="btn-items">
            <Button text="-" onClick={() => context.decrease(book.id)} />
            <Button text="Sepetten Çıkar" onClick={() => handleRemove(book)} />
            <Button text="+" onClick={() => context.increase(book.id)} />
           
          </div>
        </div>
      </CardBookStyled>
    );
  }
};

export default CardBook;
