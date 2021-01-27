import Matter from 'matter-js';
import getFromEntities from '../lib/getFromEnitites';

const Physics = (entities, screen) => {

  if (!entities.player) { return entities};
  const engine = entities.physics.engine;
  const { time } = screen;
  const player = entities.player;
  const controls = entities.controls;

  // if (actions.length === 0) {
  //   player.angle >= 0 ? player.idleRight() : player.idleLeft();
  //   player.animate();
  //   Matter.Engine.update(engine, time.delta)
  //   return entities;
  // };

  // if (actions.length === 1) {
  //   const action = actions[0];
  //   switch (action) {
  //     case settings.moveRight:
  //       player.moveRight();
  //       break;
  //     case settings.moveLeft:
  //       player.moveLeft();
  //       break;
  //     case settings.jump:
  //       player.jump();
  //       break;
  //     case settings.lookUp:
  //       player.angle >= 0 ? player.rightlookUp() : player.leftlookUp();
  //       break;
  //     case settings.lookDown:
  //       if (player.isJumping) {
  //         player.forceMoveDown();
  //       } else {
  //         player.angle >= 0 ? player.rightlookDown() : player.leftlookDown();
  //       }
  //       break;
  //     case settings.fire:
  //       player.fire();
  //       break;
  //   };
  //   player.animate()
  //   Matter.Engine.update(engine, time.delta)
  //   return entities;
  // };

  // if (actions.length > 1) {

  //   let _fire;
  //   let _jump;

  //   if (actions.includes(settings.fire)) {
  //     _fire = true;
  //     player.fire();
  //   }

  //   const fireClear = actions.filter(el => el !== settings.fire);

  //   if (fireClear.includes(settings.jump)) {
  //     _jump = true;
  //     /*
  //       if (fire) {
  //         player.jumpAndFire()
  //       }
  //     */
  //     player.jump();
  //   };

  //   const withoutJump = fireClear.filter(el => el !== settings.jump).slice(0, 2).reverse();

  //   if (withoutJump.includes(settings.moveRight) && withoutJump.includes(settings.lookUp)) {
  //     player.moveRightAndLookUp();
  //   } else if (withoutJump.includes(settings.moveRight) && withoutJump.includes(settings.lookDown)) {
  //     player.moveRightAndLookDown();
  //   } else if (withoutJump.includes(settings.moveLeft) && withoutJump.includes(settings.lookUp)) {
  //     player.moveLeftAndLookUp();
  //   } else if (withoutJump.includes(settings.moveLeft) && withoutJump.includes(settings.lookDown)) {
  //     player.moveLeftAndLookDown()
  //   } else if (withoutJump[0] === settings.moveLeft) {
  //     player.moveLeft();
  //   } else if (withoutJump[0] === settings.moveRight) {
  //     player.moveRight();
  //   } else if (withoutJump[0] === settings.moveUp) {
  //     player.angle >= 0 ? player.rightlookUp() : player.leftlookUp();
  //   } else if (withoutJump[0] === settings.moveDown) {
  //     player.angle >= 0 ? player.rightlookUp() : player.leftlookUp();
  //   };
  // };
  
  // if (player.isJumping) {
  //   player.forceJump ? player.forceMoveDown() : player.jump()
  // };

  // player.animate();

  player.makeAction(controls);

  Matter.Engine.update(engine, time.delta)
  return entities;

}

export default Physics