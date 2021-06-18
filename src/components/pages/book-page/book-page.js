import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bookRequested, bookLoaded, bookError } from '../../../actions';
import { withDataService } from '../../hoc';
import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';
import { TitleConstants } from '../../../constants';

import './book-page.css';

class BookPage extends Component {

    componentDidMount() {
        const {
            dataService,
            id,
            bookRequested,
            bookLoaded,
            bookError
        } = this.props;

        bookRequested();

        dataService.getBook(id)
                   .then((book) => bookLoaded(book))
                   .catch((error) => bookError(error));
    }

    render() {
        const { book, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error !== null) {
            return <ErrorIndicator error={error} />;
        }

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

const mapStateToProps = (state) => {
    const { book, loading, error } = state.bookReducer;

    return { book, loading, error };
}

const mapDispatchToProps = {
    bookRequested,
    bookLoaded,
    bookError
};

export default withDataService(connect(mapStateToProps, mapDispatchToProps)(BookPage));