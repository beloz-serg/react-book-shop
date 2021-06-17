import React from 'react';

import './spinner.css';
import spin from './book-spinner.gif';

const Spinner = () => {
    return (
        <div className='spinner'>
            <img src={spin} alt='spinner' />
            <div>Loading...</div>
        </div>
    );
}

export default Spinner;