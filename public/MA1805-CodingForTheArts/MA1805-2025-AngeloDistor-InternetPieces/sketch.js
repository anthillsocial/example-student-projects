// All of the preloading for assets, and some of the variables associated with them are executed in preload.js for organisation's sake

// Initiating booleans
let appear = false;
let videoPlay = false;
let textFlow = false;
let cycleStart = false;
let timerStarted = false;

// Initiating arrays
let currentArray = [0, 0, 0];
let currentText = ["", "", ""];
let keyboardText = [];

// Initiating indexes for the ordered loading of assets
let textOverflow = 0;
let currentStage = 0;
let profile = -1;
let currentImage = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Creation of timer objects
  TimerObject = new Timer(1000);
  TimerVideo = new Timer(250);
  TimerAppear = new Timer(500);
  TimerImage = new Timer(45);
  TimerText = new Timer(500);

  // Creation of separate objects displaying media
  SlideShowObject = new Slideshow();
  VideoObject = new Slideshow();
  TextObject = new Text();

  // Since there's only one video for each group, we can just use one array
  VideoObject.setArray(vidArray);
}

function draw() {
  background(0);

  // Grassy BG that disappears once the "cycling" starts
  if (!cycleStart) image(bg, 0, 0, windowWidth, windowHeight);

  // If the boolean for "cycling" is true, start function
  if (cycleStart) {
    playMedia();
  }

  // Text laid above the other media. These will disappear once the cycling starts
  textSize(15);
  fill('black');
  textFont('Courier New');
  if (!cycleStart) text("[FLASHING LIGHTS WARNING]", (windowWidth / 2), windowHeight / 1.15);
  if (!cycleStart) text(" type 'play' then press enter to start ", (windowWidth / 2), windowHeight / 1.1);

  // Keyboard inputs are put into an array. This function goes through the list one-by-one to display each character separately
  textSize(25);
  for (i = 0; i < keyboardText.length; i++) {
      text(keyboardText[i], (windowWidth / 8) + (15 * i), windowHeight / 8);
  }
}

// This is the main looping function responsible for the display of media
function playMedia() {
  TimerObject.timerLoop();
  
    // Function to play video
    if (videoPlay) {
      TimerVideo.timerLoop();
      VideoObject.displayVideo(profile);
    }

    // Countdown to making images appear 
    if (!appear) TimerAppear.timerLoop(); 

    // Function to make images appear
    if (appear) {
      SlideShowObject.displayImage(currentImage);
      TextObject.displayText(currentStage, textOverflow);

      TimerImage.timerLoop();
      TimerText.timerLoop();
    }

    // Timed action to stop video
    if (TimerVideo.timerAction(3.75)) {
      VideoObject.stopVideo(profile);
      videoPlay = false;
    }

    // Timed action to start slideshow
    if (TimerAppear.timerAction(1.5)) {
      TimerAppear.timerReset();
      ambienceSound.play();
      appear = true;
    }

    // Timed action to cycle inbetween images + add to text overflow when it starts
    if (TimerImage.timerAction(0.045)) {
      TimerImage.timerReset();
      currentImage++;

      if (currentImage > currentArray.length - 2) {
        currentImage = 0;
      }

      if (textFlow) {
        textOverflow++;
      }
    }

    // Timed action to add to text. Overflow starts after the 3rd cycle
    if (TimerText.timerAction(0.5)) {
      TimerText.timerReset();
      if (currentStage < 4) currentStage++;
      if (currentStage == 4) {
        bellSound.play();
        textFlow = true;
      }
    }

    // Timed action to stop everything
    if (TimerObject.timerAction(6)) {
      TimerText.timerReset();
      TimerObject.timerReset();
      TimerImage.timerReset();
      TimerVideo.timerReset();

      ambienceSound.stop();
      bellSound.stop();

      currentStage = 0;
      textOverflow = 0;
      textFlow = false;
      videoPlay = true;
      cycleStart = false;
      appear = false;
    }
}

function keyPressed() {
  if (!cycleStart) {
    inputLetters();
  }
}

// Function for adding letters to the aforementioned keyboard array
function inputLetters() {
  if (keyCode != BACKSPACE && keyCode != ENTER) {
        keyboardText.push(key);
    }
    if (keyCode == BACKSPACE) {
      wipeKeyboard();
    }

    if (keyCode == ENTER) {
      if ( match( String(keyboardText), 'p,l,a,y' ) ) {
        startCycle();
        wipeKeyboard();
      }
    }
}

function wipeKeyboard() {
    let arrayLength = keyboardText.length;
    for (i = 0; i < arrayLength; i++) {
      keyboardText.pop();
    }
}

// One-time function to start cycle
function startCycle() {
  if (!cycleStart) {
    cycle();
    cycleStart = true;
  }
}


// Initiates cycle by assigning the arrays for text and image.
function cycle() {

  // Profile acts as the index for the array of arrays grouping up the different media assets.
  // ie. if profile = 0, it will be referring to the 'collection' array of images. If profile = 1, it will refer to the 'dog' array of images.
  profile++;
  if (profile > mediaArray.length - 1) {
    clear();
    // PS. This crash is INTENTIONAL and contributes to the eeriness of the art project. The error message in the console should also say "ACCESS is not defined"... Is that cool?
    for (i = 0; i < mediaArray.length; i++) {
      TextObject.setArray(ACCESS);
    }
  }

  arrayCopy(mediaArray[profile], currentArray);
  arrayCopy(textArray[profile], currentText);

  SlideShowObject.setArray(currentArray);
  TextObject.setArray(currentText);

  videoPlay = true;
}