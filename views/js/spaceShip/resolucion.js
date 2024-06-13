//RESOLUCION *************************

var WIDTH = 680;
var HEIGHT = 480;
var CANVAS_WIDTH = 680;
var CANVAS_HEIGHT = 480;
var reso = true;//voltear pantalla de cell

let device = ""// "pc" or "mobile"
let state = "open";

var btnReso={
	x:canvas.width/2-60,
	y:canvas.height/2+83,
	width:120,
	height:75,
}

function cellRes() {
	if (window.innerHeight> window.innerWidth && reso) {
		ctx.save();
		ctx.globalAlpha=0.4;
		ctx.fillStyle="black";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		ctx.globalAlpha=1;
		ctx.drawImage(screenMsg, 40, 40, 600, 400);
		ctx.restore();

	}
	if (window.innerHeight< window.innerWidth) {reso = false;}
	
	if (cX>btnReso.x &&
		cX< btnReso.x + btnReso.width &&
		cY>btnReso.y &&
		cY< btnReso.y + btnReso.height && mouse) {
		reso = false;
	}
}

let resizeCanvas = function(){
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;

	let ratio = 16/9;

	if (CANVAS_HEIGHT< CANVAS_WIDTH / ratio) {
	//	CANVAS_WIDTH = CANVAS_HEIGHT * ratio ;
		
	}else{
		if (window.innerHeight> window.innerWidth) {
			//CANVAS_HEIGHT = CANVAS_WIDTH / ratio;
		}else{

		}
		
	}
	

	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	ctx.mozImageSmoothingEnabled = false;
	ctx.msImageSmoothingEnabled = false;
	ctx.ImageSmoothingEnabled = false;
	ctx.webkitImageSmoothingEnabled = false;


	canvas.style.width = ' ' + CANVAS_WIDTH + 'px';
	canvas.style.height = ' ' + CANVAS_HEIGHT + 'px';
}
resizeCanvas();


 
window.addEventListener('resize', function(){
	resizeCanvas();
});

//MOUSE *************************

var mouse = false;
var cX;
var cY;

var mMouse = {
	x:0,
	y:0,
	width:50,
	height:50,
}
function mouseAG()
{

	canvas.addEventListener("mousemove", function(e){

		mMouse.x = (e.pageX - ctx.canvas.offsetLeft)/(CANVAS_WIDTH / WIDTH);
		mMouse.y = (e.pageY - ctx.canvas.offsetTop)/(CANVAS_HEIGHT / HEIGHT);

	});

	canvas.addEventListener("mousedown", function(e){
		cX = (e.pageX - ctx.canvas.offsetLeft) / (CANVAS_WIDTH / WIDTH);
		cY =( e.pageY - ctx.canvas.offsetTop) / (CANVAS_HEIGHT / HEIGHT);
		mouse=true;
		e.preventDefault();
	});

	canvas.addEventListener("mouseup", function(e){
		cX = false;
		cY = false;
		mouse=false;

	});

	canvas.addEventListener("touchstart", function(e){
		cX = (e.touches[0].pageX - ctx.canvas.offsetLeft) / (CANVAS_WIDTH / WIDTH);
		cY = (e.touches[0].pageY - ctx.canvas.offsetTop) / (CANVAS_HEIGHT / HEIGHT);
		mouse=true;

	});

	canvas.addEventListener("touchend", function(e){
		cX = false;
		cY = false;
		mouse=false;
	});
}

//fullScreen android

window.addEventListener("touchend", function()
{
	if( document.body.requestFullscreen)
	{
		document.body.webkitRequestFullscreen();
	}
});


//out in

window.onblur = function() {
 	state="close";
	stopMusic(music1);
	stopMusic(music2);
	stopMusic(music3);
	stopMusic(music4);
	stopMusic(music5);
	stopMusic(music6);
	stopMusic(music7);
	stopMusic(music8);
	stopMusic(music9);
 	stopMusic(music10);
 	if (!mMenu && play.estado == "vivo") {paused=true;}
 	
}
window.onfocus = function() {
   state="open";
}

mouseAG();