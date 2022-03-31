import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks'

const shelves = [
  { id: 'currentlyReading', name: 'Currently Reading' },
  { id: 'wantToRead', name: 'Want to Read' },
  { id: 'read', name: 'Read' }
];
class ListShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { books, onChange } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              shelves.map(s => (
                <div className="bookshelf" key={s.id}>
                  <h2 className="bookshelf-title">{s.name}</h2>
                  <ListBooks books={books} shelveId={s.id} onChange={onChange} />
                </div>
              ))
            }
          </div>
        </div>
        <div className="open-search">
          <Link to="search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}



export default ListShelves