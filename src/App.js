import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import { getAll } from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      {name: 'currentlyReading', title: 'Currently Reading'},
      {name: 'wantToRead', title: 'Want to Read'},
      {name: 'read', title: 'Read'},
    ],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false

  }

  componentDidMount() {
    getAll().then(data => this.setState(prevState => ({books: data})))
  }

  render() {
    const { books, shelves } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks />
        ) : (
          <ListBooks books={books} shelves={shelves} />
        )}
      </div>
    )
  }
}

export default BooksApp
