function drawMyMap1000() {
	//Draw background start screen
	ctx.drawImage(tile[15], 0, 0, 1152, 704);

	if (keys[83]) {
		// && player.submit === 1 - Press S to start
		player.screen = 1;
	}
	if (keys[73]) {
		// && player.submit === 1 - press i for instructions
		instruct.f = 102;
		(instruct.x = 126),
			(instruct.y = 25),
			(instruct.w = 900),
			(instruct.h = 567);
	} else {
		ctx.drawImage(sprite[104], 383.5, 380, 385, 24); // Instructions Message
		instruct.f = 103;
		(instruct.x = 126),
			(instruct.y = 200),
			(instruct.w = 900),
			(instruct.h = 57);
		ctx.drawImage(sprite[105], 476, 435, 200, 137); // Controls
		ctx.drawImage(sprite[106], 342, 275, 469, 85); // Copyright
	}
	ctx.drawImage(
		sprite[instruct.f],
		instruct.x,
		instruct.y,
		instruct.w,
		instruct.h
	); // Title

	ctx.drawImage(sprite[press_s.f], 326, 610, press_s.width, press_s.height); // Press S
	// Animate Press s
	if (press_s.f === 100) {
		setTimeout(function () {
			press_s.f = 101;
		}, 200);
	} else {
		setTimeout(function () {
			press_s.f = 100;
		}, 200);
	}
}
