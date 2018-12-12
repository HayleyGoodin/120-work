let BOX = 600;

let speed = 1;
let cat_head;
let plat1;

function preload() {
	//cat_head = loadImage('COT.png')
}

function setup() {

	createCanvas(windowWidth, windowHeight);
	background('grey');
	//image(cat_head, 0, 0, 50, 50)
	plat1 = new Platter()
	cat_head = new Cat()
}

function draw() {
	console.log(plat1, cat_head);


	background('grey');
	fill('teal');
	plat1.display(mouseX)
	cat_head.display()
	cat_head.update(plat1)

	// if ( BSx > mouseX ) {
	// bounce = -1;
	// }
	//
	// BSx = BSx + bounce;
}


function Cat() {
	this.posX = random(20, windowWidth - 20);
	this.posY = 20;
	this.speed = 1;
	this.gravity = 1.05;
	this.radius = 25;

	this.display = function() {
		stroke('black');
		strokeWeight(2);
		fill('goldenrod');
		ellipse(this.posX, this.posY, this.radius * 2, this.radius * 2);
	}

	this.update = function(platter) {
		if (this.posY >= (BOX + 10 ) - (this.radius*2)) {
			this.speed *= -1
            console.log('Hit Y')
            // && this.posX >= platter.posX + 40 && this.posX <= platter.posX - 40
		} else {
			this.posY = (this.posY * this.gravity) + this.speed
		}
	}
}

function Platter(x) {
	this.posY = BOX;
	this.posX = mouseX

	this.display = function(x) {
		stroke('black');
		strokeWeight(2);
		fill('teal');
		rect(x - 35, this.posY, 80, 20);
		this.posX = x



	}
}
