import png from './jump.png';

const asset = `url(${png})`;

const jump = [
  {
    slides: [
      {x: -2, y: -15, w: 45, h: 53, duration: 7},
      {x: -41, y: -15, w: 45, h: 53, duration: 7},
      {x: -122, y: -15, w: 42, h: 53, duration: 7},
      {x: -163, y: -15, w: 42, h: 53, duration: 7},
    ],
    isCycle: false,
    asset
  },
  {
    slides: [
      {x: -206, y: 0, w: 42, h: 67, duration: 7},
      {x: -244, y: 0, w: 42, h: 67, duration: 7},   
      ],
    isCycle: true,
    asset
  },
];

export default jump