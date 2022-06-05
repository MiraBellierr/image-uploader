function setControls() {
	// check keys
	if (keys[38] || keys[32]) {
		// up arrow or space
		if (!player.jumping && player.grounded) {
			player.velY = -player.speed * 2.5;
			player.jumping = true;
			player.grounded = false;
			sfx[8].play();
		}
	}
	if (keys[39]) {
		// right arrow
		if (player.velX < player.speed) {
			player.velX++;
			player.f = 1;
		}
	}
	if (keys[37]) {
		// left arrow
		if (player.velX > -player.speed) {
			player.velX--;
			player.f = 3;
		}
	}

	player.velX *= friction;
	player.velY += gravity;
}
