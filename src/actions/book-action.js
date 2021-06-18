import { BookActionConstants } from "../constants";

const bookRequested = () => {
    return {
        type: BookActionConstants.FETCH_BOOK_REQUEST
    };
};

const bookLoaded = (book) => {
    return {
        type: BookActionConstants.FETCH_BOOK_SUCCESS,
        payload: book
    };
};

const bookError = (error) => {
    return {
        type: BookActionConstants.FETCH_BOOK_FAILURE,
        payload: error
    };
};

export {
    bookRequested,
    bookLoaded,
    bookError
};