
import { ActionConstants } from '../constants';

const booksLoaded = (newBooks) => {
    return {
        type: ActionConstants.FETCH_BOOKS_SUCCESS,
        payload: newBooks
    }
};

export {
    booksLoaded
};