import Unit from '../Unit';
import {
  idle, move, jump, fall, jumpAnimation, idleFire, runAndFire, forceJump
} from './Player.animations';
import Matter from 'matter-js';
import Gun from '../guns/Weapon';
import png from './Player.png';

const asset = `url(${png})`;
const animations = {
  idle, move, jump, fall, jumpAnimation, idleFire, runAndFire, forceJump
};

export default class Player extends Unit {
  constructor({left, top, factory}) {
    super({
      left, top, width: 45, height: 45,
      factory, world: factory.world,
      defaultAnimation: animations.idle,
      animations,
      angle: 0,
      health: 100, speed: 5, idx: null,
      matterProps: { mass: 100, density: Infinity, },
      asset, scale: null,
      bgx: animations.idle[0].slides[0].x,
      bgy: animations.idle[0].slides[0].y
    });
    this.left = 200;
    this.type = "player";
    this.unit = "player";
    this.weapon = new Gun(this);
    this.zIndex = 10; 
  }

  forceMoveDown = () => {
    this.forceJump = true;
    this.angle = this.angle >= 0 ? 90 : -270;
    this.changeAnimation(forceJump);
    Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: 0.2})
  };
};