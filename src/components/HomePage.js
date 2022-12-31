import React from 'react';
import { NavLink } from 'react-router-dom';


// Here we are creating a Header component, which will return the JSX code, which will display the header of the app, and also the links to the home page and the add book page.
const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" >
          Books List
        </NavLink>
        <NavLink to="/add" className="link" activeclassname="active">
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;