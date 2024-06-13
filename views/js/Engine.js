//Game Engine library by Alejandro Inciarte
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');




class MasterClass
{
	constructor()
	{
		this.fpsMax = 60;

		this.awake = this.Awake();
		this.start = this.Start();
		this.update = setInterval(this.Update,1000/this.fpsMax);
	}

	Awake(){}

	Start(){}

	Update(){}
}


//
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
		this.alpha 			= 1;//trasparencia
		this.rotate			= rotate;
		this.filter 		= "none"; 
		
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
			ctx.rotate(this.rotate);
			ctx.fillStyle=img_color;
			ctx.fillRect(this.width/-2, this.height/-2,this.width, this.height);
			ctx.restore();
		}
	}
}

class Sprite extends GameObject
{
	constructor(x, y, width, height,rotate, sx, sy, sw, sh, stepX, stepY)
	{
		super(x,y,width,height,rotate);
		this.sw				= sw;//ancho de la imagen
		this.sh				= sh;//alto de la imagen
		this.sx				= sx;//pos X de la imagen
		this.sy				= sy;//pos Y de la imagen
		this.stepX			= stepX;//mover de posX para producir animacion
		this.stepY			= stepY;//mover de posY para producir animacion
		this.operation 		= "";
		this.filter 		= "none";
	}

	Draw = (image_src) =>//img
	{
		ctx.save();
		ctx.filter = this.filter;
		ctx.globalCompositeOperation = this.operation;
		ctx.globalAlpha = this.alpha;
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotate);
		ctx.drawImage(image_src,this.sx * this.stepX, this.sy * this.stepY, this.sw, this.sh,
			this.width/-2, this.height/-2,this.width, this.height);
		ctx.restore();
	}
}

class ClickObject
{
	constructor(oneClick){
		//this.action1();
		this.show = false;
		this.oneClick = oneClick;
		this.click=0;
	}

	onObject=(object)=>
	{
		if (cX> object.x-object.width/2 &&
			cX< object.x + object.width/2 &&
			cY> object.y-object.height/2 &&
			cY< object.y + object.height/2 && mouse) 
		{
			if (this.oneClick) {this.action1();}
			else{this.click=1; this.action1();}
			
		}

		if (this.click == 1 && !mouse) 
		{
			this.action2();
			this.click = 0;
		}

		if (this.show) 
		{
			ctx.save();
			ctx.globalAlpha=1;
			ctx.fillStyle="yellow";
			ctx.fillRect(object.x - object.width/2, object.y - object.height/2,
						object.width, object.height);
			ctx.restore();
		}
	}
	action1=()=>{}
	action2=()=>{}
}

class Collider
{
	constructor(gameObject, type)
	{
		this.gameObject = gameObject;
		this.type 		= type;// "trigger" o "rigid"

		this.ax = 0;
		this.ay = 0;
		this.aw = 0;
		this.ah = 0;

		this.bx = 0;
		this.by = 0;
		this.bw = 0;
		this.bh = 0;

		this.show = false;
	}

	collider=(other)=>
	{
		let right = this.gameObject.x + this.gameObject.width + this.aw + this.ax > other.x + this.bx;
		let left = this.gameObject.x + this.ax < other.x + other.width + this.bw + this.bx;
		let down = this.gameObject.y + this.gameObject.height + this.ah + this.ay> other.y + this.by;
		let up = this.gameObject.y + this.ay < other.y + other.height + this.bh + this.by;

		if (right && left && down && up) 
		{
			this.action();
		}

		if (this.show) {this.showCollider(other);}

	}

	action =()=>
	{
		console.log("a")
	}

	showCollider=(other)=>
	{
		ctx.save();
		ctx.globalAlpha=0.1;
		ctx.fillStyle="yellow";
		ctx.fillRect((this.gameObject.x - this.gameObject.width/2) + this.ax, (this.gameObject.y - this.gameObject.height/2) + this.ay,
					this.gameObject.width + this.aw, this.gameObject.height + this.ah);

		ctx.fillStyle="red";
		ctx.fillRect((other.x - other.width/2) + this.bx, (other.y - other.height/2) + this.by,
					other.width + this.bw, other.height + this.bh);
		ctx.restore();
	}
}

class Particle
{
	constructor(img,type,x,y,width,height,life,trails,rotate)
	{
		this.on=true;
		this.type=type;
		this.life=life;
		this.x=x;
		this.y=x;
		this.width=width;
		this.height=height;
		this.rotate=rotate;
		this.particle=[];
		this.trails=trails;
		this.range=50;

		this.alpha = 1;
		this.operation = "";
		
		//this.draw=draw;
		//this.instance=instance;

	}
	Summon=()=>
	{
		this.particle.push({
			x:this.x + Math.floor(Math.random()* this.width),
			y:this.y + Math.floor(Math.random()* this.width),
			width:25,
			height:25,
			speed:5,
			life:0,
			maxLife:this.life,

			yt:0,
			ytTime:0,

			angle:Math.random()* (-this.range * Math.PI / 180)+this.range/2 * Math.PI / 180,
			//angle:Math.floor(Math.random()*30),
			rotate:0,
		});
	}
	Draw=()=>
	{
		for(this.i in this.particle)
		{
			let j = this.particle[this.i];

			ctx.save();
			ctx.globalCompositeOperation = this.operation;
			ctx.globalAlpha = this.alpha;
			ctx.translate(j.x, j.y);
			ctx.rotate(this.rotate);
			if (this.trails)
			{
				if (j.ytTime<3)
				{
					j.ytTime++;
					j.yt=j.height/-2;
				}
				ctx.beginPath();
				ctx.strokeStyle="pink";
			    ctx.moveTo(j.width/-2, j.yt);
			    ctx.lineTo(j.width/-2, j.y/2);
			    ctx.lineWidth = 50;
			    ctx.stroke();
			}
			
			ctx.fillStyle="gray";
			ctx.fillRect(j.width/-2,j.height/-2,j.width,j.height);
			ctx.restore();
		}
		
		this.Move();
		if (this.on) {this.Summon();}
		this.Life();
		
	}
	Move=()=>
	{
		for(this.i in this.particle)
		{
			let j = this.particle[this.i];

			//j.x-=j.speed * Math.sin(this.rotate);
			//j.y+=j.speed * Math.cos(this.rotate);
			//j.y-=j.speed;

			if (this.type=="cube")
			{
				j.x-=j.speed * Math.sin(this.rotate);
				j.y+=j.speed * Math.cos(this.rotate);
			}
			if (this.type=="circle") 
			{
				//j.angle= Math.floor(Math.random()*30);
				j.x+=j.speed * Math.sin(j.angle);
				j.y-=j.speed * Math.cos(j.angle);
			}
		}
	}
	Life=()=>
	{
		for(this.i in this.particle)
		{
			let j = this.particle[this.i];
			
			j.life++;

			if (j.life > j.maxLife) {delete this.particle[this.i];}
		}
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

class Button 
{
	constructor(img,x,y,width,height,ix,iy,iwidth,iheight,DRstp)
	{
		this.alpha = 1;
		this.operation = "";
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;

		this.ix=ix;
		this.iy=iy;
		this.iwidth=iwidth;
		this.iheight=iheight;
		this.stepX=0;
		this.stepY=0;
		this.DRstp=DRstp;//false= abajo | true = derecha | undefined = no hacer nada

		this.click=false;
	
		this.img = img;

		/*this.img = new Image();
		this.img.src;
		this.img.onload=this.Draw;*/
		
	}

	Draw = () =>//dibuja el boton
	{
		if (this.DRstp == undefined) 
		{
			this.stepX=1;
			this.stepY=1;
		}
		ctx.save();
		ctx.globalCompositeOperation = this.operation;
		ctx.globalAlpha = this.alpha;
		ctx.drawImage(this.img ,this.ix * this.stepX, this.iy * this.stepY, this.iwidth, this.iheight,
		this.x, this.y, this.width, this.height);
		ctx.restore();

		this.overMouse();
		this.clicked();
	}

	event = () =>{}//evento que ocurre al precionar el boton

	overEvent = () =>{}//evento que ocurre cuando el mouse esta sobre el boton

	outEvent = () =>{}//evento que ocurre cuando el mouse no esta sobre el boton

	pressEvent = () =>{}//evento que ocurre cuando se preciona el boton

	overMouse = () =>//Detecta si el mouse esta sobre el boton o no
	{
		if (cX > this.x &&
			cX < this.x + this.width &&
			cY > this.y &&
			cY < this.y + this.height && !mouse) 
		{
			this.overEvent();
		}
		else
		{
			this.outEvent();
		}
	}

	clicked = () =>//detecta si se preciono el boton
	{
		if (cX > this.x &&
			cX < this.x + this.width &&
			cY > this.y &&
			cY < this.y + this.height && mouse) 
		{
			this.pressEvent();
			this.click = true;
			
			if (this.DRstp) {this.stepX=1;}
			if (!this.DRstp) {this.stepY=1;}
		}

		if (this.click && !mouse) 
		{
			this.click=false;
			if (this.DRstp) {this.stepX=0;}
			if (!this.DRstp) {this.stepY=0;}
			this.event();
		}
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

		if (this.smoothing) 
		{
			ctx.mozImageSmoothingEnabled = false;
			ctx.msImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false;
			ctx.webkitImageSmoothingEnabled = false;
		}


		canvas.style.width = ' ' + this.CANVAS_WIDTH + 'px';
		canvas.style.height = ' ' + this.CANVAS_HEIGHT + 'px';
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
let newx = 0;
let newy = 0;

function mouseAG()
{
	canvas.addEventListener("mousemove", function(e){

		//mMouse.x = (e.pageX - ctx.canvas.offsetLeft) /(CANVAS_WIDTH / WIDTH) - mMouse.width/2;
		//mMouse.y = (e.pageY - ctx.canvas.offsetTop) /(CANVAS_HEIGHT / HEIGHT)- mMouse.height/2;

		cX = (e.pageX - ctx.canvas.offsetLeft) /(canvasResolution.CANVAS_WIDTH / canvasResolution.WIDTH);
		cY =( e.pageY - ctx.canvas.offsetTop) /(canvasResolution.CANVAS_HEIGHT / canvasResolution.HEIGHT);
		//cX = (e.pageX - ctx.canvas.offsetLeft);
		//cY =( e.pageY - ctx.canvas.offsetTop);

		
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
        	
        //console.log(direction);
        direction="none";
        oldx = e.pageX;
        oldy = e.pageY;
        newx = 0;
		newy = 0;
	});

	canvas.addEventListener("touchmove", function(e){

		//mMouse.x = (e.pageX - ctx.canvas.offsetLeft) /(canvasResolution.CANVAS_WIDTH / canvasResolution.WIDTH) - mMouse.width/2;
		//mMouse.y = (e.pageY - ctx.canvas.offsetTop) /(canvasResolution.CANVAS_HEIGHT / canvasResolution.HEIGHT)- mMouse.height/2;

		cX = (e.touches[0].pageX - ctx.canvas.offsetLeft) /(canvasResolution.CANVAS_WIDTH / canvasResolution.WIDTH);
		cY =( e.touches[0].pageY - ctx.canvas.offsetTop) /(canvasResolution.CANVAS_HEIGHT / canvasResolution.HEIGHT);
	});

	canvas.addEventListener("mousedown", function(e){
		cX = (e.pageX - ctx.canvas.offsetLeft) /(canvasResolution.CANVAS_WIDTH / canvasResolution.WIDTH);
		cY =( e.pageY - ctx.canvas.offsetTop) /(canvasResolution.CANVAS_HEIGHT / canvasResolution.HEIGHT);
		//cX = (e.pageX - ctx.canvas.offsetLeft);
		//cY =( e.pageY - ctx.canvas.offsetTop);

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
		cX = (e.touches[0].pageX - ctx.canvas.offsetLeft) /(canvasResolution.CANVAS_WIDTH / canvasResolution.WIDTH);
		cY = (e.touches[0].pageY - ctx.canvas.offsetTop) /(canvasResolution.CANVAS_HEIGHT / canvasResolution.HEIGHT);
		//cX = (e.touches[0].pageX - ctx.canvas.offsetLeft);
		//cY = (e.touches[0].pageY - ctx.canvas.offsetTop);
		mouse=true;

	});

	canvas.addEventListener("touchend", function(e){
		cX = false;
		cY = false;
		mouse=false;
	});

	
}

let canvasResolution = new Resolution(800,800,true)

window.addEventListener("resize",function(){
	canvasResolution.resizeCanvas();
});

mouseAG();
