import React, { Component } from 'react';
import { connect } from 'react-redux';
import { booksRequested, booksLoaded, booksError } from '../../actions';
import { withDataService } from '../hoc';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { 
            dataService, 
            booksRequested, 
            booksLoaded,
            booksError
         } = this.props;
        
        booksRequested();

        dataService.getBooks()
                   .then((books) => booksLoaded(books))
                   .catch((error) => booksError(error));
    }

    render() {
        const { books, loading, error} = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator error={error} />;
        }

        return (
            <ul className='book-list'>
                {
                    books.map(book => {
                        return <li key={book.id}>
                                    <BookListItem book={book} />
                                </li>
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    const { books, loading, error } = state.booksReducer;

    return { books, loading, error };
};

const mapDispatchToProps = {
    booksRequested,
    booksLoaded,
    booksError
};

export default withDataService(connect(mapStateToProps, mapDispatchToProps)(BookList));