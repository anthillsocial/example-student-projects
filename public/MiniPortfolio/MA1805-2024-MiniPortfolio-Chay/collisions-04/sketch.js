let size = 50
let x;
let y;
let myFill = 255
let speed = 10;
let score = 0;
let img;
let img2;
// variables

function preload (){
img = loadImage("pond.jpg");
img2 = loadImage("peb03.png"); // images

}

function setup() {
  createCanvas(1000, 400);
  x = width/2
  y = height/2 //screen 
}

function draw() {
  background(220);
  imageMode(CORNER);
  image(img, 0, 0, 1000, 400);
 
  ellipse(x,y,size);
  x = x % width;
  x+=speed; // this increases the speed 
  
  fill (150);
  ellipse (mouseX, mouseY, size)
  imageMode(CENTER);
  image(img2,mouseX,mouseY,75,75); // the actual movement of the pebble to collide with the circle 


  let distance = dist(x,y,mouseX, mouseY);
  if (distance<size){
    myFill = [0,84,199]
    score++;
    y = random (0,380);
    x = random (200,380) // how the score 
  }else{
    myFill= 150;
  }

  fill (myFill);

  textSize(50)
  text (score, 950, 370,);

  if(x>=1000){
    score=0; // and if it reaches the end, your score resets. 
  }
}
