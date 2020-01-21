import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { search } from './BooksAPI';
import Book from './Book'

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: ''
    }
  }  

  handleQueryChange(e) {
    const value = e.target.value
    this.setState(() => ({ query: value }))
    value && search(value).then(data => {
      !data || data.error
        ? this.setState(() => ({ books: [] }))
        : this.setState(() => ({ books: data }))
    })
  }

  render() {
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
              <Book book={book} />
            </li>
          ))}
        </ol>
      </div>
      </div>
    )  
  } 
}

export default SearchBooks;