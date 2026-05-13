// --------------- Spyframe ---------------  

// Inspired by "Matrix Rain in p5.js" tutorial by The Coding Train

// Creating Global Variables
var matrixsymbolSize = 17; //Global Text Size
var streams = []; // Global Variable for Streams

function setup() {
  createCanvas( window.innerWidth, window.innerHeight); //Designates canvas size to current window size
  var x = 0; // Sets x position to 0
  var y = 0; // Sets Y position to 0
  for (var i = 0; i <= width / matrixsymbolSize; i++) { // Repeat the creation of streams
    var stream = new Stream();
    stream.generatematrix(x, random(-400, 0));  // Generates Binary rain while also staggering their starting points
    streams.push(stream); //Add the newly created stream to the array of streams for rendering

    x += matrixsymbolSize; // No overlapping of streams
  }
  textSize(matrixsymbolSize); // Sizes the text to global variant
}

// Rendering Digits
function draw() {
  background(0,300); // Sets alpha

  fill(255,255,255); // White font
  streams.forEach (function(stream) { // Goes through Streams array and draws it on screen
    stream.render();
    });

// Creating the eye and the iris
push(); // push and pop allows to create shapes without interfering with other lines of code
  ellipseMode(CENTER);
  noFill();
  stroke(0, 0, 0, 170);
  strokeWeight(15);
  let size = 500
  ellipse(innerWidth / 2 , innerHeight / 2, size, 190);

  ellipseMode(CENTER);
  noFill();
  stroke(0, 0, 0, 170)
  strokeWeight(10)
  ellipse(innerWidth /2, innerHeight /2, 125,125);
pop();
}

// Binary Rain (Creating blueprint)
function MatrixBinary(x, y, speed) { //Creates contrsuctor function
  this.x = x; // Stores horizontal position
  this.y = y; // Stores vertical position
  this.value;
  this.speed = speed; // How fast the digits move down
  this.Interval = round(random(2, 30)); // Intervals the digits change at

  this.setToRandomMatrixBinary = function() {
    if (frameCount % this.Interval == 0) { // Only changes on certain frames
    this.value = random([0,1]);  //Randomly selects binary digit
  }
}
this.rain = function() {
  this.y = (this.y >= height) ? 0 : this.y += this.speed; // Loops digits back to the top of the screen

}
}


function Stream () {
  this.matrixsymbols = []
  this.totalmatrixsymbols = round(random(15,40));// Number of Binary Digits 
  this.speed = random(0.5, 5); // Speed of vertical stream

  this.generatematrix = function(x, y) {
    for (var i =0; i <= this.totalmatrixsymbols; i++) {
      matrix = new MatrixBinary(x, y, this.speed);
      matrix.setToRandomMatrixBinary(); // Creates Matrix code as each stream with their own properties
      this.matrixsymbols.push(matrix);
      y -= matrixsymbolSize //Staggers digits within a stream over one another to ensure no overlays
    }
      this.render = function () {
        this.matrixsymbols.forEach(function(matrix) {
          text(matrix.value, matrix.x, matrix.y); // renders
            matrix.rain();
            matrix.setToRandomMatrixBinary();

        })
  }}
}