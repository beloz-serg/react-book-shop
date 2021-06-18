import { BookActionConstants } from '../constants';

const initialState = {
    book: {},
    loading: true,
    error: null
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BookActionConstants.FETCH_BOOK_REQUEST:
            return {
                book: {},
                loading: true,
                error: null
            };
            
        case BookActionConstants.FETCH_BOOK_SUCCESS:
            return {
                book: action.payload,
                loading: false,
                error: null
            };

        case BookActionConstants.FETCH_BOOK_FAILURE:
            return {
                book: {},
                loading: false,
                error: action.payload
            };
        
        default:
            return state;
    }
};

export default bookReducer;