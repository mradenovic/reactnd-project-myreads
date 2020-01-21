import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Switch, Route } from 'react-router-dom'
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
    ]
  }

  componentDidMount() {
    getAll().then(data => this.setState(prevState => ({books: data})))
  }

  render() {
    const { books, shelves } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <ListBooks books={books} shelves={shelves} />
          </Route>

          <Route path="/search">
            <SearchBooks />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
