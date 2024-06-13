//RESOLUCION *************************

var WIDTH = 800;
var HEIGHT = 800;
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 800;
var reso = true;//voltear pantalla de cell

var btnReso={
	x:canvas.width/2-60,
	y:canvas.height/2+83,
	width:120,
	height:75,
}

window.addEventListener("touchend", function()//full screen android
{
	if( document.body.requestFullscreen)
	{
		document.body.webkitRequestFullscreen();
	}
});


function cellRes() {
	if (window.innerHeight> window.innerWidth && reso) {
		ctx.save();
		ctx.globalAlpha=0.4;
		ctx.fillStyle="black";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		ctx.globalAlpha=1;
		//ctx.drawImage(screenMsg, 40, 40, 600, 400);
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

	CANVAS_WIDTH = window.innerWidth ;
	CANVAS_HEIGHT = window.innerHeight ;

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

	//ctx.mozImageSmoothingEnabled = false;
	//ctx.msImageSmoothingEnabled = false;
	//ctx.ImageSmoothingEnabled = false;
	//ctx.webkitImageSmoothingEnabled = false;


	canvas.style.width = ' ' + CANVAS_WIDTH + 'px';
	canvas.style.height = ' ' + CANVAS_HEIGHT + 'px';
}
resizeCanvas();


 
window.addEventListener('resize', function(){
	resizeCanvas();
});