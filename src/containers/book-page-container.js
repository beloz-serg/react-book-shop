import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBook, addItem } from '../actions';
import { withDataService } from '../components/hoc';
import BookView from '../components/book-view';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';

class BookPageContainer extends Component {

    componentDidMount() {
        const { id, fetchBook } = this.props;

        fetchBook(id);
    }

    render() {
        const { book, loading, error, addToCart } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error !== null) {
            return <ErrorIndicator error={error} />;
        }

        return <BookView book={book} addToCart={addToCart} />;
    }
}

const mapStateToProps = (state) => {
    const { book, loading, error: bookError } = state.bookReducer;
    const { error: cartError } = state.cartReducer;

    return {
        book, 
        loading,
        error: bookError ? bookError : cartError
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBook: (id) => fetchBook(id, dispatch, ownProps.dataService),
        addToCart: (id) => addItem(id, dispatch, ownProps.dataService)
    };
};

export default withDataService(connect(mapStateToProps, mapDispatchToProps)(BookPageContainer));