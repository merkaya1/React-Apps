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
          return toast(`Senin Adına Üzüldüm Kardeşim`,
         { autoClose: 3000,
           theme:"dark"} );
        } else if (book.id === basketBook.id) {
          return toast.success(`${book.name}  Sepetten Çıkarıldı`, {
           
            autoClose: 3000,
            
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
    console.log("121212",book);
    notify(book);
    context.removeFromCart(book.id);
    
    
  };



  return (
    <CardContainer>
     
      <TotalAmount total={total} />

      {context.state.cart.map((book) => {
       return <CardBook book={book} key={book.id} handleRemove={handleRemove}  context={context}/>;
      })}
    </CardContainer>
  );
};

export default Card;
