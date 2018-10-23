var A = 0;
let ball1 = 40; //ball size
let Fallx = 600; //where ball falls on x-axis
let Fally = 0; // where ball starts on y- axis
let BFx = 1;
let BFy = 1;
let BSx = 1;
let BSy = 5;
let BOX = 600;
let Plat1 = 1;

function setup(){

  createCanvas(windowWidth, windowHeight);
  background('grey');

}

function draw(){

  background('grey');
  fill('teal');
  rect( mouseX, BOX, 70, 20);

  A = map(mouseX, 0, windowWidth, 0 , 256); // change colors map1

  fill('Purple');
  ellipse( Fallx, Fally, ball1, ball1 );
  Fallx += BFx * BSx;
  Fally += BFy * BSy;

  if ( Plat1 > mouseX ) {
  bounce = -1;
  }

  Plat1 = Plat1 + bounce;


}
