import png from './force_jump.png';

const asset = `url(${png})`;

const forceJump = [
  {
    slides: [
      {x: 3, y: -6, w: 45, h: 45, duration: 7},
      ],
      isCycle: false,
    },
    {
    slides: [
      {x: -39, y: 0, w: 45, h: 55, duration: 6},
      {x: -87, y: 0, w: 45, h: 55, duration: 6},
      ],
      isCycle: true,
    },
]

export default forceJump