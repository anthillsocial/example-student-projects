// Each line displayed on the screen is a representation of an array of characters. Thus, it would make sense to create an object for each of these lines as they should share the same methods and variables.


class Word {
  constructor( randomList, chosenWord, range, display, scramble, position ) {
    // This is the random list of words to be chosen from
    this.randomList = randomList;

    // Chosen word, set later on
    this.chosenWord = chosenWord;

    // Range being the length of the word, important for determining its position in the array to ensure every word is in the middle
    this.range = range;

    // This is what is actually displayed on the screen, a mixture of scrambled numbers and finished characters
    this.display = display;

    // Each array has a corresponding array just filled with numbers from 2 - 5. These numbers are representative of how long it will take for each scrambled digit to turn into the correct character. I will be referring to this corresponding array as the "scramble array"

    // ie. [2, 4, 3]
    // The first character will take 2 seconds to turn to the right character. The second character will take 4 seconds... So on...
    this.scramble = scramble;

    // Position in the main canvas
    this.position = position;

    // Initiate variables
    this.refresh();
  }
  
  // If corresponding scramble array is not zero, replace the corresponding index with a random number
  zeroScramble() {
    for (i = 0; i < this.display.length; i++) {
      if (this.scramble[i] != 0) {
        this.display[i] = int( random(0, 9) ).toString();
      }
    }
  }

  refresh() {
    arrayCopy(defaultArray, this.display);
    arrayCopy(defaultArray, this.scramble);

    wipeAll(this.chosenWord);
    wipeAll(this.range);

    // Scramble the "scramble array" by filling each index with a random number
    this.scrambleArray(this.scramble);

    // Setting the word from the random list, updating the range value after retrieving the word
    this.setWord(this.chosenWord, this.randomList, this.range);
  }

  setWord(chosenWord, randomList, range) {
    // Pick a random number between 0 and the length of the random list. This will be used as the index to choose the word from the big list.
    let randomWordIndex = int(random(0, randomList.length ))

    // The word is chosen, turned to uppercase then split into its individual characters
    let chosenIndividual = randomList[randomWordIndex].toUpperCase().split("");

    // Transfer this chosen individual to the object's internal chosenWord array
    arrayCopy(chosenIndividual, chosenWord);

    // Starting index referring to where the first character should be positioned in the array for the word to be center
    let wordLength = int(chosenWord.length);
    let startingIndex = int( int(defaultArray.length / 2)  - int(wordLength / 2));

    range[0] = startingIndex;
    range[1] = startingIndex + wordLength - 1;
  }

  // Scramble scramble scramble array
  scrambleArray(scramble) {
    for (i = 0; i < scramble.length; i++) {
      scramble[i] = int(random(2, 5)).toString();
    }
  }

  // This function is responsible for "converting" the scrambled array index into the correct character
  updateDisplay(index) {
    if (index >= this.range[0] && index <= this.range[1]) {
      this.display[index] = this.chosenWord[ index - this.range[0] ];
    } else {
      this.display[index] = " ";
    }
  }

}