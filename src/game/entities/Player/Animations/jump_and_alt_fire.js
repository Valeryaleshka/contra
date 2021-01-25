import png from './jump_and_alt_fire.png';

const asset = `url(${png})`;

const jumpAndAltFire = [
  {
    slides: [
      {x: 2, y: -7, w: 52, h: 55, duration: 5},
      {x: -46, y: -7, w: 34, h: 55, duration: 5},
      {x: -79, y: -7, w: 46, h: 55, duration: 5},
      {x: -124, y: -7, w: 52, h: 55, duration: 5},
      {x: -177, y: -7, w: 48, h: 55, duration: 5},
      {x: -224, y: -7, w: 41, h: 55, duration: 5},
      {x: -262, y: -4, w: 51, h: 56, duration: 5},
      {x: -313, y: 2, w: 56, h: 61, duration: 5},
    ],
    isCycle: false,
    asset
  },
];

export default jumpAndAltFire