import React from 'react';
import BookForm from './components/bookform';
import Booklist from './components/booklist';
import Navbar from './components/navbar';
import BookContextProvider from './contexts/bookcontext';


function App() {
  return (
    <div className="App">
       <BookContextProvider>
         <Navbar />
         <Booklist />
         <BookForm />
       </BookContextProvider>
    </div>
  );
}

export default App;
