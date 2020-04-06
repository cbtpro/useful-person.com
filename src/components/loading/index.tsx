/**
 * @see https://codepen.io/MarioDesigns/pen/LLrVLK
 */
import React, { CSSProperties } from 'react'
import './style.css'

interface IProps {
  className?: string;
  style?: CSSProperties;
}
const Loading = (props: IProps) => {
  let { className, style } = props
  return (
    <div id="my-loading" className={className} style={style}>
      <div className="loader"></div>
      <div className="shadow"></div>
    </div>
  )
}

export default Loading