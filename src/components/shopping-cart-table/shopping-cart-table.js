import React from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.css';

const ShoppingCartTable = ({items, itemsTotal, onPlus, onMinus, onDelete}) => {
    const Tr = (item, idx) => {
        const {id, title, count, total} = item;

        return (
            <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button onClick={() => onPlus(id)}
                        className='btn btn-outline-success btn-small'>
                        <i className='fa fa-plus-circle' />
                    </button>
                    <button onClick={() => onMinus(id)}
                        className='btn btn-outline-warning btn-small'>
                        <i className='fa fa-minus-circle' />
                    </button>
                    <button onClick={() => onDelete(id)}
                        className='btn btn-outline-danger btn-small'>
                        <i className='fa fa-trash-o' />
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(Tr)
                    }
                </tbody>
            </table>

            <div className='total'>
                Total: ${itemsTotal}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { items, itemsTotal } = state.cartReducer;

    return { items, itemsTotal };
};

const mapDispatchToProps = () => {
    return {
        onPlus: (id) => console.log(`plus ${id}`),
        onMinus: (id) => console.log(`minus ${id}`),
        onDelete: (id) => console.log(`delete ${id}`)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
