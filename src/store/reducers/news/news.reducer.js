import * as constants from './news.constant'

let defaultState = {
  items: false,
  didMount: false,
}
const ACTION_HANDLERS = {
  [constants.LOGOUT]: (state, action) => {
    return { ...state, ...defaultState }
  },
  [constants.CHANGE_ATTRIBUTE]: (state, action) => {
    const { value, key } = action.payload;

    const updateState = {
      ...state,
      [key]: value
    }

    return Object.assign({}, state, updateState)
  },
  [constants.INIT]: (state, action) => {
    return { ...state, ...action.payload }
  }
}


export const reducer =
  (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
