import React,{useContext , useState} from 'react';
import { BookContext } from '../contexts/bookcontext';

const BookForm = () => {
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const {addbook} = useContext(BookContext)
    const SubmitHandler = (e)=>{
      e.preventDefault();
      addbook(title,author);
      settitle(' ');
      setauthor(' ');
    }
    return ( 
        <form onSubmit={SubmitHandler}>
            <input 
            placeholder="Books name"
            type="text"
             onChange={(e)=>settitle(e.target.value)}
             
            />
            <input type="text" placeholder="Authors name" onChange={(e)=>setauthor(e.target.value)} />
            <input type="submit" value="Add" />
        </form>
     );
}
 
export default BookForm;