import { CartActionConstants } from "../constants";

const initialState = {
    items: [],
    itemsTotal: 0,
    itemsCount: 0,
    error: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionConstants.ADD_ITEM:
            return get(state, action.payload.id, action.payload, 1);

        case CartActionConstants.INCREASE_ITEM_COUNT:
            return get(state, action.payload, null, 1);

        case CartActionConstants.DECREASE_ITEM_COUNT:
            return get(state, action.payload, null, -1)

        case CartActionConstants.REMOVE_ITEM:
            return get (state, action.payload, null, 0);

        case CartActionConstants.CART_ERROR:
            return {
                items: [],
                itemsTotal: 0,
                itemsCount: 0,
                error: action.payload
            };

        default:
            return state;
    }
};

const get = (state, id, item, factor /* 1 => increase, -1 => decrease, 0 => delete */) =>
{
    const { items, itemsTotal, itemsCount } = state;
    const idx = items.findIndex(x => x.id === id);

    if (idx < 0 && !item) {
        return state;
    }

    // first adding
    if (idx < 0) {
        return {
            items: [
                ...items, item
            ],
            itemsTotal: itemsTotal + item.price,
            itemsCount: itemsCount + 1,
            error: null
        };
    }

    const old = items[idx];
    
    // increase, decrease
    if (factor !== 0) {
        const updated = {
            id: old.id,
            title: old.title,
            count: old.count + 1 * factor,
            price: old.price,
            total: old.total + old.price * factor
        };
        
        return {
            items: updated.count === 0 ?
             [ ...items.splice(0, idx), ...items.splice(idx + 1) ] :
             [ ...items.splice(0, idx), updated, ...items.splice(idx + 1) ],
            itemsTotal: itemsTotal + updated.price * factor,
            itemsCount: itemsCount + 1 * factor,
            error: null
        };
    }

    // delete
    return {
        items: [ ...items.splice(0, idx), ...items.splice(idx + 1) ],
        itemsTotal: itemsTotal - old.total,
        itemsCount: itemsCount - old.count,
        error: null
    };
};

export default cartReducer;