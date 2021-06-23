import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions';
import { withDataService } from '../components/hoc';
import BookList from '../components/book-list';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error} = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator error={error} />;
        }

        return <BookList books={books} />;
    }
}

const mapStateToProps = (state) => {
    const { books, loading, error } = state.booksReducer;

    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: () => fetchBooks(dispatch, ownProps.dataService)
    }
};

export default withDataService(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));