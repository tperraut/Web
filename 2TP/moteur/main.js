
var init = function () {

    var wall1 = new Sprite(new Vector(0,0), 1000, 20, Infinity,
                             document.getElementById("wall1"));
    var wall2 = new Sprite(new Vector(0,580), 1000, 20, Infinity,
                             document.getElementById("wall2"));
    var wall3 = new Sprite(new Vector(0,20), 20, 560, Infinity,
                             document.getElementById("wall3"));
    var wall4 = new Sprite(new Vector(980,20), 20, 560, Infinity,
                             document.getElementById("wall4"));



    var engine = new Engine();
    /* ajouter les 4 murs au moteur */
    engine.addBody(wall1);
    engine.addBody(wall2);
    engine.addBody(wall3);
    engine.addBody(wall4);
    /* créer un renderer à partir du moteur et appeler sa
       methode update 60 fois par secondes
    */

	var renderer = new Renderer(engine);

	var interval = setInterval(
		function () {
			try {
                renderer.update(1000 / 30);
            } catch (e) {
				clearInterval(interval);
				console.log(e);
			}
        }
	);


    var canvas = document.getElementById("canvas");

    canvas.addEventListener("click", function (ev) {
	if (this != ev.target) return;


	var x = ev.offsetX;
	var y = ev.offsetY;


	var div = document.createElement("div");
	div.className = "object";
	var sprite = new Sprite(new Vector(x,y), 30, 30, 3, div);
	sprite.force = new Vector(0.01,0.01);
	canvas.appendChild(div);
	engine.addBody(sprite);

	div.addEventListener("click", function (ev) {
		canvas.removeChild(div);
	    engine.removeBody(sprite);
	});



    });



};

window.addEventListener("load", init);
