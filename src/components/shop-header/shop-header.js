import React from 'react';

import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header'>
            <div className='logo'>React Book Shop</div>
            <div className='shopping-cart-wrapper'>
                <i className='shopping-cart fa fa-shopping-cart' />
                {numItems} items (${total})
            </div>
        </header>
    );
}

export default ShopHeader;