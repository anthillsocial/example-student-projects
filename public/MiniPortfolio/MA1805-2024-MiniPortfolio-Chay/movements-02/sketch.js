
let counter = 1;
let x;
let y; 
let img;

function preload (){
img = loadImage("Waterart.jpg");
}

function setup() {
  createCanvas(400, 400);
   x = random (50,350);
  y = random (350,380);
}

function draw() {
  background(220);

  imageMode(CORNER);
  image(img, 0 ,0, 400,400)


  //noLoop ();
  let r = random (100, 255);
  let g = random (100, 255);
  let b = random (100, 255);
  fill (r, g, b, 300);
  
  let bubSize = random (35,80);// bubsize is quite cute 
 // let x = random (50,350);
  //let y = random (350,380)-counter;
  y = y - counter;
  circle (x,y,bubSize);
  
  counter = counter + 0.5;

  if(y < 0){
    y = random (350,380);
    x = random (50,380)
    counter = 0;
  }


  
}


