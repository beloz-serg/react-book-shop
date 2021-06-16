import React from 'react';

import BookList from '../../book-list/book-list';

import './home-page.css';

const HomePage = () => {
    return (
        <div>
            <h1>Home page</h1>
            <BookList />
        </div>
    );
};

export default HomePage;