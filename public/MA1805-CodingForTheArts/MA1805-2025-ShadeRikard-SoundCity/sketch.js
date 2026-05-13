let wall;
let window_image;
let click;
let hum;
let synth1;
let synth2;
let synth3;
let mouse_x_list = []; //stores the last 10 x positions of the mouse
let mouse_x_flag = 0; //flag to indicate significant mouse movement, 3-0
let synth_order_list = [synth1,synth2,synth3];
let i = 0;//index for synth order
let wobble;
let wobble_reversed;
let wobble_bool = true;
let kick;
let snare;
let walls;

function preload() {
  wall = loadImage('Concrete033_4K_Color.jpg');
  walls = loadImage('walls.png');
  window_image = loadImage('window_city.png');
  click = loadSound('egg timer single.mp3');
  hum = loadSound('AAIA 18 Atmos Deep Rumbly Underwater Synthesised Low Clicky.wav');
  synth1 = loadSound('Melody_Synth_Atmospheric_D-03.wav');
  synth2 = loadSound('Melody_Synth_Atmospheric_lower.wav');
  synth3 = loadSound('Melody_Synth_Atmospheric_middle.wav');
  wobble = loadSound('MACK Effect Synth Wobble Low Steady.wav');
  wobble_reversed = loadSound('MACK Effect Synth Wobble Low Steady reversed.wav');
  kick = loadSound('kick-greg-232043.mp3');
  snare = loadSound('electro-flanged-snare-84432.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  window_width = 280;
  window_height = 380;
  window_x = (windowWidth*0.75) - window_width/2;
  window_y = (windowHeight*0.25) - window_height/2;
  cursor('move');
}

function draw() {
  background(80);
  image(wall,0,0, windowWidth,windowHeight);
  image(walls,0,0, windowWidth,windowHeight);
  fill(60);
  strokeWeight(0);
  rect(window_x-10,window_y-10,window_width+20,window_height+20);
  image(window_image,window_x,window_y,window_width,window_height);
  rect(window_x+60,window_y-1,20,window_height+2);
  rect(window_x+130,window_y-1,20,window_height+2);
  rect(window_x+200,window_y-1,20,window_height+2);

  //beat loop
  let counter = 0;
  counter = Math.floor(frameCount / 25);
  quaver_counter = Math.floor(frameCount / 3.125);
  triplet_counter = Math.floor(frameCount / 8.333333);
  if (triplet_counter != Math.floor((frameCount-1) / 8.333333) && mouse_x_flag == 2) {
    click.play();
    square(20,110,20);
  }
  if (quaver_counter != Math.floor((frameCount-1) / 3.125) && mouse_x_flag == 3) {
    click.play();
    square(20,110,20);
  }
  if (counter != Math.floor((frameCount-1) / 25)) {
    click.play();
    square(20,110,20);
    if (mouse_x_flag > 0){
      mouse_x_flag -= 1;
    }
  }
  textSize(32);
  //text(counter, 50, 50); //uncomment to debug beat counter

  mouse_x_list.push(mouseX);
  if (mouse_x_list.length > 10) {
    mouse_x_list.shift();
  }
  if (mouse_x_list[0]-mouse_x_list[9]>200 || mouse_x_list[0]-mouse_x_list[9]<-200){
    //text(mouse_x_list,100,50); //uncomment to debug mouse x list
    mouse_x_flag = 3;
    
  }

  //synths
  if ((frameCount % 500) == 0) {
    //volume
    synth_volume=((windowHeight-mouseY)/windowHeight)*0.5;

    if (i == 0){
      synth1.amp(synth_volume);
      synth1.play();
      //text("synth1",100,100);
    }
    if (i == 1){
      synth2.amp(synth_volume);
      synth2.play();
      //text("synth2",100,100);
    }
    if (i == 2){
      synth3.amp(synth_volume);
      synth3.play();
      //text("synth3",100,100);
    }
    i += 1;
    if (i > 2){
      i = 0;
    }
  }
  textAlign(CENTER);
  fill(40);
  text("Quiet Synths",windowWidth/2,windowHeight-15);
  text("Loud Synths",windowWidth/2,35);
  
  //wobble
  if (wobble_bool == true){
    if ((frameCount % 300) == 0) {
      wobble.play();
    }
    if (((frameCount+150) % 300) == 0) {
      wobble_reversed.play();
    }
    square(20,20,20);
  }

  //kick drum
  kick.amp(0.7);
  if (((frameCount+2) % 200) == 0) { //2 frames added to pad start
    kick.play(); 
    square(20,50,20);
  }
  if (((frameCount+152) % 200) == 0) { //2 frames added to pad start
    kick.play();
    square(20,50,20);
  }

  //snare
  snare.amp(0.3);
  if (((frameCount+30) % 100) == 0) { //5 frames added to pad start
    snare.play();
    square(20,80,20);
  }

  //text
  fill(55);
  textSize(40);
  text("click to hear the breathing of the machine",windowWidth/2,windowHeight/2);

}
function mouseClicked(){ //starts sounds
  hum.loop();
  hum.amp(0.4); 
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  wobble_bool = !wobble_bool;
}
