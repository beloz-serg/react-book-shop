import React from 'react';
import { connect } from 'react-redux';

import ShoppingCartTable from '../components/shopping-cart-table';
import ErrorIndicator from '../components/error-indicator';

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

const mapDispatchToProps = () => {
    return {
        onPlus: (id) => console.log(`plus ${id}`),
        onMinus: (id) => console.log(`minus ${id}`),
        onDelete: (id) => console.log(`delete ${id}`)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);