import React from 'react';
import { Button, Card } from 'react-bootstrap';


// Here we are creating a Book component, which will take the book object as a prop, and then we are destructuring the book object, so that we can use the book object properties in the Book component, and then we are returning the JSX code, which will display the book details, and also the edit and delete buttons.
const Book = ({
  id,
  bookname,
  author,
  price,
  quantity,
  date,
  handleRemoveBook
}) => {
  
  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
// Here we are exporting the Book component, so that we can use it in the App component and the BookList component as a child component.
export default Book;