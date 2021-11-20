export default function sketch (p) {

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };

    class MovingCircle {
        constructor(){
            this.x = p.random(p.windowWidth);
            this.y = p.windowHeight;
            this.diameter = 10;
            this.size = 2;
            this.speed = 20;
        }
        move() {
            this.x += p.random(-this.speed, this.speed);
            this.y -= this.speed;
            this.diameter += this.size;
        }
        display() {
            p.noStroke();
            p.ellipse(this.x, this.y, this.diameter, this.diameter);
        }
    }

    let circles = [new MovingCircle(), new MovingCircle(), new MovingCircle()];
  
    p.draw = function () {
        p.clear();
        for (let i = 0; i < circles.length; i++) {
            circles[i].move();
            circles[i].display();
        }
        // circle.move();
        // circle.display();
        // p.clear();
        // p.fill(255);
        // p.noStroke();
        // p.circle(0,y,size);
        // y += speed;
        // size += sizeDiff;
    };
  };