import React from 'react';
// import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames'

export default (props) => {
  const {
    open
  } = props

  return (

    <div className={classNames({
      'hide': open ? false : true,
      'loading': true,
    })}>
      <CircularProgress color="primary" />
    </div>
  )
}
