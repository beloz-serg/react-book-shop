import React from 'react';

import BookPageContainer from '../../../containers/book-page-container';

import './book-page.css';

const BookPage = ({ id }) => {
    return <BookPageContainer id={id} />;
}

export default BookPage;