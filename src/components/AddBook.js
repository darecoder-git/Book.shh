import React from 'react';
import BookForm from './MainBookForm';
import { useNavigate } from 'react-router-dom';
import BooksContext from '../context/BooksContext';
import { useContext } from 'react';




// In the AddBook component, we are passing the history, books, and setBooks props, which we are getting from the App component, and then we are destructuring the history, books, and setBooks props, so that we can use them in the AddBook component.
const AddBook = ({history}) => {
  // Here we are using the useContext hook, to get the books and setBooks function from the BooksContext, so that we can use them in the AddBook component.
  const {books,setBooks}=useContext(BooksContext);

  const navigate = useNavigate();
  // Here we are creating a handleOnSubmit function, which will take the book object as an argument, and add the book to the books array,by using the setBooks function, and then redirect the user to the home page.
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate('/');
  };
// Here we are passing the handleOnSubmit function as a prop to the BookForm component, so that we can use it in the BookForm component, and pass the book object to the setBooks function, which will add the book to the books array.

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

// Here we are exporting the AddBook component, so that we can use it in the App component as a child component.
export default AddBook;