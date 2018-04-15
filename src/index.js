import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
