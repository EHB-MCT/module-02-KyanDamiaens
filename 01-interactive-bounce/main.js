let canvasElement = document.querySelector("#canvas");

//1. Add variables needed for animating the ball
let x = 300;
let y = 300;

//2. Add variables (size, speed, colorVal) for controlling the sketch
let size = 50;
let speed = 10;
let colorval = "red";

let speedx = speed;
let directionx = 1;

function setup() {
	//Creating a canvas to draw on, using the existing canvas element.
	createCanvas(600, 600, canvasElement);
	noStroke();
}

function draw() {
	background(220);

	// 3.1 Animate position
	x += speed;

	// 3.2 Bounce logic: check the edges
	if (x > width - size / 2 || x < size / 2) {
		speed = speed * -1;
	}
	// 3.3 Draw
	fill(colorval);
	circle(x, y, size);
}

// --- DOM Interaction ---

// 4. Select the input elements
let sizeInput = document.querySelector("#size-input");
let speedInput = document.querySelector("#speed-input");
let colorInput = document.querySelector("#color-input");

// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging
sizeInput.addEventListener("input", function () {
	size = Number(sizeInput.value);
});

speedInput.addEventListener("input", function (e) {
	speed = Number(e.target.value);
});

colorInput.addEventListener("input", function (e) {
	colorval = e.target.value;
});
