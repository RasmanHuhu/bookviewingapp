import React, { useState } from "react";
import { addBook } from "../bookFacade.js";

function AddPage() {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");

  const handleAddBook = () => {
    console.log("Adding book:", title, info);
    const newBook = {
      title,
      info,
    };
    addBook(newBook); // Now you can use addBook directly
    // Reset form fields
    setTitle("");
    setInfo("");
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <form>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Info:
          <input
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddPage;
