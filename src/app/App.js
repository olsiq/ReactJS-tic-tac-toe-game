import React from 'react';
import { Provider } from 'react-redux';
import { Game } from '../components';
import { store } from 'redux/index';

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}
export { App };
