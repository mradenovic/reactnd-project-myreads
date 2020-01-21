import React from "react"
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

function Book(props) {
  const { book , getBookshelf, setBookshelf } = props

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
        <BookShelfChanger getBookshelf={getBookshelf} setBookshelf={bookshelf => setBookshelf(book, bookshelf)}/>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors ? book.authors.toString() : 'N/A'}</div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  getBookshelf: PropTypes.func.isRequired,
  setBookshelf: PropTypes.func.isRequired
}

export default Book
