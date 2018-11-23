var circle1;
var circle2;
var d = dist(circle1.x, circle.y, circle2.x, circle2.y);

function setup() {
  createCanvas( 600, 600 );

function draw() {
  background('black');

  circle1 = new Bubble(300,300);
  circle2 = new Bubble(250,250);
  }

  circle1.display();
  circle1.update();
  circle2.display();
  circle2.update();
}
function Bubble() {
    this.x = y;
    this.y = x;
    this.radius = 50;
    this.color = ('lightblue');

  this.display = function(){
    stroke('white');
    strokeWeight(2);
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);

  this.changeColor = function(){  //bubble changes color upon collision
    this.color = color(random(200), random(200), random(200));
  }
}

  this.update = function(){
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
if (d < circle1.r + circle2.r){
  circle1.changeColor();
  circle2.changeColor();
}

}
