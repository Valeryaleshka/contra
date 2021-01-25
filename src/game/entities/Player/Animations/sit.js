import png from './sit.png';

const asset = `url(${png})`;

const simpleBullet = {
  slides: [
    {x: 2, y: 0, w: 35, h: 35, duration: 5},
    {x: -36, y: 0, w: 35, h: 35, duration: 5},
    {x: -74, y: 0, w: 35, h: 35, duration: 5},
    {x: -112, y: 0, w: 35, h: 35, duration: 5},
    ],
    isCycle: true,
    asset
};

export default simpleBullet