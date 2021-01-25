import png from './idle.png';

const asset = `url(${png})`;

const idle = {
    slides: [
      {x: -44, y: 0, w: 45, h: 45, duration: 7},
      {x: -86, y: 0, w: 45, h: 45,  duration: 7},
      {x: -128, y: 0, w: 45, h: 45,  duration: 7},
      {x: -170, y: 0, w: 45, h: 45,  duration: 7},
    ],
    isCycle: true,
    asset
};

export default idle