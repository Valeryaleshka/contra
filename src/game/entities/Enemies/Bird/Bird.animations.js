import png from './Bird.png';

const asset = `url(${png})`;

const idle = [{
  slides: [
    { x: -0, y: -0, w: 182, h: 170, duration: 6 },
    { x: -182, y: -0, w: 182, h: 170, duration: 6 },
    { x: -364, y: -0, w: 182, h: 170, duration: 6 },
    { x: -546, y: -0, w: 182, h: 170, duration: 6 },
    { x: -728, y: -0, w: 182, h: 170, duration: 6 },
    { x: -0, y: -170, w: 182, h: 170, duration: 6 },
    { x: -182, y: -170, w: 182, h: 170, duration: 6 },
    { x: -364, y: -170, w: 182, h: 170, duration: 6 },
    { x: -546, y: -170, w: 182, h: 170, duration: 6 },
    { x: -728, y: -170, w: 182, h: 170, duration: 6 },
    { x: -0, y: -340, w: 182, h: 170, duration: 6 },
    { x: -182, y: -340, w: 182, h: 170, duration: 6 },
    { x: -364, y: -340, w: 182, h: 170, duration: 6 },
    { x: -546, y: -340, w: 182, h: 170, duration: 6 },
  ],
  isCycle: true,
  asset
}]

const move = [{
  slides: [
    { x: -7, y: -52, w: 45, h: 45, duration: 6 },
    { x: -49, y: -52, w: 45, h: 45, duration: 6 },
    { x: -94, y: -52, w: 45, h: 45, duration: 6 },
    { x: -139, y: -52, w: 45, h: 45, duration: 6 },
    { x: -184, y: -52, w: 45, h: 45, duration: 6 },
    { x: -229, y: -52, w: 45, h: 45, duration: 6 },
    { x: -274, y: -52, w: 45, h: 45, duration: 6 },
    { x: -319, y: -52, w: 45, h: 45, duration: 6 },
    { x: -364, y: -52, w: 45, h: 45, duration: 6 },
    { x: -409, y: -52, w: 45, h: 45, duration: 6 },
    { x: -464, y: -52, w: 45, h: 45, duration: 6 },
  ],
  isCycle: true,
  asset
}];

const jump = {
  slides: [
    { x: -53, y: -117, w: 50, h: 50, duration: 4 },
    { x: -100, y: -117, w: 45, h: 51, duration: 5 },
    { x: -141, y: -117, w: 45, h: 51, duration: 6 },
    { x: -182, y: -117, w: 42, h: 51, duration: 5 },
    { x: -222, y: -115, w: 42, h: 57, duration: 5 },
    { x: -264, y: -110, w: 41, h: 78, duration: 5 },
    { x: -303, y: -100, w: 41, h: 78, duration: 4 },
  ],
  isCycle: false,
  asset
};

const fall = {
  slides: [
    { x: -264, y: -100, w: 41, h: 78, duration: 5 },
    { x: -303, y: -100, w: 41, h: 78, duration: 5 },
  ],
  isCycle: true,
  asset
};

const jumpAnimation = [
  jump, fall
]

const runAndFire = [
  { x: -1, y: -232, duration: 6 },
  { x: -54, y: -232, duration: 6 },
  { x: -107, y: -232, duration: 6 },
  { x: -159, y: -232, duration: 6 },
  { x: -212, y: -232, duration: 6 },
  { x: -265, y: -232, duration: 6 },
  { x: -319, y: -232, duration: 6 },
  { x: -370, y: -232, duration: 6 },
  { x: -418, y: -232, duration: 6 },
  { x: -467, y: -232, duration: 6 },
]

const idleFire = [{
  slides: [
    { x: -36, y: -410, w: 45, h: 45, duration: 4 },
    { x: -78, y: -410, w: 45, h: 45, duration: 4 },
    { x: -128, y: -410, w: 45, h: 45, duration: 4 },
    { x: -169, y: -410, w: 45, h: 45, duration: 4 },
    { x: -220, y: -410, w: 45, h: 45, duration: 4 },
    { x: -266, y: -410, w: 45, h: 45, duration: 4 },
    { x: -316, y: -410, w: 45, h: 45, duration: 4 },
    { x: -375, y: -410, w: 45, h: 45, duration: 4 },
    { x: -433, y: -410, w: 45, h: 45, duration: 4 },
  ],
  isCycle: false,
  asset
}];


const animations = {
  idle, move: idle, jump, fall, jumpAnimation, runAndFire, idleFire
};

export default animations;

