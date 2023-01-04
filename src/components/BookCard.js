import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {useNavigate,Link } from 'react-router-dom';

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
  

  const navigate = useNavigate();
  
  return (
    <Card style={{width:'18rem'}} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>


          {/* //Also we can use the following code to redirect the user to the edit book page, and we can pass the id of the book as a parameter to the edit book page, so that we can use the id to find the book in the database, Other than the Link component, we can also use the useHistory hook to redirect the user to the edit book page, and we can pass the id of the book as a parameter to the edit book page, so that we can use the id to find the book in the database, The useHistory hook will be used as follows:  */}



           <Button variant="primary" onClick={()=> navigate('/edit/${id}')}>Edit</Button> 


     {/* // Here we are passing the id of the book as a parameter to the handleRemoveBook function, which will be used to delete the book from the database. */}
        
        <Button variant="danger" onClick={()=> handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};





export default Book;

