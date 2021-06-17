import React, { Component } from 'react';

import { withDataService } from '../../hoc';
import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';
import { TitleConstants } from '../../../constants';

import './book-page';

class BookPage extends Component {
    state = {
        book: null,
        error: null
    };

    componentDidMount() {
        const { dataService } = this.props;

        dataService.getBook(355)
                   .then((book) => {
                       this.setState({ book: book });
                   })
                   .catch((error) => {
                       this.setState({ error: error});
                   });
    }

    render() {
        const { book, error } = this.state;

        if (error !== null) {
            return <ErrorIndicator error={error} />;
        }

        if (book === null) {
            return <Spinner />;
        }

        console.log(book);

        return <div className='book-container'>
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
               </div>;
    }
}

export default withDataService(BookPage);