/* ich
  bin
  ein 
  mehrzeiliger 
  kommentar
  */


function setup() {
  createCanvas(400, 400);
  
  // Winkel in Grad statt Bogenmaß angeben:
  angleMode(DEGREES);
  
  // Farben 0 - 255 --> R, G, B, (A)
  background(0, 0, 255);
  
  // Füllfarbe festlegen
  // Farben 0 - 255 --> R, G, B, (A)
  // Farben 0 - 255 --> Grauwert, (A)
  fill(255, 150, 0);
  
  
  // Referenzpunkt, von wo der Kreis aus positioniert wird
  // CENTER / CORNER
  ellipseMode(CORNER);
  // ellipse(X-POS, Y-POS, WIDTH, HEIGHT);
  ellipse(200, 150, 100, 100);
  
  
  fill(255, 100);
  stroke(255);
  strokeWeight(5);
  
  // Referenzpunkt, von wo der Rechteck aus positioniert wird
  // CENTER / CORNER
  rectMode(CENTER);
  // rect(X-POS, Y-POS, WIDTH, HEIGHT);
  rect(200, 150, 100, 100);
  
  
  noStroke();
  triangle(50,50, 150, 100, 100, 200);
  
  
  fill(255, 255, 0);
  arc(100, 300, 100, 100, 20, 360-20 , PIE);
  
  stroke(0);
  strokeWeight(6);
  point(150, 330);
  
}

function draw() {
}