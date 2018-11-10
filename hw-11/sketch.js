var circle;

function setup() {
  createCanvas( 600, 600 );

  circle = new Bubble();
}

function draw() {
  background('black');
  circle.display();
  circle.ascend();
}
function Bubble() {
    this.x = random(width);
    this.y = random(height);

  this.display = function(){
    stroke('white');
    strokeWeight(2);
    fill('lightBlue');
    ellipse(this.x, this.y, 40, 40);
  };
}
