let buttonStatus = false;
let rectX = 100;
let rectY = 200;
let rectW = 240;
let rectH = 100;

let sound;

function preload(){
  sound = loadSound('sounds/bell.mp3');
  sound.setVolume(0.3);
}

function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw() {
  background(220);

  // wenn die maus auf der linken hälfte vom canvas ist ...
  if(mouseX <= width/2){
    background(255,0,0);
  } else if(mouseY<= height / 2){
    background(0, 0, 255);
  } else {
    background(0, 255, 0);
  }
  // if - else if - else if - ... - else
  // nur einer der Blöcke wird aufgeführt
  /*
  if(mouseX >= width/2 && mouseY <= height/2){
    background(0, 0, 255);
  }
  */



  if(mouseX >= rectX  &&  mouseX <= rectX + rectW &&  mouseY >= rectY && mouseY <= rectY + rectH){
    fill(255, 255, 0);
    if(mouseIsPressed){
      fill(255, 100, 0);

      // buttonStatus zwischen true und false toggeln
      /*if(buttonStatus == true){
        buttonStatus = false;
      } else {
        buttonStatus = true;
      }*/
      
    }
  } else {
    fill(255);
  }

  if(buttonStatus == true){
    fill(0, 255, 0);
  } else {
    fill(0, 0, 255);
  }

  rect(rectX, rectY, rectW, rectH);

  fill(200);
  rect(rectX, rectY, rectW, 5);
  fill(255);

  let timeLine = map(sound.currentTime(), 0, sound.duration(), 0, rectW);
  rect(rectX, rectY,timeLine , 4);
}

// der mousePressed Eventhandler wird je Mausklick EINMAL aufgerufen
function mousePressed(){
 
}

function mouseReleased(){
  if(mouseX >= rectX  &&  mouseX <= rectX + rectW &&  mouseY >= rectY && mouseY <= rectY + rectH){
    /*if(buttonStatus == true){
      buttonStatus = false;
    } else {
      buttonStatus = true;
    }*/
    // statt langer if else ... 
    // ! invertiert den bool Wert
    buttonStatus = !buttonStatus;

    if(buttonStatus){
      sound.loop();
    } else {
      sound.stop();
    }
    
  }
}

function keyPressed(){
  // Processing Variable key -> enhält den zuletzt gedrückten key
  console.log(key);

  if(key == 'a'){
    rectX = rectX - 20;  
  }else if(key == 'd'){
    rectX += 20; // Kurzschreibweise für rextX = rextX + 20;
  }
}