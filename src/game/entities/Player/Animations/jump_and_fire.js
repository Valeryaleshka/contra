import png from './jump_and_fire.png';

const asset = `url(${png})`;

const jumpAndFire = [
  {
    slides: [
      {x: 2, y: -15, w: 52, h: 55, duration: 5},
      {x: -48, y: -15, w: 52, h: 55, duration: 5},
      {x: -97, y: -15, w: 52, h: 55, duration: 5},
      {x: -144, y: -15, w: 50, h: 55, duration: 5},
      {x: -191, y: -15, w: 50, h: 55, duration: 5},
    ],
    isCycle: false,
    asset
  },
  {
    slides: [
      {x: -238, y: -2, w: 50, h: 67, duration: 5},
      {x: -286, y: -2, w: 50, h: 67, duration: 5},  
      ],
    isCycle: true,
    asset
  },
];

export default jumpAndFire