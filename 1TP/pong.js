var ball = {
	x : 0,
	y : 0,
	width: 20,
	height: 20,
	speed_x : 0,
	speed_y : 0,
	display : null
};

var player1 = {
	score: 0,
	x : 0,
	y : 0,
	width: 20,
	height: 140,
	display: null
};

var player2 = {
	score: 0,
	x : 0,
	y : 0,
	width: 20,
	height: 140,
	display: null
};

var wall1 = {
	x : 0,
	y : 0,
	width: 1000,
	height : 20,
	display: null
};

var wall2 = {
	x : 0,
	y : 0,
	width: 1000,
	height : 20,
	display: null
};


var init_ball = function () {
	ball.x = 120;
	ball.y = 290;
	ball.display = document.getElementById("ball");
}
/* A COMPLÉTER */
