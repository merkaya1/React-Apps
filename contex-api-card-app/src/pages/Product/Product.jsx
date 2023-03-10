import React, { useState } from "react";
import { useContext } from "react";
import { BooksContext } from "../../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchInput from "../../components/SearchInput/SearchInput";
import ProductBook from "../../components/ProductBook/ProductBook";
import { ProductContainer } from "./Product.styled";


const Product = (props) => {
  const [search, setSearch] = useState("");

  const context = useContext(BooksContext);
  console.log(context);

  const notify = (basketBook) => {
    return context.state.bookList.filter((book) => {
      if (book.id === basketBook.id && basketBook.name.includes("Yüzük")) {
        return toast(`Kral Adamsın Brooo Bravo !!!!`, {
          autoClose: 4000,
          theme: "dark",
        });
      } else if (book.id === basketBook.id) {
        return toast.success(`${book.name}  Sepete Eklendi`, {
          
          autoClose: 3000,
          
        });
      }
    });
  };

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearch(searchFieldString);
    console.log(searchFieldString);
  };
  const handleClick = (book) => {
    context.addToCart(book);
    notify(book);
  };

  const filteredBook = context.state.bookList.filter((item) =>
    item.name.toLowerCase().includes(search)
  );
  console.log("fil", filteredBook);

  return (
    <ProductContainer>
      <SearchInput onSearchChange={onSearchChange} />
      {filteredBook.map((book) => (
        <ProductBook book={book} key={book.id} handleClick={handleClick} />
      ))}
    </ProductContainer>
  );
};

export default Product;
