import png from './idle.png';

const asset = `url(${png})`;

const idle = [{
    slides: [
      {x: 4, y: 0, w: 45, h: 45,  duration: 7},
      {x: -38, y: 0, w: 45, h: 45, duration: 7},
      {x: -80, y: 0, w: 45, h: 45,  duration: 7},
    ],
    isCycle: true,
    asset
}];

export default idle