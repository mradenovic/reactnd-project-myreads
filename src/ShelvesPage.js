import React, { Component } from "react";
import Bookshelf from './Bookshelf';

class ShelvesPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {[0, 1, 2].map(shelf => (
              <Bookshelf key={shelf} />
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

export default ShelvesPage;