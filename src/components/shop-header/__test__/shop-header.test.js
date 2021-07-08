import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import ShopHeader from '../shop-header';

const shopHeader = <BrowserRouter><ShopHeader /></BrowserRouter>

test('test title of shop-header', () => {
    const { getByTestId } = render(shopHeader);
    const shopNameEl = getByTestId('shop-name');
    expect(shopNameEl.textContent).toBe('React Book Shop');
});

test('test cart initial count = 0', () => {
    const { getByTestId } = render(shopHeader);
    const cartCountEl = getByTestId('cart-count');
    expect(cartCountEl.textContent).toBe('0');
});

test('test cart initial total = 0', () => {
    const { getByTestId } = render(shopHeader);
    const cartTotalEl = getByTestId('cart-total');
    expect(cartTotalEl.textContent).toBe('0');
});