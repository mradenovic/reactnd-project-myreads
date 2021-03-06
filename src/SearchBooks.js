import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'
import Book from './Book'
import debounce from 'debounce'

class SearchBooks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      query: ''
    }
  }  

  handleQueryChange(e) {
    const value = e.target.value
    this.setState(() => ({ query: value }))

    this.search(value)
  }

  search = debounce(value => {
    !value && this.setState(() => ({ books: [] }))
    
    value && search(value).then(data => {
      console.log('value', value)
      !data || data.error
        ? this.setState(() => ({ books: [] }))
        : this.setState(() => ({ books: data }))
    })
  }, 500)

  render() {
    const { getBookshelf, setBookshelf } = this.props
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input value={this.state.query} type="text" placeholder="Search by title or author" onChange={(e) => this.handleQueryChange(e)}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.books.map(book => (
            <li key={book.id}>
              <Book book={book} getBookshelf={() => getBookshelf(book.id)} setBookshelf={setBookshelf} />
            </li>
          ))}
        </ol>
      </div>
      </div>
    )  
  } 
}

SearchBooks.propTypes = {
  getBookshelf: PropTypes.func.isRequired,
  setBookshelf: PropTypes.func.isRequired
}

export default SearchBooks