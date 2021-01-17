import React from 'react'
import GolemBg from '../../assets/sprite-sheets/enemy/little-golem.png';

export default function Enemy1(props) {

  const [width, height] = props.isJumping ? [45, 45] : props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const bgx = props.backgroundX;
  const bgy = props.backgroundY;
  const rotate = props.rotate;

  return (
    <div style={{
      position: "absolute",
      zIndex: 10,
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: `url(${GolemBg})`,
      backgroundPositionX: bgx,
      backgroundPositionY: bgy,
      backgroundRepeat: "no-repeat",
      transform: "scale(0.8) rotateY(180deg)",
      // 
      //transform: rotate ? "rotateY(180deg)" : null
    }} />
  )
}