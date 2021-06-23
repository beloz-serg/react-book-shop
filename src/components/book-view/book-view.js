import React from 'react';

import { TitleConstants } from '../../constants';

import './book-view.css';

const BookView = ({ book }) => {
    return (
        <div className='book-container'>
            <div className='book-cover'>
                <img src={book.img} alt='cover' />
            </div>
            <div className='book-details'>
                <div className='book-title'>
                    {book.title}
                </div>
                <div className='book-author'>
                    {book.author}
                </div>
                <div className='book-price'>
                    ${book.price}
                </div>
                <div className='book-command'>
                    <button className='btn btn-info'>
                        {TitleConstants.ADD_TO_CART}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookView;