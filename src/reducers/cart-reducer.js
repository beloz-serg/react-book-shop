import { CartActionConstants } from "../constants";

const initialState = {
    items: [],
    itemsTotal: 0,
    error: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionConstants.ADD_ITEM:
            return {
                items: [...state.items, action.payload],
                itemsTotal: 100,
                error: null
            };

        case CartActionConstants.INCREASE_ITEM_COUNT:
            return {
                ...state
            };

        case CartActionConstants.DECREASE_ITEM_COUNT:
            return {
                ...state
            };

        case CartActionConstants.REMOVE_ITEM:
            return {
                ...state
            };

        case CartActionConstants.CART_ERROR:
            return {
                items: [],
                itemsTotal: 0,
                error: action.payload
            };

        default:
            return state;
    }
};

export default cartReducer;