import React from 'react';

import { withDataService } from '../../hoc';

import BookList from '../../book-list/book-list';

import './home-page.css';

const HomePage = ({dataService}) => {
    const books = dataService.getData();

    return (
        <div>
            <h1>Home page</h1>
            <BookList books={books} />
        </div>
    );
};

export default withDataService(HomePage);