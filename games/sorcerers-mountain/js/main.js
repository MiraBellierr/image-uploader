canvas.width = width;
canvas.height = height;

function update() {
	if (player.screen === 15) {
		PlayMusic(2);
	}
	if (player.screen < 15 && player.lives > 0) {
		PlayMusic(1);
	}

	setControls();

	//when you enter a new screen clear velX and velY by setting back to 0
	ctx.clearRect(0, 0, width, height);
	ctx.fillStyle = "#333";
	ctx.beginPath();
	if (player.screen === 15) {
		drawMyMap1000();
	}
	if (player.screen === 20) {
		gameOver();
	}
	if (player.screen === 1) {
		drawMyMap();
	}

	//==== SCREEN 1 ===========
	if (player.x < 5 && player.screen === 1) {
		player.screen = 2;
		player.x = 1103;
		player.entered = 0;
	}
	if (player.x > 1103 && player.screen === 1) {
		player.screen = 3;
		player.x = 15;
		player.entered = 0;
	}
	if (player.y < -20 && player.screen === 1) {
		player.screen = 7;
		player.y = 525;
		player.entered = 0;
	}

	//==== SCREEN 2 ===========
	if (player.x > 1103 && player.screen === 2) {
		player.screen = 1;
		player.x = 5;
		player.entered = 0;
	}
	if (player.y > 635 && player.screen === 2) {
		player.screen = 5;
		player.y = 5;
		player.entered = 0;
	}
	if (player.y < -20 && player.screen === 2) {
		player.screen = 8;
		player.y = 576;
		player.entered = 0;
	}

	if (player.screen < 15 && player.start === 0) {
		player.start = 1;
	}
	if (player.screen === 1 && boxesDrawn1 == 0) {
		drawBoxes1();
	}
	if (player.screen === 1 && boxesDrawn1 > 0) {
		boxes = boxes1;
		if (player.entered < 1) {
			enemy1.x = 62;
			enemy1.y = 454;
			enemy1.dest = 0;
			bat1.x = 62;
			bat1.y = 70;
			enemy2.dest = 0;
			enemy3.y = 62;
			enemy3.dest = 0;
			player.entered = 1;
		}
	}

	if (player.screen === 2) {
		drawMyMap2();
	}
	if (player.screen === 2 && boxesDrawn2 === 0) {
		drawBoxes2();
	}
	if (player.screen === 2 && boxesDrawn2 < 2) {
		boxes = boxes2;
		if (player.entered < 1) {
			enemy1.x = 62;
			enemy1.y = 448;
			enemy1.dest = 0;
			enemy2.x = 62;
			enemy2.y = 192;
			enemy2.dest = 0;
			enemy3.y = 62;
			enemy3.dest = 0;
			player.entered = 1;
		}
	}
	player.grounded = false;
	for (var b = 0; b < boxes.length; b++) {
		ctx.rect(boxes[b].x, boxes[b].y, boxes[b].width, boxes[b].height);
		var dir = colCheck(player, boxes[b]);
		if (dir === "l" || dir === "r") {
			player.velX = 0;
			player.jumping = false;
		} else if (dir === "b") {
			player.grounded = true;
			player.jumping = false;
		} else if (dir === "t") {
			//do nothing
		}
	}
	if (player.grounded) {
		player.velY = 0;
	}
	player.x += player.velX;
	player.y += player.velY;

	if (player.y > 650 && !player.grounded) {
		player.y = 524;
		player.grounded = true;
		player.velY = gravity;
		player.y += player.velY;
	}

	if (player.screen != 15 && player.screen != 20) {
		ctx.drawImage(wiz[player.f], player.x, player.y);
		ctx.font = "20px Arial";
		ctx.fillStyle = "white";
		ctx.fillText(": " + player.lives, 1090, 621); // Player Lives
		ctx.font = "35px Arial";
		ctx.fillStyle = "white";
		ctx.fillText(player.score, 1000, 685); // Update Score
		ctx.font = "20px Arial";
		ctx.fillStyle = "white";
		ctx.fillText(": " + coin.count, 60, 681); // Update Coin Count
		ctx.fillText(": " + gem.count, 444, 681); // Update Gem Count
		ctx.fillText(": " + star.count, 188, 681); // Update Star Count
		ctx.fillText(": " + potion.count, 572, 681); // Update Potion Count
		ctx.fillText(": " + flask.count, 700, 681); // Update Flask Count
		ctx.fillText(": " + bolt.count, 828, 681); // Update Bolt Count
		ctx.fillText(": " + key.count, 316, 681); // Update Key Count
		ctx.fillText(": " + player.lives, 1090, 621); // Player Lives
	}

	requestAnimationFrame(update);
}

document.body.addEventListener("keydown", function (e) {
	keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
	keys[e.keyCode] = false;
});

window.addEventListener("load", function () {
	update();
});
