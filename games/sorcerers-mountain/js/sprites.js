/* ============================
SPRITES KEY:
100 - Press 's'
101 - Press 's' flash
102 - Instructions
103 - Title - Sorcerers Mountain
104 - Instruction Message
105 - Controls
106 - Copyright Message
107 - Get ready text
108 - Get ready text flash
109 - Game Over text
============================== */
var sprite = [];
for (i = 100; i < 110; i++) {
	sprite[i] = new Image();
	sprite[i].src = `sprites/${i}.png`;
}

/* ============================
WIZARD KEY:
1 - Wizard Right Frame 1
2 - Wizard Right Frame 2
3 - Wizard Left Frame 1
4 - Wizard Left Frame 2
5 - Wizard Aura Frame 1
6 - Wizard Aura Frame 2
7 - Wizard Aura Frame 3
8 - Wizard Aura Frame 4
9 - Wizard Aura Frame 5
10 - Wizard Aura Frame 6
============================== */
var wiz = [];
for (i = 1; i < 11; i++) {
	wiz[i] = new Image();
	wiz[i].src = `sprites/${i}.png`;
}

/* ============================
ENEMIES KEY:
200 - Ghost Frame 1
201 - Ghost Frame 2
202 - Spikes
203 - Bat Frame 1
204 - Bat Frame 2
============================== */
for (i = 200; i < 205; i++) {
	sprite[i] = new Image();
	sprite[i].src = `sprites/${i}.png`;
}

/* ============================
COLLECTABLES KEY:
300 - Chest
301 - Open Chest
302 - Key
303 - Ruby
304 - Emerald
305 - Gold Coin
306 - Lightening Bolt
307 - Star
308 - Potion
309 - Flask
310 - Broken Flask
311 - Crates Frame 1 - Whole
312 - Crates Frame 2
313 - Crates Frame 3
314 - Crates Frame 4
315 - Crates Frame 5
316 - Crates Frame 6 - Destroyed
317 - Barrel
318 - Score Card
319 - Shop
============================== */
for (i = 300; i < 320; i++) {
	sprite[i] = new Image();
	sprite[i].src = `sprites/${i}.png`;
}
