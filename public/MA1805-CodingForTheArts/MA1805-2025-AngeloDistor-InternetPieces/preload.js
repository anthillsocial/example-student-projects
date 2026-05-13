let bg;

let c1; let c2; let c3; let c4; let c5; let c6; let c7; let cv;
let collection;
let collectionWords = ["collection", "order", "unity"];

let d1; let d2; let d3; let d4; let d5; let d6; let d7; let dv;
let dog;
let dogWords = ["dog", "dreaming", "luxury"];

let f1; let f2; let f3; let f4; let f5; let f6; let f7; let fv;
let flow;
let flowWords = ["flow", "streams", "transfer"];

let i1; let i2; let i3; let i4; let i5; let i6; let i7; let iv;
let industry;
let industryWords = ["industry", "machinery", "automata"];

let o1; let o2; let o3; let o4; let o5; let o6; let o7; let ov;
let outside;
let outsideWords = ["outside", "nature", "calm"];

let r1; let r2; let r3; let r4; let r5; let r6; let r7; let rv;
let rain;
let rainWords = ["rain", "rain", "rain"];

let w1; let w2; let w3; let w4; let w5; let w6; let w7; let wv;
let wall;
let wallWords = ["wall", "...", "..."]

let ambienceSound;
let bellSound;

let textArray = [];
let mediaArray = [];
let vidArray = [];

function preload() {
  soundFormats('mp3');
  ambienceSound = loadSound('media/ambience.mp3');
  ambienceSound.setVolume(0.25);

  bellSound = loadSound('media/bell.mp3');
  bellSound.setVolume(0.5);


  bg = loadImage('media/main.jpg');

  // Collection
  c1 = loadImage('media/collection/1.jpg');
  c2 = loadImage('media/collection/2.jpg');
  c3 = loadImage('media/collection/3.jpg');
  c4 = loadImage('media/collection/4.jpg');
  c5 = loadImage('media/collection/5.jpg');
  c6 = loadImage('media/collection/6.jpg');

  cv = createVideo('media/collection/vid.mp4');
  cv.hide();

  collection = [c1, c2, c3, c4, c5, c6, cv];

  // Dog
  d1 = loadImage('media/dog/1.jpg');
  d2 = loadImage('media/dog/2.jpg');
  d3 = loadImage('media/dog/3.jpg');
  d4 = loadImage('media/dog/4.jpg');
  d5 = loadImage('media/dog/5.jpg');
  d6 = loadImage('media/dog/6.jpg');
  d7 = loadImage('media/dog/7.jpg');

  dv = createVideo('media/dog/vid.mp4');
  dv.hide();

  dog = [d1, d2, d3, d4, d5, d6, d7, dv];

  // Flow
  f1 = loadImage('media/flow/1.JPG');
  f2 = loadImage('media/flow/2.JPG');
  f3 = loadImage('media/flow/3.JPG');
  f4 = loadImage('media/flow/4.JPG');
  f5 = loadImage('media/flow/5.JPG');
  f6 = loadImage('media/flow/6.JPG');
  f7 = loadImage('media/flow/7.JPG');

  fv = createVideo('media/flow/vid.mp4');
  fv.hide();

  flow = [f1, f2, f3, f4, f5, f6, f7, fv];

  // Industry
  i1 = loadImage('media/industry/1.JPG');
  i2 = loadImage('media/industry/2.JPG');
  i3 = loadImage('media/industry/3.JPG');
  i4 = loadImage('media/industry/4.JPG');
  i5 = loadImage('media/industry/5.JPG');
  i6 = loadImage('media/industry/6.JPG');
  i7 = loadImage('media/industry/7.JPG');

  iv = createVideo('media/industry/vid.mp4');
  iv.hide();

  industry = [i1, i2, i3, i4, i5, i6, i7, iv];

  // Outside
  o1 = loadImage('media/outside/1.jpg');
  o2 = loadImage('media/outside/2.jpg');
  o3 = loadImage('media/outside/3.jpg');
  o4 = loadImage('media/outside/4.jpg');
  o5 = loadImage('media/outside/5.jpg');
  o6 = loadImage('media/outside/6.jpg');

  ov = createVideo('media/outside/vid.mp4');
  ov.hide();

  outside = [o1, o2, o3, o4, o5, o6, ov];

  // Rain
  r1 = loadImage('media/rain/1.jpg');
  r2 = loadImage('media/rain/2.jpg');
  r3 = loadImage('media/rain/3.jpg');
  r4 = loadImage('media/rain/4.jpg');
  r5 = loadImage('media/rain/5.jpg');
  r6 = loadImage('media/rain/6.jpg');
  r7 = loadImage('media/rain/7.jpg');

  rv = createVideo('media/rain/vid.mp4');
  rv.hide();

  rain = [r1, r2, r3, r4, r5, r6, r7, rv];

  // Wall
  w1 = loadImage('media/wall/1.jpg');
  w2 = loadImage('media/wall/2.jpg');
  w3 = loadImage('media/wall/3.jpg');
  w4 = loadImage('media/wall/4.jpg');
  w5 = loadImage('media/wall/5.jpg');
  w6 = loadImage('media/wall/6.JPG');
  w7 = loadImage('media/wall/7.JPG');

  wv = createVideo('media/wall/vid.mp4');
  wv.hide();

  wall = [w1, w2, w3, w4, w5, w6, w7, wv];

  // Video Array
  vidArray = [cv, dv, fv, iv, ov, rv, wv];

  // Media Array. Essentially an array of arrays grouping media together
  mediaArray.push(collection);
  mediaArray.push(dog);
  mediaArray.push(flow);
  mediaArray.push(industry);
  mediaArray.push(outside);
  mediaArray.push(rain);
  mediaArray.push(wall);

  // Text Array. Another array of arrays
  textArray.push(collectionWords);
  textArray.push(dogWords);
  textArray.push(flowWords);
  textArray.push(industryWords);
  textArray.push(outsideWords);
  textArray.push(rainWords);
  textArray.push(wallWords);
}
