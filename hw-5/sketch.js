var shapeA = 70;   //Body
var shapeB = 130;  //Head
var shapeC = 120;  //FrontArm
var shapeD = 20;   //FrontThigh
var shapeE = 0;    //BottomFoot
var shapeF = 182;  //BottomEar
var shapeG = 177;  //TopEar
var shapeH = 30;   //BackThigh
var shapeI = 20;   //Tail
var shapeJ = 25;   //TopFoot
var shapeK = 130;  //Eye
var shapeL = 130;  //Pupil
var shapeM = 125;  //TinyNose
var shapeN = 100;  //BackArm
var shapeO = 95;   //Hand
var shapeP = 102;  //Thumb


function setup() {

    createCanvas( 1280, 300 );

    background( 'lightblue' );
  }

function draw() {

  background( 'lightblue');

  fill('blue');
  rect( 0, 280, 1280, 100 ); //Water

  fill('teal');
  ellipse(shapeH, 230, 50, 50); //BackThigh
  shapeH = shapeH + 1

  fill('teal');
  ellipse(shapeI, 270, 130, 30); //tail
  shapeI = shapeI + 1

  fill('teal');
  ellipse(shapeN, 200, 20, 80); //BackArm
  shapeN = shapeN + 1

  fill('teal');
  ellipse(shapeA, 250, 100, 80); //Body
  shapeA = shapeA + 1

  fill('teal')
  ellipse(shapeG, 240, 40, 10); //TopEar
  shapeG = shapeG + 1

  fill('teal');
  ellipse(shapeB, 245, 80, 90); //Head
  shapeB = shapeB + 1

  fill('white');
  ellipse(shapeK, 240, 30); //Eye
  shapeK = shapeK + 1

  fill('black');
  ellipse(shapeL, 235, 2); //Pupil
  shapeL = shapeL + 1
  if (mouseIsPressed) {
    ellipse(shapeL, 235, 15); //Pupil big when clicked
  } else {
    ellipse(shapeL, 235, 2);
  }

  fill('black');
  ellipse(shapeM, 210, 5) //TinyNose
  shapeM = shapeM + 1

  fill('teal');
  ellipse(shapeC, 277, 80, 20); //FrontArm
  shapeC = shapeC + 1

  fill('teal');
  ellipse(shapeP, 163, 10, 25); //Thumb
  shapeP = shapeP + 1

  fill('teal');
  ellipse(shapeO, 170, 20, 28); //Hand
  shapeO = shapeO + 1

  fill('teal');
  ellipse(shapeD, 255, 50, 50);  //FrontThigh
  shapeD = shapeD + 1

  fill('teal');
  ellipse(shapeE, 250, 20, 28); //BottomFoot
  shapeE = shapeE + 1

  fill('teal');
  ellipse(shapeJ, 205, 28, 20); //TopFoot
  shapeJ = shapeJ + 1

  fill('teal')
  ellipse(shapeF, 270, 40, 10); //BottomEar
  shapeF = shapeF + 1

  frameRate(24);
  fill('grey')
  line(pmouseX, pmouseY, mouseX, mouseY); //Not sure, mouse follower



}
