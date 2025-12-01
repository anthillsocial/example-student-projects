let notifications = [];
let img;
let notificationSound;
let startTime;

let notificationTypes = [
    { text: "📲 New message", color: [60, 130, 240] },
    { text: "❤️ New like", color: [240, 70, 60] },
    { text: "📢 Notification", color: [245, 160, 10] },
    { text: "📨 Email", color: [50, 200, 100] },
    { text: "😝 New reaction", color: [150, 50, 230] },
    { text: "💬 Comment", color: [230, 70, 150] },
    { text: "🔥 Trending!", color: [10, 180, 220] },
    { text: "📰 News!", color: [250, 115, 20] }
];

function preload() {
    img = loadImage('phone.jpg');
    notificationSound = loadSound('sound.mp3');
}

function setup() {
    createCanvas(600, 600);
    frameRate(30);
    startTime = millis();
}
function draw() {
    image(img, 0, 0, width, height);

    let seconds = (millis() - startTime) / 1000;

    let spawnRate;
    if (seconds < 10) {
        spawnRate = 50;
    } else if (seconds < 30) {
        spawnRate = 25;
    } else if (seconds < 45) {
        spawnRate = 15;
    } else {
        spawnRate = 5;
    }
    
    if (frameCount % spawnRate == 0) {
        createNotification();
    }

    for (let i = notifications.length - 1; i >= 0; i--) {
        notifications[i].update();
        notifications[i].draw();

        if (notifications[i].toDelete()) {
            notifications.splice(i, 1);
        }
    } 
}

function createNotification() {
    let x = random(50, width - 10);
    let y = random(50, height - 10);
    let type = random(notificationTypes);

    notifications.push(new Notification(x, y, type));
    notificationSound.play();
    
    
}

class Notification {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.alpha = 0;
        this.fade = true;
        this.lifespan = 300;
        this.size = 0;
        this.targetSize = random(150, 200);
        this.vx = random(-0.3, 0.3);
        this.vy = random(-0.3, 0.3);
    }

    update() {
        if (this.fade) {
            this.alpha += 5;
            this.size += 5;
            if (this.alpha >= 255) {
                this.alpha = 255;
                this.fade = false;
            }
            if (this.size >= this.targetSize) {
                this.size = this.targetSize;
            }
        } else {
            this.lifespan--;
            if (this.lifespan < 50) {
                this.alpha -= 5;
            }
        }

        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        push();
        translate(this.x, this.y);


        fill(255, 255, 255, this.alpha);
        stroke(this.type.color[0], this.type.color[1], this.type.color[2], this.alpha);
        strokeWeight(2);
        rect(-this.size / 2, -20, this.size, 38, 8);

        noStroke();
        fill(0, 0, 0, this.alpha);
        textAlign(CENTER, CENTER);
        textSize(15);
        text(this.type.text, 0, 0);

        pop();
    }

    toDelete() {
        return this.alpha <= 0;
    }
}
