import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ShopHeader from '../shop-header';
import { HomePage, CartPage, BookPage } from '../pages';

import './app.css';

const App = (props) => {
    const { itemsCount, itemsTotal } = props;

    return (
        <main role='main' className='container'>
            <ShopHeader numItems={itemsCount} total={itemsTotal} />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/cart' component={CartPage} />
                <Route path='/book/:id' render={({ match }) => <BookPage id={match.params.id} />} />
            </Switch>
        </main>
    );
}

const mapStateToProps = (state) => {
    const { itemsCount, itemsTotal } = state.cartReducer;

    return { itemsCount, itemsTotal };
};

export default connect(mapStateToProps)(App);

