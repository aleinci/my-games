function Instantiate_PauseMenu()
{
	pause_menu = {
		resume:new Button(300,400, 140, 70, images.pMenuBtn.img.width/2, 0, images.pMenuBtn.img.width/2, images.pMenuBtn.img.height, 0, 0, true),
		exit:new Button(500,400, 140, 70, images.pMenuBtn.img.width/2, 0, images.pMenuBtn.img.width/2, images.pMenuBtn.img.height, 1, 0, true),
		update:function(){},
		animationbg:{current:0, max:80},
		animation:0,
	};

	pause_menu.resume.img=images.pMenuBtn.img;
	pause_menu.exit.img=images.pMenuBtn.img;
	
	pause_menu.resume.event=()=>{
		mode="playing";
	}

	pause_menu.exit.event=()=>{
		Instantiate_MainMenu();
		mode="menu";
		stopMusic(musicPlaying[musicPRandom]);
	}


	pause_menu.update=()=>
	{
		let bgmenu = images.menuBG.img;

		main_menu.animationbg.current++;
		if (main_menu.animationbg.current >= main_menu.animationbg.max) {
			main_menu.animationbg.current = 0;
		}
		
		CreateImage(bgmenu, 0, 0, bgmenu.width, bgmenu.height, (canvas.width/2+40)-main_menu.animationbg.current, (canvas.height/2+40)-main_menu.animationbg.current, bgmenu.width, bgmenu.height, 0, 0, 1, 1, 1, 0);



		let anim = images.menuBGAnim.img;

		main_menu.animation++;
		if (main_menu.animation >= 20) {
			main_menu.animation = 0;
		}



		CreateImage(anim, 0, 0, anim.width, anim.height, (canvas.width/2 + main_menu.animation)-10, 50, anim.width, anim.height, 
			0, 0, 1, 1, 1, 0);

		CreateImage(anim, 0, 0, anim.width, anim.height, (canvas.width/2 - main_menu.animation)+10, canvas.height-50, anim.width, anim.height, 
			0, 0, 1, 1, 1, 0);

		CreateImage(images.pause.img, 0, 0, images.pause.img.width, images.pause.img.height,
		 canvas.width/2, canvas.height/2-150, images.pause.img.width, images.pause.img.height, 
			0, 0, 5, 5, 1, 0);

		startMusic(musicPlaying[musicPRandom]);
		volumeSfx(musicPlaying[musicPRandom], 0.5);
		//ctx.fillRect(0,0,400,400)
		pause_menu.resume.update();
		pause_menu.exit.update();
	}
}

function Destro_mMenu()
{
	
}
