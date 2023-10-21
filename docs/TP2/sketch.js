// Processing eigene Varibelen
// mouseX -> aktuelle Maus x Kooridnate auf dem Canvas Element
// mouseY -> akutelle Maus y-Koordinate ...
// width  -> Breite vom Canvas
// height -> Hoehe vom Canvas
// frameCount -> Anwachsende Zahl - Zählt jede function draw() Wiederholung um eins hoch


// random(MAX) -> gibt eine zufällige Zahl zwischen 0 und MAX zurück
// random(MIN, MAX) -> gibt eine zufällige Zahl zwischen MIN und MAX zurück

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  
  //frameRate(1); // Standart ist 60 frames / second
  
}

function draw() {
  
  background(220, 10);
  
  strokeWeight(2);
  fill(255, 0, 0, mouseX);
  ellipse(mouseY, mouseX, 200);
  
  rectMode(CENTER);
  // + - * / %
  rect(width / 2, height/2, 100, 100);
  
  
  fill(255);
  rectMode(CORNER);
  rect(0, height-50, width, 50);
  
  rect(width*2/3, 0, width/3, height-50);
  
  strokeWeight(frameCount/4);
  ellipse((frameCount*3) % width, height/2, 50, 50);
  
  strokeWeight(1);
  fill(random(255), 100, 100);
  rect(random(width), 100, 30, random(20, 50));
  
  
}