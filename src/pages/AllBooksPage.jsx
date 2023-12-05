import React, { useState } from "react";
import bookFacade from "../bookFacade.js";
import Book from "../components/Book.jsx";

function AllBooksPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const closeBookDetails = () => {
    setSelectedBook(null);
  };

  const books = bookFacade.getBooks();

  return (
    <div id="subpage">
      <h2>List of all known books</h2>
      {books.map((book) => (
        <div key={book.id} onClick={() => handleBookClick(book)}>
          <Book title={book.title} />
        </div>
      ))}
      {selectedBook && (
        <div id="containerSmall">
          <h3>Book Details</h3>
          <p>Title: {selectedBook.title}</p>
          <p>Info: {selectedBook.info}</p>
          <button onClick={closeBookDetails}>Close</button>
        </div>
      )}
    </div>
  );
}

export default AllBooksPage;
