canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

var car_width = 100;
var car_height = 90;
var background_image = "mars.jpg";
var car_image = "car2.png";
var car_x = 50;
var car_y = 50;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function add() {
	background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = background_image;
    car_image_tag = new Image();
    car_image_tag.onload = uploadcar;
    car_image_tag.src = car_image;
}

function uploadBackground() {
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);

}

function uploadcar() {
    ctx.drawImage(car_image_tag, car_x, car_y, car_width, car_height);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y >= 0) {
        car_y = car_y - 10;
    console.log("When up arrow is pressed, x=" + car_x + "| y= " + car_y);
    uploadBackground();
    uploadCar();
	}
}

function down()
{
	if(car_y <= 700) {
        car_y = car_y + 10;
    console.log("When up arrow is pressed, x=" + car_x + "| y= " + car_y);
    uploadBackground();
    uploadCar();
	}
}

function left()
{
	if(car_y >= 0) {
        car_y = car_y - 10;
    console.log("When up arrow is pressed, y=" + car_y + "| x= " + car_x);
    uploadBackground();
    uploadCar();
	}
}

function right()
{
	if(car_y <= 900) {
        car_y = car_y + 10;
    console.log("When up arrow is pressed, y=" + car_y + "| x= " + car_x);
    uploadBackground();
    uploadCar();
	}
}