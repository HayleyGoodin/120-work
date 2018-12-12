
var circleArray = [];
const numOfBubbles = 20;

function setup() {


	createCanvas(windowWidth, 600);
    let init_x = windowWidth/numOfBubbles;
	let init_y = 60;
    let init_rad = 30
    let init_col = 'lightBlue'
    for (let i = 0; i < numOfBubbles; i++) {
		circleArray.push(new Bubble(init_x, init_y,init_rad,init_col));
        init_x += windowWidth/numOfBubbles
		// init_x += 100;
		// if (init_x > width) {
		// 	init_x = 60;
		// 	init_y += 100;
		//}
	}
}



function draw() {
	background('black');
    for (var num = 0; num < circleArray.length; num++) {
        circleArray[num].display()
        circleArray[num].update()

        for (var num_other = 0; num_other < circleArray.length; num_other++) {
            if (num != num_other) {
                circleArray[num].changeColor(circleArray[num_other]);
            }
        }

    }

}


//circle1 = new Bubble(300,300);
//circle2 = new Bubble(250,250);




function Bubble (x,y,rad,col) {
	this.posX = x;
	this.posY = y;
	this.radius = rad;
	this.color = col;

	this.display = function() {
		stroke('white');
		strokeWeight(2);
		fill(this.color);
		ellipse(this.posX, this.posY, this.radius * 2, this.radius * 2);

	}

	this.update = function(other) {
		this.posX = this.posX + random(-1, 1);
		this.posY = this.posY + random(-1, 1);
	}

    this.changeColor = function(other) {
        d = dist(this.posX, this.posY, other.posX, other.posY);
        if (d <= this.radius){
            this.color = color(random(200), random(200), random(200));
        }
    }
	// if (d < circle1.radius + circle2.radius) {
	// 	circle1.changeColor();
	// 	circle2.changeColor();
	// }

}
