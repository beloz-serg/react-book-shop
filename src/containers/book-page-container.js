import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBook } from '../actions';
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
        const { book, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error !== null) {
            return <ErrorIndicator error={error} />;
        }

        return <BookView book={book} />;
    }
}

const mapStateToProps = (state) => {
    const { book, loading, error } = state.bookReducer;

    return { book, loading, error };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBook: (id) => fetchBook(id, dispatch, ownProps.dataService)
    };
};

export default withDataService(connect(mapStateToProps, mapDispatchToProps)(BookPageContainer));