let r 
let g 
let b

function setup() {
  // Sets the screen to be 1280 pixels wide and 720 pixels high //
  createCanvas(1280, 720);
  r = 255;
  g = 175;
  b = 100;
}
function draw() {
  // Draw the background white //
  background(255, 255, 255);
  // Make the fill light brown/orange (cookie colour) //
  fill(r, g, b);
  // Make the stroke black //
  stroke(0);
  strokeWeight(5);
  // Draw a circle at location (640, 360) with a diameter of 360 //
  circle(640, 360, 360);
    fill(100, 50, 0);
  // Make the stroke black and 1 pixels thick //
  stroke(0);
  strokeWeight(1);
  // Draw an ellipse at location (640, 360) with a diameter of 360 //
  ellipse(620, 340, 36, 18);
  ellipse(520, 440, 36, 18);
  ellipse(570, 490, 36, 18);
  ellipse(670, 240, 36, 18);
  ellipse(760, 380, 36, 18);
  ellipse(680, 460, 36, 18);
  ellipse(540, 300, 36, 18);
  ellipse(740, 300, 36, 18);
}
function mousePressed() {
  if (r === 255, g === 175, b=== 100) {
    r = 50, g = 150, b = 255;
  } else {
    r = 255, g= 175, b= 100;
  }
}