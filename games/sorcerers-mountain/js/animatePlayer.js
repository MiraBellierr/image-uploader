function animatePlayer() {
	//=========== LEFT ANIMATION ============================

	if (keys[37] && player.f === 3) {
		setTimeout(function () {
			player.f = 4;
		}, 50);
		setTimeout(function () {
			player.f = 3;
		}, 100);
		if (!keys) {
			player.f = 3;
		}
	}

	//=========== LEFT RIGHT ============================
	if (keys[39] && player.f === 1) {
		setTimeout(function () {
			player.f = 2;
		}, 50);
		setTimeout(function () {
			player.f = 1;
		}, 100);
		if (!keys) {
			player.f = 1;
		}
	}
} // close function
