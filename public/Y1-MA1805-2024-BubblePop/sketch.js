let bubbles = [];
let score = 0; // Initial score 
let timer = 15; // Initial game duration in seconds
let playing = false;
let paused = false; 
let level = 1; // Initial game level
let playButton, pauseButton, resumeButton, nextLevelButton;
let backgroundMusic = null; 
let combo = 0; 
let comboMultiplier = 1;

function preload() {

backgroundMusic = new Audio('backgroundmusic.mp3')

}

function setup() {
  createCanvas(700, 400);
  frameRate(60);



  // Creating buttons
  playButton = createButton('Play');
  playButton.position(width / 2 - 38, height / 2 + 120);
  playButton.mousePressed(startGame);

  pauseButton = createButton('Pause');
  pauseButton.position(width / 2 + 10, height / 2 +120);
  pauseButton.mousePressed(pauseGame);
  pauseButton.attribute('disabled', true);

  resumeButton = createButton('Resume');
  resumeButton.position(width / 2 + 70, height / 2 + 120 );
  resumeButton.mousePressed(resumeGame);
  resumeButton.attribute('disabled', true);

  nextLevelButton = createButton('Next Level');
  nextLevelButton.position(width / 2 - 125, height / 2 + 120);
  nextLevelButton.mousePressed(startNextLevel);
  nextLevelButton.attribute('disabled', true);
}


function draw() {
  background(0);
backgroundMusic.play();
  if (playing) {
    if (!paused) {
      let allPopped = true; // Flag to check if all bubbles are popped

      for (let bubble of bubbles) {
        moveBubble(bubble);
        checkBoundaryCollision(bubble);
        drawBubble(bubble);

        if (!bubble.hit) {
          allPopped = false; // If any bubble is not popped, setting the flag to false
        }
      }

      if (allPopped) {
        levelWon(); // Calling the function to handle winning the level
      }

      displayScore();
      displayTimer();

      // timer update 
      if (frameCount % 60 == 0 && timer > 0) {
        timer--;
      }

      // Check if the game is over
      if (timer === 0) {
        gameOver();

        
      backgroundMusic.pause();

      }
    }
  } else {
    // Displays introduction when not playing
    fill(2550, 0 , 127);
    textSize(24);
    textAlign(CENTER);
    text('Welcome to Bubble Blitz!', width / 2, height / 2 - 50);
    textSize(18);
    text('Get ready for an immersive bubble-popping experience!', width / 2, height / 2 - 20);
    text('Press the "Play" button to start your popping adventure.', width / 2, height / 2 + 10);
  }



}


function createBubbles() {
  bubbles = [];

  // Increase the speed for each level
  let speedMultiplier = 1 + (level - 1) * 0.15; 

  for (let i = 0; i < 20 + level * 3; i++) {
    let bubble = {
      x: random(30, width - 30),
      y: random(30, height - 30),
      radius: 30,
      xspeed: (random(1, 1) + speedMultiplier) * (random() > 0.5 ? 1 : -1),
      yspeed: (random(1, 1) + speedMultiplier) * (random() > 0.5 ? 1 : -1),
      hit: false
    };
    bubbles.push(bubble);
  }
}

function moveBubble(bubble) {
  bubble.x += bubble.xspeed;
  bubble.y += bubble.yspeed;
}

function checkBoundaryCollision(bubble) {
  if (bubble.x + bubble.radius > width || bubble.x - bubble.radius < 0) {
    bubble.xspeed *= -1;
  }
  if (bubble.y + bubble.radius > height || bubble.y - bubble.radius < 0) {
    bubble.yspeed *= -1;
  }
}

function drawBubble(bubble) {
  if (!bubble.hit) {
   
    fill(random(255), random(255), random(255));
    ellipse(bubble.x, bubble.y, bubble.radius * 2, bubble.radius * 2);
  }
}


function mousePressed() {
  if (playing && !paused) {
    let bubbleHit = false; // Flag to track if any bubble is hit in this mouse press

    for (let bubble of bubbles) {
      let distance = dist(bubble.x, bubble.y, mouseX, mouseY);

      if (distance <= bubble.radius && !bubble.hit) {
        console.log('Hit bubble!');
        bubble.hit = true;
        score += 10 * comboMultiplier; // Increase the score with combo multiplier
        bubbleHit = true;

        
      }
    }

    // Checka if a bubble was hit
    if (bubbleHit) {
      combo++;
      comboMustiplier = 1 + Math.floor(combo / 5); //This Increases combo multiplier every 5 consecutive hits
    } else {
      // If no bubble was hit, the combo will reset 
      combo = 0;
      comboMultiplier = 1;
    }
  }
}

function displayScore() {
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text(`Score: ${score}`, 20, 30);
  text(`Combo: ${combo} (x${comboMultiplier})`, 20, 60); // Displays the combo and multiplier
}

function displayScore() {
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text(`Score: ${score}`, 20, 30);
}

function displayTimer() {
  fill(255);
  textSize(20);
  textAlign(RIGHT);
  text(`Time: ${timer}`, width - 20, 30);
}

function gameOver() {
  playing = false;
  playButton.show(); 
  pauseButton.attribute('disabled', true);
  resumeButton.attribute('disabled', true);
  nextLevelButton.attribute('disabled', true);
  noLoop(); 
  fill(255, 0, 0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text('Game Over', width / 2, height / 2);
  textSize(20);
  text(`Your score: ${score}`, width / 2, height / 2 + 100);
}

function levelWon() {
  playing = false;
  playButton.show(); 
  pauseButton.attribute('disabled', true);
  resumeButton.attribute('disabled', true);

  if (level < 10) {
    nextLevelButton.removeAttribute('disabled');
  }

  noLoop(); // Stop the draw loop
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);

  if (level < 10) {
    text('Level Won!', width / 2, height / 2);
  } else {
    text('Congratulations! You completed all levels!', width / 2, height / 2);
  }

  textSize(20);
  text(`Your score: ${score}`, width / 2 + 20, height / 2 + 80);
}

function startGame() {
  playing = true;
  paused = false;
  level = 1; // Reset level to 1 for a new game
  playButton.attribute('disabled', true);
  pauseButton.removeAttribute('disabled');
  resumeButton.attribute('disabled', true);
  nextLevelButton.attribute('disabled', true);
  score = 0;
  timer = 30;
  createBubbles();
  loop(); // Starting the draw loop
}

function pauseGame() {
  paused = true;
  playButton.attribute('disabled', true);
  pauseButton.attribute('disabled', true);
  resumeButton.removeAttribute('disabled');
}

function resumeGame() {
  paused = false;
  playButton.attribute('disabled', true);
  pauseButton.removeAttribute('disabled');
  resumeButton.attribute('disabled', true);
  loop(); // Resuming the draw loop
}

function startNextLevel() {
  playing = true;
  paused = false;
  level++;
  playButton.attribute('disabled', true);
  pauseButton.removeAttribute('disabled');
  resumeButton.attribute('disabled', true);
  nextLevelButton.attribute('disabled', true);
  score = 0;
  timer = 30;
  createBubbles();
  loop(); // Startin the draw loop
}
























































