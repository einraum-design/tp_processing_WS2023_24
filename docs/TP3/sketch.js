/*
elementare VARIABLEN
Boolean bool true / false
Integer int ganze Zahle 0, 10, 123, -4
FloatingPointNumbers float Fießkomma Zahlen 1.2345 10.0 -2.343
Character char Zeichen 'a', 'b', ' ', ',', '.' 

OBJECT (komplexere TYPEN)
String Zeichenkette "Hello world", "Tom", "a", ""
color Farbe
p5.image / PImage Bildvariable
p5.font / PFont Schriftvariable

Variable definieren:
// let VARIABLENNAME
let alter;
*/

// Varble initalisieren

let xPos = 10.0;
let yPos = 30.0;

let xSpeed = 5.0;
let ySpeed = 3.0;

let name = "Tom";
let font;

let img;

let backgroundColor;


function preload(){
  font = loadFont("fonts/Merriweather-Italic.ttf");
  //img = loadImage("https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg");
  img = loadImage("images/kitty.jpg");
}

function setup() {
  createCanvas(400, 400);
  backgroundColor = color(120);

  textFont(font, 18);
  
  //xPos = 100;
}

function draw() {
  fill(255);

  background(backgroundColor);
  text(name, 20, 20);
  image(img, 20, 40, img.width/3.0, img.height/3.0);

  // Processing Variable
  // mouseIsPressed  boolean -> true / false Zustand der rechten Maustaste ist gedrückt oder nicht gedrückt

  if(mouseIsPressed){
    fill(255, 0, 0);
  } else {
    fill(255);
  }


  ellipse(xPos, yPos, 30, 30);

  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  // VERGLEICHSOPERATOREN
  // a > b
  // a >= b
  // a < b
  // a <= b
  // a == b


  // VERKNÜPFUNGSOPERATOREN
  // CONDITION_1 && CONDITION_2  UND-Verknüpfung - Beide Bedingungen müssen erfüllt sein
  // CONDITION_1 || CONDITION_2 ODER-Verknüpfung - Eine der beiden Bedingungn muss erfüllt sein

  // BEDINGUNGEN:
  // if(CONDITION) { ... wird aufgeführt, wenn die CONDITION erfüllt ist ... }
  /*if(xPos >= width){
    //xSpeed = -5.0;
    xSpeed = -1 * xSpeed;
  }

  if(xPos <= 0){
    xSpeed = -xSpeed;
  }*/

  if(xPos >= width || xPos <= 0){
    //xSpeed = -5.0;
    xSpeed = -1 * xSpeed;
    backgroundColor = color(random(255), random(255), random(255));
  }


  /*if(yPos >= height){
    //xSpeed = -5.0;
    ySpeed = -1 * ySpeed;
  }

  if(yPos <= 0){
    ySpeed = -ySpeed;
  }*/

  if(yPos >= height || yPos < 0){
    ySpeed = -ySpeed;
    backgroundColor = color(random(255), random(255), random(255));
  }




  

  

}
