import getFromEntities from '../lib/getFromEnitites';

const Scene = (entities, screen) => {

  const player = entities.player;

  if (!player) {
    return entities
  };

  const scene = document.querySelector('.game-scene');
  const container = document.getElementById("game-container");
  const sceneLeft = Math.abs(scene.offsetLeft);

  const sceneWidth = container.offsetWidth;
  const sceneHeight = container.offsetHeight;
  const factory = entities.factory;

  const playerLeft = player.body.position.x;
  const playerTop = player.body.position.y;
  const playerWidth = player.width;
  const bottomCameraSpacing = 450;


  const triggers = factory.triggers;

  /* В factory/1lvl/level1.js мы создаем триггеры, у триггера есть 
  condition (условие), если оно выполнено, то запускаем action (действие) 
    factory.tiggers = [
    { 
      condition: factory => factory.player.body.position.x >= 200, 
      action: factory => factory.addBird 
    },
    ...
  ]
  */
  triggers.forEach((trigger, idx) => {
    if (trigger.condition(factory)) {
      trigger.action(factory);
      trigger.done = true;
    }
  });

  Object.values(entities).forEach(entity => {
    if (entity.type === "background") {
      if (playerLeft >= ((sceneWidth - playerWidth) / 2)) {
    
        const left = ((sceneWidth - playerWidth) / 2) - playerLeft;
        entity.move(left)
        scene.style.left = `${left}px`;
      };
    };

    if (entity.body) {
      const { x , y } = entity.body.position;
      const { width, height } = entity;
      const left = x - width / 2;
      const top = y - height / 2;
      const playerX = player.body.position.x;
      const playerY = player.body.position.y;

      if (playerX > left && playerY < left + width && playerY > top && playerY < top + height) {
        entity.isVisible = true;
      } else {
        if (Math.abs(playerX - left) > (sceneWidth - 400) / 2) {
          entity.isVisible = false;
        } else {
          entity.isVisible = true;
        };
        if (Math.abs(playerY - top) > (sceneWidth - 400)  / 2) {
          entity.isVisible = false;
        } else {
          entity.isVisible = true;
        }
      }
    }
  })
 
  const top = -bottomCameraSpacing + sceneHeight - playerTop;
  scene.style.top = `${top}px`;

  getFromEntities(entities, "enemy").forEach(enemy => {
    if (enemy.body.position.x < sceneLeft || enemy.body.position.y > sceneHeight) {
      factory.removeUnit(enemy)
    }
  });

  return entities

}

export default Scene