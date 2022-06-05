var items = [];
function addCxs(
	item,
	x1,
	y1,
	x2,
	y2,
	x3,
	y3,
	x4,
	y4,
	x5,
	y5,
	x6,
	y6,
	x7,
	y7,
	x8,
	y8,
	x9,
	y9,
	x10,
	y10
) {
	let iw = item.width;
	let ih = item.height;
	let plw = player.width;
	let plh = player.height;
	let plx = player.x;
	let ply = player.y;
	item.mn = player.screen - 1;
	let mn = item.mn * 30 + item.fct;

	let xs = [];
	xs[1 + mn] = x1;
	xs[2 + mn] = x2;
	xs[3 + mn] = x3;
	xs[4 + mn] = x4;
	xs[5 + mn] = x5;
	xs[6 + mn] = x6;
	xs[7 + mn] = x7;
	xs[8 + mn] = x8;
	xs[9 + mn] = x9;
	xs[mn] = x10;

	let ys = [];
	ys[1 + mn] = y1;
	ys[2 + mn] = y2;
	ys[3 + mn] = y3;
	ys[4 + mn] = y4;
	ys[5 + mn] = y5;
	ys[6 + mn] = y6;
	ys[7 + mn] = y7;
	ys[8 + mn] = y8;
	ys[9 + mn] = y9;
	ys[mn] = y10;

	for (i = 0; i < 10; i++) {
		items[i + mn] = {
			x: xs[i + mn],
			y: ys[i + mn],
			width: iw,
			height: ih,
			c: 0,
		};

		if (
			plx < items[i + mn].x + iw &&
			plx + plw > items[i + mn].x &&
			ply < items[i + mn].y + ih &&
			ply + plh > items[i + mn].y &&
			itemsCollected[i + mn] == 0
		) {
			items[i + mn].c += 1;
			itemsCollected[i + mn] = 1;
		}
		if (items[i + mn].c == 0 && itemsCollected[i + mn] == 0) {
			ctx.drawImage(sprite[item.sn], items[i + mn].x, items[i + mn].y, iw, ih);
		} else if (items[i + mn].c > 0 && items[i + mn].c < 2) {
			item.count += 1;
			if (item.t == "coins") {
				player.score += 10;
				sfx[0].play();
			}
			if (item.t == "gems") {
				player.score += 50;
				sfx[1].play();
			}
			if (item.t == "keys") {
				player.score += 20;
				sfx[6].play();
			}
			if (item.t == "potions") {
				player.score += 30;
				sfx[3].play();
			}
			if (item.t == "flasks") {
				player.score += 100;
				player.lives += 1;
				sfx[4].play();
			}
			if (item.t == "stars") {
				player.score += 25;
				sfx[2].play();
			}
			if (item.t == "bolts") {
				player.score += 15;
				sfx[5].play();
			}
		}
	}
}

/*var coins = [];
function addCoins(mn, w, h, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8, x9, y9, x10, y10){
let xs = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10];
let ys = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10];
for(i =0; i < 10; i++){
  coins[i] = { x: xs[i], y: ys[i], width: w, height: h, c: 0 };
  if(player.x < coins[i].x + coins[i].width
    && player.x + player.width > coins[i].x
    && player.y < coins[i].y + coins[i].height
    && player.y + player.height > coins[i].y && coinsCollected[i] == 0){ 
    coins[i].c +=1; 
    coinsCollected[i] = 1;
  }
  if (coins[i].c == 0 && coinsCollected[i] == 0){ 
    ctx.drawImage(sprite[305], coins[i].x, coins[i].y, coins[i].width, coins[i].height); 
  } else if (coins[i].c > 0 && coins[i].c < 2){ 
    coin.count+=1; 
    player.score+=10; 
    sfx[0].play(); 
  }
}
}

var gems = [];
function addGems(mn, w, h, x1, y1, x2, y2){
let xs = [x1, x2];
let ys = [y1, y2];
for(i =0; i < 10; i++){
  gems[i] = { x: xs[i], y: ys[i], width: w, height: h, c: 0 };
  if(player.x < gems[i].x + gems[i].width
    && player.x + player.width > gems[i].x
    && player.y < gems[i].y + gems[i].height
    && player.y + player.height > gems[i].y && gemsCollected[i] == 0){ 
    gems[i].c +=1; 
    gemsCollected[i] = 1;
  }
  if (gems[i].c == 0 && gemsCollected[i] == 0){ 
    ctx.drawImage(sprite[304], gems[i].x, gems[i].y, gems[i].width, gems[i].height); 
  } else if (gems[i].c > 0 && gems[i].c < 2){ 
    gem.count+=1; 
    player.score+=50; 
    sfx[0].play(); 
  }
}
}

var keys = [];
function addKeys(mn, w, h, x1, y1, x2, y2){
let xs = [x1, x2];
let ys = [y1, y2];
for(i =0; i < 10; i++){
  keys[i] = { x: xs[i], y: ys[i], width: w, height: h, c: 0 };
  if(player.x < keys[i].x + keys[i].width
    && player.x + player.width > keys[i].x
    && player.y < keys[i].y + keys[i].height
    && player.y + player.height > keys[i].y && keysCollected[i] == 0){ 
    keys[i].c +=1; 
    keysCollected[i] = 1;
  }
  if (keys[i].c == 0 && keysCollected[i] == 0){ 
    ctx.drawImage(sprite[302], keys[i].x, keys[i].y, keys[i].width, keys[i].height); 
  } else if (keys[i].c > 0 && keys[i].c < 2){ 
    key.count+=1; 
    player.score+=20; 
    sfx[0].play(); 
  }
}
}

var stars = [];
function addStars(mn, w, h, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5){
let xs = [x1, x2, x3, x4, x5];
let ys = [y1, y2, y3, y4, y5];
  for(i =0; i < 10; i++){
    stars[i] = { x: xs[i], y: ys[i], width: w, height: h, c: 0 };
    if(player.x < stars[i].x + stars[i].width
      && player.x + player.width > stars[i].x
      && player.y < stars[i].y + stars[i].height
      && player.y + player.height > stars[i].y && starsCollected[i] == 0){ 
        stars[i].c +=1; 
        starsCollected[i] = 1;
    }
    if (stars[i].c == 0 && starsCollected[i] == 0){ 
      ctx.drawImage(sprite[307], stars[i].x, stars[i].y, stars[i].width, stars[i].height); 
    } else if (stars[i].c > 0 && stars[i].c < 2){ 
      star.count+=1; 
      player.score+=25; 
      sfx[0].play(); 
    }
  }
}

var potions = [];
function addPotions(mn, w, h, x1, y1, x2, y2){
let xs = [x1, x2];
let ys = [y1, y2];
  for(i =0; i < 10; i++){
    potions[i] = { x: xs[i], y: ys[i], width: w, height: h, c: 0 };
    if(player.x < potions[i].x + potions[i].width
      && player.x + player.width > potions[i].x
      && player.y < potions[i].y + potions[i].height
      && player.y + player.height > potions[i].y && potionsCollected[i] == 0){ 
      potions[i].c +=1; 
      potionsCollected[i] = 1;
    }
    if (potions[i].c == 0 && potionsCollected[i] == 0){ 
      ctx.drawImage(sprite[308], potions[i].x, potions[i].y, potions[i].width, potions[i].height); 
    } else if (potions[i].c > 0 && potions[i].c < 2){ 
      potion.count+=1; 
      player.score+=30; 
      sfx[0].play(); 
    }
  }
}

var flasks = [];
function addFlasks(mn, w, h, x1, y1, x2, y2){
let xs = [x1, x2];
let ys = [y1, y2];
  for(i =0; i < 10; i++){
    flasks[i] = { x: xs[i], y: ys[i], width: w, height: h, c: 0 };
    if(player.x < flasks[i].x + flasks[i].width
      && player.x + player.width > flasks[i].x
      && player.y < flasks[i].y + flasks[i].height
      && player.y + player.height > flasks[i].y && flasksCollected[i] == 0){ 
        flasks[i].c +=1; 
        flasksCollected[i] = 1;
    }
    if (flasks[i].c == 0 && flasksCollected[i] == 0){ 
      ctx.drawImage(sprite[309], flasks[i].x, flasks[i].y, flasks[i].width, flasks[i].height); 
    } else if (flasks[i].c > 0 && flasks[i].c < 2){ 
      flask.count+=1; 
      player.score+=100; 
      player.lives+=1;
      sfx[0].play(); 
    }
  }
}

var bolts = [];
function addBolts(mn, w, h, x1, y1, x2, y2){
let xs = [x1, x2];
let ys = [y1, y2];
  for(i =0; i < 10; i++){
    bolts[i] = { x: xs[i], y: ys[i], width: w, height: h, c: 0 };
    if(player.x < bolts[i].x + bolts[i].width
      && player.x + player.width > bolts[i].x
      && player.y < bolts[i].y + bolts[i].height
      && player.y + player.height > bolts[i].y && boltsCollected[i] == 0){ 
        bolts[i].c +=1; 
        boltsCollected[i] = 1;
    }
    if (bolts[i].c == 0 && boltsCollected[i] == 0){ 
      ctx.drawImage(sprite[306], bolts[i].x, bolts[i].y, bolts[i].width, bolts[i].height); 
    } else if (bolts[i].c > 0 && bolts[i].c < 2){ 
      bolt.count+=1; 
      player.score+=15; 
      sfx[0].play(); 
    }
  }
}
*/
