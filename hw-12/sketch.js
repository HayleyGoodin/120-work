//var circle1;
//var circle2;
var d = dist(circle1.x, circle.y, circle2.x, circle2.y);
var Bubbles = [];
const numOfBubbles = 20;

function setup() {

  createCanvas( 600, 600 );

  circles = new Bubbles(width / 60, height / 60, 50, 'red');
}


function draw() {
  background('black');

  let init_x = 60;
  let init_y = 60;
  for ( let i = 0; i < numOfBubbles; i++ ) {
          Bubbles.push( new Object( init_x, init_y ) );

          init_x += 100;
        if( init_x > width ) {
            init_x = 60;
            init_y += 100;
        }
    }
}


  //circle1 = new Bubble(300,300);
  //circle2 = new Bubble(250,250);


  circle1.display();
  circle1.update();
  circle2.display();
  circle2.update();

function Bubbles() {
    this.posX = x;
    this.posY = y;
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
