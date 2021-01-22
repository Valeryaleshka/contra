import Farm from './farm/farm';
import Nature from './nature/nature';
import StaticItem from '../../entities/Elements/Static';
import BgItem from '../../entities/Elements/Background';
import Player from '../../entities/Player/Player';
import WaterItem from '../../entities/Elements/Water';

const height = 800;
const defaultSize = Nature.defaultSize;
const levelWidth = defaultSize * 100;
const levelHeight = defaultSize * 10;
const floor = height - defaultSize * 5;


const backgrounds = [
	Farm.hills.element(0, height - defaultSize * 3 - Farm.hills.height, levelWidth )
	// Nature.backgrounds.trees.big(250, floor, 20),
	// Nature.backgrounds.bush.big.yellow(800, floor, 30),
	// Farm.houses.square(defaultSize * 10, height - defaultSize * 5, 200)
];

const loadBackgrounds = factory => {
	backgrounds.forEach((el, idx) => {
		const entity = new BgItem({...el, factory, element: "water"});
		factory.addToBodies(entity.body);
		factory.addToEntities(entity);
	});
};

const ground = [

	Nature.statics.ground.upper.left(defaultSize * 0, height - defaultSize * 6),
	Nature.statics.ground.corner.left.vertical(0 , height - defaultSize * 5, defaultSize * 5),
	Nature.statics.ground.upper.middle(defaultSize * 1, height - defaultSize * 6, defaultSize * 3),
	Nature.statics.ground.upper.right(defaultSize * 4, height - defaultSize * 6),
	Nature.statics.ground.corner.right.vertical(defaultSize * 4 , height - defaultSize * 5, defaultSize * 5),

	Nature.statics.ground.inside.middle(defaultSize, height - defaultSize * 5, defaultSize * 3, defaultSize * 6),

	Nature.statics.ground.upper.left(defaultSize * 10, height - defaultSize * 6),
	Nature.statics.ground.corner.left.vertical( defaultSize * 10, height - defaultSize * 5, defaultSize * 5),
	Nature.statics.ground.upper.middle(defaultSize * 11, height - defaultSize * 6, defaultSize * 3),
	Nature.statics.ground.upper.right(defaultSize * 14, height - defaultSize * 6),
	Nature.statics.ground.corner.right.vertical(defaultSize * 14 , height - defaultSize * 5, defaultSize * 5),

	Nature.statics.ground.inside.middle(defaultSize * 11, height - defaultSize * 5, defaultSize * 3, defaultSize * 6),
	// // Nature.statics.ground.inside.left(defaultSize * 9, height - defaultSize * 3),
	// // Nature.statics.ground.inside.middle(defaultSize * 10, height - defaultSize * 3),
	// // Nature.statics.ground.inside.middle(defaultSize * 11, height - defaultSize * 3),
	// // Nature.statics.ground.inside.middle(defaultSize * 12, height - defaultSize * 3),
	// // Nature.statics.ground.inside.right(defaultSize * 13, height - defaultSize * 3),

	// // Nature.statics.ground.inside.left(defaultSize * 9, height - defaultSize * 2),
	// // Nature.statics.ground.inside.middle(defaultSize * 10, height - defaultSize * 2),
	// // Nature.statics.ground.inside.middle(defaultSize * 11, height - defaultSize * 2),
	// // Nature.statics.ground.inside.middle(defaultSize * 12, height - defaultSize * 2),
	// // Nature.statics.ground.inside.right(defaultSize * 13, height - defaultSize * 2),

	// // Nature.statics.ground.inside.left(defaultSize * 9, height - defaultSize),
	// // Nature.statics.ground.inside.middle(defaultSize * 10, height - defaultSize),
	// // Nature.statics.ground.inside.middle(defaultSize * 11, height - defaultSize),
	// // Nature.statics.ground.inside.middle(defaultSize * 12, height - defaultSize),
	// // Nature.statics.ground.inside.right(defaultSize * 13, height - defaultSize),

	// Nature.statics.ground.ledge.left(defaultSize * 9, height),
	// Nature.statics.ground.ledge.middle(defaultSize * 10, height),
	// Nature.statics.ground.ledge.middle(defaultSize * 11, height),
	// Nature.statics.ground.ledge.middle(defaultSize * 12, height),
	// Nature.statics.ground.ledge.right(defaultSize * 13, height),



	// // Nature.statics.water.inside(defaultSize * 14, height),
	// // Nature.statics.water.inside(defaultSize * 15, height),
	// // Nature.statics.water.inside(defaultSize * 16, height),

	// Nature.statics.ground.ledge.middle(defaultSize * 17, height),
	// Nature.statics.ground.ledge.middle(defaultSize * 18, height),
	// Nature.statics.ground.ledge.middle(defaultSize * 19, height),
	// Nature.statics.ground.ledge.middle(defaultSize * 20, height),
	// Nature.statics.ground.ledge.middle(defaultSize * 21, height),
	// Nature.statics.ground.ledge.middle(defaultSize * 22, height),

	// Nature.statics.ground.upper.left(0, height - defaultSize * 4),
	// Nature.statics.ground.upper.middle(defaultSize, height - defaultSize * 4),
	// Nature.statics.ground.upper.middle(defaultSize * 2, height - defaultSize * 4),
	// Nature.statics.ground.corner.left.horisontal(defaultSize * 3, height - defaultSize * 4),
	// Nature.statics.ground.corner.left.corner(defaultSize * 4, height - defaultSize * 4),
	// Nature.statics.ground.corner.left.vertical(defaultSize * 4, height - defaultSize * 5),
	// Nature.statics.ground.inside.left(defaultSize * 4, height - defaultSize * 6),
	// Nature.statics.ground.upper.left(defaultSize * 4, height - defaultSize * 7),
	// Nature.statics.ground.upper.right(defaultSize * 5, height - defaultSize * 7),
	// Nature.statics.ground.inside.right(defaultSize * 5, height - defaultSize * 6),
	// Nature.statics.ground.inside.right(defaultSize * 5, height - defaultSize * 5),
	// Nature.statics.ground.inside.right(defaultSize * 5, height - defaultSize * 4),









	// Nature.statics.ground.cornice.left(defaultSize * 18, height - defaultSize * 6),
	// Nature.statics.ground.cornice.middle(defaultSize * 19, height - defaultSize * 6),
	// Nature.statics.ground.cornice.middle(defaultSize * 20, height - defaultSize * 6),
	// Nature.statics.ground.cornice.middle(defaultSize * 21, height - defaultSize * 6),
	// Nature.statics.ground.cornice.right(defaultSize * 22, height - defaultSize * 6),

	// Nature.statics.ground.cornice.left(defaultSize * 26, height - defaultSize * 6),
	// Nature.statics.ground.cornice.middle(defaultSize * 27, height - defaultSize * 6),
	// Nature.statics.ground.cornice.middle(defaultSize * 28, height - defaultSize * 6),
	// Nature.statics.ground.cornice.right(defaultSize * 29, height - defaultSize * 6),

	// Nature.statics.ground.cornice.left(defaultSize * 34, height - defaultSize * 6),
	// Nature.statics.ground.cornice.middle(defaultSize * 35, height - defaultSize * 6),
	// Nature.statics.ground.cornice.right(defaultSize * 36, height - defaultSize * 6),
];

const loadGround = factory => {
	ground.forEach((el) => {
		console.log('el')
		console.log(el)
		const entity = new StaticItem({...el, factory, element: "ground"});
		factory.addToBodies(entity.body);
		factory.addToEntities(entity);	
	})
};

console.log('fdadfdfdafhadgiuad hguoida hug')
console.log(Nature.statics.water.inside(defaultSize * 0, height - defaultSize * 3, defaultSize * 25, defaultSize * 6 ))

const water = [

	Nature.statics.water.up(defaultSize * 0, height - defaultSize * 3 + 17, defaultSize * 25),
	Nature.statics.water.inside(defaultSize * 0, height - defaultSize * 3, defaultSize * 25, defaultSize * 6 ),

	// Nature.statics.water.inside(defaultSize * 5, height - defaultSize * 3, ),
	// Nature.statics.water.inside(defaultSize * 6, height - defaultSize * 3),
	// Nature.statics.water.inside(defaultSize * 7, height - defaultSize * 3),
	// Nature.statics.water.inside(defaultSize * 8, height - defaultSize * 3),
	// Nature.statics.water.inside(defaultSize * 9, height - defaultSize * 3),

	// Nature.statics.water.inside(defaultSize * 5, height - defaultSize * 2),
	// Nature.statics.water.inside(defaultSize * 6, height - defaultSize * 2),
	// Nature.statics.water.inside(defaultSize * 7, height - defaultSize * 2),
	// Nature.statics.water.inside(defaultSize * 8, height - defaultSize * 2),
	// Nature.statics.water.inside(defaultSize * 9, height - defaultSize * 2),

	// Nature.statics.water.inside(defaultSize * 5, height - defaultSize),
	// Nature.statics.water.inside(defaultSize * 6, height - defaultSize),
	// Nature.statics.water.inside(defaultSize * 7, height - defaultSize),
	// Nature.statics.water.inside(defaultSize * 8, height - defaultSize),
	// Nature.statics.water.inside(defaultSize * 9, height - defaultSize),

	// Nature.statics.water.inside(defaultSize * 5, height),
	// Nature.statics.water.inside(defaultSize * 6, height),
	// Nature.statics.water.inside(defaultSize * 7, height),
	// Nature.statics.water.inside(defaultSize * 8, height),
	// Nature.statics.water.inside(defaultSize * 9, height),
];

const loadWater = factory => {
	water.forEach((el, idx) => {
		const entity = new WaterItem({...el, factory, element: "water"});
		factory.addToBodies(entity.body);
		factory.addToEntities(entity);
	})
};

const loadtTriggers = (factory) => {
	factory.triggers = [
		{ 
			condition: factory => factory.entities.player.body.position.x >= 200 && factory.triggers[0].done === false, 
			action: (factory) => factory.addBird.call(factory, 1500, 200),
			done: false,
		},
		// { 
		// 	condition: factory => factory.entities.player.body.position.x >= 600 && factory.triggers[1].done === false,
		// 	action: (factory) => factory.addGolem.call(factory, 1000, 500),
		// 	done: false,
		// },
	]
};

const loadPlayer = (factory) => {
	const player = new Player({left: 100, top: 100, factory });
	factory.entities.player = player;
	factory.addToBodies(player.body);
}


const setup = factory => {
	console.log(factory.entities);
	loadGround(factory);
	loadWater(factory);
	loadBackgrounds(factory);
	loadtTriggers(factory);
	loadPlayer(factory);
};

export default {
	setup: (factory) => setup(factory)
};