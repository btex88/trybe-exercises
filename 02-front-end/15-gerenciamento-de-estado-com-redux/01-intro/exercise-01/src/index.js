import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';

const INIT = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const changeColor = (state = INIT, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return ({
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: state.index >= state.colors.length - 1 ? 0 : state.index + 1,
      });
      case 'PREVIOUS_COLOR':
      return ({
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: state.index <= 0 ? state.colors.length - 1 : state.index - 1
      });
    default:
      return state;
  }
}

const store = createStore(changeColor);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
