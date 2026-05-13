
// Default, empty arrays as a preset and for resetting values
let defaultArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
let emptyArray = [];
let positioningArray = [];

// Arrays for different wordbanks to be picked randomly from
let articleRandom = ["those","these","your","the","my","their","his","her","heaven's","life's","our","earth's","people's"];
let nounRandom = ["programs","wires","machines","systems","minds","engines","designs","variables","networks","hearts","creatures","ecosystems", "circuits","words","desires","fires","numbers","[REDACTED]","wishes","dreams"];
let linkingRandom = ["are","were","fail,","succeed,","wander,","start","stop","leave,","wander,","sing,","scatter,"];
let adverbRandom = ["slowly","rapidly","staunchly","desperately","carefully","calmly","gently","swiftly","proudly","secretly","lightly","constantly","indefinitely","seldom","forever","never"];
let verbRandom = ["imagining","sleeping","speaking","sparking","thinking","creating","crying","evolving", "watching", "connecting","grasping","losing","fading","falling","failing","reading","writing","sailing","running","walking","flying","reading","fighting","shining","laughing","smiling","cheering","winning","existing","burning","[REDACTED]","glistening","loving","raging","speaking","searching"];

// Empty array for the placeholders that fill the top and bottom parts of the screen
let emptyRandom = [" ", " ", " "]


let scrambleValue = 0;
let finishScrambling = false;

let posX = 0;
let posY = 200;

let typeSound;

function preload() {
  soundFormats('wav','mp3','ogg');
  typeSound = loadSound('assets/typing.wav');
  typeSound.setVolume(1);

  finishSound = loadSound('assets/typefinish.wav');
  drumSound = loadSound('assets/drum.wav');
  drumSound.setVolume(0.3);

  ambientSound = loadSound('assets/ambience.mp3');
  ambientSound.setVolume(0.05);
}

function setup() {
  createCanvas(400, 400);
  setPositions(60, 30);
  drumSound.play();
  typeSound.play();
  ambientSound.loop();

  // Top-screen filler
  placeholder1 = new Word( emptyRandom, [], [], [], [], positioningArray[0]);
  placeholder2 = new Word( emptyRandom, [], [], [], [], positioningArray[1]);
  placeholder3 = new Word( emptyRandom, [], [], [], [], positioningArray[2]);

  // Middle-screen filler
  article = new Word( articleRandom, [], [], [], [], positioningArray[3]);
  noun = new Word( nounRandom, [], [], [], [], positioningArray[4]);
  linking = new Word( linkingRandom, [], [], [], [], positioningArray[5]);
  adverb = new Word( adverbRandom, [], [], [], [], positioningArray[6]);
  verb = new Word( verbRandom, [], [], [], [], positioningArray[7]);

  // Bottom-screen filler
  placeholder4 = new Word( emptyRandom, [], [], [], [], positioningArray[8]);
  placeholder5 = new Word( emptyRandom, [], [], [], [], positioningArray[9]);
  placeholder6 = new Word( emptyRandom, [], [], [], [], positioningArray[10]);
 
  setInterval(scrambleFunction, 100);
  //initiateAll();
}

function mouseClicked() {
  typeSound.stop();
  finishScrambling = false;
  drumSound.play();
  typeSound.play();
  
  // All of the objects are restarted then initiated
  article.refresh();
  noun.refresh();
  linking.refresh();
  adverb.refresh();
  verb.refresh();

  placeholder1.refresh();
  placeholder2.refresh();
  placeholder3.refresh();
  placeholder4.refresh();
  placeholder5.refresh();
  placeholder6.refresh();
}

// zeroScramble is responsible for allocating random digits to each array index
function draw() {
  article.zeroScramble();
  noun.zeroScramble();
  linking.zeroScramble();
  adverb.zeroScramble();
  verb.zeroScramble();

  placeholder1.zeroScramble();
  placeholder2.zeroScramble();
  placeholder3.zeroScramble();
  placeholder4.zeroScramble();
  placeholder5.zeroScramble();
  placeholder6.zeroScramble();

  drawLines();
}

function wipeAll(array) {
  for (i = 0; i < array.length + 1; i++) {
    array.pop();
  }
}

// Automating the positions for each object
function setPositions(starting, spacing) {
  arrayCopy(emptyArray, positioningArray)
  positioningArray.push(starting)
  let startValue = starting;

  for (i = 0; i < 10; i++) {
    positioningArray.push( startValue+=spacing )
  }
}

// For each array of characters, check if they're still scrambling 
function scrambleFunction() {
  checkScramble(article);
  checkScramble(noun);
  checkScramble(linking);
  checkScramble(adverb);
  checkScramble(verb);

  checkScramble(placeholder1);
  checkScramble(placeholder2);
  checkScramble(placeholder3);
  checkScramble(placeholder4);
  checkScramble(placeholder5);
  checkScramble(placeholder6);

}

function drawLines() {
  clear();
  background('#19191aff');
  posX = -20;

  for (i = 0; i < defaultArray.length; i++) {
    textFont('Courier New');
    textSize(30);

    // Green text while scrambling
    fill('#5cdb86ff');

    // Change text to white after scrambling
    if (finishScrambling) {
      fill('#e8e0e0ff');
    }

    // Top-screen filler
    text(placeholder1.display[i], posX, placeholder1.position);
    text(placeholder2.display[i], posX, placeholder2.position);
    text(placeholder3.display[i], posX, placeholder3.position);

    // Mid-screen filler
    text(article.display[i], posX, article.position);
    text(noun.display[i], posX, noun.position);
    text(linking.display[i], posX, linking.position);
    text(adverb.display[i], posX, adverb.position);
    text(verb.display[i], posX, verb.position);

    // Bottom-screen filler
    text(placeholder4.display[i], posX, placeholder4.position);
    text(placeholder5.display[i], posX, placeholder5.position);
    text(placeholder6.display[i], posX, placeholder6.position);

    posX += 30;
  }
}

function checkScramble(wordObject) {
  let randomScramble = wordObject.scramble;

  // If there are still characters to scramble, keep scrambling
  if (!checkIfScrambleFinished(randomScramble)) {
    for (i = 0; i < randomScramble.length; i++) {
      reduceScramble(i, wordObject);
    }
  } else {
    if (!finishScrambling) {
      typeSound.stop();
      finishSound.play();
      drumSound.play();

      console.log("finished!")
      finishScrambling = true;
    }
  }
}

// Subtract scrambling value
function reduceScramble(index, wordObject) {
    let randomLength = wordObject.scramble;

    scrambleValue = int(randomLength[index]);
    if (scrambleValue > 0) {
      scrambleValue--;
      if (scrambleValue == 0) {
        replaceIndex(index, wordObject);
      }
    }

    randomLength[index] = scrambleValue;
}

// Function responsible for replacing each array position with the right character
function replaceIndex(index, wordObject) {
  wordObject.updateDisplay(index);

  drawLines();
}

function checkIfScrambleFinished(randomScramble) {
  let sum = 0;
  for (i = 0; i < randomScramble.length; i++) {
    sum += int(randomScramble[i]);
  }

  if (sum == 0) {
    return true;
  }

  return false;
}