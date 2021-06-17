import React from 'react';
import { Link } from 'react-router-dom';

import { TitleConstants } from '../../constants';

import './book-list-item.css';

const BookListItem = ({book}) => {
    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <Link to='/book'>
                    <img src={book.img} alt='cover' /> 
                </Link>  
            </div>
            <div className='book-details'>
                <div className='book-title'>
                    <Link to='/book'>
                        {book.title}
                    </Link>
                </div>
                <div className='book-author'>{book.author}</div>
                <div className='book-price'>${book.price}</div>
                <button className='btn btn-info add-to-cart'>
                    {TitleConstants.ADD_TO_CART}
                </button>
            </div>
        </div>
    );
}

export default BookListItem;