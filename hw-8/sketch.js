var balloon = 1000
var balloon2 = 1300
var string = 1300
var foot = 2100
var haunch = 2280

function setup(){

    createCanvas( windowWidth, windowHeight);
    frameRate(100);
}

function draw(){

     background( 'lightblue');

     fill('red');
     ellipse( 700, balloon, 500, 600 );
     balloon = balloon - 1

     fill('red');
     rect( 675, balloon2, 40, 40 );
     balloon2 = balloon2 - 1

     fill('black');
     rect( 690, string, 5, 800 );
     string = string - 1

     fill('grey');
     ellipse( 660, foot, 300, 100 );
     foot = foot - 1

     fill('grey');
     ellipse( 680, haunch, 300, 300 );
     haunch = haunch - 1
}
