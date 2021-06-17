import React, { Component } from 'react';
import { connect } from 'react-redux';
import { booksLoaded } from '../../actions';
import { withDataService } from '../hoc';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { dataService } = this.props;
        
        dataService.getBooks()
                   .then((books) => {
                       this.props.booksLoaded(books);
                    });
    }

    render() {
        const { books, loading } = this.props;

        if (loading){
            return <Spinner />;
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

const mapStateToProps = ({ books, loading }) => {
    return { books, loading };
};

const mapDispatchToProps = {
    booksLoaded
};

export default withDataService(connect(mapStateToProps, mapDispatchToProps)(BookList));