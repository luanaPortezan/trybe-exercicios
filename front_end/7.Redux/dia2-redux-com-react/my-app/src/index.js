import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // é da biblioteca react-redux
import App from './App';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }> {/*3. Colocamos o Provider  na nossa aplicação para a gente ter acesso a Store*/}
    <App />
  </Provider>,
);