import React from 'react';
import BookForm from './MainBookForm';
import {useNavigate, useParams} from 'react-router-dom';
import BooksContext from '../context/BooksContext';
import {useContext} from 'react';

// Here we are creating an EditBook component, which will take the books array and the handleOnEdit function as props, and then we are using the useParams hook, which will be used to get the id of the book from the URL, and then we are using the find method to find the book with the id that we got from the URL, and then we are passing the book object as a prop to the BookForm component, and then we are passing the handleOnSubmit function as a prop to the BookForm component, and then we are returning the JSX code, which will display the edit book form, and also the edit book button.
const EditBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);
  
  
  const navigate=useNavigate();

  // Here we are creating a handleOnSubmit function, which will take the book object as an argument, and then we are using the filter method to filter out the book with the id that we got from the URL, and then we are using the setBooks function to add the book to the books array, and then redirect the user to the home page.
  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
     navigate('/');
  };
  


  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};





// Here we are exporting the EditBook component, so that we can use it in the App component as a child component.
export default EditBook;