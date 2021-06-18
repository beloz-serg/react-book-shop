
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

export {
    booksRequested,
    booksLoaded,
    booksError
};