(function () {
	var requestAnimationFrame =
		window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.querySelector("#canvas"),
	ctx = canvas.getContext("2d"),
	width = 1152,
	height = 704,
	player = {
		x: 590,
		y: 500, // Start height (Must be larger than tile, plus character height
		width: 35,
		height: 52,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		screen: 15, //15 = START SCREEN
		start: 0,
		f: 3,
		entered: 0,
		lives: 3,
		score: 0,
	},
	enemy1 = { x: 64, y: 452, w: 59, h: 57, s: 2, f: 200, dest: 0 },
	enemy2 = { x: 256, y: 68, w: 59, h: 57, s: 3, f: 200, dest: 0 },
	enemy3 = { x: 1024, y: 64, w: 59, h: 57, s: 2, f: 200, dest: 0 },
	bat1 = { x: 64, y: 482, w: 64, h: 17, s: 2, f: 203, dest: 0 },
	spikes1 = { x: 512, y: 556, w: 61, h: 20 },
	spikes2 = { x: 684, y: 556, w: 61, h: 20 },
	coin = {
		width: 49,
		height: 50,
		count: 0,
		mn: 1,
		sn: 305,
		fct: 0,
		t: "coins",
	},
	gem = { width: 40, height: 45, count: 0, mn: 1, sn: 303, fct: 10, t: "gems" },
	key = { width: 34, height: 49, count: 0, mn: 1, sn: 302, fct: 12, t: "keys" },
	potion = {
		width: 40,
		height: 52,
		count: 0,
		mn: 1,
		sn: 308,
		fct: 14,
		t: "potions",
	},
	flask = {
		width: 48,
		height: 49,
		count: 0,
		mn: 1,
		sn: 309,
		fct: 16,
		t: "flasks",
	},
	star = {
		width: 39,
		height: 39,
		count: 0,
		mn: 1,
		sn: 307,
		fct: 21,
		t: "stars",
	},
	bolt = {
		width: 49,
		height: 49,
		count: 0,
		mn: 1,
		sn: 306,
		fct: 26,
		t: "bolts",
	},
	itemsCollected = [
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	],
	press_s = { width: 500, height: 40, f: 100 },
	instruct = { x: 126, y: 300, w: 900, h: 57, f: 103 },
	keys = [],
	gravity = 0.3,
	friction = 0.8;

var boxes = [];
var boxes1 = [];
var boxesDrawn1 = 0;
var boxes2 = [];
var boxesDrawn2 = 0;
