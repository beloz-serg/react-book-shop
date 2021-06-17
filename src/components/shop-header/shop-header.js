import React from 'react';
import { Link } from 'react-router-dom';

import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header'>
            <div>
                <Link to='/' className='logo'>React Book Shop</Link>
            </div>
            <div className='shopping-cart-wrapper'>
                <Link to='/cart'>
                    <i className='shopping-cart fa fa-shopping-cart' />
                    {numItems} items (${total})
                </Link>
            </div>
        </header>
    );
}

export default ShopHeader;