import png from './simple_bullet.png';

const asset = `url(${png})`;

const simpleBullet = {
  slides: [
    {x: 4, y: 0, w: 15, h: 15, duration: 5},
    {x: -14, y: 0, w: 15, h: 15, duration: 15},
    {x: -31, y: 0, w: 15, h: 15, duration: 10},
    ],
    isCycle: false,
    asset
};

export default simpleBullet