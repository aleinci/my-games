let pauseMenu={
	reanude:new Button(255, 725, 295, 100,
		0,0,0,0,1,1,true),

	quit:new Button(545, 725, 295, 100,
		0,0,0,0,1,1,true),

	qConfirm:false,

	aConfirm:new Button(545, 725, 295, 100,// quit
		0,0,0,0,1,1,true),

	bConfirm:new Button(255, 725, 295, 100,// reanude
		0,0,0,0,1,1,true),

	start:function(){},
}


pauseMenu.start=()=>
{
	document.body.style.cursor="";

	if (sound.music3.sfx.currentTime >= sound.music3.sfx.duration*0.98) {sound.music3.sfx.currentTime=0}

	

	stopMusic(sound.music1);
	stopMusic(sound.music2);
	startMusic(sound.music3);
	sound.music3.sfx.volume=1;

	if (pauseMenu.qConfirm) 
	{
		CreateImage(images.screen.pauseMenuQ.img,0,0,images.screen.pauseMenu.img.width,images.screen.pauseMenu.img.height,
		canvas.width/2, canvas.height/2, 800, 800, 0, 0, 1, 1, 1);

		buttom(pauseMenu.aConfirm, images.mainMenu.button.img, images.mainMenu.button.img.width,
			images.mainMenu.button.img.height/4, images.mainMenu.button.img.height/4 *3)

		pauseMenu.aConfirm.event=()=>{
			document.body.style.cursor="";
			changeScene.load.change(changeScene.mainM, changeScene.pauseM, "low");
			reset.quit();
		}

		buttom(pauseMenu.bConfirm, images.mainMenu.button.img, images.mainMenu.button.img.width,
			images.mainMenu.button.img.height/4, images.mainMenu.button.img.height/4 *0)

		pauseMenu.bConfirm.event=()=>{
			pauseMenu.qConfirm = false;
		}

	}
	else
	{
		CreateImage(images.screen.pauseMenu.img,0,0,images.screen.pauseMenu.img.width,images.screen.pauseMenu.img.height,
		canvas.width/2, canvas.height/2, 800, 800, 0, 0, 1, 1, 1);

		buttom(pauseMenu.reanude, images.mainMenu.button.img, images.mainMenu.button.img.width,
		images.mainMenu.button.img.height/4, images.mainMenu.button.img.height/4 *0)

		pauseMenu.reanude.event=()=>{
			changeScene.load.change(changeScene.playing, changeScene.pauseM, "fast");
		}

		buttom(pauseMenu.quit, images.mainMenu.button.img, images.mainMenu.button.img.width,
			images.mainMenu.button.img.height/4, images.mainMenu.button.img.height/4 * 2)

		pauseMenu.quit.event=()=>{
			pauseMenu.qConfirm=true;
		}
	}

	function buttom(Variable, img, iwidth, iheight, iy){
		/*Variable.img = img;
		Variable.iwidth = iwidth;
		Variable.iheight = iheight;
		Variable.iy = iy;

		Variable.draw();*/
		Variable.clicked();
	}
}