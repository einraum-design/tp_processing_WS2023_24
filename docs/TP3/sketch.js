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


function preload(){
  font = loadFont("fonts/Merriweather-Italic.ttf");
  //img = loadImage("https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg");
  img = loadImage("images/kitty.jpg");
}

function setup() {
  createCanvas(400, 400);

  textFont(font, 18);
  
  //xPos = 100;
}

function draw() {
  
  background(220);
  text(name, 20, 20);
  image(img, 20, 40, img.width/3.0, img.height/3.0);


  ellipse(xPos, yPos, 30, 30);

  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  // VERGLEICHSOPERATOREN
  // a > b
  // a >= b
  // a < b
  // a <= b
  // a == b

  // BEDINGUNGEN:
  // if(CONDITION) { ... wird aufgeführt, wenn die CONDITION erfüllt ist ... }
  if(xPos >= width){
    //xSpeed = -5.0;
    xSpeed = -1 * xSpeed;
  }

  if(xPos <= 0){
    xSpeed = -xSpeed;
  }

  if(yPos >= height){
    //xSpeed = -5.0;
    ySpeed = -1 * ySpeed;
  }

  if(yPos <= 0){
    ySpeed = -ySpeed;
  }




  

  

}
