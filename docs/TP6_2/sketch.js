function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  translate(width/2, height/2);

  


  // Dreisatzfunkton
  // float OUTPUT = map(INPUT, INPUT_START, INPUT_END, OUTPUT_START, OUTPUT_END);

  // second() -> int 0 - 60
  let secondRotate = map(second(), 0, 60, 0, 360);
  rotate(secondRotate);
  strokeWeight(1);
  stroke(255, 0, 0);
  line(0, 0, 0, -180);

  // Rotation vom SekundenZeiger zurücksetzen:

  // WEG 1
  // Rotation durch den Invertierten Rotationswert zurücksetzen:
  rotate(-secondRotate);

  // WEG 2
  // push() -> aktuellen Stand vom Koordinatensystem zwischenspeichern
  push();

  // minute() -> int 0 - 60
  let minuteRotate = map(minute(), 0, 60, 0, 360);
  rotate(minuteRotate);
  strokeWeight(3);
  stroke(0);
  line(0, 0, 0, -190);
  // pop() -> Stand vom Koordinatensystem beim letzen push() wiederherstellen
  // für jeden push() aufruf muss es auch wieder ein pop() geben
  pop();

  push();
  // hour() -> 0 - 24
  
  pop();





}
