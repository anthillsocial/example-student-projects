// multiples: 5x5 grid that locks you into
//endless cycle

let grid = 5;
let size = 60;
let offset = 0;

function setup () {
  createCanvas (500, 500);
  background (10, 12, 20);
  noStroke();
  colorMode (HSB, 360, 100,100);
}

function draw() {
  background(10, 12, 20);
  offset += 0.01; 

  for (let x = 0; x < grid; x++) {
    for (let y = 0; y < grid; y++) {
      let px = 80 + x * 90;
      let py = 80 + y * 90;
      let hue = (offset * 100 + x * 60 + y * 30)
      % 360;
      fill (hue, 80, 90);
      ellipse(px, py, size); // NO cos/sin 
    }
  }
}