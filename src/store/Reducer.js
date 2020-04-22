// import { combineReducers } from 'redux'

import { reducer as AuthReducer } from 'store/reducers/auth/auth.reducer'
import { reducer as NewsReducer } from 'store/reducers/news/news.reducer'

const reducers = {
  auth: AuthReducer,
  news: NewsReducer,
}

export default reducers
