import Matter from 'matter-js';
import getFromEntities from '../lib/getFromEnitites';

const Enemies = (entities, screen) => {

  const enemies = getFromEntities(entities, "enemy");
  const player = entities.player;

  enemies.forEach(enemy => {
    enemy.AI && enemy.AI(player)
  });

  return entities
}

export default Enemies