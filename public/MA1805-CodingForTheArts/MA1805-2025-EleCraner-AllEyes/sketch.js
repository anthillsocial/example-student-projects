
   // -- Customise Key -- //
 let spacing = 90;
 let eyes = [];
 let blinkingMultipler = 1; // Blink speed
 let maxBlinkSpeed = 8; // Maximum speed
 let timeFactor = 0.005; // Speed of offset
 let wobbleAmount = 2; // Max offset
// Colours
 let colours = {
  main: [209, 82, 111],
  eyeWhite: [232, 232, 232],
  iris: [35, 152, 204],
  pupil: [18, 27, 31],
  highlight: [240, 240, 240],
};


 // -- Function and Data -- //
  // Circle and Fill //
function colourCircle(x, y, diameter, c) {
  fill(c);
  noStroke();
  ellipse(x, y, diameter);
}
  // Eye Drawing //
function eyeDraw(x, y, blink) {

 let dx = mouseX - x;   
 let dy = mouseY - y;   
 let angle = atan2(dy, dx); 
 let distLimit = 5;
 let irisX = x + cos(angle) * distLimit;
 let irisY = y + sin(angle) * distLimit;

  colourCircle(x, y, 60, color(colours.eyeWhite)); 
  colourCircle(irisX, irisY, 30, color(colours.iris)); 
  colourCircle(irisX, irisY, 22, color(colours.pupil));
// Highlight wobble 
   let t = millis() * timeFactor; 
   let wobbleX1 = sin(t + x * 0.1 + y * 0.1) * wobbleAmount;
   let wobbleY1 = cos(t + y * 0.1 + x * 0.1) * wobbleAmount;
   let wobbleX2 = cos(t + x * 0.2) * wobbleAmount;
   let wobbleY2 = sin(t + y * 0.2) * wobbleAmount;

  colourCircle(irisX - 11 + wobbleX1, irisY + 7 + wobbleY1, 7, color(colours.highlight));
  colourCircle(irisX + 11 + wobbleX2, irisY - 7 + wobbleY2, 14, color(colours.highlight));
// Eyelids
 fill(color(colours.main));
 noStroke();
  let lidHeight = 200 * blink;
 arc(x, y - 30, 100, lidHeight, 0, PI, CHORD);
}


  // -- Resized Eye Canvas -- //
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(color(colours.main));

  // Eye Grid Data //
  let cols = (width / spacing);
  let rows = (height / spacing);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
     let xpos = x * spacing + spacing / 2;
     let ypos = y * spacing + spacing / 2;
     let blinkOffset = (x + y) * 100;
// Eye Array 
      eyes.push({
        x: xpos,
        y: ypos,
        blinkOffset: blinkOffset,
        blinkDuration: 200
      });
    }
  }
}


  // -- Setup and Draw -- //
function setup() {
 windowResized(windowWidth, windowHeight);
 background(color(colours.main));
}

function draw() {
  background(color(colours.main));
// Blinking 
  let time = millis() 
  for (let eye of eyes) {
    let blinkPhase = (time + eye.blinkOffset) %2000;
    let blinkAmount = 0;

    if (blinkPhase < eye.blinkDuration) {
      blinkAmount = map(blinkPhase, 0, eye.blinkDuration, 0, 1);
    } else if (blinkPhase < eye.blinkDuration * 2) {
      blinkAmount = map(blinkPhase, eye.blinkDuration, eye.blinkDuration * 2, 1, 0);
    }

    eyeDraw(eye.x, eye.y, blinkAmount);
  }
}



