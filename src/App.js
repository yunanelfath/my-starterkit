import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import configureStore from 'store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import Route from 'router/Routes'

const { persistor, store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
}

export default App;
