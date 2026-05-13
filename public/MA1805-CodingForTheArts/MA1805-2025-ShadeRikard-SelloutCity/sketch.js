function setup() {
  createCanvas(800, 800);
  let x;
  strokeWeight(0);

  textAlign(CENTER);
  textSize(20);
  textFont('Courier New');
  text('Click me to explore the city!',400,400);
}

function mouseClicked() {
  background(50+random(100));
  x = random(20,60);
  for (let i=0;i<x;i++){
    fill(random(60,130));

    //buildings
    let x=random(0,width);
    let y=random(0,height);
    let w=random(15,400);
    let h=random(15,400);
    //adjust x and y to be balanced
    x=x-w/2
    y=y-h/2

    //buildings
    rect(x,y,w,h);

    //pillars
    let pillarWidth = 7;
    if (random(0,1)>0.8){
      let pillar_x = random(x+5,x+w-5)-pillarWidth/2;
      let pillar_y = y+h
      rect(pillar_x,pillar_y, pillarWidth, 1000)
      //flip x for other pillar
      pillar_x=(w-(pillar_x-x))+x-pillarWidth
      rect(pillar_x,pillar_y, pillarWidth, 1000)
    }

    //windows
    let window_seperation_y=20;
    let window_seperation_x=15;

    if (random(0,1)>0.5){
      for (let a=0;a<(h/window_seperation_y)-1;a++){
        for (let i=0;i<(w/window_seperation_x)-1;i++){
          let window_brightness=random(0.6,1);
          fill(220*window_brightness,210*window_brightness,190*window_brightness);
          rect(((i)*window_seperation_x)+x+window_seperation_x/2,((a)*window_seperation_y)+y+window_seperation_y/2,6,8)
        }
      }
    }

    //neon signs
    let neon_width=random(40,60);
    let neon_x = random(x,w+x)-neon_width/2;
    let neon_y = y-30;
    red_green = random(0,1);
    fill((1-red_green)*255, red_green*255,150);
    rect(neon_x,neon_y,neon_width,12);
    fill(255,255,255);
    if (random(0,1)>0.5){
      rect(neon_x+2,neon_y+2,2,8)
      rect(neon_x+35,neon_y+2,3,8)
    }
    if (neon_width>55){
      rect(neon_x+2,neon_y+8,8,2)
      rect(neon_x+50,neon_y+2,3,3)
    }
    if (random(0,1)>0.5){
      rect(neon_x+10,neon_y+4,3,6)
      rect(neon_x+25,neon_y+2,4,8)
    }

    //Doors
    if (random(0,1)>0.6){
      let door_x = random(x,w+x)-24/2;
      let door_y = y-17;
      fill(155,115,95);
      rect(door_x,door_y,24,17);
      fill(135,95,75);
      rect(door_x+2,door_y+2,9,15);
      rect(door_x+13,door_y+2,9,15);
    }

    //plant pots
    let pot_x = random(x,w+x)-7/2;
    let pot_y = y-9
    fill(200,100,100);
    rect(pot_x,pot_y,7,9);
    fill(100,50,50);
    rect(pot_x+2,pot_y-9,3,9);
    fill(random(90,130),random(160,190),100);
    rect(pot_x+1,pot_y-13,5,random(7,11));

    //crates
    if (random(0,1)>0.4){
      let crate_x = random(x,w+x)-12/2;
      let crate_y = y-5;
      fill(175,135,115);
      rect(crate_x,crate_y,5,5);
      rect(crate_x+6,crate_y,5,5);
      rect(crate_x+3,crate_y-5,5,5);
    }
  }
    //advert
    let advert_x=random(90,width-180);
    let advert_y=random(30,height-60);
    let advert_width=175;
    let advert_height=75;
    fill(100);
    rect((advert_x-advert_width/2)-3,(advert_y-advert_height/2)-3,advert_width+6,advert_height+6);
    fill(210,180,170);
    rect(advert_x-advert_width/2,advert_y-advert_height/2,advert_width,advert_height);
    fill(220,200,190);
    rect(advert_x-advert_width/2,(advert_y-advert_height/2)+5,advert_width,advert_height-10);
    fill(0,0,0);
    textSize(15);
    text("Sell-out™ \n Buy our product!",advert_x,advert_y-5);

}