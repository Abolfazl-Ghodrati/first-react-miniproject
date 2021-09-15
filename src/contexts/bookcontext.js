import React , { useState , createContext }from 'react';
import {v4 as uuid} from 'uuid'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setbook] = useState(
        [
            {name:'quran' , author : 'god' , id : 1 },
            {name : 'Cheshmahayash' , author:'some friend' ,id :2}
        ]
    );
    const addbook = (name , author)=>{
      setbook([...books, {name , author ,id : uuid() }])
    }
   const removebook = (id)=>{
       setbook(books.filter( book => book.id !== id))
   }
    return ( 
        <BookContext.Provider value = {{books , addbook , removebook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;


