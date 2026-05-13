let point_x;
let point_y;
let point_x2;
let point_y2;

function setup() {
  createCanvas(500, 500);
  frameRate(15); 
  //beginning point
  point_x = random(0,500);
  point_y = random(0,500);
  point_x2 = random(0,500);
  point_y2 = random(0,500);
}

function draw() {
  background(255,30);

  //draw lines
  stroke(random(255),random(255),random(255));
  strokeWeight(2);
  line(point_x, point_y,point_x2, point_y2);

  point_x = point_x2;
  point_y = point_y2;
  point_x2 = random(0,500);
  point_y2 = random(0,500);

  stroke(0,0,0);
  square(200, 200, 100);

  //text in the middle
  textSize(random(5,15));
  strokeWeight(0.5);
  textAlign(CENTER, CENTER);
  text('everything is okay', random(245,255), random(250,255));
  }
