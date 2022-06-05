function drawMyMap2() {
	//Draw background

	ctx.drawImage(tile[16], 0, 0);

	//Draw Tile Map

	var xt = 0; // Tile Map X Index
	var yt = -64; // Tile Map Y Index
	var tileMap = [];
	var mapNo = 0; // Map Index

	tileMap[0] = [6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
	tileMap[1] = [6, 9, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6];
	tileMap[2] = [6, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6];
	tileMap[3] = [6, 0, 0, 0, 0, 0, 0, 9, 0, 0, 4, 4, 4, 4, 0, 0, 4, 6];
	tileMap[4] = [6, 4, 4, 4, 4, 0, 0, 0, 0, 9, 5, 5, 5, 5, 0, 0, 5, 6];
	tileMap[5] = [6, 6, 6, 6, 6, 0, 9, 0, 0, 0, 5, 5, 5, 5, 0, 0, 5, 6];
	tileMap[6] = [6, 0, 0, 0, 0, 0, 0, 0, 0, 9, 6, 6, 6, 6, 6, 6, 6, 6];
	tileMap[7] = [6, 0, 0, 0, 0, 0, 0, 9, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0];
	tileMap[8] = [6, 9, 9, 9, 0, 0, 0, 0, 0, 9, 6, 0, 0, 0, 0, 0, 9, 8];
	tileMap[9] = [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 0, 0, 1, 1, 1, 2, 3];
	tileMap[10] = [
		13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14,
	];

	/* KEY:-
0 - blank space, 1 - base block dark grey, 2 - base block left - lives, 3 - base block right - lives
4 - base block light grey, 5 - wall block light grey, 6 - wall block bricks light grey, 7 - stones block
8 - pedestal topper, 9 - floating platform 2 bricks, 10 - pedestal base, 11 - low pedestal, 12 - floating platform 1 brick
13 - game monitor left tile, 14 - game monitor right tile, 15 - title screen background, 16 - game screen background stone wall
*/

	//Draw Map Rows
	for (mapNo = 0; mapNo < 11; mapNo++) {
		yt += 64;
		for (xt = 0; xt < tileMap[mapNo].length * 64; xt += 64) {
			if (xt > 1152) {
				xt = 0;
			}
			var i = tileMap[mapNo][xt / 64]; // Array Variable at current iteration position
			ctx.drawImage(tile[i], xt, yt); // Draw row - Y position px from top of canvas
		}
	}

	//=========================================================================================================================================
	// Add Sprites - Collectables - Enemies
	//=========================================================================================================================================
	addCxs(coin, 76, 399, 140, 399, 206, 399, 652, 79, 716, 79, 780, 79, 846, 79);
	addCxs(gem, 70, 200, 76, 532);
	addCxs(key, 1040, 76, 585, 525);
	addCxs(star, 1037, 140, 717, 460);
	addCxs(potion, 590, 461, 0, -100);
	addCxs(flask, 580, 207, 0, -100);
	addCxs(bolt, 457, 386, 0, -100);

	gameMonitor();

	// =======================================================================================================================================================================
	// Create Enemies
	// =======================================================================================================================================================================
	// MOVING - sn: sprite number, e: enemy, a: movement boundary 1, b: movement boundary 2, f1: animation frame 1, f2: animation frame 2, p: player, xy: 1 for x 2 for y axis, xos: x offset, yos: y offset
	// STATIC - sn: sprite number e: enemy xos: x offset, yos: y offset, p: player

	enemy(enemy1.f, enemy1, 390, 66, 200, 201, player, 1, 0, 0);
	enemy(enemy2.f, enemy2, 576, 66, 200, 201, player, 1, 0, 0);
	enemy(enemy3.f, enemy3, 320, 66, 200, 201, player, 2, -66, 0);
	enemyStatic(202, spikes1, -129, 0, player);
	enemyStatic(202, spikes2, 212, -192, player);

	//==================================================================================================================================================================================
} // Close Draw Map 2 Function
//==================================================================================================================================================================================

function addBox2(a, b, c, d) {
	boxes2.push({ x: a, y: b, width: c, height: d });
	return;
}

function drawBoxes2() {
	addBox2(0, 57, 706, 1);
	addBox2(832, 577, 320, 1);
	addBox2(0, 0, 66, 640);
	addBox2(1089, 0, 66, 384);
	addBox2(192, 0, 960, 64);
	addBox2(640, 386, 66, 256);
	addBox2(640, 192, 256, 192);
	addBox2(706, 386, 386, 64);
	addBox2(1026, 192, 66, 192);
	addBox2(66, 256, 256, 128);
	addBox2(576, 512, 66, 1);
	addBox2(1024, 512, 128, 1);
	addBox2(66, 512, 192, 1);
	addBox2(449, 449, 66, 1);
	addBox2(576, 386, 66, 1);
	addBox2(386, 320, 66, 1);
	addBox2(576, 256, 66, 1);
	addBox2(66, 129, 320, 1);
	addBox2(449, 192, 66, 1);
	addBox2(66, 66, 66, 1);
	boxesDrawn2 += 1;
	return boxesDrawn2;
}

// BORDER WALLS
/*boxes2.push({ x: 0, y: 577, width: 706, height: 1 });//Base Left
boxes2.push({ x: 832, y: 577, width: 320, height: 1 });//Base Right
boxes2.push({ x: 0, y: 0, width: 66, height: 640 });// left wall
boxes2.push({ x: 1089, y: 0, width: 66, height: 384 });// right wall
boxes2.push({ x: 192, y: 0, width: 960, height: 64 });// top 
boxes2.push({ x: 640, y: 386, width: 66, height: 256 });// mid wall 
boxes2.push({ x: 640, y: 192, width: 256, height: 192 });// mid box 
boxes2.push({ x: 706, y: 386, width: 386, height: 64 });// mid box 
boxes2.push({ x: 1026, y: 192, width: 66, height: 192 });// right box 
boxes2.push({ x: 66, y: 256, width: 256, height: 128 });// mid left box
// PLATFORMS
boxes2.push({ x: 576, y: 512, width: 66, height: 1 });//Layer 2 - right lower platform
boxes2.push({ x: 1024, y: 512, width: 128, height: 1 })
boxes2.push({ x: 66, y: 512, width: 192, height: 1 });//Layer 2 - left lower platform
boxes2.push({ x: 449, y: 449, width: 66, height: 1 });//Layer 3 - mid mid platform
boxes2.push({ x: 576, y: 386, width: 66, height: 1 });//Layer 4 - right mid platform
boxes2.push({ x: 386, y: 320, width: 66, height: 1 });//Layer 5 - left mid platform
boxes2.push({ x: 576, y: 256, width: 66, height: 1 });//Layer 6 - left mid platform
boxes2.push({ x: 66, y: 129, width: 320, height: 1 });//Layer 8 - top left platform
boxes2.push({ x: 449, y: 192, width: 66, height: 1 });//Layer 7 - top mid platform
boxes2.push({ x: 66, y: 66, width: 66, height: 1 });//Layer 9 - top left platform
}*/
