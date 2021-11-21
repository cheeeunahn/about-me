import './Sketch.css';

export default function sketch (p) {

    // Particle example from https://p5js.org/examples/simulate-particles.html
    // this class describes the properties of a single particle.
    class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
      constructor(){
        this.x = p.random(0,p.width);
        this.y = p.random(0,p.height);
        this.r = p.random(1,7);
        this.xSpeed = p.random(-2,2);
        this.ySpeed = p.random(-1,1.5);
      }
    
    // creation of a particle.
      createParticle() {
        //p.noStroke();
        p.stroke('rgba(211,243,255,0.7)');
        p.strokeWeight(p.random(0,3));
        p.fill('rgba(211,243,255,0.3)');
        p.circle(this.x,this.y,this.r);
      }
    
    // setting the particle in motion.
      moveParticle() {
        if(this.x < 0 || this.x > p.width)
          this.xSpeed*=-1;
        if(this.y < 0 || this.y > p.height)
          this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
      }
     
        // this function creates the connections(lines)
        // between particles which are less than a certain distance apart
        joinParticles(particles) {
            particles.forEach(element =>{
            let dis = p.dist(this.x,this.y,element.x,element.y);
            if(dis<70) {
                p.strokeWeight(1);
                p.stroke('rgba(211,243,255,0.2)');
                p.line(this.x,this.y,element.x,element.y);
            }
            });
        }
    }

    let particles = [];

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for(let i = 0;i<p.width/10;i++){
            particles.push(new Particle());
        }
    };
      
    /*

    class MovingCircle {
        constructor(){
            this.x = p.random(p.windowWidth);
            this.y = 0;
            this.diameter = 10;
            this.speed = -10;
        }
        move() {
            this.x += p.random(-this.speed, this.speed);
            this.y -= this.speed;
        }
        display() {
            p.noStroke();
            p.ellipse(this.x, this.y, this.diameter, this.diameter);
        }
    }*/

    //let circles = [new MovingCircle(), new MovingCircle(), new MovingCircle()];
    let clicked =false;
    let dr = 8;
    let r = 0;
  
    p.draw = function () {
        p.clear();

        for(let i = 0;i<particles.length;i++) {
            particles[i].createParticle();
            particles[i].moveParticle();
            particles[i].joinParticles(particles.slice(i));
        }
        // for (let i = 0; i < circles.length; i++) {
        //     circles[i].move();
        //     circles[i].display();
        // }
        if (clicked && p.mouseButton === p.LEFT) {
            p.noFill();
            p.stroke(255);
            p.strokeWeight(3);
            p.ellipse(p.mouseX, p.mouseY, r, r);
            r += dr;
        }
        else {
            r = 0;
        }
    };

    p.mousePressed = function (event) {
        console.log(event);
        clicked = true;
        setTimeout(()=>{
            clicked = false;
        }, 200);
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
  };