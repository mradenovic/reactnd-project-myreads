import React, { Component } from "react";
import Bookshelf from './Bookshelf';

class ListBooks extends Component {

  render() {
    const { books, shelves } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <Bookshelf books={books} shelf={shelf} key={shelf.name} />
            ))}
          </div>
        </div>
        <div className="open-search">
          {/* TODO: implement search link */}
          <button /* onClick={() => this.setState({ showSearchPage: true })} */>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default ListBooks;