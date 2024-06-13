var credit = false;

var quitCredits ={
	x:canvas.width-80,
	y:10,
	width:70,
	height:70,

}
var mCX=0;
var mCY=0;

var movCX=0;
var movCY=0;



function credits() {
	ctx.save();
	ctx.fillStyle="white";
	ctx.fillRect(0,0, canvas.width, canvas.height);
	ctx.restore();

	circleRotate();

	ctx.save();
	ctx.globalAlpha=movX/150*(0.1);
	ctx.fillStyle="black";
	ctx.fillRect(0,0, canvas.width, canvas.height);
	ctx.restore();


	creditT();

	creditB();
	creditM();
}


function creditB(){
	if (cX >quitCredits.x &&//botton de play
		cX < quitCredits.x + quitCredits.width &&
		cY > quitCredits.y &&
		cY <quitCredits.y + quitCredits.height &&
		mouse && menuM && credit) {
		credit = false;
		click2.play();
	}
}

function creditM(){
	movCX+=2;
	movCY+=2;

	mCX += Math.cos(movCX * Math.PI /360)*1;
	mCY += Math.sin(movCY * Math.PI /360)*1;
}

function creditT(){
	textColor = "black";


	for (var i = 0; i < 2; i++) {
		
		if (i>0) {creditTColor();}

		//QUIT BTN------------------
		ctx.save();
		ctx.fillStyle=textColor;
		ctx.translate(quitCredits.x + quitCredits.width/2 - i , quitCredits.y + quitCredits.height/2 - i);
		ctx.rotate(0.75);
		ctx.fillRect((quitCredits.width+20)/-2, (quitCredits.height/5)/-2- i, quitCredits.width+20, quitCredits.height/5);
		ctx.restore();

		ctx.save();
		ctx.fillStyle=textColor;
		ctx.translate(quitCredits.x + quitCredits.width/2 - i , quitCredits.y + quitCredits.height/2 - i);
		ctx.rotate(-0.75);
		ctx.fillRect((quitCredits.width+20)/-2, (quitCredits.height/5)/-2- i, quitCredits.width+20, quitCredits.height/5);
		ctx.restore();

		//CREDITS---------------
		ctx.save();
		ctx.fillStyle=textColor;
		ctx.font="45pt Impact";
		ctx.textAlign="center";
		ctx.fillText("CREDITS", canvas.width/2- i, 55- i);
		ctx.restore();

		ctx.save();
		ctx.fillStyle=textColor;
		ctx.textAlign="center";

		//programmer
		ctx.font="30pt Impact";
		ctx.fillText("Programmer", canvas.width/2 - i, canvas.height/2+37-20 - i);

		ctx.font="24pt Impact";
		ctx.fillText("Alejandro Inciarte", canvas.width/2 - i, canvas.height/2+37+30 - i);

		//background
		ctx.font="30pt Impact";
		ctx.fillText("Interface designer and", canvas.width/2 - i, canvas.height/2-20 + 200 - i);
		ctx.fillText("background designer", canvas.width/2 - i, canvas.height/2+20 + 200 - i);

		ctx.font="24pt Impact";
		ctx.fillText("Alejandro Inciarte", canvas.width/2 - i, canvas.height/2+70 + 200 - i);

		//music
		ctx.font="30pt Impact";
		ctx.fillText("Music and SFX by", canvas.width/2 - i, canvas.height/2-220 - i);

		ctx.font="24pt Impact";
		ctx.fillText("freesfx.co.uk", canvas.width/2 - i, canvas.height/2 - 170 - i);
		ctx.fillText("www.zapsplat.com", canvas.width/2 - i, canvas.height/2 - 130 - i);
		ctx.fillText("www.bensound.com/royalty-free-music", canvas.width/2 - i, canvas.height/2 - 90 - i);

		//sfx
		ctx.restore();

		
	}
}

var r=0;
var g=0;
var b=0;
var r2=255;
var g2=255;
var b2=255;

var colorBolT= true;
var colAlpha2T=0;

var color1T = 0;
var color2T = 1;

function creditTColor(){


	if (colorBolT) {
		//colAlpha1-=0.01;
		colAlpha2T+=0.01;
	}else{
		//colAlpha1+=0.01;
		colAlpha2T-=0.01;
	}


	if (colAlpha2T>=1) {
		r = Math.floor(Math.random()*254);
		g = Math.floor(Math.random()*254);
		b = Math.floor(Math.random()*254);
	}

	if (r2>r) {r2--;}
	else{r2++;}

	if (g2>g) {g2--;}
	else{g2++;}

	if (b2>b) {b2--;}
	else{b2++;}


	if (colAlpha2T>1) {colAlpha2T=1; colorBolT= false;}
	if (colAlpha2T<0) {colAlpha2T=0; colorBolT= true;}
	textColor="rgb("+r2+","+g2+","+b2+")";
}