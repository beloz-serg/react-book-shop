import React from 'react';
import { connect } from 'react-redux';

import ShoppingCartTable from '../components/shopping-cart-table';
import ErrorIndicator from '../components/error-indicator';
import { itemIncreased, itemDecreased, itemDeleted } from '../actions/cart-action';

const ShoppingCartContainer = (props) => {

    if (props.error) {
        return <ErrorIndicator />;
    }

    return <ShoppingCartTable {...props} />;
};

const mapStateToProps = (state) => {
    const { items, itemsTotal, error } = state.cartReducer;

    return { items, itemsTotal, error };
};

const mapDispatchToProps =  {
        onPlus: itemIncreased,
        onMinus: itemDecreased,
        onDelete: itemDeleted
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);