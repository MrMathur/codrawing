let button;

function setup() {
	let myCanvas = createCanvas(600, 600);
	myCanvas.parent("canvas");

	button = createButton('CLEAR');
	button.center();
	button.style('margin-top', '45vh');
	button.mousePressed(() => {
		background(255);
	});

	background(255);

	currentSetting = {
		size: 20,
		col: color(0, 0, 0, 150)
	}
}

function draw() {
	if (mouseIsPressed) {
		fill(currentSetting.col);
		noStroke();
		ellipse(mouseX, mouseY, currentSetting.size, currentSetting.size);
	}
}

changeColor = newCol => {
	col = newCol;
}