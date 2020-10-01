function preload(){
function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(300);
  spin=windowWidth*.1
  background('black');
  scale();
}

function draw() {
  // put drawing code here

 push();
    translate(width/2, height /2);
    rotate(frameCount*3)
      noStroke();
      strokeWeight (1);
      fill(lerpColor(color ('#ffcc00'),  color ('salmon'), sin(frameCount)));
      ellipse(width/5.5, height/5.5, 30,30);

      function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  }
    rotate(frameCount*3);
    translate (spin,0)
    stroke(lerpColor(color ('salmon'),  color ('deepskyblue'), sin(frameCount*3)));
    strokeWeight (1);
    noFill();
    line( line(spin*cos(frameCount*2), spin*sin(frameCount*3), windowWidth*0.1, 0));
      ellipse(width/8, height/8, 20,20);

      function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  pop();

}
}
