export default function sketch (p) {

    // Particle example from https://p5js.org/examples/simulate-particles.html
    // this class describes the properties of a single particle.
    class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
      constructor(){
        this.x = p.random(0,p.windowWidth);
        this.y = p.random(0,p.windowHeight);
        this.r = p.random(1,7);

        this.xSpeed = p.random(-3,3);
        this.ySpeed = p.random(-1,1.5);
      }
    
    // creation of a particle.
      createParticle() {
        //p.noStroke();
        p.stroke('rgba(255,255,255,0.2)');
        p.strokeWeight(1);
        p.fill('rgba(255,255,255,0.3)');
        p.circle(this.x,this.y,this.r);
      }
    
    // setting the particle in motion.
      moveParticle() {
        if(this.x < 0 || this.x > p.windowWidth)
          this.xSpeed*=-1;
        if(this.y < 0 || this.y > p.windowHeight)
          this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
        this.r = p.random(1,10);
      }
     
        // this function creates the connections(lines)
        // between particles which are less than a certain distance apart
        joinParticles(particles) {
            particles.forEach(element =>{
            let dis = p.dist(this.x,this.y,element.x,element.y);
            if(dis<p.windowWidth/10) {
                p.strokeWeight(3);
                p.stroke('rgba(255,255,255,0.1)');
                p.line(this.x,this.y,element.x,element.y);
            }
            });
        }
    }

    let particles = [];

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for(let i = 0;i< p.windowHeight/30;i++){
            particles.push(new Particle());
        }
    };

    let clicked =false;
    let dr = p.windowHeight/200;
    let r = 0;
  
    p.draw = function () {
        p.clear();

        for(let i = 0;i<particles.length;i++) {
            particles[i].createParticle();
            particles[i].moveParticle();
            particles[i].joinParticles(particles.slice(i));
        }

        if (clicked && p.mouseButton === p.LEFT) {
            p.noFill();
            p.stroke(255);
            p.strokeWeight(2);
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