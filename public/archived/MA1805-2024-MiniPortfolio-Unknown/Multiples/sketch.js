let rectX = [0, 25, 40];   // arrays for the x axis of shapes 
let rectY = [15, 35, 50];  //arrays for the y axis of shapes
let speeds = [3, 10, 5.5]; // the difference of speeds for each shape
let speed = 3; // the speed for all shapes going down the canvas

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER); // centers all the shapes in the canvas
 
 
  
}

function draw() {
  background(50);
  let ColourChange = [random(255), random(255), random(255)] //Colour array which allows all shapes to change once it reaches the bottom
  let ShapeChange = [circle, rect, triangle] //Shape array that changes when it passes a certain point on the canvas
  
  stroke(255) 
  strokeWeight(5)
  
  for (let i = 0; i < rectY.length; i++) { //loop which allows the shapes to repeat on the same code each time it reaches past the canvas
    let x = (i+1)*100;   //allows the movement of the shapes down the canvas
    let y = rectY[i]+speed; // plugs speed variable to allow chosen speed to be carried out on all shapes
   
    ShapeChange[0](x, y, 50); //this allows the first shape to be a circle for a certain point 
    
    if(y>0)
    ShapeChange[2](x, y, 200.5, 200.5, 200.5, 200.5) // This creates the 3 lines which follows shapes down the canvas
    
    if(y>=200.5)
    ShapeChange[1](x, y, 50); //This changes the shape to a square when it reaches 200.5 y axis on the canvas
   
    if(y>=height){
    y = 0; // this spawns the shapes back at the top of the canvas when it reaches past the height of the canvas
    fill(ColourChange) //plugs ColourChange array to fill to allow the inside of all shapes to change colour once it goes past the canvas
    ShapeChange[1](x, y, 50);
     
    } 
    rectY[i] = y; //allows the loop to continiously send the shapes from the bottom of the canvas to the top
    
    
  }
}