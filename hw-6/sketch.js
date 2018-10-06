var A = 600;
var B = 700;
var C = 0;
var D = 0;
var E = 255;
var bounce1 = 18;
var bounce2 = 6;


function setup() {

    createCanvas( windowWidth, windowHeight );
    frameRate(24);


  }

function draw() {

     background( D, 0, E );

     D = map(mouseX, 0, windowWidth, 0 , 256); // change colors map1
     E = map(mouseY, windowHeight, 0, 70, 0); // change colors map2



     fill( 'yellow' );
     rect(400, B, 70, 70); // box up

     if ( B > height ) {
     bounce2 = -6;
     }

     B = B + bounce2;

     fill( 'yellow' );
     ellipse(C, 600, 90, 90); // box right

     if ( C > width ) {
     bounce1 = -18;
     }

     C = C + bounce1;
}
