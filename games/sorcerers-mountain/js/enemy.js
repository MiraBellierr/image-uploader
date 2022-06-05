function enemy(sn, e, ax, bx, f1, f2, p, xy, xos, yos) {
	ctx.drawImage(sprite[sn], e.x + xos, e.y + yos, e.w, e.h);
	if (xy === 1) {
		if (e.x < ax && e.dest === 0) {
			e.x += e.s;
			if (e.x > ax - 2) {
				e.dest = 1;
			}
		}
		if (e.dest === 1) {
			e.x -= e.s;
			if (e.x <= bx) {
				e.dest = 0;
			}
		}
	}
	if (xy === 2) {
		if (e.y < ax && e.dest === 0) {
			e.y += e.s;
			if (e.y > ax - 2) {
				e.dest = 1;
			}
		}
		if (e.dest === 1) {
			e.y -= e.s;
			if (e.y <= bx) {
				e.dest = 0;
			}
		}
	}
	if (e.f === f1) {
		setTimeout(function () {
			e.f = f2;
		}, 200);
	} else {
		setTimeout(function () {
			e.f = f1;
		}, 200);
	}
	if (
		p.x < e.x + xos + e.w &&
		p.x + p.width > e.x + xos &&
		p.y < e.y + yos + e.h &&
		p.y + p.height > e.y + yos
	) {
		lifeLost(e, p, xos);
	}
}

function enemyStatic(sn, e, xos, yos, p) {
	ctx.drawImage(sprite[sn], e.x + xos, e.y + yos, e.w, e.h);
	if (
		p.x < e.x + xos + e.w &&
		p.x + p.width > e.x + xos &&
		p.y < e.y + yos + e.h &&
		p.y + p.height > e.y + yos
	) {
		lifeLost(e, p, xos);
	}
}

function lifeLost(e, p, xos) {
	sfx[7].play();
	player.lives -= 1; // decrease lives by 1
	player.x = 630;
	player.y = 522;

	if (p.x + p.width > e.x + xos && p.x + p.width < e.x + xos + e.w) {
		player.f = 1;
	}
	if (p.x < e.x + xos + e.w && p.x > e.x + xos) {
		player.f = 3;
	}

	if (player.lives === 0) {
		gameOver();
	}
}

function gameOver() {
	if (player.lives < 1) {
		PlayMusic(2);
	}
	player.screen = 20;
	ctx.drawImage(tile[16], 0, 0, 1152, 704);
	ctx.drawImage(sprite[109], 250, 200, 688, 151);
}
