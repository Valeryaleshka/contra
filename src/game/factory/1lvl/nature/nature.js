import png from './nature.png';
import groundPng from './ground.png'
import waterPng from './water.png';
import waterUpPng from './waterUp.png';
import groundUpPng from './assets/groundUp.png';
import groundYleftPng from './assets/groundVerticalLeft.png';
import groundYrightPng from './assets/groundVerticalRight.png';
import groundUpCorner from './assets/groundUpCorner.png';

const asset = `url(${png})`
const defaultPerspective = 10;

const getAsset = asset => `url(${asset})`;

const mirror = "180deg";

/* Углы */

const statics = {

  groundUpper: {
    right : { width: 74, height: 74, bgx: -270, bgy: -18},
    middle : { width: 74, height: 74, bgx: -185, bgy: -18},
    left : { width: 74, height: 74, bgx: -96, bgy: -18},
  },

  groundRotateRight: {
    x: { width: 74, height: 74, bgx: -354, bgy: -189},
    xy : { width: 74, height: 74, bgx: -269, bgy: -189},
    y : { width: 74, height: 74, bgx: -269, bgy: -104},
  },

  groundRotateLeft: {
    x : { width: 74, height: 74, bgx: -14, bgy: -189},
    xy : { width: 74, height: 74, bgx: -98, bgy: -189}, 
    y : { width: 74, height: 74, bgx: -98, bgy: -104},
  },

  /* Выступы */   
  groundLedge: {
    right : { width: 74, height: 74, bgx: -354, bgy: -272},
    middle : { width: 74, height: 74, bgx: -185, bgy: -189},
    left : { width: 74, height: 74, bgx: -14, bgy: -272},
  },

  /* Карнизы */
  groundCornice: {
    right : { width: 74, height: 57, bgx: -269, bgy: -272},
    middle : { width: 74, height: 57, bgx: -185, bgy: -272},
    left : { width: 74, height: 57, bgx: -98, bgy: -272},
  },

  /* Внутри */
  groundInside : {
    left: { width: 74, height: 74, bgx: -98, bgy: -104}, 
    middle: { width: 74, height: 74, bgx: -185, bgy: -104},
    right: { width: 74, height: 74, bgx: -269, bgy: -104}
  },
  
  /* Вода */
  water: {
    inside: { width: 74, height: 74, bgx: -353, bgy: -104},
    up: { width: 74, height: 74, bgx: -353, bgy: -20}
  },
  
  box : { width: 44, height: 45, bgx: -455, bgy: -33},
};

const bgs = {
  plate : { width: 36, height: 38, bgx: -514, bgy: -39 },
  pointer : { width: 36, height: 38, bgx: -567, bgy: -39 },
  mashroomOrange : { width: 29, height: 23, bgx: -649, bgy: -53 },
  mashroomPink : { width: 29, height: 23, bgx: -616, bgy: -53 },
  stump : { width: 76, height: 25, bgx: -696, bgy: -68 },
  trees: {
    big: { width: 167, height: 182, bgx: -448, bgy: -91 },
    small: { width: 167, height: 165, bgx: -620, bgy: -107 }
  },
  bush: {
    big: {
      green: { width: 82, height: 38, bgx: -479, bgy: -301},
      yellow: { width: 82, height: 38, bgx: -566, bgy: -301}
    },
    small: {
      green: { width: 42, height: 38, bgx: -672, bgy: -307},
      yellow: { width: 42, height: 38, bgx: -726, bgy: -301}
    }
  }
};


const getItem = (left, top, props, perspective, middle) => {

  return ({
    ...props,
    left: left,
    top: top,
    asset,
    perspective: perspective || defaultPerspective
  })
}

export default {
  defaultSize: 74,
  statics: {

    ground: {
      upper: {
        left: (left, top) => ({left, top, width: 74, height: 74, asset: getAsset(groundUpCorner), rotateY: mirror,}),
        middle: (left, top, width) => ({
          left, top, width, height: 74, asset: getAsset(groundUpPng), bgy: 1
        }),
        right: (left, top) => ({left, top, width: 74, height: 74, asset: getAsset(groundUpCorner), }),        
      },
      inside: {
        left: (left, top) => getItem(left, top, statics.groundInside.left),
        middle: (left, top, w, h) => ({left, top, height: h, width: w, asset: `url(${groundPng})`}),
        right: (left, top) => getItem(left, top, statics.groundInside.right),
      },
      corner: {
        left: {
          horisontal: (left, top) => getItem(left, top, statics.groundRotateLeft.x),
          corner: (left, top) => getItem(left, top, statics.groundRotateLeft.xy),
          vertical: (left, top, height) => ({left, top, height, width: 74, asset: getAsset(groundYleftPng)}),
        },
        right: {
          horisontal: (left, top) => getItem(left, top, statics.groundRotateRight.x),
          corner: (left, top) => getItem(left, top, statics.groundRotateRight.xy),
          vertical: (left, top, height) => ({left, top, height, width: 74, asset: getAsset(groundYleftPng), rotateY: mirror}),
        },       
      },
      ledge: {
        left: (left, top) => getItem(left, top, statics.groundLedge.left),
        middle: (left, top) => getItem(left, top, statics.groundLedge.middle),
        right: (left, top) => getItem(left, top, statics.groundLedge.right),
      },
      cornice: {
        left: (left, top) => getItem(left, top, statics.groundCornice.left),
        middle: (left, top) => getItem(left, top, statics.groundCornice.middle),
        right: (left, top) => getItem(left, top, statics.groundCornice.right),       
      }
    },

    water: {
      up: (left, top, w) => ({left, top: top - 57, width: w, height: 57, asset: `url(${waterUpPng})`}),
      inside: (left, top, width, height) => ({left, top: top, width, height, asset: `url(${waterPng})`}),
    }

  },

  backgrounds: {
    plate: (left, top, perspective) => getItem(left, top, bgs.plate, perspective),
    pointer: (left, top, perspective) => getItem(left, top, bgs.pointer, perspective),
    mashrooms: {
      orange: (left, top, perspective) => getItem(left, top, bgs.mashroomOrange, perspective),
      pink: (left, top, perspective) => getItem(left, top, bgs.mashroomPink, perspective),
    },
    stump: (left, top, perspective) => getItem(left, top, bgs.stump, perspective),
    trees: {
      big: (left, top, perspective) => getItem(left, top, bgs.trees.big, perspective),
      small: (left, top, perspective) => getItem(left, top, bgs.trees.small, perspective),
    },
    bush: {
      big: {
        green: (left, top, perspective) => getItem(left, top, bgs.bush.big.green, perspective),
        yellow: (left, top, perspective) => getItem(left, top, bgs.bush.big.yellow, perspective),      
      },
      small: {
        green: (left, top, perspective) => getItem(left, top, bgs.bush.small.green, perspective),
        yellow: (left, top, perspective) => getItem(left, top, bgs.bush.small.yellow, perspective),      
      }
    }
    
  }
}