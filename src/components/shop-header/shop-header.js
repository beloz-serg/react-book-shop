import React from 'react';
import { Link } from 'react-router-dom';
import * as math from 'mathjs';

import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header'>
            <div>
                <Link to='/' className='logo' data-testid='shop-name'>React Book Shop</Link>
            </div>
            <div className='shopping-cart-wrapper'>
                <Link to='/cart'>
                    <i className='shopping-cart fa fa-shopping-cart' />

                    <span data-testid='cart-count'>
                        {numItems > 0 ? numItems : 0}
                    </span> items 

                    ($<span data-testid='cart-total'>
                        {math.format(total > 0 ? total : 0, { precision: 4 })}
                    </span>)
                </Link>
            </div>
        </header>
    );
}

export default ShopHeader;