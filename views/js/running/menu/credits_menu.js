function Instantiate_CreditsMenu()
{
	credits_menu = {
		quit:new Button(700,50, 140, 70, 0, 0, images.cMenuBtn.img.width, images.cMenuBtn.img.height, 0, 0, true),
		update:function(){},
		animation:0,
		animationbg:{current:0, max:80},
	}

	credits_menu.quit.img=images.cMenuBtn.img;

	credits_menu.quit.event=()=>{
		mode="menu";
	}

	function textCredits()
	{
		CreateText("Credits",canvas.width/2, 140,46,"MyFont","white","center");

		CreateText("Programmer",canvas.width/2, 260,30,"MyFont","white","center");
		CreateText("Alejandro Inciarte",canvas.width/2, 300,22,"MyFont","white","center");

		CreateText("Graphic designer",canvas.width/2, 400,30,"MyFont","white","center");
		CreateText("Alejandro Inciarte",canvas.width/2, 440,22,"MyFont","white","center");


		CreateText("Music and sound effect",canvas.width/2, 540,30,"MyFont","white","center");
		CreateText("https://opengameart.org",canvas.width/2, 580,22,"MyFont","white","center");
	}



	credits_menu.update=()=>
	{
		startMusic(sound.mainMenu);

		let bgcredit = images.creditBG.img;

		credits_menu.animationbg.current++;
		if (credits_menu.animationbg.current >= credits_menu.animationbg.max) {
			credits_menu.animationbg.current = 0;
		}
		
		CreateImage(bgcredit, 0, 0, bgcredit.width, bgcredit.height, (canvas.width/2+40)-credits_menu.animationbg.current, (canvas.height/2+40)-credits_menu.animationbg.current, bgcredit.width, bgcredit.height, 0, 0, 1, 1, 1, 0);



		let anim = images.creditBGAnim.img;

		credits_menu.animation++;
		if (credits_menu.animation >= 20) {
			credits_menu.animation = 0;
		}

		CreateImage(anim, 0, 0, anim.width, anim.height, (canvas.width/2 + credits_menu.animation)-10, 50, anim.width, anim.height, 
			0, 0, 1, 1, 1, 0);

		CreateImage(anim, 0, 0, anim.width, anim.height, (canvas.width/2 - credits_menu.animation)+10, canvas.height-50, anim.width, anim.height, 
			0, 0, 1, 1, 1, 0);

		credits_menu.quit.update();


		textCredits();
	}
}