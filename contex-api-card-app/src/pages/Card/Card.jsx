import React from "react";
import { useContext } from "react";
import { BooksContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CardContainer } from "./Card.styled";
import TotalAmount from "../../components/TotalAmount/TotalAmount";
import CardBook from "../../components/CardBook/CardBook";

const Card = () => {
  const context = useContext(BooksContext);

   const notify = (basketBook) => {
      return context.state.bookList.filter((book) => {
        if (book.id === basketBook.id && basketBook.name.includes("Yüzük")) {
          return toast(`Senin Adına Üzüldüm Kardeşim`, {
            className: "toast",
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else if (book.id === basketBook.id) {
          return toast.success(`${book.name}  Sepetten Çıkarıldı`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
    };

  console.log("cart", context.state.cart);

  let amount = context.state.cart.map((book) => {
    return { count: book.count, total: book.price };
  });

  console.log("amount", amount);
  let total = amount.map((item) =>
    Number((item.count * item.total).toFixed(2))
  );
  console.log("total", typeof total, total);

  
  const handleRemove = (book) => {
    notify(book);
    context.removeFromCart(book.id);
    
  };



  return (
    <CardContainer>
     
      <TotalAmount total={total} />

      {context.state.cart.map((book, index) => {
       return <CardBook book={book} index={index} handleRemove={handleRemove}  context={context}/>;
      })}
    </CardContainer>
  );
};

export default Card;
