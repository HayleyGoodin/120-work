
var bubbleArray = []
var amountOfBubbles = 5
var x = 20
var y = 20
var s = 20

function setup() {
	createCanvas(600, 600);
    for (var i = 0; i < amountOfBubbles; i++) {
        bubbleArray[i]= new Bubble(x,y,s);
        x *= 2
        y *= 2
        s *= 2
    }
}

function draw() {
	background(225);
    for (var i = 0; i < bubbleArray.length; i++) {
        bubbleArray[i].display();
    }
    console.log(bubbleArray);
}


class Bubble {
	constructor(cat,dog,toad) {
		this.x = cat
		this.y = dog
        this.size = toad
	}

	display() {
		stroke('white');
		strokeWeight(2);
		fill('lightblue');
		ellipse(this.x, this.y, this.size, this.size);
	}
}
