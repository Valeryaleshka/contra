import png from './force_run.png';

const asset = `url(${png})`;

const fall = {
    slides: [
      {x: 14, y: -1, w: 60, h: 45, duration: 6},
      {x: -42, y: 1, w: 50, h: 50, duration: 6},
      {x: -104, y: 1, w: 60, h: 50, duration: 6},
      {x: -163, y: 1, w: 60, h: 50, duration: 6},
      {x: -227, y: 1, w: 70, h: 50, duration: 6},
      {x: -298, y: 1, w: 70, h: 50, duration: 6},
      {x: -365, y: 1, w: 62, h: 50, duration: 6},
      {x: -298, y: 1, w: 70, h: 50, duration: 6},
      {x: -227, y: 1, w: 70, h: 50, duration: 6},
      {x: -163, y: 1, w: 60, h: 50, duration: 6},
      {x: -104, y: 1, w: 60, h: 50, duration: 6},
      {x: -42, y: 1, w: 50, h: 50, duration: 6},
      {x: 14, y: -1, w: 60, h: 45, duration: 6},
    ],
    isCycle: false,
    asset
};

export default fall