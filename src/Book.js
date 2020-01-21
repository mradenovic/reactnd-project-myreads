import React from "react";
import BookShelfChanger from './BookShelfChanger';

function Book(props) {
  const book = props.book;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : ''
          }}
        ></div>
        <BookShelfChanger />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors ? book.authors.toString() : 'N/A'}</div>
    </div>
  );
}

export default Book;
