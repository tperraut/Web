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

function init_ball() {
	ball.x = 120;
	ball.y = 290;
	ball.display = document.getElementById("ball");
}

function init_players() {
	player1.x = 80;
	player1.y = 230;
	player1.display = document.getElementById("player1");
	player2.x = 1000 - 80;
	player2.y = 230;
	player2.display = document.getElementById("player2");
}

function init_walls() {
	wall1.x = 0;
	wall1.y = 0;
	wall1.display = document.getElementById("wall1");
	wall2.x = 0;
	wall2.y = 600 - wall2.height;
	wall2.display = document.getElementById("wall2");
}

function draw(o) {
	o.display.style.top = o.y + "px";
	o.display.style.left = o.x + "px";
	o.display.style.width = o.width + "px";
	o.display.style.height = o.height + "px";
}

function move(e) {
	var down = 600 - (wall1.height + player1.height);
	var up = 20;

	switch (e.key) {
		case 'e':
			if (player1.y - 10 >= up)
				player1.y -= 10
			break;
		case 'd':
			if (player1.y + 10 <= down)
				player1.y += 10
			break;
		case 'o':
			if (player2.y - 10 >= up)
				player2.y -= 10
			break;
		case 'l':
			if (player2.y + 10 <= down)
				player2.y += 10
			break;
	}
}

function update() {
	draw(ball);
	draw(player1);
	draw(player2);
}

function updateBall() {
	var x = ball.x + ball.width / 2;
	var y = ball.y + ball.height / 2;

	
}

init_ball();
init_players();
init_walls();
draw(wall1);
draw(wall2);
document.addEventListener("keydown", move);
setInterval(update, 1000/60);
