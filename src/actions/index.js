
import BookConstants from '../constants';

const booksLoaded = (newBooks) => {
    return {
        type: BookConstants.FETCH_BOOKS_SUCCESS,
        payload: newBooks
    }
};

export {
    booksLoaded
};