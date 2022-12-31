import React from 'react';
import BookForm from './MainBookForm';
import {useParams} from 'react-router-dom';

// Here we are creating an EditBook component, which will take the books array and the handleOnEdit function as props, and then we are using the useParams hook, which will be used to get the id of the book from the URL, and then we are using the find method to find the book with the id that we got from the URL, and then we are passing the book object as a prop to the BookForm component, and then we are passing the handleOnSubmit function as a prop to the BookForm component, and then we are returning the JSX code, which will display the edit book form, and also the edit book button.
const EditBook = (props) => {
    const {id} = useParams();
    const book = props.books.find((book) => book.id === id);
    const handleOnSubmit = (book) => {
        props.handleOnEdit(book);
        props.history.push('/');
    };
    return (
        <div>
            <h2>Edit Book</h2>
            <BookForm book={book} handleOnSubmit={handleOnSubmit} />
        </div>
    );
}

// Here we are exporting the EditBook component, so that we can use it in the App component as a child component.
export default EditBook;