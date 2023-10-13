function setup() {
  // erstellt eine Arbeitsfläche Breite 600px Höhe 400px 
  createCanvas(600, 400); 
  
  // Mit Grad statt Bogenmass arbeiten
  angleMode(DEGREES);
  
  // standartmaessig ist Processing im RGB Farbsystem
  // background(ROTWERT[0 - 255], BLAUWERT[0-255], GRUENWERT[0-255]);
  background(255, 0, 0);
  
  // fill(ROT, GRUEN, BLAU, ALPHA) 0 - 255
  fill(0, 255, 0, 100);
  
  // rectMode(CENTER | CORNER)
  // rect(XPOS, YPOS, W, H)
  rect(200,150, 200, 100);
  
  noStroke();
  fill(100);
  // setzt den Ursprung der Ellipse (REFERENZPUNKT)
  // Standart ist CENTER
  ellipseMode(CORNER);
  ellipse(200, 150, 120, 120);
  
  stroke(0, 0, 255);
  strokeWeight(3);
  line(0, 0, 600, 200);
  
  
  ellipseMode(CENTER);
  fill(255, 255, 0);
  // arc(xPos, yPos, W, H, startAngle, endAngle, MODE)
  arc(150, 200, 150, 150, 45, 360-45, PIE);
  
  stroke(0);
  strokeWeight(10);
  point(150, 160);
}

function draw() {
}