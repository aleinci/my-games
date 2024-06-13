var menuM= true;
var clickCount= 0;

var movX=0;//menu dinamico movimiento en X
var movY=0;//menu dinamico movimiento en Y

var btnPlay ={
	x:canvas.width/2-400/2,
	y:canvas.height/2-100,
	width:400,
	height:150,
	press:false,
	brightness:"",
}

var btnCredits ={
	x:canvas.width/2-300/2,
	y:canvas.height/2+50,
	width:300,
	height:100,
	press:false,
	brightness:"",
}

var btnCTG ={
	x:canvas.width-312,
	y:canvas.height-162,
	width:300,
	height:100,
	press:false,
	brightness:"",
	link:srcPag,
}

var btnLeader ={
	x:12,
	y:canvas.height-162,
	width:300,
	height:100,
	press:false,
	brightness:"",
	link:srcLed,
}


var rota= 0,
	rota2=0,
	rota3=0;
var astI =0;
function mMenu() {
	stopMusic(music1);
	

	ctx.save();//fonso
	//ctx.globalAlpha = 0.4;
	ctx.fillStyle="white";
	//ctx.filter = "brightness(100%)";
	ctx.fillRect(0,0, canvas.width, canvas.height);
	//ctx.drawImage(ifondo,0,0, canvas.width, canvas.height);
	ctx.restore();

	circleRotate();

	ctx.save();//botton de play
	ctx.filter = "brightness("+btnPlay.brightness+"%)";
	ctx.drawImage(btMenu, 0, btMenu.height/4*(0), btMenu.width, btMenu.height/4,
		btnPlay.x + movX, btnPlay.y - movY, btnPlay.width, btnPlay.height);
	ctx.restore();

	ctx.save();//botton de creditos
	ctx.filter = "brightness("+btnCredits.brightness+"%)";
	ctx.drawImage(btMenu, 0, btMenu.height/4*(1), btMenu.width, btMenu.height/4,
		btnCredits.x + movX, btnCredits.y - movY, btnCredits.width, btnCredits.height);
	ctx.globalAlpha=0.3;
	ctx.restore();

	ctx.save();//botton de CtGames
	ctx.filter = "brightness("+btnCTG.brightness+"%)";
	ctx.drawImage(btMenu, 0, btMenu.height/4*(2), btMenu.width, btMenu.height/4,
		btnCTG.x + movX, btnCTG.y - movY, btnCTG.width, btnCTG.height);
	ctx.globalAlpha=0.3;
	ctx.restore();

	ctx.save();//botton de Leader
	ctx.filter = "brightness("+btnLeader.brightness+"%)";
	ctx.drawImage(btMenu, 0, btMenu.height/4*(3), btMenu.width, btMenu.height/4,
		btnLeader.x + movX, btnLeader.y - movY, btnLeader.width, btnLeader.height);
	ctx.globalAlpha=0.3;
	ctx.restore();

	/*ctx.save();
	ctx.globalAlpha=0.5;
	ctx.fillStyle="black";
	ctx.fillRect(0,0, canvas.width, canvas.height);
	ctx.drawImage(mCredits, 50,0, canvas.width-100, canvas.height);
	ctx.restore();*/

	

	if (cX >btnPlay.x &&//botton de play
		cX < btnPlay.x + btnPlay.width &&
		cY > btnPlay.y &&
		cY <btnPlay.y + btnPlay.height &&
		mouse && menuM) {
		btnM_G=true;
		restart();

		btnPlay.press= true;
		btnPlay.x=canvas.width/2-370/2;
		btnPlay.y=canvas.height/2-95;
		btnPlay.width=370;
		btnPlay.height=140;
		btnPlay.brightness="50";
		click1.play();
	}else{
		btnPlay.press= false;
		btnPlay.x=canvas.width/2-400/2;
		btnPlay.y=canvas.height/2-100;
		btnPlay.width=400;
		btnPlay.height=150;
		btnPlay.brightness="";
	}



	btnMMLink();
	
			/*
			ctx.save();
			ctx.drawImage(lvlBox, canvas.width/2-(600/2), canvas.height/2-(250/2), 600, 250);
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.font ="55pt forte";
			ctx.fillText("Question", canvas.width/2, canvas.height/2 - 20);
			ctx.font ="45pt Calibri";
			ctx.fillText(QuestionLv, canvas.width/2, canvas.height/2 + 70);
			ctx.restore();
			*/
}


function circleRotate()
{
	rota+=0.01;
	rota2+=0.03;
	rota3+=0.005;

	

	if (credit) {
		if (movX< canvas.width/2) {movX+=100;}
		if (movY< canvas.height/2) {movY+=100;}
	}else{
		if (movX> 0) {movX-=100;}
		if (movY> 0) {movY-=100;}
	}


	//
	ctx.save();
	ctx.translate(0 + movX, canvas.height - movY);
	ctx.rotate(rota);
	ctx.drawImage(circl, 0, 0, 1000, 1000,
		canvas.width/-2, canvas.height/-2, canvas.width, canvas.height);
	ctx.restore();
	
	ctx.save();
	ctx.translate(0 + movX, canvas.height - movY);
	ctx.rotate(-rota2);
	ctx.drawImage(circl, 1000, 0, 1000, 1000,
		(canvas.width/2)/-2, (canvas.height/2)/-2, canvas.width/2, canvas.height/2);
	ctx.restore();


	if(movX<100){
		ctx.save();
		ctx.translate(0 + movX, canvas.height - movY);
		ctx.rotate(-rota3);
		ctx.drawImage(circl, 2000, 0, 1000, 1000,
			(canvas.width*1.5)/-2, (canvas.height*1.5)/-2, canvas.width*1.5, canvas.height*1.5);
		ctx.restore();

		//-----------------

		//
		
		ctx.save();
		ctx.translate(600 + movX, 150 - movY);
		ctx.rotate(-rota);
		ctx.drawImage(circl, 2000, 0, 1000, 1000,
			(canvas.width/3)/-2, (canvas.height/3)/-2, canvas.width/3, canvas.height/3);
		ctx.restore();

		ctx.save();
		ctx.translate(600 + movX, 150 - movY);
		ctx.rotate(rota2);
		ctx.drawImage(circl, 0, 0, 1000, 1000,
			(canvas.width/5)/-2, (canvas.height/5)/-2, canvas.width/5, canvas.height/5);
		ctx.restore();


		ctx.save();
		ctx.translate(600 + movX, 150 - movY);
		ctx.rotate(-rota2);
		ctx.drawImage(coachteen, 0, 0, coachteen.width, coachteen.height,
			(canvas.width/7)/-2, (canvas.height/9)/-2, canvas.width/7, canvas.height/9);
		ctx.restore();
	}
}



function btnMMLink(){
	if (cX >btnCTG.x &&//botton de play
		cX < btnCTG.x + btnCTG.width &&
		cY > btnCTG.y &&
		cY <btnCTG.y + btnCTG.height &&
		mouse && menuM) {
		btnCTG.brightness="50";
		window.location = btnCTG.link;
		click1.play();
	}else{
		btnCTG.brightness="";
	}

	if (cX >btnLeader.x &&//botton de play
		cX < btnLeader.x + btnLeader.width &&
		cY > btnLeader.y &&
		cY <btnLeader.y + btnLeader.height &&
		mouse && menuM) {
		btnLeader.brightness="50";
		window.location = btnLeader.link;
		click1.play();
	}else{
		btnLeader.brightness="";
	}

	if (cX >btnCredits.x &&//botton de play
		cX < btnCredits.x + btnCredits.width &&
		cY > btnCredits.y &&
		cY <btnCredits.y + btnCredits.height &&
		mouse && menuM) {
		btnCredits.brightness="50";
		credit=true;
		click1.play();
	}else{
		btnCredits.brightness="";
	}



}