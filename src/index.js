import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.scss';

ReactDOM.hydrate(
  <BrowserRouter suppressHydrationWarning={true}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
