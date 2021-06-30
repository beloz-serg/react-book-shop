
import { BooksActionConstants } from '../constants';

const booksRequested = () => {
    return {
        type: BooksActionConstants.FETCH_BOOKS_REQUEST
    };
};

const booksLoaded = (books) => {
    return {
        type: BooksActionConstants.FETCH_BOOKS_SUCCESS,
        payload: books
    };
};

const booksError = (error) => {
    return {
        type: BooksActionConstants.FETCH_BOOKS_FAILURE,
        payload: error
    };
};

const fetchBooks = (dispatch, dataService) => {
    dispatch(booksRequested());

    dataService.getBooks()
               .then((books) => dispatch(booksLoaded(books)))
               .catch((error) => dispatch(booksError(error)));
}

export {
    fetchBooks
};