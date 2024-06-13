var start = false;
var startRe = false;
var startEx = false;
var mrY =50;
var btnStart ={
	x:canvas.width-95,
	y:10,
	width:90,
	height:90,
	step:1,
}

var btnExit ={
	x:canvas.width/2-100-(120),
	y:canvas.height/2-100+(mrY),
	width:200,
	height:100,
	brightness:"",
}

var btnResume ={
	x:canvas.width/2-100+(120),
	y:canvas.height/2-100+(mrY),
	width:200,
	height:100,
	brightness:"",
}

function startBtn() {

	music1.volume=0.4;
	music1.play();

	ctx.save();//base menu
	ctx.fillStyle="black";
	ctx.globalAlpha=0.01;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.restore();


	ctx.save();//base menu
	ctx.drawImage(menuPause,canvas.width/2-300, canvas.height/2-250, 600, 380);
	ctx.restore();

	


	circleRotatePause();

	ctx.save();//Pause
	ctx.drawImage(btPause, 0, btPause.height/3*2, btPause.width, btPause.height/3,
	 canvas.width/2-290/2, canvas.height/2-250-120/2, 290, 120);
	ctx.restore();

	ctx.save();//botton de salir
	ctx.filter = "brightness("+btnExit.brightness+"%)";
	ctx.drawImage(btPause, 0, btPause.height/3*1, btPause.width, btPause.height/3,
	 btnExit.x,btnExit.y, btnExit.width, btnExit.height);
	ctx.restore();

	ctx.save();//botton de reanudar
	ctx.filter = "brightness("+btnResume.brightness+"%)";
	ctx.drawImage(btPause, 0, btPause.height/3*0, btPause.width, btPause.height/3,
	 btnResume.x,btnResume.y, btnResume.width, btnResume.height);
	ctx.restore();


	startButtons();
}

function startButtons() {
	sTime.pause();
		sTime1.pause();
		sTime2.pause();
		sTime3.pause();
		sTime.currentTime=0;
		sTime1.currentTime=0;
		sTime2.currentTime=0;
		sTime3.currentTime=0;
	
	if (cX >btnExit.x &&//botton de salir
		cX < btnExit.x + btnExit.width &&
		cY > btnExit.y &&
		cY <btnExit.y + btnExit.height &&
		mouse) 
	{
		startEx = true;
		rota3+=0.1;
		btnExit.brightness="50";
	}
	if (!mouse && startEx) 
	{
		btnP_M=true;
		startEx = false;
		btnStart.step=1;
		rota3+=0.01;
		btnExit.brightness="";
		click2.play();
	}

	if (cX >btnResume.x &&//botton de play
		cX < btnResume.x + btnResume.width &&
		cY > btnResume.y &&
		cY <btnResume.y + btnResume.height &&
		mouse) 
	{
		startRe = true;
		rota2+=0.1;
		btnResume.brightness="50";
	}
	if (!mouse && startRe) 
	{
		btnP_G=true;
		startRe = false;
		rota2+=0.01;
		btnResume.brightness="";
		totalTimeAct =true;
		click1.play();
	}
}

function circleRotatePause()
{
	rota+=0.03;
	rota2+=0.01;
	rota3+=0.01;
	


	//ctx.translate(canvas.width/2, canvas.height/2-245);

	//ctx.translate(canvas.width/2, canvas.height/2-250+380/2);
	

	ctx.save();
	ctx.translate(canvas.width/2, canvas.height/2-245);
	ctx.rotate(-rota);
	ctx.drawImage(circl, 2000, 0, 500, 1000,
		(canvas.width/8)/-2, (canvas.height/8)/-2, canvas.width/8/2, canvas.height/8);
	ctx.restore();

	ctx.save();
	ctx.translate(canvas.width/2, canvas.height/2-245);
	ctx.rotate(rota);
	ctx.drawImage(circl, 0, 0, 500, 1000,
		(canvas.width/4.5)/-2, (canvas.height/4.5)/-2, canvas.width/4.5/2, canvas.height/4.5);
	ctx.restore();

	ctx.save();
	ctx.translate(canvas.width/2, canvas.height/2-245);
	ctx.rotate(-rota);
	ctx.drawImage(circl, 1000, 0, 500, 1000,
		(canvas.width/3)/-2, (canvas.height/3)/-2, canvas.width/3/2, canvas.height/3);
	ctx.restore();


	//_________________________________
	ctx.save();
	ctx.translate(btnResume.x+ btnResume.width/2, btnResume.y+btnResume.height/2);
	ctx.rotate(-rota2);
	ctx.drawImage(circl, 2000, 0, 500, 1000,
		(canvas.width/7)/-2, (canvas.height/7)/-2, canvas.width/7/2, canvas.height/7);
	ctx.restore();

	ctx.save();
	ctx.translate(btnResume.x+ btnResume.width/2, btnResume.y+btnResume.height/2);
	ctx.rotate(rota2);
	ctx.drawImage(circl, 0, 0, 500, 1000,
		(canvas.width/6)/-2, (canvas.height/6)/-2, canvas.width/6/2, canvas.height/6);
	ctx.restore();

	ctx.save();
	ctx.translate(btnResume.x+ btnResume.width/2, btnResume.y+btnResume.height/2);
	ctx.rotate(-rota2);
	ctx.drawImage(circl, 1000, 0, 500, 1000,
		(canvas.width/5)/-2, (canvas.height/5)/-2, canvas.width/5/2, canvas.height/5);
	ctx.restore();

	//_________________________________
	ctx.save();
	ctx.translate(btnExit.x+ btnExit.width/2, btnExit.y+btnExit.height/2);
	ctx.rotate(rota3);
	ctx.drawImage(circl, 1000, 0, 500, 1000,
		(canvas.width/7)/-2, (canvas.height/7)/-2, canvas.width/7/2, canvas.height/7);
	ctx.restore();

	ctx.save();
	ctx.translate(btnExit.x+ btnExit.width/2, btnExit.y+btnExit.height/2);
	ctx.rotate(-rota3);
	ctx.drawImage(circl, 2000, 0, 500, 1000,
		(canvas.width/6)/-2, (canvas.height/6)/-2, canvas.width/6/2, canvas.height/6);
	ctx.restore();

	ctx.save();
	ctx.translate(btnExit.x+ btnExit.width/2, btnExit.y+btnExit.height/2);
	ctx.rotate(rota3);
	ctx.drawImage(circl, 0, 0, 500, 1000,
		(canvas.width/5)/-2, (canvas.height/5)/-2, canvas.width/5/2, canvas.height/5);
	ctx.restore();

}