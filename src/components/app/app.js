import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShopHeader from '../shop-header';
import { HomePage, CartPage, BookPage } from '../pages';

import './app.css';

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={5} total={100} />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/cart' component={CartPage} />
                <Route path='/book' component={BookPage} />
            </Switch>
        </main>
    );
}

export default App;

