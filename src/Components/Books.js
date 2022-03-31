import React from "react";
import PropTypes from 'prop-types';
import DropListShelves from './DropListShelves';

const Book = (props) => {  
   Book.propTypes = {
         books: PropTypes.array.isRequired,
         onChange: PropTypes.func.isRequired
    }

    const { books, showingBooks, onChange } = props
    return (

        <ol className="books-grid">
            {
                showingBooks.length > 0
                    ? (
                        showingBooks.map(b => (
                            <li key={b.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128, height: 193,
                                            backgroundImage:
                                                `url(${b.imageLinks ? b.imageLinks.thumbnail : "/book-default-icon.png"
                                                })`
                                        }}></div>

                                        <DropListShelves book={b} books={books} shelveId={b.shelf ? b.shelf : 'none'} onChange={onChange} />
                                    </div>
                                    <div className="book-title">{b.title}</div>
                                    <div className="book-authors">{b.authors ? b.authors : 'N/A Authors'}</div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <div className='no-search-results'>
                            No Books Found
                        </div>
                    )

            }
        </ol>

    )
 }

export default Book
