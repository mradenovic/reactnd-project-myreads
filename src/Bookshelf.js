import React from "react"
import Book from './Book'

function Bookshelf(props) {
  const { name, title } = props.shelf
  const { getBookshelf, setBookshelf } = props

  const books = props.books.filter(book => book.shelf === name)

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book
                book={book}
                getBookshelf={() => getBookshelf(book.id)}
                setBookshelf={setBookshelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf