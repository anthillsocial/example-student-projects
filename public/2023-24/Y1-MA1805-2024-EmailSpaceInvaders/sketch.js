let MENU = 0
//how many frames it takes to move an envelope
let MOVE_INTERVAL = 30;
//how many frames between shots
const SHOT_PAUSE = 300;

const scale = 3; // sets obj size

let envs = [];
let shots = [];

let player; // player
let catImg; // cat
let bugImg; // bug
let envImg, senImg, shotImg; // envelope, send button, pointer shots

let frameCount = 0; // allows movement by progressing time
let envSpeed = 1; // speed for envelopes/cats/bugs movement

let score, win; // score and win

let reveals = []; // allows for array for random cat or bug

function preload() {
	envImg = loadImage("env.png"); // envelope
	senImg = loadImage("sen.png"); // send button
	shotImg = loadImage("shot.png"); // pointer shots
	insImg = loadImage("ins.png"); // instructions page

	catImg = loadImage("cat.png"); // cat
    bugImg = loadImage("bug.png"); // bug
	reveals = [catImg, bugImg]; // array for random cat or bug
}

function setup() {
	createCanvas(Math.min(500, window.innerWidth), Math.min(500, window.innerWidth)); // setting canvas
	noSmooth();

	//create envelopes setting height etc
	let envWidth = scale * envImg.width,
		envHeight = scale * envImg.height;

	let x = -(scale * 5 + envWidth) + scale,
		y = scale,
		yidx = 0;
	for (let i = 0; i < 9 * 4; ++i) {
		x += scale * 5 + envWidth;
		if (x >= width - envWidth * 3) {
			y += scale * 5 + envHeight;
			yidx++;
			x = scale;
		}
		envs.push(new env(x, y, envWidth, envHeight, (yidx % 2 == 0) ? envImg : envImg));
	}

	//create player
	player = new Player(width / 2, height - senImg.height * scale, senImg.width * scale, senImg.height * scale, senImg);
	score = 0;
	win = false;

	MOVE_INTERVAL = 30;

	loop();
}

function draw() {

	if (MENU == 0) {
		//  MENU
		print(mouseX, mouseY)
		background(180);

		fill(180, 50, 50);
		textSize(30);
		text('REmailing', 185, 345);
		
		image(envImg, 100, 0, 300, 300)
	  
		fill(100); // INSTRUCTIONS RECTANGLE
		rect(265, 400, 200, 75);
		fill(50, 120, 200); // COMPOSE RECTANGLE
		rect(35, 400, 200, 75);
	  
		fill(255);
		textSize(26)
		text('Compose', 78, 447); // "compose" start button text
	  
		textSize(26);
		text('Instructions', 298, 447); // instructions page button text
	}

	if (MENU == 1) { // START GAME
		background(180)
		gameDraw(); // start the game
	} 
	if (MENU == 2) { // INSTRUCTIONS
		image(insImg, 0, 0, 500, 500) // instructions page image
	
		textSize(20)
		text('Press ESC to return to MENU', 205, 20)
		text('(then ANY KEY also after doing so)', 180, 40)
		
		if (keyCode == ESCAPE) { // input to return to menu (NOT ALLOWED IN GAME OR ELSE BUGGY)
		  MENU = 0
		}
	}
}

function gameDraw() {

	frameCount++; // pass time

    if(mouseIsPressed) {
        move();
    }
	if (keyIsDown(LEFT_ARROW)) { // strafe left
		player.move(-scale);
	} else if (keyIsDown(RIGHT_ARROW)) { // strafe right
		player.move(scale);
	}
	player.update(frameCount);

	let notWon = false; // allows game to end if still cats on screen
	for (let env of envs) {
		env.update(frameCount);
		shots.forEach(shot => {
			if (shot.intersects(env) && env.deadMarked != true) { // if envelope hit
				shot.deadMarked = true;
				MOVE_INTERVAL -= 0.1;

				if (env.img == envImg) {
					env.img = random(reveals); // reveal cat or bug
					
					if (env.img == catImg) { // move cats opposite direction to envelopes
						env.vel.x = -env.vel.x;
					}
					
				} else if (env.img == catImg) { // decrease score if cat hit
					score -= floor((1 / MOVE_INTERVAL) * 300);
					env.deadMarked = true;

				} else if (env.img == bugImg) { // increase score if bug hit
					score += floor((1 / MOVE_INTERVAL) * 300 );
					env.deadMarked = true;
				}
			}
		});

		if (!env.deadMarked && env.img != catImg) { // prevents early ending of game due to cats allowing game to end
			notWon = true;
		}
	}

	if (!notWon) { // enables win again after problems with cats allowing game to end
		win = true;
	}

	for (let shot of shots) {
		shot.update(frameCount); // update shots for movement
	}
	if (envs.some(env => env.right() >= width || env.left() <= 0)) { // move envelopes and cats
		envs.forEach(env => {
			env.pos.add(p5.Vector.mult(env.vel, -1));
			env.vel.x = -env.vel.x;
			if (env.img == catImg) {
				env.pos.y -= scale * 10;

			} else {
				env.pos.y += scale * 5;
			}
		});
	}

	//deletion of shots and envelopes
	shots = shots.filter(shot => !shot.deadMarked && shot.lower() >= 0);
	envs = envs.filter(env => !env.deadMarked);

	//draw

	for (let env of envs) {
		env.draw();
	}
	for (let shot of shots) {
		shot.draw();
	}
	player.draw();

	noStroke();
	textSize(28);
	textAlign(RIGHT, TOP);
	fill(win ? 0 : 0, 0, win ? 0 : 0)
	text(`${score}`, width, 0);

	if (win) {
		textAlign(RIGHT, TOP);

		textAlign(CENTER, CENTER);
		textSize(64);
		text("SCORE:" + `${score}`, width / 2, height / 2);

		noLoop();
	}
}

// allows player to shoot when up pressed
function keyPressed() {
	if (keyCode === UP_ARROW) {
		player.shoot();
	}
}

// mouse controls
function move() {
	if (mouseY < height/2) {
		player.shoot();
	} else if(mouseX > width/2) {
		player.move(scale);
	} else if(mouseX < width/2) {
		player.move(-scale);
	}
}

function mouseClicked() {
	if (MENU == 0) {
	  if (mouseY < 475 && mouseY > 400) {
		if (mouseX < 235 && mouseX > 35) {
		  MENU = 1
		}
		if (mouseX < 465 && mouseX > 265) {
		  MENU = 2
		}
	  }
	}
}

function mousePressed() {
	return false;
}

function mouseDragged() {
	return false;
}

//allows shots to be spawned and controls their bindings
function createShot(x, y) {
	shotPrefab = new Sprite(x, y, shotImg.width * scale, shotImg.height * scale, shotImg);
	shotPrefab.vel = createVector(0, -scale * 2);
	shotPrefab.deadMarked = false;
	shotPrefab.update = function updateShot(frameCount) {
		this.pos.add(this.vel);
	}
	return shotPrefab;
}

const sign = n => n > 0 ? 1 : n === 0 ? 0 : -1;