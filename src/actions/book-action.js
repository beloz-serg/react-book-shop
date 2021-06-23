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

const fetchBook = (id, dispatch, dataService) => {
    dispatch(bookRequested());

    dataService.getBook(id)
               .then((book) => dispatch(bookLoaded(book)))
               .catch((error) => dispatch(bookError(error)));
}

export {
    fetchBook
};