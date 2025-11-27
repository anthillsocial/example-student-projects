


function setup() {
  createCanvas(450, 400);
}

function draw() {
  background('brown');
 
  GameWorld() //custom function that draws first before other code
  //Game Environment that sets up the barriers for the collisions between the avatar and rectangle edges
   noStroke()
  if(mouseX + 37 > 50 && mouseX < 50 + 180 && mouseY + 37 > 0 && mouseY < 0 +150){  // all code which uses this essentially compares the location between the avatar and the rectangle, carrying out the if statement when both overlap eachother.
    fill(0, 157, 16)
    rect(50, 0, 180, 150 )
    } 

   // rect 1 
  
  
  if(mouseX + 37 > 50 && mouseX < 50 + 130 && mouseY + 37 > 200 && mouseY < 200 + 200){
    fill(0, 157, 16)
  rect(50, 200, 130, 200)}
  
  
  
  
  if(mouseX + 37 > 180 && mouseX < 180 +165 && mouseY + 37 > 335 && mouseY < 335+ 65){
    fill(0, 157, 16)
  rect(180, 335, 165, 65)}
  
 
  
  if(mouseX + 37 > 230 && mouseX < 230 + 65 && mouseY + 37 > 100 && mouseY < 100 + 190){
    fill(0, 157, 16)
  rect(230, 100, 65, 190)}
   
  
  if(mouseX + 37 > 230 && mouseX < 230 + 220 && mouseY + 37 > 0 && mouseY < 0 + 50){
     fill(0, 157, 16)
     rect(230, 0, 220, 50)
   }
  
 
  
 
  if(mouseX + 37 > 345 && mouseX < 345 + 50 && mouseY +37 > 100 && mouseY < 100 +235){
    fill(0, 157, 16)
    rect(345,100 , 50, 235)}
   //rect 5}
  
 
   
  
  if(mouseX +37 > 440 && mouseX < 440 + 10 && mouseY + 37 > 50 && mouseY < 50 + 350){
    fill(0, 157, 16)
  rect(440, 50, 10, 350)}
  
  
  
  {
  //Avatar which moves with mouseX and mouseY
  stroke(1)
  stroke(0.5)
  fill('yellow')
  rect(mouseX, mouseY, 37, 37)
  }
  Custom() // plugging the text custom function so that is it presented on the canvas
}
function Custom(){ // custom function that holds the code for the displayed instructions.
  textSize(14)
  stroke(0)
  strokeWeight(2)
  text('Get to the end without touching edges', 55, 130)
  
}

function GameWorld(){ // custom function which allows the rectangles to change colour singularly instead of together when the object comes in contact with it
  noStroke()
  fill('orange') // colours all collision rectangles instead of avatar
  rect(50, 0, 180, 150 )
  rect(50, 200, 130, 200)
  rect(180, 335, 165, 65)
  rect(230, 100, 65, 190)
  rect(230, 0, 220, 50)
  rect(345,100 , 50, 235)
  rect(440, 50, 10, 350)
}