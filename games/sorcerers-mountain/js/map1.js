function drawMyMap() {
	ctx.drawImage(tile[16], 0, 0);
	var xt = 0; // Tile Map X Index
	var yt = -64; // Tile Map Y Index
	var tileMap = [];
	var mapNo = 0; // Map Index
	tileMap[0] = [6, 6, 6, 6, 6, 6, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6];
	tileMap[1] = [6, 0, 0, 0, 10, 0, 0, 11, 0, 0, 10, 0, 6, 0, 0, 0, 0, 0];
	tileMap[2] = [6, 0, 0, 9, 9, 9, 9, 9, 9, 9, 8, 0, 0, 0, 0, 0, 0, 0];
	tileMap[3] = [6, 0, 11, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 9, 9, 0, 6];
	tileMap[4] = [6, 9, 9, 9, 0, 0, 0, 0, 0, 0, 8, 9, 9, 0, 0, 0, 0, 6];
	tileMap[5] = [6, 0, 0, 0, 0, 9, 9, 0, 0, 0, 10, 0, 0, 9, 0, 9, 9, 6];
	tileMap[6] = [6, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 0, 0, 0, 6];
	tileMap[7] = [0, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 8, 9, 8, 9, 6];
	tileMap[8] = [9, 9, 9, 8, 9, 0, 0, 0, 0, 0, 0, 0, 8, 10, 0, 10, 0, 6];
	tileMap[9] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3];
	tileMap[10] = [
		13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14,
	];
	/* KEY:-
0 - blank space, 1 - base block dark grey, 2 - base block left - lives, 3 - base block right - lives
4 - base block light grey, 5 - wall block light grey, 6 - wall block bricks light grey, 7 - stones block
8 - pedestal topper, 9 - floating platform 2 bricks, 10 - pedestal base, 11 - low pedestal, 12 - floating platform 1 brick
13 - game monitor left tile, 14 - game monitor right tile, 15 - title screen background, 16 - game screen background stone wall
*/
	for (mapNo = 0; mapNo < 11; mapNo++) {
		yt += 64;
		for (xt = 0; xt < tileMap[mapNo].length * 64; xt += 64) {
			if (xt > 1152) {
				xt = 0;
			}
			var i = tileMap[mapNo][xt / 64]; // Array Variable at current iteration position
			ctx.drawImage(tile[i], xt, yt); // Draw row - Y position px from top of canvas
			//if(i == 1){addBox(xt,yt,xt+64,1);}
		}
	}

	// addCoins(mn, w, h, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8, x9, y9, x10, y10)
	/*addCoins(coin, 49, 50, 76, 78, 76, 142, 76, 206, 140, 332, 396, 204, 460, 204, 396, 12, 716, 332, 908, 76, 600, 78);
addGems(gem, 30, 45, 720, 74, 1040, 532);
addKeys(key, 34, 49, 460, 10, 1024, 345);
addStars(star, 39, 39, 525, 12, 973, 76, 1037, 268, 0, -100, 0, -100);
addPotions(potion, 30, 52, 1041, 398, 593, 332, 0, -100);
addFlasks(flask, 39, 49, 13, 463, 0, -100);
addBolts(bolt, 39, 39, 425, 384, 0, -100);*/

	//addCxs(item, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8, x9, y9, x10, y10)
	addCxs(
		coin,
		76,
		78,
		76,
		142,
		76,
		206,
		140,
		332,
		396,
		204,
		460,
		204,
		396,
		12,
		716,
		332,
		908,
		76,
		600,
		78
	);
	addCxs(gem, 720, 74, 1040, 532);
	addCxs(key, 460, 10, 1024, 345);
	addCxs(star, 525, 12, 973, 76, 1037, 268);
	addCxs(potion, 1041, 398, 593, 332);
	addCxs(flask, 13, 463);
	addCxs(bolt, 425, 384);

	gameMonitor();

	ctx.drawImage(sprite[317], 128, 450, 57, 62); //draw barrel
	// =======================================================================================================================================================================
	// Create Enemies
	// =======================================================================================================================================================================
	// MOVING - sn: sprite number
	//e: enemy, a: movement boundary 1
	//b: movement boundary 2
	//f1: animation frame 1
	//f2: animation frame 2
	//p: player
	//xy: 1 for x 2 for y axis
	//s:speed
	enemy(enemy1.f, enemy1, 335, 0, 200, 201, player, 1, 0, 0);
	enemy(bat1.f, bat1, 710, 64, 203, 204, player, 1, 0, 0);
	enemy(enemy3.f, enemy3, 265, 64, 200, 201, player, 2, 0, 0);
	enemyStatic(202, spikes1, 0, 0, player);

	/*ctx.beginPath();
	ctx.lineWidth = "2";
	ctx.strokeStyle = "red";
	ctx.rect(0,0,64,448);
	ctx.rect(1088,192,64,384);
	ctx.rect(0,0,384,64);
	ctx.rect(576,0,576,64);
	ctx.rect(768,64,64,64);
	// PLATFORMS
	ctx.rect(0,512,320,1);
	ctx.rect(768,512,64,1);
	ctx.rect(832,448,256,1);
	ctx.rect(384,448,128,1);
	//ctx.rect(128,450,57,62);
	ctx.rect(576,384,192,1);
	ctx.rect(320,320,128,1);
	ctx.rect(832,320,64,1);
	ctx.rect(960,320,128,1);
	ctx.rect(64,256,192,1);
	ctx.rect(640,256,192,1);
	ctx.rect(128,192,64,64);
	ctx.rect(896,192,128,1);
	ctx.rect(192,128,512,1);
	ctx.rect(448,64,64,64);
	ctx.rect(0,577,1152,1);
	ctx.stroke();*/
}
function addBox(a, b, c, d) {
	boxes1.push({ x: a, y: b, width: c, height: d });
	return;
}
var boxes = [];

function drawBoxes1() {
	// BORDER WALLS
	addBox(0, 577, 1152, 1);
	addBox(0, 0, 64, 448);
	addBox(1088, 192, 64, 384);
	addBox(0, 0, 384, 64);
	addBox(576, 0, 576, 64);
	addBox(768, 64, 64, 64);
	// PLATFORMS
	addBox(0, 512, 320, 1);
	addBox(768, 512, 64, 1);
	addBox(832, 448, 256, 1);
	addBox(384, 448, 128, 1);
	addBox(128, 450, 57, 62);
	addBox(576, 384, 192, 1);
	addBox(320, 320, 128, 1);
	addBox(832, 320, 64, 1);
	addBox(960, 320, 128, 1);
	addBox(64, 256, 192, 1);
	addBox(640, 256, 192, 1);
	addBox(128, 192, 64, 64);
	addBox(896, 192, 128, 1);
	addBox(192, 128, 512, 1);
	addBox(448, 64, 64, 64);

	boxesDrawn1 += 1;
	return boxesDrawn1;
}

// BORDER WALLS
//boxes1.push({ x: 0, y: 577, width: 1152, height: 1 });//Base
//boxes1.push({ x: 0, y: 0, width: 64, height: 448 });// left wall
//boxes1.push({ x: 1088, y: 192, width: 64, height: 384 });// right wall
//boxes1.push({ x: 0, y: 0, width: 384, height: 64 });// top left
//boxes1.push({ x: 576, y: 0, width: 576, height: 64 });// top right
//boxes1.push({ x: 768, y: 64, width: 64, height: 64 });// top single block
// PLATFORMS
//boxes1.push({ x: 0, y: 512, width: 320, height: 1 });//Layer 2 - left platform
//boxes1.push({ x: 768, y: 512, width: 64, height: 20 });//Layer 2 - Pillar
//boxes1.push({ x: 832, y: 448, width: 256, height: 1 });//Layer 3 - Right platform
//boxes1.push({ x: 384, y: 448, width: 128, height: 1 });//Layer 3 - Mid platform
//boxes1.push({ x: 128, y: 450, width: 57, height: 62 });//Layer 3 - Barrel
//boxes1.push({ x: 576, y: 384, width: 192, height: 1 });//Layer 4 - Mid platform
//boxes1.push({ x: 320, y: 320, width: 128, height: 1 });//Layer 5 - Mid platform
//boxes1.push({ x: 832, y: 320, width: 64, height: 1 });//Layer 5 - Right platform
//boxes1.push({ x: 960, y: 320, width: 128, height: 1 });//Layer 5 - Far Right platform
//boxes1.push({ x: 64, y: 256, width: 192, height: 1 });//Layer 6 - Left platform
//boxes1.push({ x: 640, y: 256, width: 192, height: 1 });//Layer 6 - Mid platform
//boxes1.push({ x: 128, y: 192, width: 64, height: 64 });//Layer 7 - Pedestal
//boxes1.push({ x: 896, y: 192, width: 128, height: 1 });//Layer 7 - Far Right
//boxes1.push({ x: 192, y: 128, width: 512, height: 1 });//Layer 8 - Large Platform
//boxes1.push({ x: 448, y: 64, width: 64, height: 1 });//Layer 9 - Top Platform
