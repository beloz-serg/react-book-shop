import React from 'react';

import { ErrorConstants } from '../../constants';

import './error-indicator.css';

const ErrorIndicator = ({ error }) => {
    if (error === undefined) {
        error = ErrorConstants.SOMETHING_HAPPENED;
    }

    return (
        <div className='error-message'>
           {error}
        </div>
    );
}

export default ErrorIndicator;