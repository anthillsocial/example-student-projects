function setup() {
  createCanvas(600, 400);
  background(0);
 
}

function draw() {

  stroke(mouseX,10,mouseY, 40);
  line(0,0,mouseX,mouseY);
   line(600,400,mouseX,mouseY);
  line(600,0,mouseX,mouseY);
   line(0,400,mouseX,mouseY);
}