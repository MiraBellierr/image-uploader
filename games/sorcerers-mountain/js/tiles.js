/* ================================
TILE KEY:
0 - blank space
1 - base block dark grey
2 - base block left - lives
3 - base block right - lives
4 - base block light grey
5 - wall block light grey
6 - wall block bricks light grey
7 - stones block
8 - pedestal topper
9 - floating platform 2 bricks
10 - pedestal base
11 - low pedestal
12 - floating platform 1 brick
13 - game monitor left tile
14 - game monitor right tile
15 - title screen background
16 - game screen background stone wall
=================================== */
const tile = [];
for (i = 0; i < 17; i++) {
	tile[i] = new Image();
	tile[i].src = `tilesets/building_tiles/${i}.png`;
}
