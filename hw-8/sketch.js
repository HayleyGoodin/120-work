var balloon = 1000
var balloon2 = 1300
var string = 1300
//var foot = 2100
//var haunch = 2280
//var belly = 2400
//var backHaunch = 2290
//var backFoot = 2300
//var head = 2650
//var ear1 = 2700
//var ear2 = 2730
var head = 2280
var body = 2500
var arm = 2100
var hand = 2100
var leg = 2650
var leg2 = 2625
var eye1 = 2280
var eye2 = 2280
var mouth = 2350

function setup(){

    createCanvas( windowWidth, windowHeight);
    frameRate(1000);
}

function draw(){

     background( 'lightblue');

     if (mouseIsPressed) {
       background('black');
     } else {
       background('lightblue');
     }

     fill('red');
     ellipse( 700, balloon, 500, 600 );
     balloon = balloon - 1

     fill('red');
     rect( 675, balloon2, 40, 40 );
     balloon2 = balloon2 - 1

     fill('black');
     rect( 690, string, 5, 800 );
     string = string - 1

    //spooky sketch turned morbid on accident

     //fill('grey');
     //ellipse( 650, backHaunch, 300, 300);
     //backHaunch = backHaunch - 1

     //fill('grey');
     //ellipse( 470, backFoot, 80, 250 );
     //backFoot = backFoot - 1

     //fill('grey');
     //ellipse( 620, foot, 300, 100 );
     //foot = foot - 1

     //fill('grey');
     //ellipse( 660, ear1, 50, 500 );
     //ear1 = ear1 - 1

     //fill('grey');
     //ellipse( 700, ear2, 50, 500 );
     //ear2 = ear2 - 1

     //fill('grey');
     //ellipse( 680, head, 200, 230 );
     //head = head - 1

     //fill('grey');
     //ellipse( 670, belly, 300, 400 );
     //belly = belly - 1

     //fill('grey');
     //ellipse( 690, haunch, 300, 300 );
     //haunch = haunch - 1

     textSize(20);
     fill('lightblue');
     text('Struggle', 60, 60);

     textSize(20);
     fill('lightblue');
     text('Struggle', 1000, 620);

     textSize(20);
     fill('lightblue');
     text('Struggle', 100, 300);

     textSize(20);
     fill('lightblue');
     text('Struggle', 1000, 80);


     fill('black');
     rect( 600, leg2, 2, 300 );
     leg2 = leg2 - 1

     fill('white');
     ellipse( 620, body, 300, 400);
     body = body - 1

     fill('white');
     ellipse( 620, head, 300, 300 );
     head = head - 1

     fill('black');
     rect( 690, arm, 2, 400 );
     arm = arm - 1

     fill('white');
     ellipse( 670, hand, 50, 50 );
     hand = hand - 1

     fill('black');
     rect( 670, leg, 2, 300 );
     leg = leg - 1

     fill('black');
     ellipse( 500, eye1, 5, 5 );
     eye1 = eye1 - 1

     fill('black');
     ellipse( 640, eye2, 5, 5 );
     eye2 = eye2 - 1

     fill('black');
     rect( 550, mouth, 70, 3 );
     mouth = mouth - 1

}
