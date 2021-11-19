export default function sketch (p) {
    let speed = -20;
    let sizeDiff = 5;
    let size = 1;
    let y = p.windowHeight + p.windowHeight/2;

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    };

  
    p.draw = function () {
        p.clear();
        p.fill(255);
        p.noStroke();
        p.circle(0,y,size);
        y += speed;
        size += sizeDiff;
    };
  };