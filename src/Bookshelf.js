import React from "react";
import Book from './Book';

function Bookshelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {[0, 1, 2].map(book => (
            <li key={book}>
              <Book />  
            </li>  
          ))}  
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf