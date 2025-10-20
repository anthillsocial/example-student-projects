let img1;
let img2;
let img3;
let img4;
let images = [];
let imageindex = 0;
let aud1;
let aud2;
let aud3;
let audio = [];
// so, we r making the variables up here , all the images and such.


function preload (){
  img1 = loadImage("img1.png");
  img2 = loadImage("img2.png");
  img3 = loadImage("img3.png");
  img4 = loadImage("img4.png");
  aud1 = loadSound("Royal Holloway.mp3");
  aud2 = loadSound("Royal Holloway 2.mp3");
  aud3 = loadSound("Royal Holloway 3.mp3"); // this is where we preload them but unfortunatly the audio does not seem to be agreeing? 


  images = [img1, img2, img3, img4]; //our arraysss
  audio = [aud1, aud2, aud3];
}

function setup() {
  createCanvas(600, 400);
  imageMode(CENTER); // made the canvas for the picture to sit on. 
  audio[0].loop();
}

function draw() {
  background(220);
  image(images[imageindex],width/2,height/2,600,400); // centered it. 
  
}

function mouseClicked(){
  console.log(mouseX,mouseY);
  if (mouseX>350 && mouseX<450 && mouseY>40 && mouseY<90){
    console.log('clicked on light'); // using the console debugger we found the co-ordinates of the light which is where you click to change the image and theoretically also the audio if it were working. I would add an index to cycle through like below!
    if (imageindex<images.length-1){
      imageindex++
    }
    else{
      imageindex=0;
    }
  }
}