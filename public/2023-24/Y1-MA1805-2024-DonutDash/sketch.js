// Declaring variables
let baddies = 4; // Number of baddies
let baddiesX = []; // Array to store x-coordinates of baddies
let baddiesY = []; // Array to store y-coordinates of baddies
let baddiesSpeed = []; // Array to store speed of baddies
let policeY = 350; // Y-coordinate of the police character
let img; // Variable to store the image
let stage = 0; // Game stage (0 for splash screen, 1 for gameplay)
let appleX = 0; // X-coordinate of the apple
let appleY = 0; // Y-coordinate of the apple
let appleSpeed = 8; // Speed of the apple
let gameEnded = false; // Indicates that the game has ended
let score = 0; // Player's score

// Preload function
function preload() {
  img = loadImage('stat.png'); // Load image
}

function setup() {
  createCanvas(700, 400); // Create canvas
  rectMode(CENTER); // Set rectangle mode to center
  for (let i = 0; i < baddies; i++) {
    // Setting baddies' speed (between 5 and 10) and x-coordinate as random
    baddiesX[i] = random(20, width - 20);
    baddiesY[i] = 0;
    baddiesSpeed[i] = random(5, 10);
  }
  console.log(baddiesSpeed); // Print baddies' speeds to the console
}

function draw() {
  if (stage === 0) {
    // Splash screen stage (this function creates the lobby of the game)
    background('pink'); // Set background color
    fill(255, 255, 153); // yellow title color
    textFont('Impact'); // Sets font
    textSize(30); // Sets text size
    text('D O N U T   D A S H', width / 2.7, height / 3); // Title of game
    fill('white'); 
    textFont('American Typewriter'); 
    textSize(24);
    text('CLICK ANY KEY TO START', width / 3.45, height / 1.7);
    text('(control with mouse)', width / 3.45, height / 1.6);
    textSize(15);
    text('Collect as many donuts as you can!', width / 3, height / 1.3);
    text('Make sure you do not grab any apples, they are not a part of your diet!', width / 6.5, height / 1.2);
    splashScreen(); // Using the splash screen funtion

    // Sprinkles to decorate lobby 
    fill(255, 255, 128); // yellow sprinkes
    ellipse(150, 200, 5, 5);

    fill(255, 255, 128);
    ellipse(50, 150, 5, 5);

    fill(255, 255, 128);
    ellipse(100, 100, 5, 5);

    fill(255, 255, 128);
    ellipse(300, 170, 5, 5);

    fill(255, 255, 128);
    ellipse(75, 300, 5, 5);

    fill(255, 255, 128);
    ellipse(350, 40, 5, 5);

    fill(255, 255, 128);
    ellipse(580, 72, 5, 5);

    fill(255, 255, 128);
    ellipse(650, 350, 5, 5);

    fill(255, 255, 128);
    ellipse(360, 200, 5, 5);

    fill(255, 255, 128);
    ellipse(250, 370, 5, 5);

    fill(255, 255, 128);
    ellipse(620, 220, 5, 5);

    fill(153, 204, 255); // blue sprinkles
    ellipse(580, 270, 5, 5);

    fill(153, 204, 255);
    ellipse(396, 260, 5, 5);

    fill(153, 204, 255);
    ellipse(54, 44, 5, 5);

    fill(153, 204, 255);
    ellipse(100, 220, 5, 5);

    fill(153, 204, 255);
    ellipse(390, 160, 5, 5);

    fill(153, 204, 255);
    ellipse(500, 50, 5, 5);

    fill(153, 204, 255);
    ellipse(200, 75, 5, 5);

    fill(153, 204, 255);
    ellipse(640, 130, 5, 5);

    fill(153, 204, 255);
    ellipse(500, 380, 5, 5);

    fill(204, 153, 255); // purple sprinkles
    ellipse(350, 355, 5, 5);

    fill(204, 153, 255);
    ellipse(550, 150, 5, 5);

    fill(204, 153, 255);
    ellipse(220, 185, 5, 5);

    fill(204, 153, 255);
    ellipse(180, 290, 5, 5);

    fill(204, 153, 255);
    ellipse(300, 75, 5, 5);

    fill(204, 153, 255);
    ellipse(305, 275, 5, 5);
  } else { // If stage is not 0 then change to gameplay stage
    // Gameplay stage
    background(img); // Sets background to image
    gameplay();
  }
}

function keyPressed() { // If any key on keyboard is pressed, change to gameplay stage (stage = 1 is key is pressed)
  if (stage === 0) {
    stage = 1;
  }
}

// Splash screen function
function splashScreen() {
  
}

// Gameplay function
function gameplay() {
  fill(0);
  textSize(20);
  text('Score: ' + score, 600, 370); // Dislays the player's score (how many donuts they catch)

  // Animating the baddies
  for (let i = 0; i < baddies; i++) {
    donut2(baddiesX[i], baddiesY[i]);

    baddiesY[i] += baddiesSpeed[i]; // Updates the y-coordinates of the baddies based on its speed
    if (baddiesY[i] > height) {
      // If the baddie (donut) goes bellow the canvas, reset its position
      baddiesY[i] = 0;
      baddiesX[i] = random(20, width - 20);
    }

    let baddieW = 75;
    let baddieH = 75;
    if (dist(baddiesX[i], baddiesY[i], mouseX, policeY) < baddieH / 2) {
      // If the  police character collides with a donut, the donut dissapears off the screen
      console.log('HIT');
      baddiesY[i] = 0;
      // If the police character collides with a donut, increase its score
      score++;
    }
  }


  police(); // Draw the police character
  apple(appleX, appleY); // Draw the apple
  appleY += appleSpeed; // Update the y-coordinates of the apple based on its speed

  let appleW = 40; // Width of apple
  let appleH = 47; // Height of apple

  // If mouse/police hits apple the game ends
  if (
    dist(mouseX, policeY, appleX, appleY) < appleH / 2 
  ) {
    gameEnded = true;
  }

  if (gameEnded) {
    // The screen when the game is over
    background('black');
    textSize(30);
    fill('red');
    textAlign(CENTER, CENTER);
    text('Game Over', width / 2, height / 2);
    fill('white');
    textSize(15);
    text('Refresh to play again', width / 2, height / 1.65);
    fill(230, 0, 0); // red circles that represent blood splatters
    ellipse(100, 100, 50, 50);
    fill(230, 0, 0);
    ellipse(120, 150, 20, 20);
    fill(230, 0, 0);
    ellipse(130, 130, 10, 10);
    fill(230, 0, 0);
    ellipse(65, 65, 20, 20);
    fill(230, 0, 0);
    ellipse(85, 65, 10, 10);
    fill(230, 0, 0);
    ellipse(60, 85, 7, 7);
    fill(230, 0, 0);
    ellipse(550, 300, 60, 60);
    fill(230, 0, 0);
    ellipse(605, 330, 20, 20);
    fill(230, 0, 0);
    ellipse(600, 300, 15, 15);
  }
}
  




function donut2(myX, myY){
  
  // creating donut
  fill(255, 204, 153);    // Setting base color of donut
  ellipse(myX, myY, 75, 75); 
  
  // creating pink icing
  fill(255, 153, 204);
  ellipse(myX, myY, 65, 65); 

  // creating sprinkles
  fill(255, 255, 128);
  ellipse(myX+0, myY-20, 4, 4);

  fill(255, 255, 128);
  ellipse(myX+15, myY+15, 4, 4);

  fill(255, 255, 128);
  ellipse(myX+20, myY-5, 4, 4);

  fill(255, 255, 128);
  ellipse(myX-15, myY+8, 4, 4);

  fill(153, 204, 255);
  ellipse(myX, myY+25, 4, 4);

  fill(153, 204, 255);
  ellipse(myX-23, myY-5, 4, 4);

  fill(153, 204, 255);
  ellipse(myX+12, myY-18, 4, 4);

  fill(153, 204, 255);
  ellipse(myX-12, myY-20, 4, 4);

  fill(204, 153, 255);
  ellipse(myX+23, myY+9, 4, 4);

  fill(204, 153, 255);
  ellipse(myX-13, myY+17, 4, 4);

  fill(204, 153, 255);
  ellipse(myX+-13, myY-10, 4, 4);

  fill(255, 255, 255);
  ellipse(myX, myY, 20, 20);

}
// Designing the police
function police(){
  fill(255, 217, 179);
  rect(mouseX, 380, 20, 20); // Can only move mouseo on the x-axis

  fill(255, 217, 179);
  ellipse(mouseX, 353, 60, 50)

  fill(0);
  ellipse(mouseX-10, 350, 4, 4);

  fill(0);
  ellipse(mouseX+10, 350, 4, 4);

  fill(255, 153, 153);
  rect(mouseX, 365, 12, 2);

  fill(0, 51, 204);
  rect(mouseX, 395, 65, 20);

  fill(0, 51, 204);
  ellipse(mouseX, 330, 53, 27)

  fill(230, 184, 0);
  ellipse(mouseX, 330, 15, 15)

}

// Setting up apple function
function apple() {
  if (appleY > height) {
    // Reset apple position when it goes below the canvas
    appleX = random(20, width - 20);
    appleY = 0;
  }

  // Draw the apple
  fill(102, 51, 0);
  rect(appleX+10, appleY-27, 4, 10);

  fill(255, 51, 0);
  ellipse(appleX, appleY, 40, 50);

  fill(255, 51, 0);
  ellipse(appleX+20, appleY, 40, 50);

  // Update apple position
  appleY += appleSpeed;
}



