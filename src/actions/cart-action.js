import { CartActionConstants } from "../constants";

const addItem = (id, dispatch, dataService) => {
    dataService
        .getBook(id)
        .then((book) => {
            const item = {
                id: book.id,
                title: book.title,
                count: 1,
                total: book.price
            };

            dispatch(itemAdded(item));
        })
        .catch((error) => dispatch(itemError(error)));
};

const itemAdded = (item) => {
    return {
        type: CartActionConstants.ADD_ITEM,
        payload: item
    };
};

const itemIncreased = (id) => {
    return {
        type: CartActionConstants.INCREASE_ITEM_COUNT,
        payload: id
    };
};

const itemDecreased = (id) => {
    return {
        type: CartActionConstants.DECREASE_ITEM_COUNT,
        payload: id
    };
};

const itemDeleted = (id) => {
    return {
        type: CartActionConstants.REMOVE_ITEM,
        payload: id
    };
};

const itemError = (error) => {
    return {
        type: CartActionConstants.CART_ERROR,
        payload: error
    };
};

export {
    addItem,
    itemIncreased,
    itemDecreased,
    itemDeleted
};