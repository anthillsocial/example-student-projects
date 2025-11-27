let bullet_holes //variable for the transparent image

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
  background(135, 27, 27) //RGB colour Red 
  
  fill(24, 54, 115)                   //creating the target using circles and colouring them with fill
  circle(width/2, height/2, 375)
  
  fill(222, 227, 68)
  circle(width/2, height/2, 285)
  
  fill(24, 54, 115)
  circle(width/2, height/2, 200)
 
  fill(222, 227, 68)
  circle(width/2, height/2, 125)
  
  fill(24, 54, 115)
  circle(width/2, height/2, 55)
  tint(255,155)
   
  
  image(bullet_holes, width/2, height/2, 250, 100) // by putting variable within image, my transparent image is displayed with the size and location values to organise it at the centre of the target
  imageMode(CENTER) // centres image on the canvas
  
}
function preload(){
  bullet_holes = loadImage('Bullet Holes.png') //filling the empty variable with load image so that it holds the image within variable
}