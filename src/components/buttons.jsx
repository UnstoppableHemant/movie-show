import React from 'react'

const Buttons = (props) => {
  return (
    <button id={props.dataId} className={props.btnStyle} onClick={props.handleClick}>{props.btnName}</button>
  )
}

export default Buttons