import React from "react";
// import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Button from "../../components/Button/Button";
import { ProductBookStyled } from "./ProductBook.styled";

const ProductBook = ({ book, index, handleClick }) => {
  // let location = useLocation();

  return (
    <>
      <ProductBookStyled key={index}>
        <img src={book.image} alt={book.name} />
        <div className="book-info">
          <h4>{book.name}</h4>
          <p>Type : {book.type}</p>
          <p>Author : {book.author} </p>
          <span className="price">Price : {book.price} &#8378;</span>
          <div>
            <Button text="Sepete Ekle" onClick={() => handleClick(book)} />
            <ToastContainer />
          </div>
        </div>
      </ProductBookStyled>
    </>
  );
};

export default ProductBook;
