function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  let leftWall = 100
  let rightWall = 300
  let topWall = 100
  let bottomWall = 300
  //making variables for the prison walls 
  
  let r = random(0, 256)
  let g = random(0, 256)
  let b = random(0, 256)
  
  let s = random (100, 200)
  let t = random (100, 200)
  let f = random (100, 200)
  //variables for the constantly changing colours using random. I made sure s,t,f have a different random range than r,g,b to ensure the strokeWeight and circle fill change colour differently. 
  
  stroke(37, 150, 190)
  //seeing as fill doesn't work for lines I used stroke with the rgb colour chosen on google colour picker
  strokeWeight(5)
  //adjusting  thickness of line
  line(0, topWall, 400, topWall);
  line(0, bottomWall, 400, bottomWall)
  line(rightWall, 400, rightWall, 0)
  line(leftWall, 400, leftWall, 0)
  //creating the prison using variables 
 
  let xc = constrain(mouseX, leftWall, rightWall,);
  let yc = constrain(mouseY, leftWall, rightWall);
  //key part: this line of code makes the prison walls barriers to the circle when the mouse moves. In other words constraining position of circle to its prison
  //let xy = ["xc","yc"] 
  //I originally though i had to combine 2 variables into one for this to be able to work but turns out i just needed to place the variables xc and yc in the circle(x, y, size)
  
  //circle(mouseX, mouseY, 50)
  //Originally i thought i needed 2 circles for the circle to be imprisoned and able to move around with mouse but turns out this line of code wasn't needed.
  
  frameRate(30)
  //i use frameRate to slow down the frames without making the circle slow to move with mouse. Without it the colour changes looked too fast 
  stroke(r, g, b)
  //randomise colour changes to outer rim of circle
  strokeWeight(5)
  fill(s, t, f)
  //randomise colour changes inner rim of circle 
  circle(xc, yc, 50);
  //Final line of code: plugging in variable into the circle to allow it to be constrained inside the prison whilst also enabling it to move x and y coordinates with mouse movement . This essentially symbolises entrapment and helplessness. 
  
  
}