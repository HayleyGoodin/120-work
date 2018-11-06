Bubble b1;
Bubble b2;

function setup() {
  size( 600, 600 );

  b1 = new Bubble(10);
  b2 = new Bubble(10);
}

function draw() {
  background(225);
}

  b1.display();
  b2.display();

}

class Bubble {

 float x;
 float y;
 
  Bubble(){
    x = width;
    y = height;
  }

  function display() {
    stroke('white');
    strokeWeight(2);
    fill('lightBlue');
    ellipse(x, y, 40, 40);
  }
}
