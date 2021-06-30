import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, addItem } from '../actions';
import { withDataService } from '../components/hoc';
import BookList from '../components/book-list';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, addToCart} = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator error={error} />;
        }

        return <BookList books={books} addToCart={addToCart} />;
    }
}

const mapStateToProps = (state) => {
    const { books, loading, error: booksError } = state.booksReducer;
    const { error: cartError } = state.cartReducer;

    return {
        books,
        loading,
        error: booksError ? booksError : cartError };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: () => fetchBooks(dispatch, ownProps.dataService),
        addToCart: (id) => addItem(id, dispatch, ownProps.dataService)
    }
};

export default withDataService(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));