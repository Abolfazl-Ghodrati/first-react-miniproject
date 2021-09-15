import React,{useContext}from 'react';
import { BookContext } from '../contexts/bookcontext';
import BookDetails from './bookdetails';


const Booklist = () => {
    const {books} = useContext(BookContext);
    return books.length ? ( 
       <div className="book-list">
                <ul>
                    {books.map(item=>{
                       return(<BookDetails key={item.id} books={item}/>);
                     })}
                </ul>
       </div>
          ):(
        <div className="empty">
            nothing to read,  hello free time
        </div>
     )
}
 
export default Booklist;