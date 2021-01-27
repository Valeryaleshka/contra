import { RGB_PVRTC_2BPPV1_Format } from 'three';
import getFromEntities from '../lib/getFromEnitites';

const pifagor = (a, b) => Math.sqrt(a ** 2 + b ** 2);

const Scene = (entities, screen) => {

  const player = entities.player;

  if (!player) {
    return entities
  };

  const factory = entities.factory;

  const camera = document.getElementById("game-container");
  const cameraWidth = camera.offsetWidth;
  const cameraHeight = camera.offsetHeight;

  const scene = document.querySelector('.game-scene');
  const sceneLeft = Math.abs(scene.offsetLeft);
  const sceneTop = Math.abs(scene.offsetTop);
  const sceneHeight = scene.offsetHeight;

  const playerLeft = player.body.position.x;
  const playerTop = player.body.position.y;
  const playerWidth = player.width;
  const playerHeight = player.height;

  const topCameraSpace = (cameraHeight - playerHeight) / 2;
  const leftCameraSpace = (cameraWidth - playerWidth) / 2;

  const triggers = factory.triggers;

  triggers.forEach((trigger, idx) => {
    if (trigger.condition(factory)) {
      trigger.action(factory);
      trigger.done = true;
    }
  });

  const left = leftCameraSpace - playerLeft;
  const top = topCameraSpace - playerTop;

  scene.style.top = `${0}px`;
  entities.sceneTop = top;

  if (playerLeft >= leftCameraSpace) {
    if (playerLeft - sceneLeft >= leftCameraSpace) {
      scene.style.left = `${left}px`;
      entities.sceneLeft = left;
    }

    Object.values(entities).forEach(entity => {
      if (entity.type === "background") {
        entity.move(left);
      };
    });
  };

  scene.style.top = `${top}px`

  Object.values(entities).forEach(entity => {
    if (entity.body && entity.type !== "player") {

      const centerX = entity.body.position.x;
      const centerY = entity.body.position.y;
      const halfWidth = entity.width / 2;
      const halfHeight = entity.height / 2;
      const entityDig = pifagor(halfHeight, halfWidth);

      if (centerX + halfWidth < sceneLeft) {
        factory.removeUnit(entity)
      } else {
        const halfCameraWidth = cameraWidth / 2;
        const halfCameraHeight = cameraHeight / 2;
        const sceneCenterX = sceneLeft + halfCameraWidth;
        const sceneCenterY = sceneTop + halfCameraHeight;
        const sceneDig = pifagor(halfCameraWidth, halfCameraHeight);
  
        const deltaX = sceneCenterX - centerX;
        const deltaY = sceneCenterY - centerY;

        entity.isVisible = pifagor(deltaX, deltaY) < entityDig + sceneDig;
      }
      
    };  
  }) 




  getFromEntities(entities, "enemy").forEach(enemy => {
    if (enemy.body.position.x < sceneLeft || enemy.body.position.y > sceneHeight) {
      factory.removeUnit(enemy)
    }
  });

  return entities

}

export default Scene