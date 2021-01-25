import png from './force_run_and_fire.png';

const asset = `url(${png})`;

const fall = {
    slides: [
      {x: 3, y: 1, w: 55, h: 45, duration: 6},
      {x: -58, y: 1, w: 55, h: 50, duration: 6},
      {x: -122, y: 1, w: 67, h: 50, duration: 6},
      {x: -194, y: 1, w: 67, h: 45, duration: 6},
      {x: -268, y: 1, w: 77, h: 45, duration: 6},
      {x: -350, y: 1, w: 77, h: 45, duration: 6}, 
      {x: -427, y: 1, w: 71, h: 45, duration: 6},
      {x: -350, y: 1, w: 77, h: 45, duration: 6},
      {x: -268, y: 1, w: 77, h: 45, duration: 6},
      {x: -194, y: 1, w: 67, h: 45, duration: 6},
      {x: -122, y: 1, w: 67, h: 50, duration: 6},
      {x: -58, y: 1, w: 55, h: 50, duration: 6},
      {x: 3, y: 1, w: 55, h: 45, duration: 6}, 
    ],
    isCycle: false,
    asset
};

export default fall