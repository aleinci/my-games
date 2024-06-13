function Instantiate_MainMenu()
{
	let i = images.mMenuBtn.img;
	let scale = 2.5;
	main_menu = {
		play: 		new Button(313-20,200+120, (96)*scale, (i.height/2)*scale,   /**/   0, 0, 96, i.height/2,/**/ 1, 0),
		shop:		new Button(542-20,200+120, (72)*scale, (i.height/2)*scale,   /**/  96, 0, 72, i.height/2,/**/ 1, 0),
		leader:		new Button(261.75-20,330+120, (55)*scale, (i.height/2)*scale,/**/ 168, 0, 55, i.height/2,/**/ 1, 0),
		coachteen: 	new Button(412.5-20,330+120, (55)*scale, (i.height/2)*scale, /**/ 223, 0, 55, i.height/2,/**/ 1, 0),
		credits: 	new Button(563.25-20,330+120, (55)*scale, (i.height/2)*scale,/**/ 278, 0, 55, i.height/2,/**/ 1, 0),
		mouseover:false,
		border:{x:-6000, y:-6000, width:0, height:0, ix:0, iy:i.height, iwidth:0, iheight:0},
		update:function(){},
		animation:0,
		animationbg:{current:0, max:80},
	};

	main_menu.play.img = i;
	main_menu.shop.img = i;
	main_menu.credits.img = i;
	main_menu.leader.img = i;
	main_menu.coachteen.img = i;

	main_menu.play.event=()=>{
		extractData();
		Instantiate_Game();
		mode="playing";
		stopMusic(sound.mainMenu);
	}

	main_menu.shop.event=()=>{mode="shop";}

	main_menu.credits.event=()=>{mode="credits";}

	main_menu.leader.event=()=>{window.location=srcLed}

	main_menu.coachteen.event=()=>{window.location=srcPag}


	main_menu.update=()=>
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

		stopMusic(sound.victory1);
		stopMusic(sound.victory2);
		startMusic(sound.mainMenu);
		border2Pos(0,0,0,0,0,0,0,0)
		
		main_menu.play.update();
		main_menu.shop.update();
		main_menu.credits.update();
		main_menu.leader.update();
		main_menu.coachteen.update();
		border(main_menu.play);
		border(main_menu.shop);
		border(main_menu.leader);
		border(main_menu.credits);
		border(main_menu.coachteen);
		border2();


		//CreateImage(img, ix, iy, iwidth, iheight, x, y, width, height, 0, 0, 1, 1, 1, 0);
		CreateText("Record: "+dataP[2],20, canvas.height-90,18,"MyFont","white","left",1);

		cP_MmenuBtn.update();
	}

	function border2()
	{
		let j = main_menu.border;
		ctx.save();
			ctx.globalAlpha=1;
			ctx.translate(j.x, j.y);
			ctx.scale(1, 1);
			ctx.drawImage(images.mMenuBtn.img, j.ix, j.iy, j.iwidth, j.iheight,
			 j.width/-2, j.height/-2, j.width, j.height);
			ctx.restore();
	}

	function border2Pos(x,y,width,height,ix,iy,iwidth,iheight)
	{
		let j = main_menu.border;

		j.x = x;
		j.y = y;
		j.width = width;
		j.height = height;

		j.ix = ix;
		j.iy = iy;
		j.iwidth = iwidth;
		j.iheight = iheight;
	}

	function border(btn)
	{
		let m = btn;
		main_menu.mouseover=false;
		btn.animationMO=()=>
		{
			main_menu.mouseover=true;
			
			/*ctx.save();
		ctx.translate(m.x, m.y);
		ctx.scale(1.02,1.05);
		//ctx.fillStyle="blue";
		//ctx.fillRect(m.width/-2, m.height/-2, m.width, m.height);
		ctx.drawImage(m.img, m.ix, i.height/2, m.iwidth, m.iheight,
		 m.width/-2, m.height/-2, m.width, m.height);
		ctx.restore();*/
			border2Pos(m.x, m.y, m.width, m.height, m.ix, i.height/2, m.iwidth, m.iheight);
			cP_MmenuBtn.spawm(m.img, m.x, m.y, m.width, m.height, m.ix, i.height/2, m.iwidth, m.iheight, 1, 1);
		}
	}
}


function Start_mMenu()
{
	Instantiate_CreditsMenu();
	Instantiate_Shop();
	Instantiate_MainMenu();
}

Instantiate_particleCursor();
function Instantiate_Game()
{
	musicPlaying =[sound.play1, sound.play2];
	musicPRandom = Random(0,1);
	
	

	Instantiate_PauseMenu();
	Instantiate_DeathMenu();

	//
	InstantiateBackground();
	InstantiatePlayer();
	camera.moveTo(0,0);

	InstantiateHud();
	InstantiateHudPDistance();
	InstantiateHudInvincibility();
	InstantiateHudHyperSpeed();
	InstantiateHPlayerOutCamera();

	InstantiateStartP();
	InstantiateEnemy01();
	InstantiateEnemy02();
	InstantiateEnemy03();
	InstantiateEnemy04();
	InstantiateEnemy05();

	InstantiateMoney();
	InstantiateMagnet();
	InstantiateInvincible();
	InstantiateExtraL();
	InstantiateRainMoney();
	InstantiateHyperSpeed();
	InstantiateMovement();
	

	Instantiate_particleEnemyDeath();
	Instantiate_particleExtraL();
	Instantiate_particleInvincible();
	Instantiate_particleMagnet();
	Instantiate_particleMoney();
	Instantiate_particleBomb();
	Instantiate_particleRecord();
	Instantiate_particleTimeDecrease();
	
}

function Destroy_Game()
{
	DestroyPlayer();
	DestoyHud();
	DestroyHPlayerOutCamera();
	DestroyEnemy01();
	DestroyEnemy02();
	DestroyEnemy03();
	DestroyEnemy04();

	DestroyMoney();
	DestroyMagnet();
	DestroyInvincible();
	DestroyExtraL();
	DestroyHyperSpeed();

	Destroy_particleEnemyDeath();
	Destroy_particleExtraL();
	Destroy_particleInvincible();
	Destroy_particleMagnet();
	Destroy_particleMoney();
	Destroy_particleTimeDecrease();

}
