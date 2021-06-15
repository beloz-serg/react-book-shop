import React from 'react';

import { withDataService } from '../hoc';

import './app.css';

const App = ({ dataService }) => {
    console.log(dataService.getData());

    return (
        <div>App</div>
    );
}

export default withDataService(App);

