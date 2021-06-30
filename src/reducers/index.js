import { combineReducers } from "redux";

import booksReducer from "./books-reducer";
import bookReducer from "./book-reducer";
import cartReducer from "./cart-reducer";

const reducer = combineReducers({
    booksReducer,
    bookReducer,
    cartReducer
});

export default reducer;
