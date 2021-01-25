import React from 'react';
import './Effect.css';

export default function Effect (props) {

  return <div 
    className="effect"
    style={{
      position: 'absolute',
      width: props.width,
      height: props.height,
      left: props.left,
      top: props.top,
      backgroundImage: props.asset,
      backgroundPositionX: props.bgx,
      backgroundPositionY: props.bgy,
      transform: props.scale ? `scale(${props.scale})` : null,
      zIndex: props.zIndex
  }}/>
}