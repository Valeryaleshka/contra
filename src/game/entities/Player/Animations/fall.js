import png from './jump.png';

const asset = `url(${png})`;

const fall = {
    slides: [
      {x: -206, y: 0, w: 42, h: 67, duration: 70},
      {x: -244, y: 0, w: 42, h: 67, duration: 70},   
    ],
    isCycle: true,
    asset
};

export default fall