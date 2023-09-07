import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configure } from 'mobx';
import { store, StoreContext } from './app/stores/store';
import App from './app/App';
import { forget } from './utils';

// Don't allow MobX state mutation without a MobX action
configure({
    enforceActions: 'observed'
});

async function start() {
    render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('app')
    );
}

forget(start);
