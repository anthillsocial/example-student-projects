//p5js sketch code taken from https://editor.p5js.org/jeffThompson/sketches/ael8Y4YMB

let video;
let canvas;
let hold;

// let camPosY = -1000;
let isInCamApp = false;
let invFilter = false;
let gryFilter = false;
let blrFilter = false;

function setup() {
    canvas = createCanvas(280, 480);
    // canvas.parent("#screen")
    canvas.position(0, 0);
    // Create a video capture (aka webcam input)
    video = createCapture(VIDEO);
    // Specify the resolution of the webcam input (too high and you may notice performance issues, especially if you're extracting info from it or adding filters)
    video.size(640, 480);
    // In some browsers, you may notice that a second video appears onscreen! That's because p5js actually creates a <video> html element, which then is piped into the canvas – the added command below ensures we don't see it :)
    video.hide();
}

function draw() { 
    scale(-1, 1)
    if(isInCamApp){
        canvas.parent("#screen")
        image(video, -500, 0);
    }else{
        image(video, 0, 0);
    }

    if(invFilter){
        filter(INVERT);
    }
    if(gryFilter){
        filter(GRAY);
    }
    if(blrFilter){
        filter(BLUR);
    }
}