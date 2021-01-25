import png from './alt_fire.png';

const asset = `url(${png})`;

const altFireBullet = [
  {
    slides: [
      {x: 10, y: -1, w: 40, h: 30, duration: 10},
      {x: -28, y: -1, w: 50, h: 30, duration: 10},
      ],
      isCycle: false,
      asset
    },
    {
    slides: [
      {x: -74, y: -1, w: 50, h: 30, duration: 10},
      {x: -124, y: -1, w: 50, h: 30, duration: 10},
      {x: -177, y: -1, w: 50, h: 30, duration: 10},
      ],
      isCycle: true,
      asset
    },
]

export default altFireBullet