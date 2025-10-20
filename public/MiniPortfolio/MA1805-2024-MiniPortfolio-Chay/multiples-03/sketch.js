let i = 0;
const ozymandiusText = "I met a traveller from an antique land, Who said. Two vast and trunkless legs of stone, Stand in the desert... Near them, on the sand, Half sunk a shattered visage lies, whose frown, And wrinkled lip, and sneer of cold command, Tell that its sculptor well those passions read. Which yet survive, stamped on these lifeless things, The hand that mocked them, and the heart that fed; And on the pedestal, these words appear: My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and despair! Nothing beside remains. Round the decay Of that colossal Wreck, boundless and bare. The lone and level sands stretch far away.";
const textArray = ozymandiusText.split(" "); // Convert the text into an an array (list) of words. 


//do a readme file on what i want to do


function setup(){
	createCanvas(600, 600); 
  frameRate(5); // speed of the sketch 
}
  //r = int(random(0, textArray.length))
  //console.log(textArray[r])

function draw(){ 
  let x = random(width);
  let y = random(height);

  if (i < textArray.length) { // is i less-than the number of words in the text, so it checks if we have any more words to display
    let word = textArray[i];
    
    let ozySize = random(10,40); // it sets the default 
    textSize(ozySize);
    textAlign(CENTER,CENTER);
    
    let wordColor = color(150);  // Default colour

    if (word.includes('a')) {
      wordColor = color(211,169,108);
    }
      fill(wordColor); // Sets the colour
      text(word, x, y); // draws the word at random position
    

    i++;
  }else{
    i=0; // reset the counter
    background(255); // clear the background 
    ///console.log(Words[15]);
    }
  }

// view - word wrap 