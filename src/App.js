import React from 'react';
// import style1 from './App.module.css';
import style from 'scss/homepage/style.module.scss'

import './App.css';

import { Provider } from 'react-redux'
import configureStore from 'store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import Route from 'router/Routes'
// import Loading from 'components/Loading'

const { persistor, store } = configureStore();
console.log(style);
// console.log(style1);
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
