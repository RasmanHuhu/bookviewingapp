import React, { useState } from "react";
import { findBook } from "../bookFacade.js";

function FindPage() {
  const [bookId, setBookId] = useState("");
  const [foundBook, setFoundBook] = useState(null);

  const handleFindBook = () => {
    const book = findBook(bookId);
    setFoundBook(book);
  };

  return (
    <div>
      <h2>Find a Book</h2>
      <label>
        Enter Book ID:
        <input
          type="text"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleFindBook}>
        Find Book
      </button>

      {foundBook && (
        <div>
          <h3>Book Details</h3>
          <p>ID: {foundBook.id}</p>
          <p>Title: {foundBook.title}</p>
          <p>Info: {foundBook.info}</p>
        </div>
      )}
    </div>
  );
}

export default FindPage;
