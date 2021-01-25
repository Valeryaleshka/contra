import png from './jump_and_strike.png';

const asset = `url(${png})`;

const jumpAndStrike = [
  {
    slides: [
      {x: 2, y: -26, w: 40, h: 50, duration: 5},
      {x: -39, y: -26, w: 36, h: 50, duration: 5},
      {x: -77, y: -26, w: 36, h: 50, duration: 5},
      {x: -114, y: -23, w: 50, h: 50, duration: 5},
      {x: -164, y: -26, w: 50, h: 50, duration: 5},
      {x: -215, y: 2, w: 63, h: 76, duration: 5},
      {x: -283, y: 2, w: 74, h: 76, duration: 5},
      {x: -361, y: 2, w: 74, h: 76, duration: 5},
      {x: -283, y: 2, w: 74, h: 76, duration: 5},
      {x: -215, y: 2, w: 63, h: 76, duration: 5},
      {x: -164, y: -26, w: 50, h: 50, duration: 5},
      {x: -114, y: -23, w: 50, h: 50, duration: 5},
      {x: -77, y: -26, w: 36, h: 50, duration: 5},
      {x: -39, y: -26, w: 36, h: 50, duration: 5},
      {x: 2, y: -26, w: 40, h: 50, duration: 5},
    ],
    isCycle: false,
    asset
  },
];

export default jumpAndStrike