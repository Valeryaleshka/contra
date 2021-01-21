import Static from './Static';
import Matter from 'matter-js';

export default class Water extends Static {
  constructor(props) {
    super(props);
    this.body = Matter.Bodies.
                rectangle(props.left + props.width / 2, props.top + props.width / 2, 
                          props.width, props.height, 
                          { isSensor: true, density: 0.5 });
    this.type = "static";
    this.zIndex = 1;
  }
}