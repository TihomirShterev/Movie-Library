import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './navigation';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
