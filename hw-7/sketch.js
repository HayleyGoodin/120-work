

let ball = {};
ball.width = 40;
ball.x = 600;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    background( 'limegreen' );
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill('Purple');
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 5, 30);
    ball.scale_y = map(mouseY, 0, width, 30, 30);
    if (mouseIsPressed) {
      background('black');
    } else {
      background('limegreen');
    }
    if (mouseIsPressed) {
      fill('limegreen');
      ellipse(ball.x, ball.y, ball.width, ball.width);
    } else {
      fill('Purple');
      ellipse(ball.x, ball.y, ball.width, ball.width);
    }
}
