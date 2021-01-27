import Unit from '../Unit';
import Matter from 'matter-js';
import Gun from '../guns/Weapon';
import animations from './Animations'

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
      asset: animations.idle.asset, scale: null,
      bgx: animations.idle[0].slides[0].x,
      bgy: animations.idle[0].slides[0].y,
    });
    this.left = 200;
    this.type = "player";
    this.unit = "player";
    this.weapon = new Gun(this);
    this.zIndex = 10;
    this.repeat = "no-repeat";
    this.isVisible = true;
  }

  makeAction = controls => {
    const { actions, settings } = controls;
    const { moveLeft, moveRight, lookUp, lookDown, jump, fire } = settings;

    if (actions.includes(moveRight)) {

      if (actions.includes(lookUp)) {
        this.moveRightAndLookUp()
      } else if (actions.includes(lookDown)) {
        this.moveRightAndLookDown()
      } else {
        this.moveRight()
      };

    };

    if (actions.includes(moveLeft)) {

      if (actions.includes(lookUp)) {
        this.moveLeftAndLookUp()
      } else if (actions.includes(lookDown)) {
        this.moveLeftAndLookDown()
      } else {
        this.moveLeft()
      };
    };

    if (actions.includes(fire)) {
      this.fire();
    };

    if (this.isJumping) {

      if (actions.includes(lookDown)) {
        this.forceMoveDown()
      };


    } else {

      if (actions.length === 0) {
        this.angle >= 0 ? this.idleRight() : this.idleLeft()
      }

      if (actions.includes(jump)) {
        if (actions.includes(lookDown)) {
          this.forceMoveDown()
        } else {
          this.jump();
        };
      }

    }

    this.animate();
  };

  moveLeft = () => {
    const leftLimit = -this.factory.entities.sceneLeft
    this.angle = -180;
    if (this.body.position.x - this.width / 2 >= leftLimit + this.speed) {
      this.body && Matter.Body.translate(this.body, { x: -this.speed, y: 0 });
    };
    !this.isJumping && this.changeAnimation(this.animations.move);
  };

  forceMoveDown = () => {
    this.forceJump = true;
    this.angle = this.angle >= 0 ? 90 : -270;
    this.changeAnimation(this.animations.forceJump);
    Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: 0.2})
  };
};