import React from "react"
import PropTypes from 'prop-types'

function BookShelfChanger(props) {
  const { getBookshelf, setBookshelf } = props
  
  return (
    <div className="book-shelf-changer">
      <select value={getBookshelf()} onChange={(e) => setBookshelf(e.target.value)}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

BookShelfChanger.propTypes = {
  getBookshelf: PropTypes.func.isRequired,
  setBookshelf: PropTypes.func.isRequired
}

export default BookShelfChanger
