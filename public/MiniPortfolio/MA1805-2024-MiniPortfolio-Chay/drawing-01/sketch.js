function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(111, 11, 0); //the background red

  fill (220,20,20); // the lighter red which acts as the glow
  square (50,50,300,); // the shape of the glow
  filter (BLUR,45); // the glow

  fill (27, 54, 102); // outer blue ring 
  circle (200,200,375);
  
  fill (201, 180, 26); // outer yellow ring
  circle (200,200,300);

  fill (27, 54, 102); // middle blue ring
  circle (200,200,225);
 
  fill (201, 180, 26); //centre yellow ring 
  circle (200,200,150);

  fill (27, 54, 102); //centre circle 
  circle (200,200,60);

}
