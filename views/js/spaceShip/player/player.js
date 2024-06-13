var play={
	estado:"vivo",
	flip:1,
	modo:"fuego",
	modoN:0,
	DelayM:0,
	changeM:false,
	x:200,
	y:200,
	speedX:0,
	speedY:0,
	speed:3,
	width:45,
	height:28,
	gravity:0.20,
	gravitySpeed:0,
	accelerate:-3.5,
	accelerateD:0.5,
	maxJump:1,
	peso:0,
	spX:1,
	spY:1,
	ang:0,
}
//modo normal
//modo fuego
//modo agua
//modo viento
//modo ???

var touchPlay = false; //booleana para iniciar a jugar
var touchCount = 0;

var jump = 32;

var moverF=0;
var moverF2=0;
var Gsuelo=false;
var choque=false;

var mSalto2="no";
var nSalto2=0;

var mSalto="no";
var nSalto=0;
var rapidspin = '<?php echo $nprueba; ?>';

var aGravity = false;//activar gravedad



function jumpD(a,n)
	{
		a.gravity=n;
	}

function newPos(a) //GRAVEDAD
	{		//a.speedY += 1.5;
		if (touchPlay) {
			a.gravitySpeed += a.gravity;
	        a.x += a.speedX;
	     	a.speedX *= 0.9;//friccion
	        a.y += a.speedY + a.gravitySpeed+a.peso/2;
	        a.speed=10;

	        hitBottom(a);
	  	}
	}

	function hitBottom(a)
	{
		var piso = canvas.height - a.height/2;
		var techo = 0 + a.height/2;

		var paredR = canvas.width - a.width/2;
		var paredL = 0 + a.width/2;


		if (a.y >piso) 
		{
			a.y=piso;
			
			if(a.estado=="vivo"){
				hitC.play();
				a.gravitySpeed-=10;
			}
			else{a.gravitySpeed=0;}
			
		}
		if (a.y < techo) 
		{
			a.y=techo;
			
			if(a.estado=="vivo"){
				hitC.play();
				a.gravitySpeed+=10;
			}
			else{a.gravitySpeed=0;}
			
		}

		if (a.x >paredR) 
		{
			a.x=paredR;
			a.gravitySpeed=0;
		}
		if (a.x < paredL) 
		{
			a.x=paredL;
			a.gravitySpeed=0;
		}
	}



function hitGround(a,b){
	//colision lado izquierdo de la pared
		if (a.x + a.width> sx-5 &&
			a.x + a.width-15 < sx +5 &&//se añadio el -15
			a.y + a.height>sy+20 &&
			a.y < sh-40 + sy//15 
			) 
		{
			a.x=sx-(a.width)/*-(2)*/;
		}
	//colision lado derecho de la pared
		if (a.x + 15> sx+sw-5 &&//se añadio el 15 y se quito a.width
			a.x < sx + sw &&
			a.y + a.height>sy+20 &&
			a.y < sh-40 + sy//15
			) 
		{
			a.x=sx+sw;
		}
	//colision piso
		if (a.x + a.width> sx &&
			a.x < sx + sw &&
			a.y + a.height>sy -5 &&
			a.y < sy + 5
			) 
		{
			a.gravitySpeed=0;
			a.gravity=0;
			a.speed=0;
			a.maxJump=1;

			Gsuelo=true;
			a.y=sy-(a.height);
			if (teclado[38]) {a.y-=5;}
			//a.y-=9;
		}else{Gsuelo=false}

	//colision techo
		if (a.x + a.width> sx &&
			a.x < sx + sw &&
			a.y + a.height>sy + sh-(10) &&
			a.y < sh + sy
			) 
		{
			a.maxJump=0;
			a.y=sy+sh+(15);
			//jumpD(play,115);
			choque=true;
		}

	if (a.x + a.width> sx &&
		a.x < sx + sw &&
		a.y + a.height>sy +sh-(10) &&
		a.y < sh + sy
		) 
	{
		//jumpD(play,5);
		//a.y=b.y+b.height-(10);
	}
	

}

var juG = 0;//variable para animacion de como jugar
function player()
{
	if (touchCount < 10) {touchCount++;}
	if (!touchPlay && mouse && touchCount >=10 || !touchPlay && teclado[jump] && touchCount >=10) 
	{
		touchPlay = true
	}
	if (!touchPlay) 
	{
		
		
		juG+=0.05;

		if (juG>=2) {juG=0;}

		ctx.save();
		ctx.drawImage(jugar, jugar.width/2*Math.floor(juG), 0, jugar.width/2, jugar.height,
			300,50,350,300)
		ctx.restore();
	}

	if (aGravity) {
		newPos(play);
	}

		ctx.save();
		ctx.translate(play.x, play.y);
		ctx.rotate(play.ang);

		carritoP();
		//ctx.drawImage(tank, play.width/-2, play.height/-2, play.width, play.height);
		ctx.restore();
		ctx.save();
		ctx.fillStyle="red";
		//ctx.fillRect(play.x-25, play.y-25, play.width, play.height);
		ctx.restore();


	
			
			

	//MOVER **************
		if (mapN == 10) {
			if (teclado[37] && play.x>=0) 
			{
				play.x -= 3;
			}

			if (teclado[39] && play.x<canvas.width-play.width) 
			{
				play.x += 3;	
			}

			if (teclado[38] && play.x>=0) 
			{
				play.y -= 3;
			}

			if (teclado[40] && play.x<canvas.width-play.width) 
			{
				play.y += 3;	
			}
		}


		//saltar

	
		if (teclado[jump] && play.estado == "vivo" ||
		 mouse == true && play.estado == "vivo")
		{
			exp.play();
			jumpD(play,-0.3);
			FuegoP();
		}else
		{
			exp.pause();
			exp.currentTime = 0;
			jumpD(play,0.3)
		}

			play.ang = (play.gravitySpeed* 0.05);
		//}
}

function carritoP() {
//hitbox
	/*
	ctx.fillStyle="red";
	ctx.fillRect(play.width/-2, play.height/-2, play.width, play.height);
	*/

ctx.drawImage(nave, nave.width/10* vehicleN, 0, nave.width/10, nave.height,
	play.width/-2-5, play.height/-2-12, 55, 50);
}