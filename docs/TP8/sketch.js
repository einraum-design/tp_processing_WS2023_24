let video;

function setup() {
  createCanvas(400, 400);

  let button = createButton("click me!");

  button.position(200, 200);
  // annonye Funktion wird bei jedem click einmal ausgeführt
  button.mouseClicked( () => {
    ellipse(random(width), random(height), 50, 50);
  });

  let button2 = createButton("klicke auch mich");
  button2.mouseClicked(randomStern);

  video = createVideo("assets/video.mp4");
  video.showControls();

  video.hide();
  

  // EventListener onended wird aufgerufen, wenn das video zu Ende abgespielt ist
  video.onended( () => {
    console.log("video ended");
  })


  angleMode(DEGREES);

  imageMode(CENTER);
}

function draw() {
  image(video, mouseX, mouseY);
  //background(220);
  stern(100, 120, 50);
  stern(220, 300, 200, color(255, 0, 0));
  stern(300, 100);
}

function mouseMoved(){
  video.play();
}


// Definition einer eigenen Funkton mit Namen "stern"
function randomStern(){
  let xPos = random(width);
  let yPos = random(height);
  let size = 100;

  push();

  fill(255, 255, 0);
  noStroke();

  translate(xPos, yPos);
  rectMode(CENTER);

  rect(0, 0, size, size);
  rotate(45);
  rect(0, 0, size, size);

  pop();

}

// Neue Funkton stern mit drei Parametern
// erster Wert wird als Varible x übergeben
// zweiter Wert wird als Varible y übergeben
// dritter Wert ist optional und wird als size übergeben 
// - hier ist ein Stadartwert von 100 angegeben
function stern(x, y, size = 100, c = color(255,255,0)){
  let xPos = x;
  let yPos = y;
  //let size = 100;

  push();

  fill(c);
  noStroke();

  translate(xPos, yPos);
  rectMode(CENTER);

  rect(0, 0, size, size);
  rotate(45);
  rect(0, 0, size, size);

  pop();

}