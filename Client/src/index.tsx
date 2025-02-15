import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import {App} from './App';

let rootElement = document.getElementById('root');


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
