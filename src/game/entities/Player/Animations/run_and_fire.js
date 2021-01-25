import png from './run_and_fire.png';

const asset = `url(${png})`;

const runAndFire = {
  slides: [
    {x: 1, y: -2, w: 53, h: 45, duration: 7},
    {x: -53, y: -2, w: 53, h: 45, duration: 7},
    {x: -105, y: -2, w: 53, h: 45, duration: 7},
    {x: -158, y: -2, w: 53, h: 45, duration: 7},
    {x: -209, y: -2, w: 53, h: 45, duration: 7},
    {x: -262, y: -2, w: 53, h: 45, duration: 7},
    {x: -317, y: -2, w: 53, h: 45, duration: 7},
    {x: -368, y: -2, w: 53, h: 45, duration: 7},
    {x: -418, y: -2, w: 50, h: 45, duration: 7},
    {x: -467, y: -2, w: 50, h: 45, duration: 7},   
    ],
    isCycle: true,
    asset
};

export default runAndFire