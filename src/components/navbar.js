import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookcontext';

const Navbar = () => {
    const {books} = useContext (BookContext) ;
    return (  
        <div className="navbar">
            <h1>My Library</h1>
            <p> count of books you havnt read : { books.length} </p>
        </div>
    );
}
 
export default Navbar;
