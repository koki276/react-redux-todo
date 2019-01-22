import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers/todos';
import App from './components/App';
//import { create } from 'handlebars';


let store = createStore(todo);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
