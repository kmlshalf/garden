let caflowers=[];
var img;
var curr_active;

function preload() {
	img = loadImage('resources/img/capoppy.png');
	caflowers[0] = loadImage('resources/img/capoppy.png');
	caflowers[1] = loadImage('resources/img/carpenteria.png');
	caflowers[2] = loadImage('resources/img/enceliacacalifornica.png');
	caflowers[3] = loadImage('resources/img/meadowfoam.png');
	caflowers[4] = loadImage('resources/img/wildrose.png');
}

function setup() { 
	var canvasDiv = document.getElementById('canvas');
	var width = canvasDiv.offsetWidth;
	var height = canvasDiv.offsetHeight;
	var sketchCanvas = createCanvas(width, height);
	sketchCanvas.parent(canvasDiv);
	curr_active = document.getElementById("poppy");
	cursor('resources/img/glove.png');
}

function windowResized() {
	var canvasDiv = document.getElementById('canvas');
	var width = canvasDiv.offsetWidth;
	var height = canvasDiv.offsetHeight;
	resizeCanvas(width, height);
} 

function addActive(id) {
	curr_active.classList.remove("active");
	curr_active = document.getElementById(id);
	curr_active.classList.add("active");
}

function findActiveImg() {
	let caarray = document.getElementsByClassName('ca');
	console.log(caarray);
	for (i=0; i < caarray.length; i++) {
		if (caarray[i].classList.contains('active')) {
			img = caflowers[i];
			break;
		}
	}
}

function mousePressed() {
	findActiveImg();
}

function draw() {
	if (mouseIsPressed) {
		image(img, mouseX, mouseY);
		imageMode(CENTER);
	}
}