import Renderer from './Effect.renderer';
import './Effect.css';

export default class Effect {
  constructor({centerX, centerY, width, height, animation, bgx, bgy, asset, factory, idx }) {
    this.width = width;
    this.height = height;
    this.left = centerX - width / 2;
    this.top = centerY - height / 2;
    this.bgx = bgx;
    this.bgy = bgy;
    this.animation = animation ? {
      slides: animation.slides,
      isCycle: animation.isCycle,
      frameIdx: 0,
      durationIdx: 0,
    } : null;
    this.asset = asset;
    this.factory = factory;
    this.idx = idx;
    this.scale = 1;
    this.zIndex = 20;
    this.renderer = Renderer;
    this.type = "effect";
  };

  remove = () => {
    delete this.animation
    this.factory.removeEffect(this)
  };

  animate = () => {
    if (!this.animation) {
      return
    };
    const { slides, isCycle, frameIdx, durationIdx } = this.animation;
    const frame = slides[frameIdx];
    const { w, h, x, y, duration, scale } = frame;
    this.bgx = x;
    this.bgy = y;
    this.width = w;
    this.height = h;
    this.scale = scale;
    if ( durationIdx < duration) {
      this.animation.durationIdx += 1;
    } else {
      this.animation.durationIdx = 0;
      if (slides[frameIdx + 1]) {
        this.animation.frameIdx += 1;
        this.animation.durationIdx = 0;
      } else {
        if (isCycle) {
          this.animation.frameIdx = 0;
          this.animation.durationIdx = 0;
        } else {
          this.remove();
        };
      };
    };
  };
};