function setup() {
  createCanvas(800, 600);
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

  let rectX = 400;
  let rectY = 200;
  let rectW = 200;
  let rectH = 100;

  if(mouseX >= rectX  &&  mouseX <= rectX + rectW &&  mouseY >= rectY && mouseY <= rectY + rectH){
    fill(255, 255, 0);
    if(mouseIsPressed){
      fill(255, 100, 0);
    }
  } else {
    fill(255);
  }

  rect(rectX, rectY, rectW, rectH);


}
