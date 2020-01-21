import React, { Component } from "react"
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

  render() {
    const { books, shelves, getBookshelf, setBookshelf } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <Bookshelf
                books={books}
                shelf={shelf}
                key={shelf.name}
                getBookshelf={getBookshelf}
                setBookshelf={setBookshelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

ListBooks.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  books: PropTypes.array.isRequired,
  getBookshelf: PropTypes.func.isRequired,
  setBookshelf: PropTypes.func.isRequired
}

export default ListBooks