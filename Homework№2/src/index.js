import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './redux/reducer';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(counterReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
