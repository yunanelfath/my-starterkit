import {
  CHANGE_ATTRIBUTE as CHANGE_ATTRIBUTE_NEWS
} from 'store/reducers/news/news.constant'

export const actionToProps = {
  changeNewsAttribute: ({key, value, type=CHANGE_ATTRIBUTE_NEWS}) => dispatch => {
    return new Promise((resolve, reject)=>{
      dispatch({
        type: type,
        payload: {key: key, value: value}
      })
      resolve(value)
    })
  },
}
