import React from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import { getAll, update } from './BooksAPI'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    this.getBookshelf = this.getBookshelf.bind(this)
    this.setBookshelf = this.setBookshelf.bind(this)
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

  setLocalBookshelf(book) {
    this.setState(prevState => {
      let books = [ ...prevState.books ]
      const index = books.findIndex(({ id }) => id === book.id )

      index === -1
        ? books.push(book)
        : (books[index] = book)

      return { books: books }
    })
  }
  
  setBookshelf(book, bookshelf) {
    const nextBook = { ...book, shelf: bookshelf }

    update(book, bookshelf).then(data => {
      this.setLocalBookshelf(nextBook)
    })

  }

  render() {
    const { books, shelves } = this.state
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <ListBooks books={books} getBookshelf={this.getBookshelf} setBookshelf={this.setBookshelf} shelves={shelves} />
          </Route>

          <Route path="/search">
            <SearchBooks getBookshelf={this.getBookshelf} setBookshelf={this.setBookshelf} />
          </Route>

          <Redirect from="*" to="/"/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
