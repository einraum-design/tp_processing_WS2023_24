function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  translate(200 + 50, 100 + 25);

  // scale standart 1, 1
  scale(-1, 1); // horizontal spiegeln

  rotate(mouseX);

  rect(-50,-25, 100, 50);

  translate(50, -25);
  rotate(mouseY);

  rect(0, 0, 20, 100);

  translate(0, 100);
  rotate(frameCount);
  rect(0, 0, 20, 100);


  resetMatrix();

  ellipse(0, 0, 100, 100);



}
