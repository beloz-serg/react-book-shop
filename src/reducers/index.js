import BookConstants from "../constants";

const initialState = {
    books: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BookConstants.FETCH_BOOKS_SUCCESS:
            return {
                books: action.payload
            };
        
        default:
            return state;
    }
};

export default reducer;