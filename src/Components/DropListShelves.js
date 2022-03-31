import React, { Component } from "react";

class DropListShelves extends Component {

  render() {
    const { book, books, onChange } = this.props;

    //set current book shelve depend on the books on shelves
    let currentBookShelf = 'none';
    books.forEach((b) => {
      if (b.id === book.id) {
        currentBookShelf = b.shelf;
      }
    });

    return (
      <div className="book-shelf-changer">
        <select defaultValue={currentBookShelf}
          onChange={(e) => onChange(book, e.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="none" >None</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    )
  }
}

export default DropListShelves
