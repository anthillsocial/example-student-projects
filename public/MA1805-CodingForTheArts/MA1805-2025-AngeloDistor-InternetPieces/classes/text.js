// Pretty much similar to the Slideshow object so I could have implemented this in there too. Oh well!

// (it's easier this way anyways)

class Text {
    constructor() {
        this.textArray;
        this.textPosition = windowWidth / 4
    }

    setArray(textArray) {
        this.textArray = textArray;
    }

    // Stage increments after some time has passed, overflow is the value added onto the final text to create the "bleeding" effect
    displayText(stage, overflow) {
        this.overflow = overflow;
        textSize(25);
        textFont('Verdana');
        fill('red');
        if (stage >= 1) text(this.textArray[0], windowWidth / 3.5, windowHeight / 8);
        if (stage >= 2) text(this.textArray[1], windowWidth / 3.5, windowHeight / 4);
        if (stage >= 3) text(this.textArray[2], windowWidth / 3.5, windowHeight / 2);

        // Overflow effect
        if (stage >= 4) {
            for (this.i = 0; this.i < this.overflow; this.i++) {
                this.offsetX = int(random(-5, 5));
                this.offsetY = int(random(-5, 5));
                //this.randomIndex = int(random(0,2));
                text(
                    this.textArray[2],
                    (windowWidth / 3.5)
                    + this.offsetX,
                    (windowHeight / 2)
                    + this.offsetY
                    + 10 * (this.i));
            }
        }
    }
}