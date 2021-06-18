import { combineReducers } from "redux";

import booksReducer from "./books-reducer";
import bookReducer from "./book-reducer";

const reducer = combineReducers({
    booksReducer,
    bookReducer
});

export default reducer;
