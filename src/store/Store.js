import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import reduxReset from 'redux-reset'

import reducers from './Reducer'
import logger from 'redux-logger'
// import { DESTROY_SESSION } from './reducers/auth/auth.constant'

// let composeEnhancers = compose
const enhancers = [];
// const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

// const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(thunk))
// )

// redux persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['news','auth']
}


const persistedReducer = persistCombineReducers(persistConfig, reducers)
// compose enchancer here and middleware
const composedEnhancers = compose(
  applyMiddleware(...[thunk, logger]),
  // reduxReset(),
  ...enhancers
);

export default () => {
  let store = createStore(persistedReducer, {}, composedEnhancers)
  let persistor = persistStore(store)
  return { store, persistor }
}


// export default store
