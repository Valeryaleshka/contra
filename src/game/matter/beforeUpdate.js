import Matter from 'matter-js';

let once = true;

export default function beforeUpdate () {
  const entities = this.factory.entities;
  const engine = entities.physics.engine;
  Matter.Events.on(engine, 'beforeUpdate', function(event) {
    if (once) {
      once = false;
    } 

    // Object.values(entities).forEach(entity => {
    //   entity.body && Matter.Body.setPosition(entity.body, {x: Math.floor(entity.body.position.x), y: Math.floor(entity.body.position.y)})
    // });
  });
}