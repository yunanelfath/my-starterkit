import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import configureStore from 'store/Store';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
