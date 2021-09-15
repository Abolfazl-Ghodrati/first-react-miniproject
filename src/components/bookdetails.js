import React , {useContext} from 'react';
import { BookContext } from '../contexts/bookcontext';

const BookDetails = ({books }) => {
    const{removebook} = useContext(BookContext);
    return (
        <li key = {books.id} onClick={()=>removebook(books.id)}>
            <div className="name">
                {books.name}
            </div>
            <div className="author">
                {books.author}
            </div>
        </li>
      );
}
 
export default BookDetails;