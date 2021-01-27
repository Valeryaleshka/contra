import png from './idle_fire.png';

const asset = `url(${png})`;

const idleFire = [{
    slides: [
      {x: 3, y: 0, w: 45, h: 45, duration: 5},
      {x: -45, y: 0, w: 45, h: 45, duration: 5},
      {x: -94, y: 0, w: 45, h: 45, duration: 5},
      {x: -45, y: 0, w: 45, h: 45, duration: 5},
      {x: 3, y: 0, w: 45, h: 45, duration: 5},
    ],
    isCycle: true,
    asset
}];

export default idleFire