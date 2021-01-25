import png from './stand_up.png';

const asset = `url(${png})`;

const simpleBullet = {
  slides: [
    {x: 1, y: -9, w: 82, h: 35, duration: 5},
    {x: -86, y: -9, w: 78, h: 35, duration: 5},
    {x: -166, y: -9, w: 74, h: 35, duration: 5},
    {x: -241, y: -9, w: 46, h: 35, duration: 5},
    {x: -292, y: -2, w: 47, h: 43, duration: 5},
    ],
    isCycle: true,
    asset
};

export default simpleBullet