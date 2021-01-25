import png from './appear.png';

const asset = `url(${png})`;

const fall = {
    slides: [
      {x: 6, y: -4, w: 20, h: 45, duration: 5},
      {x: -13, y: -4, w: 26, h: 45, duration: 12},
      {x: -43, y: -4, w: 40, h: 45, duration: 7},
      {x: -86, y: -4, w: 40, h: 45, duration: 7},
      {x: -129, y: -4, w: 40, h: 45, duration: 7},
      {x: -172, y: -4, w: 40, h: 45, duration: 7},
      {x: -215, y: -4, w: 40, h: 45, duration: 7},
    ],
    isCycle: false,
    asset
};

export default fall