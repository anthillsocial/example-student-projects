let Clear //variables for each image 
let Clouds
let Rain 
let Spray 
let Waves 
let Splash 
let Thunder 
let Wind 
let Darkness
let Sound //sound variable
function setup() {
  createCanvas(400, 400);
  Sound = loadSound("Thunder_Sound.mp3",loaded) //fills variable with sound download 
}

function loaded(){
  Sound.play()// plays sound before all the code is set
}
function draw() {
  background(0);
//centres all images and makes all images the same size to perfectly fit on the 400 by 400 canvas
  imageMode(CENTER)
  image(Clear, width/2, height/2, 400, 400) 

  if(mouseX> 45){
    image(Clouds, width/2, height/2, 400, 400)}  // if mouse goes beyond a certain point, it cycles to different images 
    
  if(mouseX>90){
    image(Rain, width/2, height/2, 400, 400)}
  
  if(mouseX>135){
    image(Spray, width/2, height/2, 400, 400)}
  
  if(mouseX>180){
    image(Waves, width/2, height/2, 400, 400)}
 
  if(mouseX> 225){
    image(Splash, width/2, height/2, 400, 400)}
 
  if(mouseX>270){
    image(Thunder, width/2, height/2, 400,400)}

  if(mouseX>315){
    image(Wind, width/2, height/2, 400, 400)}
 
  if(mouseX>360){
    image(Darkness, width/2, height/2, 400,400)}

}
function preload(){ // makes sure all the image variables are filled before all the code is set
  
  Clear = loadImage('Clear.jpg')    // fills variables with images 
  Clouds = loadImage('Clouds.jpg')
  Rain = loadImage('Rain.jpg')
  Spray = loadImage('Spray.jpg')
  Waves = loadImage('Waves.jpg')
  Splash = loadImage('Splash.jpg')
  Thunder = loadImage('Thunder.jpg')
  Wind = loadImage('Wind.jpg')
  Darkness = loadImage('Darkness.jpg')
  
 

}