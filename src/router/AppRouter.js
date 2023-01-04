// import React from 'react';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from '../components/Header';
// import AddBook from '../components/AddBook';
// import BooksList from '../components/BooksList';

// const AppRouter = () => {
//   const [books,setBooks]=useState('books',[]);
//     return (
//     <BrowserRouter>
//       <div>
//         <Header />
//         <div className="main-content">
//           <Routes>
//             <Route element={<BooksList/>} path="/" />
//             <Route element={<AddBook/>} path="/add" />

//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;





import React from 'react';
import {Navigate}  from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/HomePage';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';


const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);
  // const navigate=useNavigate();
  return (
   
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{books,setBooks}}>
          <Routes>
            <Route element={<BooksList/>} path="/" />
            <Route element= {<AddBook />} path="/add" />
            <Route element={<EditBook />} path="/edit/:id" exact={true}/>
            <Route element={<Navigate to="/"/>} />   
          </Routes>
          </BooksContext.Provider>
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;