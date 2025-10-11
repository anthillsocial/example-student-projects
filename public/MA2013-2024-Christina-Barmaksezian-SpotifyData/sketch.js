// Text to speech example via coding train
//    https://www.youtube.com/watch?v=v0CHV33wDsI
let speech;
let voice; 
let speed;
//let myText = " My cat";

function setup() {
  createCanvas(600, 100);
  background(0);
  
  //if(soundState!='noplay'){
    speech = new p5.Speech(); // speech synthesis object
    speech.started(startSpeaking);
  //}
  console.log(soundState); 
}

function startSpeaking() {
  background(245, 200, 162);
  console.log('speaking');
}

function draw(){
    background(148, 227, 149);
    textAlign(LEFT)
    textFont('Arial Unicode MS');
    textSize(20);
    text("PLAY: "+filename, 10, 25);
    text("THE VOICE: "+voice, 10, 50);
    text("SPEED: "+speed, 10, 75);
}

function playMySound() {
  //if(soundState!='noplay'){
    background(243, 123, 23);
    // speech.setVoice('SpeechSynthesisVoice');
    // speech.setVoice('Samantha');
    // speech.setVoice("Moira");
    let voices = ['Aaron', 'Albert', 'Alice', 'Alva', 'Amélie', 
                  'Amira', 'Anna', 'Arthur', 'Bad News', 'Bahh', 'Bells', 'Boing',
                  'Bubbles', 'Carmit', 'Catherine', 'Cellos', 'Damayanti', 
                  'Daniel', 'Daria'];
    voices = ['Anna', 'Arthur', 'Bad News']; 
    //let voices = speech.voices; console.log(voices) // voices available in browser: speech.setVoice(voice.name);
    voice = random(voices);
    speed = floor(random(0, 3));
    speech.setVoice(voice);
    speech.setRate(speed);
    speech.speak(myText); // Takes time to load a bog text, may want to break into small chnunks
  //}
}

// cancel(): 
function stopMySound(){
  //if(soundState!='noplay' || speech){
    speech.cancel();
  //}
}

