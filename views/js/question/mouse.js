var mouse = false; //click
var cX;//posicion del mosue X
var cY;//posicion del mouse Y

var mMouse = {
	x:0,
	y:0,
	width:150,
	height:150,
}

function mouseAG()
{

	canvas.addEventListener("mousemove", function(e){

		mMouse.x = (e.pageX - ctx.canvas.offsetLeft) /(CANVAS_WIDTH / WIDTH) - mMouse.width/2;
		mMouse.y = (e.pageY - ctx.canvas.offsetTop) /(CANVAS_HEIGHT / HEIGHT)- mMouse.height/2;

		cX = (e.pageX - ctx.canvas.offsetLeft) /(CANVAS_WIDTH / WIDTH);
		cY =( e.pageY - ctx.canvas.offsetTop) /(CANVAS_HEIGHT / HEIGHT);
	});

	canvas.addEventListener("touchmove", function(e){

		mMouse.x = (e.pageX - ctx.canvas.offsetLeft) /(CANVAS_WIDTH / WIDTH) - mMouse.width/2;
		mMouse.y = (e.pageY - ctx.canvas.offsetTop) /(CANVAS_HEIGHT / HEIGHT)- mMouse.height/2;

	});

	canvas.addEventListener("mousedown", function(e){
		cX = (e.pageX - ctx.canvas.offsetLeft) /(CANVAS_WIDTH / WIDTH);
		cY =( e.pageY - ctx.canvas.offsetTop) /(CANVAS_HEIGHT / HEIGHT);
		mouse=true;
		e.preventDefault();
		
	});

	canvas.addEventListener("mouseup", function(e){
		cX = false;
		cY = false;
		mouse=false;
	});

	canvas.addEventListener("touchstart", function(e){
		cX = (e.touches[0].pageX - ctx.canvas.offsetLeft) /(CANVAS_WIDTH / WIDTH);
		cY = (e.touches[0].pageY - ctx.canvas.offsetTop) /(CANVAS_HEIGHT / HEIGHT);
		mouse=true;

	});

	canvas.addEventListener("touchend", function(e){
		cX = false;
		cY = false;
		mouse=false;
	});
}