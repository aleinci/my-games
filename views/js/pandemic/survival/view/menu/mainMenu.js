let mainMenu=
{
	play:new Button(canvas.width/2, 150+200, 400, 100,
		0,0,0,0,1,1,3),

	credits:new Button(canvas.width/2, 150+310, 400, 100,
		0,0,0,0,1,1,3),

	leader:new Button(canvas.width/2, 150+420, 400, 100,
		0,0,0,0,1,1,3),

	cg:new Button(canvas.width/2, 150+530, 400, 100,
		0,0,0,0,1,1,3),
	start:function(){},
}

mainMenu.start=()=>{
	if (sound.musicMM.sfx.currentTime >= sound.musicMM.sfx.duration*0.98) {sound.musicMM.sfx.currentTime=0;}

	stopMusic(sound.music1);
	stopMusic(sound.music2);
	stopMusic(sound.music3);
	startMusic(sound.musicMM);

	document.body.style.cursor="";
	ctx.save();
	ctx.drawImage(images.mainMenu.button.img, 393, 342, 1752, 2628,
		0,0,canvas.width, canvas.height);
	ctx.restore();

	

	mainMenu.play.img = images.mainMenu.button.img;
	mainMenu.play.iwidth = 1585;
	mainMenu.play.iheight = 464;
	mainMenu.play.ix = 2442;
	mainMenu.play.iy = 476;

	mainMenu.play.draw();
	mainMenu.play.clicked();

	mainMenu.play.event=()=>{
		changeScene.load.change(changeScene.playing, changeScene.mainM, "low");
	}

	//////////////////////////////////////////////

	mainMenu.credits.img = images.mainMenu.button.img;
	mainMenu.credits.iwidth = 1585;
	mainMenu.credits.iheight = 464;
	mainMenu.credits.ix = 2442;
	mainMenu.credits.iy = 1085;

	mainMenu.credits.draw();
	mainMenu.credits.clicked();

	mainMenu.credits.event=()=>{
		creditsM.enable = true;
	}

	//////////////////////////////////////////////

	mainMenu.leader.img = images.mainMenu.button.img;
	mainMenu.leader.iwidth = 1585;
	mainMenu.leader.iheight = 464;
	mainMenu.leader.ix = 2442;
	mainMenu.leader.iy = 1716;

	mainMenu.leader.draw();
	mainMenu.leader.clicked();

	mainMenu.leader.event=()=>{
		window.location = srcLed;
	}

	//////////////////////////////////////////////

	mainMenu.cg.img = images.mainMenu.button.img;
	mainMenu.cg.iwidth = 1585;
	mainMenu.cg.iheight = 464;
	mainMenu.cg.ix = 2442;
	mainMenu.cg.iy = 2350;

	mainMenu.cg.draw();
	mainMenu.cg.clicked();

	mainMenu.cg.event=()=>{
		window.location = srcPag;
	}
}


/////////////////////////////////////////

