//Game Engine by Alejandro Inciarte

/**************** SEARCH *****************

- MonoBehaviur
- GameObject
- Rigidbody
- Camera
- BoxCollider
- Sprite
- Text
- Resolution

----------- FUNCTIONS ------------

- lerp
- deg
- LookAt

*****************************************/
//let lastUpdate = Date.now();
//let lastUpdate = new Date().getTime();
//let device="pc";

///////////////DONT WORK////////////////
let lastUpdate = performance.now();
//let deltaTime;

function deltaTimeEnd(){
	//lastUpdate = new Date().getTime();
	lastUpdate = performance.now();
}

function deltaTimeStart(){

    //deltaTime = (new Date().getTime() - lastUpdate);
    deltaTime = (performance.now() - lastUpdate);
}
////////////////////////////////////

let Time ={
	start:0,
	end:0,
	deltaTime:0,
	Fend:function(){},
	Fstart:function(){},
}
Time.Fend=()=>{
	Time.start = new Date().getTime();
	//Time.start = performance.now();
}

Time.Fstart=()=>{
	Time.end = new Date().getTime();
	//Time.end = performance.now();
	
	Time.deltaTime = (Time.end - Time.start)*0.001;
}

let fps = 60;
let interval = 1000/fps;
let lastTime = (new Date()).getTime();
let currentTime = 0;
let deltaTime = 0;

var frameCount = 0,
    currentFps = 0,
    drawInterval = 1 / fps * 1000,
    lastFps = new Date().getTime();

//DT = deltaTime
function StartDT()
{
	currentTime = (new Date()).getTime();
	deltaTime = (currentTime-lastTime)*0.0001;
   
}


function EndDT(){
	if(deltaTime > interval) {
        lastTime = currentTime - (deltaTime % interval);
    }
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas.getContext('2d');


// pantalla completa al tocar la pantalla en mobiles
window.addEventListener("touchend", function()
{
	if( document.body.requestFullscreen)
	{
		document.body.webkitRequestFullscreen();
	}
});




class MonoBehaviour
{
	constructor()
	{
		this.fpsMax = 60;
		this.interval = 1000/this.fpsMax

		this.awake = this.Awake();
		this.start = this.Start();
		this.update = setInterval(this.Update, this.interval);
	}

	Awake(){}

	Start(){}

	Update(){}
}


class GameObject
{
	constructor(x,y,width,height,rotate)
	{
		this.operation = "";
		
		this.type="gameobject";
		this.width			= width;//ancho del objeto
		this.height			= height;//alto de lobjeto
		this.x				= x;//pos X del objeto
		this.y				= y;// pos Y del objeto	
		this.scaleX 		= 1;
		this.scaleY 		= 1;
		this.alpha 			= 1;//trasparencia
		this.rotate			= rotate;
		this.filter 		= "none";
		this.transform =
		{
			translate:this.Translate,
			position:this.Position,
			rotate:this.Rotate,
			scale:this.Scale,
		}		
	}
	
	Translate=(x, y)=>
	{
		this.x += x;
		this.y += y;
	}

	Position=(x, y)=>
	{
		this.x = x;
		this.y = y;
	}

	Rotate=(r)=>
	{
		this.rotate = r;
		
	}

	Scale=(x, y)=>
	{
		this.scaleX = x;
		this.scaleY = y;
	}

	Draw = (select,img_color) =>//select "image" or "color" string, img_color string "src Image" or "color"
	{
		if (select=="image")
		{
			ctx.save();
			ctx.filter = this.filter;
			ctx.globalCompositeOperation = this.operation;
			ctx.globalAlpha=this.alpha;
			ctx.translate(this.x, this.y);
			ctx.scale(this.scaleX, this.scaleY);
			ctx.rotate(this.rotate);
			ctx.drawImage(img_color,this.width/-2, this.height/-2,this.width, this.height);
			ctx.restore();
		}
		if (select=="color")
		{
			ctx.save();
			ctx.filter = this.filter;
			ctx.globalCompositeOperation = this.operation;
			ctx.globalAlpha=this.alpha;
			ctx.translate(this.x, this.y);
			ctx.scale(this.scaleX, this.scaleY);
			ctx.rotate(this.rotate);
			ctx.fillStyle=img_color;
			ctx.fillRect(this.width/-2, this.height/-2,this.width, this.height);
			ctx.restore();
		}
	}
}

//************ COMPONENT ***************

//rigidbody no esta completo. No usar
class Rigidbody
{
	constructor(object)
	{
		this.object = object;
		this.gravity = 0.20;
		this.gravitySpeed =0;
		this.mass = 50;
		this.drag = 0;
		this.acceleration = 3;

		this.frictionX = 0.93; 
		this.speedX = 0;
		this.speedY = 0;

		this.afX = 0;
		this.afY = 0;

	}

	Physics(b)
	{
		let r = 100;
		let x = this.object.x - b.object.x;
		let y = this.object.y - b.object.y;

		let distance = Math.sqrt(x*x + y*y);
		let vCollisionNorm = {
			x:x/distance,
			y:y/distance,
		}
		let vRelativeVelocity ={
			x: this.speedX - b.speedX, 
			y: this.speedY - b.speedY,
		}
		let speed= vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
		//if (speed < 0) {break;}

		this.speedX -= (speed * vCollisionNorm.x)
		this.speedY -= (speed * vCollisionNorm.y)
		b.speedX += (speed * vCollisionNorm.x)
		b.speedY += (speed * vCollisionNorm.y)

		this.object.x -= this.speedX;
		this.object.y -= this.speedX;
		b.object.x += b.speedX;
		b.object.y += b.speedX;
		
	}

	Gravity()
	{
		this.gravitySpeed += this.mass * this.gravity/(this.acceleration*this.acceleration);
		this.object.y += this.gravitySpeed;

		this.speedX *= this.frictionX;
		this.object.x += this.speedX;
	}

	AddForce(x,y,detectZero)
	{
		if (detectZero) {
			this.speedX = x;
			this.gravitySpeed = y;
		}else{
			if (x!=0) {this.speedX = x;}
			if (y!=0) {this.gravitySpeed = y;}
		}
		/*this.speedX = x;
		this.gravitySpeed = y;*/
	}
}

class Camera {
    constructor(context, settings) {
        settings = settings || {};
        this.distance = 1000.0;
        this.lookAt = [0, 0];
        this.context = context;
        this.fieldOfView = settings.fieldOfView || Math.PI / 4.0;
        this.composite = "";
        this.viewport = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0,
            scale: [1.0, 1.0]
        };

        this.addListeners();
        this.updateViewport();
    }

    begin() {
    	this.context.globalCompositeOperation = this.composite;
        this.context.save();
        this.applyScale();
        this.applyTranslation();
    }

    end() {
        this.context.restore();
    }

    applyScale() {
        this.context.scale(this.viewport.scale[0], this.viewport.scale[1]);
    }

    applyTranslation() {
        this.context.translate(-this.viewport.left, -this.viewport.top);
    }

    updateViewport() {
        this.aspectRatio = this.context.canvas.width / this.context.canvas.height;
        this.viewport.width = this.distance * Math.tan(this.fieldOfView);
        this.viewport.height = this.viewport.width / this.aspectRatio;
        this.viewport.left = this.lookAt[0] - (this.viewport.width / 2.0);
        this.viewport.top = this.lookAt[1] - (this.viewport.height / 2.0);
        this.viewport.right = this.viewport.left + this.viewport.width;
        this.viewport.bottom = this.viewport.top + this.viewport.height;
        this.viewport.scale[0] = this.context.canvas.width / this.viewport.width;
        this.viewport.scale[1] = this.context.canvas.height / this.viewport.height;
    }

    zoomTo(z) {
        this.distance = z;
        this.updateViewport();
    }

    moveTo(x, y) {
        this.lookAt[0] = x;
        this.lookAt[1] = y;
        this.updateViewport();
    }

    screenToWorld(x, y, obj) {
        obj = obj || {};
        obj.x = (x / this.viewport.scale[0]) + this.viewport.left;
        obj.y = (y / this.viewport.scale[1]) + this.viewport.top;
        return obj;
    }

    worldToScreen(x, y, obj) {
        obj = obj || {};
        obj.x = (x - this.viewport.left) * (this.viewport.scale[0]);
        obj.y = (y - this.viewport.top) * (this.viewport.scale[1]);
        return obj;
    }

    addListeners() {
        // Zoom and scroll around world
        window.onwheel = e => {
            if (e.ctrlKey) {
                // Your zoom/scale factor
                let zoomLevel = this.distance - (e.deltaY * 20);
                if (zoomLevel <= 1) {
                    zoomLevel = 1;
                }

                this.zoomTo(zoomLevel);
            } else {
                // Your track-pad X and Y positions
                const x = this.lookAt[0] + (e.deltaX * 2);
                const y = this.lookAt[1] + (e.deltaY * 2);

                this.moveTo(x, y);
            }
        };

        // Center camera on "R"
        window.addEventListener('keydown', e => {
            if (e.key === 'r') {
                this.zoomTo(1000);
                this.moveTo(0, 0);
            }
        });
    }
};

function CircleCollider(xA, yA, radioA, xB, yB, radioB)
{
	let x = xA - xB;
	let y = yA - yB;
	let a = radioA + radioB;
	
	if (a > Math.sqrt((x*x)+(y*y))) {
		return true;
	}else{
		return false;
	}
}

function DistanceBetweenObjects(xA,yA, xB, yB)
{
	let x = xA - xB;
	let y = yA - yB;
	
	return Math.sqrt((x*x)+(y*y));
}

class BoxCollider
{
	constructor(GameObject)
	{
		this.type = "box";
		this.obj = GameObject;
		this.x = this.obj.x;
		this.y = this.obj.y;
		this.width;
		this.height;
		this.enter = false;

		//if (this.obj.sprite) {
			this.width = GameObject.sprite.getSize().width;
			this.height = GameObject.sprite.getSize().height;
		/*}else{
			this.width = 0;
			this.height = 0;
		}*/
		
		
	}

	collision(other)
	{	
		this.x = this.obj.x;
		this.y = this.obj.y;
		this.width = this.obj.sprite.getSize().width;
		this.height = this.obj.sprite.getSize().height;
		let b = other.collider;
		let a = other;
		
		

		if (b.type =="box") {
			if (this.x < a.x + b.width &&
				this.x + this.width > a.x &&
				this.y < a.y + b.height &&
				this.y + this.height > a.y) 
			{
				if(!b.enter){
					b.enter =true;
					this.OnCollisionEnter();
				}
				this.OnCollisionStay();
			}else{
				b.enter = false;
			}
		}
	}

	OnCollisionEnter(){}
	OnCollisionStay(){}


}

class Sprite //use Sprite class with GameObject class ej: GameObject.img = new Sprite(...)
{
	constructor(GameObject, img)
	{
		this.go = GameObject
		this.img = img;
		this.scale={x:1,y:1};
		this.x = 0;
		this.y = 0;
		this.width = img.width;
		this.height = this.img.width;
		this.pixel = this.setPixel(1000);
		this.bilinear=true;
		this.operation = "";
		this.alpha = 1;
		this.anim={
			current:{x:0, y:0, w:0, h:0},
			max:{x:0, y:0, w:0, h:0}
		};

		this.step 		= {x:0,	 y:0}
		this.pixelSize 	= {x:0,  y:0}
		this.offset 	= {x:0,	 y:0}
		this.padding 	= {x:0,	 y:0}
		
		this.nAnim = 0;
		this.animation = [[]];
		this.steps = 0;

		this.frame = 10;
		this.time = 1000/this.frame*0.001;
		this.refresh=0;
		
		

		
	}
	


	Step(x,y)
	{
		this.step.x = x;
		this.step.y = y;
	}
	PixelSize(x,y)
	{
		this.pixelSize.x = x;
		this.pixelSize.y = y;
	}
	OffSet(x,y)
	{
		this.offset.x = x;
		this.offset.y = y;
	}
	Padding(x,y)
	{
		this.padding.x = x;
		this.padding.y = y;
	}

	anim(frames)//don't working
	{
		this.frame = frames;
		this.time = 1000/this.frame*0.001;
		this.refresh += this.time;
		
		if (this.refresh>=1 && this.steps < this.animation[this.nAnim].length-1) {
			this.refresh=0;
			this.steps++;
			//console.log("a")
		}else if(this.refresh>=1 && this.steps >= this.animation[this.nAnim].length-1){
			this.refresh=0;
			this.steps=0;
		}
		if(this.steps > this.animation[this.nAnim].length-1){
			this.refresh=0;
			this.steps=0;
		}
		
		this.step.x = this.animation[this.nAnim] [this.steps].x;
		this.step.y = this.animation[this.nAnim] [this.steps].y;
		this.scale.x = this.animation  [this.nAnim] [this.steps].flip;
		

	}

	renderer()
	{
		if(this.pixelSize.x == 0 && this.pixelSize.y == 0){
			this.pixelSize.x = this.img.width;
			this.pixelSize.y = this.img.height;
			
		}else{
			this.img.width = this.pixelSize.x;
			this.img.height = this.pixelSize.y;
		}

		
		


		ctx.save();
			ctx.imageSmoothingEnabled=this.bilinear;
			ctx.globalAlpha = this.alpha;
			ctx.globalCompositeOperation =this.operation;
			ctx.translate(this.go.x + this.anim.current.x, this.go.y + this.anim.current.y);
			ctx.scale((this.pixel*this.go.scaleX )* this.scale.x,( this.pixel*this.go.scaleY )* this.scale.y)
			ctx.rotate(this.go.rotate)
			ctx.drawImage(this.img, 
				((/*this.pixelSize.x +*/ this.padding.x) * this.step.x) /*+ (this.offset.x)*/,
				((/*this.pixelSize.y + */this.padding.y) * this.step.y) /*+ (this.offset.y)*/,
				this.pixelSize.x, this.pixelSize.y,
				this.img.width/-2, this.img.height/-2,
				this.img.width + this.anim.current.w, this.img.height + this.anim.current.h);
		ctx.restore();
	}

	pos(x, y, flip)
	{

		if (flip) {
			this.scale.x = -1;}
		else{this.scale.x = 1;}
		this.step.x = x;
		this.step.y = y;
		return {x:this.step.x, y:this.step.y, flip:this.scale.x}
	}

	getSize()
	{
		return{width:this.img.width  * this.go.scaleX, height:this.img.height  * this.go.scaleY}
	}
	setPixel(p)
	{
		this.pixel = p*0.001;
		return this.pixel;
	}

}

class Text
{
	constructor(text,x,y,size,font,color,align,border,bcolor,linesize)
	{
		/*text*/	this.text = text;
		/*number*/	this.x = x;
		/*number*/	this.y = y;
		/*number*/	this.size = size;
		/*text*/	this.font = font;
		/*text*/	this.color = color;
		/*text*/	this.align = align;
		/*boolean*/	this.border = border;
		/*text*/	this.bcolor = bcolor;
		/*number*/	this.linesize = linesize;
		/*alpha*/	this.alpha = 1;
					this.operation = "";

	}
	Draw=()=>
	{
		ctx.save();
		ctx.globalCompositeOperation = this.operation;
		ctx.globalAlpha = this.alpha;
		ctx.beginPath();
		ctx.lineWidth=this.linesize;
		ctx.fillStyle=this.color;
		ctx.strokeStyle=this.bcolor;
		ctx.textAlign=this.align;
		ctx.font=""+this.size+"pt "+this.font+"";

		if (this.border) {ctx.strokeText(this.text, this.x, this.y);}
		
		ctx.fillText(this.text, this.x, this.y);
		ctx.restore();
	}
}


class Resolution
{
	constructor(canvasW, canvasH, rescale)
	{
		this.smoothing 		= false;
		this.rescale 		= rescale;
		this.WIDTH 			= 800;
		this.HEIGHT 		= 800;
		this.CANVAS_WIDTH 	= canvasW;
		this.CANVAS_HEIGHT	= canvasH;
		this.reso 			= true;//voltear pantalla de cell


		this.btnReso={
			x:canvas.width/2-60,
			y:canvas.height/2+83,
			width:120,
			height:75,
		}

		this.resizeCanvas();
	}

	resizeCanvas=()=>
	{
		if (this.rescale) 
		{
			this.CANVAS_WIDTH = window.innerWidth ;
			this.CANVAS_HEIGHT = window.innerHeight ;
		}

		let ratio = 16/9;

		if (this.CANVAS_HEIGHT< this.CANVAS_WIDTH / ratio) {
		//	this.CANVAS_WIDTH = this.CANVAS_HEIGHT * ratio ;
			
		}else{
			if (window.innerHeight> window.innerWidth) {
				//this.CANVAS_HEIGHT = this.CANVAS_WIDTH / ratio;
			}else{

			}
			
		}
		

		canvas.width = this.WIDTH;
		canvas.height = this.HEIGHT;
		canvas2.width = this.WIDTH;
		canvas2.height = this.HEIGHT;

		if (this.smoothing) 
		{
			ctx.mozImageSmoothingEnabled = false;
			ctx.msImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false;
			ctx.webkitImageSmoothingEnabled = false;
		}


		canvas.style.width = ' ' + this.CANVAS_WIDTH + 'px';
		canvas.style.height = ' ' + this.CANVAS_HEIGHT + 'px';
		canvas2.style.width = ' ' + this.CANVAS_WIDTH + 'px';
		canvas2.style.height = ' ' + this.CANVAS_HEIGHT + 'px';
	}

	resizeCell=()=>
	{
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
		
		if (cX>this.btnReso.x &&
			cX< this.btnReso.x + this.btnReso.width &&
			cY>this.btnReso.y &&
			cY< this.btnReso.y + this.btnReso.height && mouse) {
			reso = false;
		}
	}
}


function deg(radians)
{
	let pi = Math.PI;
	return radians * (180/pi);
}

function LookAt(object, find)
{
	let t = -deg(Math.atan2( find.x - object.x, find.y - object.y )) * Math.PI/180+(180 * Math.PI/180)
	//return (t < 0 && t + 360 || t)*(Math.PI/180)+(180 *(Math.PI/180));
	return t;

}

function lerp(start, end, amt)
{
	return (1-amt)* start + amt * end
}

function Random(min, max) {
	return Math.floor(Math.random()*(max - min + 1) + min);
}

function CreateImage(img, ix, iy, iwidth, iheight, x, y, width, height, stepX, stepY, scaleX, scaleY, alpha, rotate)
{
	ctx.save();
	ctx.globalAlpha = alpha;
	ctx.translate(x,y);
	ctx.scale(scaleX, scaleY);
	ctx.rotate(rotate||0);
	ctx.drawImage(img, (ix) * stepX, (iy) * stepY, iwidth, iheight, 
		(width)/-2, (height)/-2, width, height);
	ctx.restore();
}

function CreateText(text,x,y,size,font,color,align,alpha,border,bcolor,linesize)
{
	ctx.save();
		ctx.globalAlpha = alpha;
		ctx.beginPath();
		ctx.lineWidth=linesize;
		ctx.fillStyle=color;
		ctx.strokeStyle=bcolor;
		ctx.textAlign=align;
		ctx.font=""+size+"pt "+font+"";

		if (border) {ctx.strokeText(text, x, y);}
		
		ctx.fillText(text, x, y);
	ctx.restore();
}

function line(a,b,c,d)
{
	
	
	denominator = ((b.x - a.y) * (d.y - c.y) - (b.y - a.y) * (d.x - c.x));
	numerator1 = ((a.y - c.y) * (d.x - c.x) - (a.x - c.x) * (d.y - c.y));
	numerator2 = ((a.y - c.y) * (b.x - a.x) - (a.x - c.x) * (b.y - a.y));
	


	if (denominator == 0) return numerator1 == 0 && numerator2 == 0;

	r = numerator1 / denominator;
	s = numerator2 / denominator;
	return (r >= 0 && r <= 1) && (s>= 0 && s <= 1);
}

function Destroy(obj,time)
{
	delete obj;//don't work
	
	
}

let time ={
	deltaTime:1000/60,
}

let direction = "";
let oldx = 0;
let oldy = 0;
let newx = 0;
let newy = 0;

let Input = {
	GetKey:[],
	mousePosition:{x:0,y:0},
	mouseFire:[],
	touchCount:0,
	touch:[],
	touchPosition:[],
	eventUp:function(){},
}

function SetInput(){
	
	
	addEventListener("mousedown",function(e){
		Input.mouseFire[e.button]=true;
	});

	addEventListener("mouseup",function(e){
		Input.eventUp();
		Input.mouseFire[e.button]=false;
	});


	addEventListener("mousemove",e=>{
		if (e.pageX > oldx && e.pageY == oldy) {
                direction="E";
                 newx=1;
            }
            else if (e.pageX == oldx && e.pageY > oldy) {
                direction="S";
                newy=-1;
            }
            else if (e.pageX == oldx && e.pageY < oldy) {
                direction="N";
                newy=1;
            }
            else if (e.pageX < oldx && e.pageY == oldy) {
                direction="O";
                 newx=-1;
            }
        	
       
        direction="none";
        oldx = e.pageX;
        oldy = e.pageY;
        newx = 0;
		newy = 0;

		Input.mousePosition.x = (e.pageX) / (resolution.CANVAS_WIDTH / resolution.WIDTH);
		Input.mousePosition.y =( e.pageY) / (resolution.CANVAS_HEIGHT / resolution.HEIGHT);
	});

	/**********************************/
	addEventListener("touchstart",e=>{
		e.preventDefault();
		for (var i = 0; i < e.touches.length; i++) {
			Input.touch[i] = e.touches[i];
			Input.touchPosition[i] = e.touches[i];
			Input.touchPosition[i].x = (e.touches[i].pageX) / (resolution.CANVAS_WIDTH / resolution.WIDTH);
			Input.touchPosition[i].y = (e.touches[i].pageY) / (resolution.CANVAS_HEIGHT / resolution.HEIGHT);
			Input.touchCount = e.touches.length;
			Input.touch[i]=true;
		}
		
	});

	addEventListener("touchend",e=>{
		//e.preventDefault();
		
		for(i in Input.touch){
			Input.eventUp();
			//Input.touchPosition[i].x = undefined;
			//Input.touchPosition[i].y = undefined;
			Input.touchCount = e.touches.length;
			Input.touch[i]=false;
		}
		
	});

	addEventListener("touchmove",e=>{
		e.preventDefault();
		for (var i = 0; i < e.touches.length; i++) {

			

			Input.touchPosition[i]=e.touches[i];
			Input.touchPosition[i].x = (e.touches[i].pageX) / (resolution.CANVAS_WIDTH / resolution.WIDTH);
			Input.touchPosition[i].y = (e.touches[i].pageY) / (resolution.CANVAS_HEIGHT / resolution.HEIGHT);		
		}
	});

	/**********************************/

	addEventListener("keydown", e=>{
		Input.GetKey[e.keyCode]=true;
		Input.GetKey[e.key]=true;
	});
	addEventListener("keyup", e=>{
		Input.GetKey[e.keyCode]=false;
		Input.GetKey[e.key]=false;
		//console.log(e.key)
	});
		
}

function frameRate(){
	
	var thisFrame = new Date().getTime(),
        diffTime = Math.ceil((thisFrame - lastFps));
 
    if (diffTime >= 1000) {
      currentFps = frameCount;
      frameCount = 0.0;
      lastFps = thisFrame;
    }
 
    frameCount++;




    ctx.save();
    ctx.fillStyle = 'black';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillRect(0,0,120,22);
    ctx.fillStyle = 'white';
    ctx.fillText( 'FPS: ' + currentFps + '/' + fps, 10, 15 );
    ctx.restore();
}


let resolution = new Resolution(800,800,true);
SetInput()