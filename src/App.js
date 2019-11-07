import React from 'react';
import BooksList from './components/bookslist'
import BooksForm from './components/booksform'
import './App.css';
import CategoryFilter from './components/categoryfilter';

function App() {
  return (
    <div>
      <BooksList />
      <BooksForm />
      <CategoryFilter />
    </div>
  );
}

export default App;
