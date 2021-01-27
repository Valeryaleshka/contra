import Matter from 'matter-js';
import setAnimations from './Unit.animation';
import UnitRenderer from './Unit.renderer';

export default class Unit {
  constructor({ 
    left, top,
    width, height,
    factory, world,
    defaultAnimation,
    animations,
    angle, 
    health,
    speed,
    matterProps,
    asset, scale,
    bgx, bgy,
  
     } ) {

    setAnimations(this);
    this.width = width;
    this.height = height;
    this.body = Matter.Bodies.rectangle(left + width / 2, top + height / 2, width, height, matterProps)
    this.isJumping = false;
    this.backgroundX = -40;
    this.backgroundY = 0;
    this.angle = angle;
    this.health = health;
    this.maxHealth = health;
    this.speed = speed;
    this.world = world;
    this.factory = factory;
    this.defaultAnimation = defaultAnimation;
    this.factory = factory;
    this.animations = animations;
    this.renderer = UnitRenderer;
    this.scale = scale;
    this.asset = asset;
    this.distance = 0;
    this.bgx = bgx;
    this.bgy = bgy;
    this.animationState = {
      animations: this.defaultAnimation,
      animationIdx: 0,
      frameIdx: 0,
      durationIdx: 0,
      isCycle: true
    };

    };

    idleRight = () => {
      this.angle = 0;
      this.changeAnimation(this.animations.idle);
    };
  
    idleLeft = () => {
      this.angle = -180;
      this.changeAnimation(this.animations.idle);
    };

 
    moveRight = () => {
      this.angle = 0;
      this.body && Matter.Body.translate(this.body, { x: this.speed, y: 0 })
      this.distance += this.speed;
      !this.isJumping && this.changeAnimation(this.animations.move);
    };
  
    moveRightAndLookUp = () => {
      this.moveRight();
      this.angle = 315;
    };
  
    moveRightAndLookDown = () => {
      this.moveRight();
      this.angle = 45;
    };
  
    moveLeft = () => {
      this.angle = -180;
      this.body && Matter.Body.translate(this.body, { x: -this.speed, y: 0 });
      !this.isJumping && this.changeAnimation(this.animations.move);
    };
  
    moveLeftAndLookUp = () => {
      this.moveLeft();
      this.angle = -135;
    };
  
    moveLeftAndLookDown = () => {
      this.moveLeft();
      this.angle = -225;
    };
  
    rightlookUp = () => {
      this.angle = 270;
      this.changeAnimation(this.animations.lookUp || this.animations.idle);
    };
  
    leftlookUp = () => {
      this.angle = -90;
      this.changeAnimation(this.animations.lookUp || this.animations.idle);
    };
  
    rightlookDown = () => {
      this.angle = 90;
      this.changeAnimation(this.animations.lookDown || this.animations.idle);
    };
  
    leftlookDown = () => {
      this.angle = -270;
      this.changeAnimation(this.animations.lookDown || this.animations.idle);
    };
  
    jump = () => {
      !this.isJumping && this.changeAnimation(this.animations.jump);
      if (!this.isJumping) {
        Matter.Body.applyForce(this.body, this.body.position, { x: 0, y: -5 })
        this.isJumping = true;
      };
    };
  
    fire = () => {
      if (!this.weapon) return;
      if (!this.weapon.isReloaded) {
        this.weapon.shoot();
        if (!this.isJumping) {
          this.changeAnimation(this.animations.idleFire);     
        } else {
          this.changeAnimation(this.animations.jumpAndFire);
        }

      };
    };

 
    hit = (dmg) => {
      this.animations.damage && this.changeAnimation(this.animations.damage);
      this.health -= dmg;
      if (this.health <= 0) {
        this.die()
      } else {
        this.hitReaction && this.hitReaction()
      }
    };

    removeFromWorld = () => Matter.World.remove(this.world, this.body);

    removeFromEntities = () => delete this.factory.game.entities[this.key];

    die = () => this.runDieAnimation()

    swim = () => {
      this.isSwiming = true;
      console.log('player swim!!')
    }
};