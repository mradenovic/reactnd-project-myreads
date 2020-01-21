import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import { getAll, update } from './BooksAPI';

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    this.getBookshelf = this.getBookshelf.bind(this);
    this.setBookshelf = this.setBookshelf.bind(this);
  }

  state = {
    books: [],
    shelves: [
      {name: 'currentlyReading', title: 'Currently Reading'},
      {name: 'wantToRead', title: 'Want to Read'},
      {name: 'read', title: 'Read'},
    ]
  }

  componentDidMount() {
    getAll().then(data => this.setState(prevState => ({books: data})))
  }

  getBookshelf(bookId) {
    const book = this.state.books.find(book => book.id === bookId)
    return book ? book.shelf : 'none'
  }

  setBookshelf(book, bookshelf) {
    this.setState(prevState => {
      const books = prevState.books.map( prevBook => (
        prevBook.id === book.id
          ? {...prevBook, shelf: bookshelf }
          : prevBook
      ))
      return { books: books }
    })
  }

  render() {
    const { books, shelves } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <ListBooks books={books} getBookshelf={this.getBookshelf} setBookshelf={this.setBookshelf} shelves={shelves} />
          </Route>

          <Route path="/search">
            <SearchBooks getBookshelf={this.getBookshelf} setBookshelf={this.setBookshelf} />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
