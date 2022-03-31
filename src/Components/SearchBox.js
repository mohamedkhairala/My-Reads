import React, { Component } from "react";
import Books from './Books';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

class SearchBox extends Component {
    state = {
        query: '',
        booksResult: []
    }

    // get search books from books api
    getSearchBooks = (query) => {
        query.length > 0
            ? (BooksAPI.search(query).then(books => {
                this.setState({ booksResult: books });
            })) :
            (this.setState({ booksResult: [] }))

    };

    updateSearchQuery = event => {
        const eventVal = event.target.value;
        this.setState({
            query: eventVal
        },
            () => {
                this.getSearchBooks(eventVal);
            });
    };


    render() {
        const { query } = this.state
        const { books, onChange } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search" onClick={() => (this.setState({ booksResult: [] }))}>Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                            value={query}
                            onChange={this.updateSearchQuery} />
                    </div>
                </div>
                <div className="search-books-results">
                    <Books books={books} showingBooks={this.state.booksResult} onChange={onChange} />
                </div>
            </div>
        )
    }
}

export default SearchBox



