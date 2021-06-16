import React, { Component } from 'react';
import { connect } from 'react-redux';
import { booksLoaded } from '../../actions';
import { withDataService } from '../hoc';
import BookListItem from '../book-list-item';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { dataService } = this.props;
        const books = dataService.getData();

        this.props.booksLoaded(books);
    }

    render() {
        const {books} = this.props;

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

const mapStateToProps = ({books}) => {
    return { books };
};

const mapDispatchToProps = {
    booksLoaded
};

export default withDataService(connect(mapStateToProps, mapDispatchToProps)(BookList));