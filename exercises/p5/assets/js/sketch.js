let slider; 

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.class("container");
  slider = createSlider(10, 1000, 0);
  slider.class("slider");

function draw() {
  background("greenyellow");
  fill("white");
  translate(580, 400);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 60, 40, 160);
    rotate(PI/5);

  if mousePressed (function fill(random))
  }

}

