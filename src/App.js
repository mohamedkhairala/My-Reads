import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Listshelves from './Components/ListShelves';
import SearchBox from './Components/SearchBox';
import { Route } from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    books: []
  }
  //get all book from books API
  async componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  // on change select shelve 
  // check if shelf none return book array without selected book if not then add it to selected shelve
  // update db using API
  moveToShelve = (book, shelf) => {
    BooksAPI.update(book, shelf)
    book.shelf = shelf;
    this.setState((currentState) => ({
      books: currentState.books.filter(b => b.id !== book.id).concat([book])
    }))

  }

  render() {
    return (
      <div className="app">
        <Route path='/search'
          render={() => (
            <SearchBox
              books={this.state.books}
              onChange={this.moveToShelve}
            />
          )}
        />
        <Route exact path='/'
          render={() => (
            <Listshelves
              books={this.state.books}
              onChange={this.moveToShelve}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
