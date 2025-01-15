//adapted from Mappa tutorial
//for more, see: https://mappa.js.org/docs/simple-map.html

//SURREY THROUGH THE LENS OF CRIME AND SCHOOLING
//DATASETS USED: 

// Options for map
const options = {
    lat: 51.32997,  //initial latitude
    lng: -0.41133,  //initial longitude
    zoom: 10, //initial zoom level - 10 shows all locations 
    style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' //where we are getting our map tiles from
  }

  // Create an instance of Leaflet
  const mappa = new Mappa('Leaflet');
  
  //we use myMap to refer to the world map displayed on our canvas
  let myMap;
  
  // array of buttons that will be filled
  let buttons = [];
  
  //we need to treat our canvas a bit differently than usual when working with maps
  let canvas;
  
  let pos;

  function setup() {
    // Create our canvas element, and store its reference 
    canvas = createCanvas(500, 500);
    // Create a tile map and overlay the canvas on top.
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas); // overlay the canvas on the map
  }
  
  function draw(){
    //refreshing the canvas every frame
    clear();
  
    //this takes a lat/long coordinate, and conveniently gives us back a 'pos' object
    //the pos object has an 'x' and 'y' property, giving us the relative point on our canvas
    let pos = myMap.latLngToPixel(51.243673, -0.574348); //Guildford1
    let pos2 = myMap.latLngToPixel(51.330397, -0.559895);//Woking1
    let pos3 = myMap.latLngToPixel(51.240211,-0.330556); //Dorking1
    let pos4 = myMap.latLngToPixel(51.449728, -0.508396); //Staines1
    let pos5 = myMap.latLngToPixel(51.243673,-0.559832); //Guildford2
    let pos6 = myMap.latLngToPixel(51.330397,-0.545379); //Woking2
    let pos7 = myMap.latLngToPixel(51.240211,-0.316040); //Dorking2
    let pos8 = myMap.latLngToPixel(51.449728, -0.493880); //Staines2


     // buttons, each with different properties
     buttons[0] = new Button(pos.x, pos.y, 15,'Guildford1.html');  
     buttons[1] = new Button(pos2.x, pos2.y, 15,'Woking1.html');
     buttons[2] = new Button(pos3.x, pos3.y, 15,'Dorking1.html'); 
     buttons[3] = new Button(pos4.x, pos4.y, 15,'Staines1.html');
     buttons[4] = new Button(pos5.x, pos5.y, 15,'Guildford2.html')
     buttons[5] = new Button(pos6.x, pos6.y, 15,'Woking2.html')
     buttons[6] = new Button(pos7.x, pos7.y, 15,'Dorking2.html')
     buttons[7] = new Button(pos8.x, pos8.y, 15,'Staines2.html')
  

    //TEXT ON THE MAP 
    fill(0);
    textSize(20);
    textFont('Arial') //changes the font on the map.
    text('   Guildford',pos.x, pos.y-5) //PUSHES THE LABEL AWAY FROM THE BUTTON
    text('   Woking',pos2.x, pos2.y-5);
    text('   Dorking',pos3.x, pos3.y-5);
    text('   Staines',pos4.x, pos4.y-5);
  
    // calling display() on each button
    for(i=0;i<buttons.length;i++){
      buttons[i].display();
    }
  }
  
  function windowResized() {
    resizeCanvas(windowWidth - 300, windowHeight);
  }
  
  function mouseClicked(){
    // Manage clicks on the button
    for(i=0;i<buttons.length;i++){
      buttons[i].mouseClicked();
    }
  }
  
  class Button {
    // Key variables for the button 
    constructor(x, y,size,href) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.href = href;
      this.col = color('rgb(0,0,0)');
      this.hover_col = color('rgb(255,0,0)');
      this.clicked = false;
    }
    // Draw the button to the canvas
    display() {
      // Is the button hovered over? 
      if(this.isHoveredOver()) {
        fill(this.hover_col)
      } else {
        fill(this.col);
      }
      // Draw the shape
      ellipse(this.x,this.y,this.size);
    }
    // check to see mouse is over the current button
    isHoveredOver() {
      let d = dist(mouseX, mouseY, this.x, this.y);
      if (d < this.size) {
          return true;
      }else{
          return false; 
      }
    }
    // What to do when the dot is clicked on
    mouseClicked() {
      if(this.isHoveredOver()) {
        window.location.href = this.href; 
          
      }
   }
  }
  //TO DO: 
  //MAKE A SPACE TO THE RIGHT OF THE MAP, WHERE OUR INFORMATION WILL BE HELD.
  //MAKE THE BUTTONS LEAD TO THE INDIVIDUAL PAGES - HAVE THE PAGES APPEAR ON THE RIGHT SIDE OF THE MAP.
  //HAVE AN INTRODUCTION APPEAR ON THE RIGHT SIDE OF THE MAP IN THE BEGINNING,
