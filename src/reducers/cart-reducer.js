import { CartActionConstants } from "../constants";

const initialState = {
    items: [
        {
            id: 1,
            title: 'Book 1',
            count: 2,
            total: 200
        },
        {
            id: 2,
            title: 'Book 2',
            count: 1,
            total: 400
        }
    ],
    itemsTotal: 600
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
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

        default:
            return state;
    }
};

export default cartReducer;