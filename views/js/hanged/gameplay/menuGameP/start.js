function pauseMenu() {

	sound.music.volume=0.5;
	sound.music.play();

	ctx.save();
	ctx.drawImage(menuP,canvas.width/2-(500/2), canvas.height/2-(400/2), 500,400);
	ctx.restore();

	btnQuit.img=mPauseBtn;
	btnQuit.draw();
	btnQuit.clicked();
	btnQuit.event = () =>{
		btnChange.btnP_M=true;
		restart();
	}
	btnQuit.width=170;
	btnQuit.height=90;
	btnQuit.x=canvas.width/2-btnQuit.width/2+120;
	btnQuit.y=canvas.height/2-btnQuit.height/2+50;
	btnQuit.stepX=0;
	btnQuit.iwidth= btnQuit.img.width/2;
	btnQuit.iheight= btnQuit.img.height/2;
	btnQuit.iy= btnQuit.img.height/2;
	btnQuit.ix=btnQuit.img.width/2;
	btnQuit.DRstp=false;

	btnResume.img=mPauseBtn;
	btnResume.draw();
	btnResume.clicked();
	btnResume.event = () =>{btnChange.btnP_G=true;}
	btnResume.width=170;
	btnResume.height=90;
	btnResume.x=canvas.width/2-btnResume.width/2-120;
	btnResume.y=canvas.height/2-btnResume.height/2+50;
	btnResume.stepX=1;
	btnResume.iwidth= btnResume.img.width/2;
	btnResume.iheight= btnResume.img.height/2;
	btnResume.iy= btnResume.img.height/2;
	btnResume.ix=btnResume.img.width/2;
	btnResume.DRstp=false;
}

