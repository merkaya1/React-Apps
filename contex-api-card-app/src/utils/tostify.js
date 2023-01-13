// import {  toast } from "react-toastify";

// import { useContext, useEffect } from "react";
// import { BooksContext } from "../../App";



// export const notify = (basketBook) => {
  
//   useEffect(() => {
//     const context = useContext(BooksContext);
//   },[]);
//     // custom hook olustur
    
//     return context.state.bookList.filter((book) => {
//       if (book.id === basketBook.id && basketBook.name.includes("Yüzük")) {
//         return toast(`Senin Adına Üzüldüm Kardeşim`, {
//           className: "toast",
//           position: "top-right",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//       } else if (book.id === basketBook.id) {
//         return toast.success(`${book.name}  Sepetten Çıkarıldı`, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//     });
//   };
