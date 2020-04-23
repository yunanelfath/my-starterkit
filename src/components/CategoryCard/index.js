import React from 'react';

export default (props) => {
  const {
    item
  } = props

  return (
    <div className="box">
      <div className="img">
        <img src={item.imageUrl} alt={item.name}/>
      </div>
      <div className="name">{item.name}</div>

    </div>
  )
}
