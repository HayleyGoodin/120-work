### Hayley Goodin, Section 50

[https://hayleygoodin.github.io/120-work/hw-7/]


# HW 7

## Description of What the Original Code is Doing

Function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}

###### The code above is stating the size and color of the canvas.

ball.x += ball.delta_x * ball.scale_x;
ball.y += ball.delta_y * ball.scale_y;


if (ball.x >= width || ball.x <= 0) {
    ball.delta_x = -1 * ball.delta_x;
}
if (ball.y >= height || ball.y <= 0) {
    ball.delta_y = -1 * ball.delta_y;
}

##### The code above is stating that the ball can not go past the width and height of the canvas. The way they are making the ball go the other direction rather than stick is by using the variables ball.delta_x and ball.delta_y and reversing the original instructions " -1 ". The loop reads this and changes the direction when the the given number is reached. The code at the very top is allowing the ball to move in general.

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

##### The code here is declaring the variables for the previously posted code. You can see here the ball.delta_x and ball.delta_y are declared with the original instructions " 1 "

fill(255);
ellipse(ball.x, ball.y, ball.width, ball.width);
}

##### The code above is drawing the ball. Filling it with color and telling it where to go. The declarations in the previous code stating that the ball is 40 in width and in height. and that it will begin its animation at 10 on the X axis and 10 on the Y axis.

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}

###### This code is saying that when you click the mouse the ball will move in different angles on the canvas. The 0.5 marks the speed of the ball as it moves across the screen.



## How did you alter the sketch?

 I altered the sketch by changing the colors of both the canvas and the ellipse. I moved the start of the fall farther away from the corner of the canvas and increased the fall speed. I also increased the speed on the Y axis on the mousePressed command to make the ball move faster up and down. I also added that the background will change to black when clicked and the first circle of the fast moving ball will be the same color as the original background. It makes it look like the ball is breaking through
