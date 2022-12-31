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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route element={<BooksList books={books} setBooks={setBooks} />} path="/" />
           <Route element={<AddBook books={books} setBooks={setBooks} />} path="/add" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;