import React from 'react';

import './book-list-item.css';

const BookListItem = ({book}) => {
    return (
        <div>
            <div>{book.title}</div>
            <div>Author: {book.author}</div>
            <div><img src={book.img} alt={book.title} /></div>
            <div>Price: {book.price}</div>
        </div>
    );
}

export default BookListItem;