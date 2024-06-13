var mouse = false; //click
var cX;//posicion del mosue X
var cY;//posicion del mouse Y
let vPosMouse=false;


var mMouse = {
	x:0,
	y:0,
	width:150,
	height:150,
}
var direction = "";
    var oldx = 0;
    var oldy = 0;

function mouseAG()
{
	canvas.addEventListener("mousemove", function(e){

		mMouse.x = (e.pageX - ctx.canvas.offsetLeft) /(CANVAS_WIDTH / WIDTH) - mMouse.width/2;
		mMouse.y = (e.pageY - ctx.canvas.offsetTop) /(CANVAS_HEIGHT / HEIGHT)- mMouse.height/2;

		cX = (e.pageX - ctx.canvas.offsetLeft) /(CANVAS_WIDTH / WIDTH);
		cY =( e.pageY - ctx.canvas.offsetTop) /(CANVAS_HEIGHT / HEIGHT);
		
		if (e.pageX > oldx && e.pageY == oldy) {
                direction="East";
            }
            else if (e.pageX == oldx && e.pageY > oldy) {
                direction="South";
            }
            else if (e.pageX == oldx && e.pageY < oldy) {
                direction="North";
            }
            else if (e.pageX < oldx && e.pageY == oldy) {
                direction="West";
            }
        
        //console.log(direction);
        oldx = e.pageX;
         oldy = e.pageY;
	});

	canvas.addEventListener("touchmove", function(e){

		mMouse.x = (e.pageX - ctx.canvas.offsetLeft) /(CANVAS_WIDTH / WIDTH) - mMouse.width/2;
		mMouse.y = (e.pageY - ctx.canvas.offsetTop) /(CANVAS_HEIGHT / HEIGHT)- mMouse.height/2;

		//cX = (e.pageX - ctx.canvas.offsetLeft) /(CANVAS_WIDTH / WIDTH);
		//cY =( e.pageY - ctx.canvas.offsetTop) /(CANVAS_HEIGHT / HEIGHT);

	});

	canvas.addEventListener("mousedown", function(e){
		cX = (e.pageX - ctx.canvas.offsetLeft) /(CANVAS_WIDTH / WIDTH);
		cY =( e.pageY - ctx.canvas.offsetTop) /(CANVAS_HEIGHT / HEIGHT);
		mouse=true;
		e.preventDefault();
		if (vPosMouse && mouse) 
		{
			console.log(cX+"-"+cY);
		}
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