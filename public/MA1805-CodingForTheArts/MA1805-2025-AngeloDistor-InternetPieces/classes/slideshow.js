class Slideshow {
    constructor() {
        this.imgArray;
        this.imageSize = windowWidth / 4
    }

    setArray(imgArray) {
        this.imgArray = imgArray;
    }

    displayImage(i) {
        // 1/25 chance for the displayed image to take up the whole screen
        this.appear = int(random(0, 25))
        if (this.appear == 2) {
            this.imageSize = windowWidth;
        } else {
            this.imageSize = windowWidth / 4
        } 

        // Show the image from the array, according to the index passed
        image(this.imgArray[i], 0, 0, this.imageSize, this.imageSize)
    }

    // Show video from the array, according to the index passed
    displayVideo(i) {
        image(this.imgArray[i], 0, 0, windowWidth, windowHeight);
        this.imgArray[i].play();
    }

    stopVideo(i) {
        this.imgArray[i].stop();
    }
    
}