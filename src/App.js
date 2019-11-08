import React from 'react';
import BooksList from './components/bookslist'
import BooksForm from './components/booksform'
import './App.css';

function App() {
  return (
    <div>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
