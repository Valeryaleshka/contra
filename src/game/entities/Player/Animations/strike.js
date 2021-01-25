import png from './strike.png';

const asset = `url(${png})`;

const strike = {
  slides: [
    {x: 2, y: -24, w: 45, h: 45, duration: 5},
    {x: -41, y: -24, w: 45, h: 45, duration: 5},
    {x: -85, y: -24, w: 45, h: 45, duration: 5},
    {x: -131, y: -24, w: 54, h: 45, duration: 5},
    {x: -186, y: -24, w: 54, h: 45, duration: 5},
    {x: -240, y: 0, w: 65, h: 68, duration: 5},
    {x: -314, y: -14, w: 80, h: 55, duration: 5},
    {x: -398, y: -14, w: 80, h: 55, duration: 5},
    ],
    isCycle: false,
    asset
};

export default strike