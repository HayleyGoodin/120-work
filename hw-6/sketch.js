var A = 600;
var B = 700;
var C = 0;
var D = 0;
var E = 255;


function setup() {

    createCanvas( windowWidth, windowHeight );
    frameRate(60);

    background( D, 0, E );
  }

function draw() {

     noStroke ();
     fill( 'black');
     D = map(mouseX, 0, windowWidth, 0 , 256); // change colors
     E = map(mouseY, windowHeight, 0, 70, 0); // change colors
     ellipse(mouseX, mouseY, 40, 40);
     if (mouseIsPressed) {
      background( D, 0, E ); //refresh art
     } else {
       ellipse(mouseX, mouseY, 40, 40);
     }
    
     fill( 'yellow' );
     rect(600, B, 70, 70); // box up
     B = B - 9

     fill( 'red' );
     rect(C, 600, 70, 70); // box right
     C = C + 18


}
