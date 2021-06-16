import React from 'react';

import './book-list-item.css';

const BookListItem = ({book}) => {
    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={book.img} alt='cover' />   
            </div>
            <div className='book-details'>
                <div className='book-title'>{book.title}</div>
                <div className='book-author'>{book.author}</div>
                <div className='book-price'>${book.price}</div>
                <button className='btn btn-info add-to-cart'>Add to cart</button>
            </div>
        </div>
    );
}

export default BookListItem;