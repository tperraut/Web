var canvas = {
	width: 1000,
	height: 600
};

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
	ball.x = 110;
	ball.y = canvas.height / 2;
	ball.display = document.getElementById("ball");
};

function init_players() {
	player1.x = 80;
	player1.y = 230;
	player1.display = document.getElementById("player1");
	player2.x = canvas.width - 80;
	player2.y = 230;
	player2.display = document.getElementById("player2");
};

function init_walls() {
	wall1.x = 0;
	wall1.y = 0;
	wall1.display = document.getElementById("wall1");
	wall2.x = 0;
	wall2.y = canvas.height - wall2.height;
	wall2.display = document.getElementById("wall2");
};

function draw(o) {
	o.display.style.top = o.y + "px";
	o.display.style.left = o.x + "px";
	o.display.style.width = o.width + "px";
	o.display.style.height = o.height + "px";
};

function move(e) {
	var down = canvas.height - (wall2.height + player1.height);
	var up = wall1.height;

	switch (e.key) {
		case 'e':
			if (player1.y - 10 >= up)
				player1.y -= 10;
			break;
		case 'd':
			if (player1.y + 10 <= down)
				player1.y += 10;
			break;
		case 'o':
			if (player2.y - 10 >= up)
				player2.y -= 10;
			break;
		case 'l':
			if (player2.y + 10 <= down)
				player2.y += 10;
			break;
		case ' ':
			ball.speed_x = 4;
			ball.speed_y = 4;
			break;
	}
};

function update() {
	updateBall();
	draw(ball);
	draw(player1);
	draw(player2);
};

function dx(xo, yo, nx, ny, y) {
	try {
		return ((nx - x0) * (y - y0) / (ny - y0));
	}
	catch (e) {
		return (0);
	}
};

function dy(xo, yo, nx, ny, x) {
	try {
		return ((ny - y0) * (x - x0) / (nx - x0));
	}
	catch (e) {
		return (0);
	}
};

function reset(b) {
	if (b) {
		ball.x = player1.x + 10 + player1.width;
		ball.y = canvas.height / 2;
	}
	else {
		ball.x = player2.x - 10 - ball.width;
		ball.y = canvas.height / 2;
	}
	ball.speed_x = 0;
	ball.speed_y = 0;
};

function updateBall() {
	var x0 = ball.x + ball.width / 2;
	var y0 = ball.y + ball.height / 2;
	var nx = x0 + ball.speed_x;
	var ny = y0 + ball.speed_y;

	//Wall1 collision
	if (ny < wall1.height) {
		var y = wall1.height;
		nx = x0 + dx(x0, y0, nx, ny, y);
		ny = y;
		ball.speed_y = -ball.speed_y;
	}
	//Wall2 collision
	if (ny > canvas.height - wall2.height) {
		var y = canvas.height - wall2.height;
		nx = x0 + dx(x0, y0, nx, ny, y);
		ny = y;
		ball.speed_y = -ball.speed_y;
	}
	//Player1 collision
	if (nx < player1.x + player1.width) {
		var x = player1.x + player1.width;
		var y = y0 + dy(x0, y0, nx, ny, x);
		if (y > player1.y && y < player1.y + player1.height) {
			nx = x;
			ny = y;
			ball.speed_x = -ball.speed_x;
		}
		else {
			player2.score += 1;
			reset(false);
			return;
		}
	}
	//Player2 collision
	if (nx > player2.x) {
		var x = player2.x;
		var y = y0 + dy(x0, y0, nx, ny, x);
		if (y > player2.y && y < player2.y + player2.height) {
			nx = x;
			ny = y;
			ball.speed_x = -ball.speed_x;
		}
		else {
			player1.score += 1;
			reset(true);
			return;
		}
	}
	ball.x = nx - ball.width / 2;
	ball.y = ny - ball.height / 2;
};

init_ball();
init_players();
init_walls();
draw(wall1);
draw(wall2);
document.addEventListener("keydown", move);
setInterval(update, 1000/30);
