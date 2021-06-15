import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import { DummyDataService } from './services';
import { DataServiceProvider } from './components/data-service-context';

import store from './store';

const dataService = new DummyDataService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <DataServiceProvider value={dataService}>
                <Router>
                    <App />
                </Router>
            </DataServiceProvider>
        </ErrorBoundary>
    </Provider>,
        document.getElementById('root'));
