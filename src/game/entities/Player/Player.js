import Unit from "../Unit";
import {
  idle,
  moveAnimation,
  jump,
  fall,
  jumpAnimattion,
  idleFire,
  runAndFireAnimation,
  forceJump,
} from "./Player.animations";
import Matter from "matter-js";
import Gun from "../guns/Weapon";
import Renderer from "./Player.renderer";

export default class Player extends Unit {
  constructor(factory) {
    super([45, 45], idle, factory, 0);
    this.body = Matter.Bodies.rectangle(200, 600, 45, 45, {
      mass: 100,
      density: 10 ** 10,
    });
    this.left = 200;
    this.unit = "player";
    this.weapon = new Gun(this);
    this.renderer = Renderer;
  }

  idleRight = () => {
    this.angle = 0;
    this.changeAnimation(idle);
  };

  idleLeft = () => {
    this.angle = -180;
    this.changeAnimation(idle);
  };

  moveRight = () => {
    this.angle = 0;
    Matter.Body.translate(this.body, { x: this.speed, y: 0 });
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveRightAndLookUp = () => {
    this.angle = 315;
    Matter.Body.translate(this.body, { x: this.speed, y: 0 });
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveRightAndLookDown = () => {
    this.angle = 45;
    Matter.Body.translate(this.body, { x: this.speed, y: 0 });
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveLeft = () => {
    this.angle = -180;
    Matter.Body.translate(this.body, { x: -this.speed, y: 0 });
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveLeftAndLookUp = () => {
    this.angle = -135;
    Matter.Body.translate(this.body, { x: -this.speed, y: 0 });
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveLeftAndLookDown = () => {
    this.angle = -225;
    Matter.Body.translate(this.body, { x: -this.speed, y: 0 });
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  rightlookUp = () => {
    this.angle = 270;
    this.changeAnimation(idle);
  };

  leftlookUp = () => {
    this.angle = -90;
    this.changeAnimation(idle);
  };

  rightlookDown = () => {
    this.angle = 90;
    this.changeAnimation(idle);
  };

  leftlookDown = () => {
    this.angle = -270;
    this.changeAnimation(idle);
  };

  forceMoveDown = () => {
    console.log("force_move_down");
    this.forceJump = true;
    this.angle = this.angle >= 0 ? 90 : -270;
    this.changeAnimation(forceJump);
    Matter.Body.applyForce(this.body, this.body.position, { x: 0, y: 0.2 });
  };

  jump = () => {
    !this.isJumping && this.changeAnimation(jumpAnimattion);
    if (!this.isJumping) {
      Matter.Body.applyForce(this.body, this.body.position, { x: 0, y: -5 });
      this.isJumping = true;
    }
  };

  fire = () => {
    if (!this.weapon.isReloaded) {
      this.weapon.shoot();
      this.changeAnimation(idleFire);
    }
  };

  die = () => {
    this.health = 0;
    this.factory.game.menu.dead();
    
  };

  hit = (dmg) => {
    this.health -= dmg;
    console.log("hit!!!");
  };
}
