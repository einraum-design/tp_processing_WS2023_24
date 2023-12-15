// Objekte -> Sammlung von Variablen anlegen

// leer initialisieren:
let ball = {};

let auto = {
  ps: 120,
  geschwindigkeit: 50,
  marke: "bmw",
  position: {
    x: 20,
    y: 60
  }
}

let friedolin = {
  ps: 50,
  geschwindigkeit: 30,
  marke: "vw",
  position: {
    x: 20,
    y: 60
  }
}

// Array ist ein spezielle Objekt bei dem die Werte automatisch Nummeriert werden
// statt key: value
// -> index: value // index startet bei 0 und zählt sich hoch

// leer initialisieren:
let myArray = [];
// mit Werten initialisieren:
let namesArray = ["Peter", "Anita", "Klaus", "Anna", "Sandra", "Simone"];

let namesIndex = 0;


function setup() {
  createCanvas(400, 400);

  // neues Attribut color an das Objekt auto anhängen
  auto.farbe = color(255, 0, 0);
  friedolin.farbe = color(255, 255, 0);

  ball.x = random(width);
  ball.y = random(height);
  ball.size = random(5, 25);
  ball.c = color(random(255), random(255), random(255));


  // Werte an Array anhängen:
  namesArray.push("Stefan");
}

function draw() {
  background(220);

  zeichneAuto(auto);

  push();
  translate(0, 100);
  zeichneAuto(friedolin);
  pop();

  zeichneBall(ball);


  fill(0);
  // zugriff auf die "Fächer" vom Array über den index in den []
  text(namesArray[namesIndex], width/2, height/2);


  /*
  text(namesArray[0], 200, 20);
  text(namesArray[1], 200, 40);
  text(namesArray[2], 200, 60);
  text(namesArray[3], 200, 80);
  text(namesArray[4], 200, 100);
  */

  // WHILE SCHLEIFE:
  // while(CONDITION) { solange die CONDITION erfüllt ist, führe den Inhalt der Schleifenblock immer wider aus }

  let counter = 0;
  while(counter < 30){
    ellipse(20 + 10*counter, 200, 20, 20);
    counter ++;
  }




  let namesCounter = 0;
  while(namesCounter < namesArray.length){
    text(namesArray[namesCounter], 20, 220 + 20*namesCounter);
    namesCounter ++;
  }

  // for schleife
  // for(VARIABLENDEFINITION; CONDITION; INCREMENTOR){}
  for(let myCounter = 0; myCounter < 10; myCounter ++){ 
  }

}

function zeichneAuto(a){
  fill(a.farbe);
  text("PS: " + a.ps, 20, 20);
  text("Marke: " + a.marke, 20, 40);
  ellipse(a.position.x, a.position.y, 30, 30);

  a.position.x = a.position.x + a.geschwindigkeit*0.01;
}

function zeichneBall(b){
  fill(b.c);
  ellipse(b.x, b.y, b.size, b.size);
}

function mouseClicked(){
  namesIndex ++; // namesIndex = namesIndex + 1;
  // Jedes Array hat die Eigenschaft "length". 
  // gibt an wieviele Elemente das Array enthält
  // letzter Index ist die array.length -1 (weil ich mit 0 beginne zu zählen)
  if(namesIndex >= namesArray.length){
    namesIndex = 0;
  }
}