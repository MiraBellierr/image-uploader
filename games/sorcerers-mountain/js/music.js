function PlayMusic(m) {
	if (m === 1) {
		//play game screen music
		sfx[11].pause();
		sfx[11].currentTime = 0;
		sfx[10].addEventListener(
			"ended",
			function () {
				if (sfx[10].currentTime === sfx[10].duration - 0.34) {
					sfx[10].currentTime = 0.1;
					sfx[10].play();
				}
			},
			false
		);
		sfx[10].play();
	}
	if (m === 2) {
		//play title music
		sfx[10].pause();
		sfx[10].currentTime = 0;
		sfx[11].addEventListener(
			"ended",
			function () {
				if (sfx[11].currentTime === sfx[11].duration - 0.34) {
					sfx[11].currentTime = 0.1;
					sfx[11].play();
				}
			},
			false
		);
		sfx[11].play();
	}
	if (m === 0) {
		sfx[10].pause();
		sfx[10].currentTime = 0;
	}
}

//sfx[22].addEventListener('ended', function() {
//    sfx[22].currentTime = 0;
//    sfx[22].play();
//}
//}, false);

//sfx[22].addEventListener('ended', function(){
//                if(sfx[22].currentTime === sfx[22].duration - .34){
//                    sfx[22].currentTime = 0.1;
//                    sfx[22].play();
//                }}, false);
