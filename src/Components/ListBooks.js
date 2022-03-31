import React, { Component } from "react";
import PropTypes from 'prop-types';
import Books from './Books';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { books, shelveId, onChange } = this.props
    const showingBooks = books.filter(b => b.shelf === shelveId);
    return (
      <div className="bookshelf-books">
        <Books books={books} showingBooks={showingBooks} onChange={onChange} />
      </div>
    )
  }
}

export default ListBooks