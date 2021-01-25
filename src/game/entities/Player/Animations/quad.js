import png from './quad.png';

const asset = `url(${png})`;

const fall = {
  slides: [
    {x: 4, y: -2, w: 45, h: 45, duration: 10},
    {x: -40, y: -2, w: 45, h: 45, duration: 10},
    {x: -85, y: -2, w: 45, h: 45, duration: 10},
  ],
    isCycle: true,
    asset
};

export default fall