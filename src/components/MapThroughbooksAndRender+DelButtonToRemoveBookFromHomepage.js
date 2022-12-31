import React from "react";
import _ from "lodash";
import Book from "./ShowAddedBookWithDetails";



const BooksList = ({ books, setBooks }) => {
  // handleRemoveBook function
  const handleRemoveBook = (id) => {
    // filter out the book with the id and update the books state
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    // render the list of books
    <React.Fragment>
      <div className="book-list">
        {/* map through the books and render a Book component if the book is not archived  */}
        {!_.isEmpty(books) ? (
          books.map((book) => (
            // We are using map function to iterate through the books array and we are passing the book object as props to the Book component
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
            // here we are passing the handleRemoveBook function as a prop to the Book component and we are also passing the book object as props to the Book component using the spread operator {...book} beacause we are using the same props in the Book component as well as in the BooksList component and we don't want to repeat the code also FYI spread operator is used to copy the properties of an object to another object and it is used to pass the props to the child component from the parent component the benefit of using spread operator is that we don't have to write the props name one by one
            // Now another way to pass the props to the child component is to pass the props one by one like this <Book key={book.id} id={book.id} title={book.title} author={book.author} handleRemoveBook={handleRemoveBook} />
            
          ))
        ) : (
          <h1>No books to display</h1>
        )}
      </div>
    </React.Fragment>
  );
};

// Finally we are exporting the BooksList component, so that we can use it in the App component as a child component
export default BooksList;
