import { ActionConstants } from "../constants";

const initialState = {
    books: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionConstants.FETCH_BOOKS_SUCCESS:
            return {
                books: action.payload,
                loading: false
            };
        
        default:
            return state;
    }
};

export default reducer;