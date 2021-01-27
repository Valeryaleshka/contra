import React from 'react'

let twice = 0;

export default function Unit(props) {

  const { effect } = props;
  const left = props.body.position.x - props.width / 2;
  const top = props.body.position.y - props.height / 2;

  const chooseRotate = () => {
    const rotate = props.angle >= 0 ? "" : "rotateY(180deg)";
    const scale = props.scale ? ` scale(${props.scale})` : "";
    return rotate + scale
  };

  const getHealthWidth = () => `${100 * (props.maxHealth - props.health) / props.maxHealth}%`;

  return props.isVisible ? (
    <div style={{
      position: "absolute",
      zIndex: props.zIndex,
      top: top,
      left: left,
      width: props.width,
      height: props.height,
      backgroundImage: props.asset,
      backgroundPositionX: props.bgx,
      backgroundPositionY: props.bgy,
      backgroundRepeat: props.repeat || "repeat",
      transform: chooseRotate()
    }}>
      {!effect && <div style={{
        position: "absolute",
        height: 20,
        width: props.width + 20,
        backgroundColor: "green",
        border: "1px solid #fff",
        top: -30,
        left: -10
      }}>
        <div style={{
          position: "absolute",
          height: "100%",
          width: getHealthWidth(),
          backgroundColor: "yellow",
          left: 0,
          top: 0
        }}
        >
          <div style={{
            width: "100%",
            height: "100%",
            backgroundColor: "red",
            left: 0,
            top: 0,
            transition: "0.2s ease-out 0s",
            zIndex: 5
          }} />
        </div>

        </div>}
    </div>
  ) : null;
}