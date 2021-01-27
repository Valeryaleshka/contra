import level1 from './1lvl/level1';
import Matter from 'matter-js';
import Player from '../entities/Player/Player';
import Bird from '../entities/Enemies/Bird/Bird';
import Controls from '../entities/Controls';
import PlayerBullet from '../entities/guns/Bullet/PlayerBullet';
import GolemBullet from '../entities/guns/Bullet/StoneBullet';
import Golem from '../entities/Enemies/Golem/Golem';
import defineUnit from '../lib/defineUnit';
import Effects from '../entities/Effects/Effect.creator';
import MatterJS from '../matter/';

const levels = [
  level1,
]

export default class GameFactory {
  constructor(game) {
    this.game = game;
    this.level = 0;
    this.world = null;
    this.engine = null;
    this.enitites = null;
    this.counts = {
      static: 0,
      background: 0,
      enemy: 0,
      bullet: 0,
    }
  }

  setupWorld = () => {
    this.engine = Matter.Engine.create({ enableSleeping: false });
    this.game.gameEngine = this.engine;
    this.world = this.engine.world;
    this.game.world = this.world;
    this.entities = {
      physics: {
        engine: this.engine,
        world: this.world,
      },
      controls: new Controls(),
      scene: {
        width: 2400,
        height: 800,
        left: 0
      }
    };
    const level = levels[this.level];
    const levelProps = level.setup(this);

    this.entities.levelWidth = levelProps.levelWidth;
    this.entities.levelHeight = levelProps.levelHeight;
    this.entities.sceneLeft = 0;
    this.entities.sceneTop = 0;

    const matterJS = new MatterJS(this);
    matterJS.setupWorld();

    return this.entities;
  }

  addToBodies = body => {
    Matter.World.addBody(this.world, body)
  };

  addCount = type => {
    this.counts[type] += 1;
  }

  reduceCount = type => {
    this.counts[type] -= 1;
  }

  addToEntities = entity => {
    const type = entity.type;
    const key = type === "player" ? type : type + this.counts[type];
    entity.key = key;
    this.addCount(type);
    this.entities[key] = entity;
  };

  removeFromBoides = body => {
    Matter.World.remove(this.world, body)
  };

  removeFromEntities = entity => {
    const type = entity.type;
    this.reduceCount(type);
    delete this.entities[entity.key]
  };

  addPlayer = (left, top) => {
    const player = new Player({ left: left, top: top, key: "player", factory: this });
    this.addToBodies(player.body);
    this.addToEntities(player);
  };

  /* Враги */
  addBird = (x, y) => {
    const bird = new Bird({ left: x, top: y, factory: this });
    this.addToBodies(bird.body);
    this.addToEntities(bird);
  };

  addGolem = (x, y) => {
    const golem = new Golem({ left: x, top: y, factory: this });
    this.addToBodies(golem.body);
    this.addToEntities(golem);
  };

  removeUnit = unit => {
    if (unit.body) {
      this.removeFromBoides(unit.body);
    };
    defineUnit(unit);
    this.removeFromEntities(unit);
  }

  /* Эффекты */
  addEffect = (getEffect, props) => {
    const key = Symbol();
    const effect = getEffect({ ...props, key });
    this.addToEntities(effect);
  };

  addBang = ({ centerX, centerY }) => {
    const props = { centerX, centerY, factory: this };
    this.addEffect(Effects.bang, props);
  };

  addBulletHit = ({ centerX, centerY }) => {
    const props = { centerX, centerY, factory: this }
    this.addEffect(Effects.bulletHit, props);
  };

  removeEffect = (effect) => {
    this.removeUnit(effect)
  };

  /* Снаряды */
  createPlayerBullet = (x, y, angle, speed, damage) => {
    const bullet = new PlayerBullet({ x, y, speed, angle, factory: this, damage });
    this.addToBodies(bullet.body);
    this.addToEntities(bullet);
  };

  createGolemBullet = (x, y, angle, speed, damage) => {
    const bullet = new GolemBullet({ x, y: y + 40, speed, angle, factory: this, damage });
    this.addToBodies(bullet.body);
    this.addToEntities(bullet);
  };

  deleteBullet = bullet => {
    this.removeUnit(bullet);
  }
};