function mainMenu() {
	stopMusic(sound.music)

	btnPlay.img=mMenuBtn;
	btnPlay.draw();
	btnPlay.iwidth= btnPlay.img.width/4;
	btnPlay.iheight= btnPlay.img.height/2;
	btnPlay.iy= btnPlay.img.height/2;
	btnPlay.clicked();
	btnPlay.event = () =>{btnChange.btnM_G=true}
	btnPlay.width=200;
	btnPlay.height=130;
	btnPlay.x=canvas.width/2-btnPlay.width/2;
	btnPlay.y=200;
	btnPlay.DRstp=false;
	btnPlay.stepX=0;
	btnPlay.ix=btnPlay.img.width/4;

	btnCredits.img=mMenuBtn;
	btnCredits.draw();
	btnCredits.iwidth= btnCredits.img.width/4;
	btnCredits.iheight= btnCredits.img.height/2;
	btnCredits.iy= btnCredits.img.height/2;
	btnCredits.clicked();
	btnCredits.event = () =>{btnChange.btnM_C=true;}
	btnCredits.width=200;
	btnCredits.height=130;
	btnCredits.x=canvas.width/2-btnCredits.width/2-250;
	btnCredits.y=canvas.height/2-btnCredits.height/2;
	btnCredits.DRstp=false;
	btnCredits.stepX=1;
	btnCredits.ix=btnCredits.img.width/4;

	btnLeader.img=mMenuBtn;
	btnLeader.draw();
	btnLeader.iwidth= btnLeader.img.width/4;
	btnLeader.iheight= btnLeader.img.height/2;
	btnLeader.iy= btnLeader.img.height/2;
	btnLeader.clicked();
	btnLeader.event = () =>{window.location=srcLed;}
	btnLeader.width=200;
	btnLeader.height=130;
	btnLeader.x=canvas.width/2-btnLeader.width/2;
	btnLeader.y=canvas.height/2-btnLeader.height/2+150;
	btnLeader.DRstp=false;
	btnLeader.stepX=3;
	btnLeader.ix=btnLeader.img.width/4;

	btnCT.img=mMenuBtn;
	btnCT.draw();
	btnCT.iwidth= btnCT.img.width/4;
	btnCT.iheight= btnCT.img.height/2;
	btnCT.iy= btnCT.img.height/2;
	btnCT.clicked();
	btnCT.event = () =>{window.location=srcPag;}
	btnCT.width=200;
	btnCT.height=130;
	btnCT.x=canvas.width/2-btnCT.width/2+250;
	btnCT.y=canvas.height/2-btnCT.height/2;
	btnCT.DRstp=false;
	btnCT.stepX=2;
	btnCT.ix=btnCT.img.width/4;

	
}