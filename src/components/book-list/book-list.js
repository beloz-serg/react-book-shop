import React from 'react';
import BookListItem from '../book-list-item';

import './book-list.css';

const BookList = ({ books, addToCart }) => {
        return (
            <ul className='book-list'>
                {
                    books.map(book => {
                        return <li key={book.id}>
                                    <BookListItem book={book} addToCart={addToCart} />
                                </li>
                    })
                }
            </ul>
        );
};

export default BookList;