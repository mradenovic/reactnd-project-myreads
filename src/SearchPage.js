import React, { Component } from 'react';
import { search } from './BooksAPI';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }  

  componentDidMount() {
    search('poetry').then(data => {
      console.log(data)
      this.setState((prevState) => ({ books: data }));
    })
  }

  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
        {/* TODO:  implement back functionality*/}
        <button className="close-search" /*onClick={() => this.setState({ showSearchPage: false })}*/>Close</button>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author"/>
  
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.books.map(book => (
            <li key={book.id}>{book.title} {book.shelf}</li>
          ))}
        </ol>
      </div>
      </div>
    )  
  } 
}

export default SearchPage;