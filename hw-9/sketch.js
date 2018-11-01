var array = ["I", "Don't", "Like", "Numbers"];
var scale = [ 50, 100, 150, 200, 250, 300 ];
var loops = 0;

function setup(){

    createCanvas( windowWidth, windowHeight);
}

function draw(){

     background( 'red');

     if (mouseIsPressed) {
       background('black');
     } else {
       background('red');
     }

     textSize(80);
     fill('red');
     text(array[loops], 500, 350);
   }

function mousePressed() {
  loops = loops + 1;

  if (loops == 4 ){
       loops = 0;
     }

   }
