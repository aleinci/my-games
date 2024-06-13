const font = new FontFace('MyFont', 'url(' + srcImg + 'Silkscreen-Regular.ttf)');
font.load().then((loadedFont) => {
  document.fonts.add(loadedFont);
});

let images ={
	money:{img:"", src:srcImg + "money.png",},
	player:{img:"", src:srcImg + "player.png",},
	flash01:{img:"", src:srcImg + "particle/flash01.png"},
	flash02:{img:"", src:srcImg + "particle/flash0_2.png"},
	flash03:{img:"", src:srcImg + "particle/flash0_1.png"},
	flash04:{img:"", src:srcImg + "particle/flash0_3.png"},
	smoke01:{img:"", src:srcImg + "particle/smoke01.png"},
	smoke:{img:"", src:srcImg + "particle/smoke.png"},
	shockwave2:{img:"", src:srcImg + "particle/shockwave2.png"},

	magnetSpark:{img:"", src:srcImg + "particle/magnet_spark.png"},
	magnetShockwave:{img:"", src:srcImg + "particle/magnet_shockwave.png"},

	invincible:{img:"", src:srcImg + "particle/invincible.png"},

	spark:{img:"", src:srcImg + "particle/spark.png"},
	impact:{img:"", src:srcImg + "particle/impact.png"},
	timeDrecrease:{img:"", src:srcImg + "particle/timeDrecrease.png"},
	timeDrecrease2:{img:"", src:srcImg + "particle/timeDrecrease2.png"},

	cursorP:{img:"", src:srcImg + "particle/cursorP.png"},

	stage:{img:"", src:srcImg + "stage/stage.png"},

	enemy1:{img:"", src:srcImg + "enemies/enemy1.png"},
	enemy2:{img:"", src:srcImg + "enemies/enemy2.png"},
	enemy3:{img:"", src:srcImg + "enemies/enemy3.png"},
	enemy4:{img:"", src:srcImg + "enemies/enemy4.png"},
	bomb:{img:"", src:srcImg + "enemies/bomb.png"},
	loading:{img:"", src:srcImg + "loading.png"},
	carLoading:{img:"", src:srcImg + "car_loading.png"},

	mMenuBtn:{img:"", src:srcImg + "menu/mainMenuBtn.png"},
	pMenuBtn:{img:"", src:srcImg + "menu/btnPause.png"},
	goMenuBtn:{img:"", src:srcImg + "menu/btnGO.png"},
	cMenuBtn:{img:"", src:srcImg + "menu/btnBCredit.png"},
	menuBG:{img:"", src:srcImg + "menu/backgroundMenu.jpg"},
	menuBGAnim:{img:"", src:srcImg + "menu/backgroundMenuAnim.png"},
	creditBG:{img:"", src:srcImg + "menu/backgroundCredit.jpg"},
	creditBGAnim:{img:"", src:srcImg + "menu/backgroundCreditAnim.png"},
	pause:{img:"", src:srcImg + "menu/pause.png"},

	shopcard:{img:"", src:srcImg + "shop/shopcard.png"},
	shopexit:{img:"", src:srcImg + "shop/shopExitB.png"},
	buyS:{img:"", src:srcImg + "shop/buyS.png"},
	buyF:{img:"", src:srcImg + "shop/buyF.png"},
	shopBG:{img:"", src:srcImg + "shop/backgroundShop.jpg"},
	shopBGAnim:{img:"", src:srcImg + "shop/backgroundShopAnim.png"},
	
	magnet:{img:"", src:srcImg + "items/magnet.png"},
	extralife:{img:"", src:srcImg + "items/extralife.png"},
	rainmoney:{img:"", src:srcImg + "items/rainmoney.png"},
	shield:{img:"", src:srcImg + "items/invinsible.png"},
	hyperspeed:{img:"", src:srcImg + "items/speed.png"},
	impulse:{img:"", src:srcImg + "items/impulse.png"},

	outCamera:{img:"", src:srcImg + "hud/outCamera.png"},
	pauseBtn:{img:"", src:srcImg + "hud/btnPHud.png"},
	pcControl:{img:"", src:srcImg + "hud/pcControl.png"},
	androidControl:{img:"", src:srcImg + "hud/androidControl.png"},
	flag:{img:"", src:srcImg + "hud/flag.png"},
	clock:{img:"", src:srcImg + "hud/clock.png"},
	distance:{img:"", src:srcImg + "hud/distance.png"},
}

let sound = {
	mainMenu:{sfx:"", src:srcSfx + "space_cadet_training_montage.mp3",},
	play1:{sfx:"", src:srcSfx + "Juhani Junkala [Chiptune Adventures] 1. Stage 1.ogg",},
	play2:{sfx:"", src:srcSfx + "Juhani Junkala [Chiptune Adventures] 2. Stage 2.ogg",},

	mouseOver:{sfx:"", src:srcSfx + "Menu Selection Click.wav",},
	mouseClick:{sfx:"", src:srcSfx + "click.wav",},

	victory1:{sfx:"", src:srcSfx + "game_over/VictoryMusic.wav",},
	victory2:{sfx:"", src:srcSfx + "game_over/SwingingLevel.wav",},

	money:{sfx:"", src:srcSfx + "items/Collect_Point_00.mp3",},
	explosion:{sfx:"", src:srcSfx + "items/BangShort.mp3",},
	impulse:{sfx:"", src:srcSfx + "items/impulse.mp3",},
	item:{sfx:"", src:srcSfx + "items/Item1A.wav",},
	invincible:{sfx:"", src:srcSfx + "items/invincible.mp3",},

	enemyHit:{sfx:"", src:srcSfx + "enemy/hit.mp3",},
	enemyAlert:{sfx:"", src:srcSfx + "enemy/alert.mp3",},

	magnet1:{sfx:"", src:srcSfx + "items/magnet1.mp3",},
	magnet2:{sfx:"", src:srcSfx + "items/magnet2.mp3",},
}


function startMusic(music){
	music.sfx.play();
}

function volumeSfx(music, volume){
	music.sfx.volume = volume;
}

function stopMusic(music){
	music.sfx.pause();
	music.sfx.currentTime=0;
}

let animatedLoadingCar = {
	current: 0,
	end: 2,
	velocity: 0.2
}

class LoadAssets
{
	constructor()
	{
		this.srcImg = "../img/covid/";
		this.srcMsc = "../sfx/music/";
		this.srcSfx = "../sfx/FX/";

		this.assetsToLoad = [];
		this.assetsImg = [];
		this.assetsSnd = [];
		this.assetsLoaded = 0;
		this.alpha = 1;
		this.press={
			alpha:{current:1, max:0},
			enable:true,
		};
	}



	LoadImage=(image)=>
	{
		image.img = new Image();
		image.img.src =image.src;
		image.img.addEventListener("load", this.loadHandler, false);
		this.assetsToLoad.push(image.img);
		this.assetsImg.push(image.img);
	}

	LoadSound=(sound)=>
	{
		sound.sfx = new Audio(sound.src);
	 	sound.sfx.addEventListener("loadedmetadata", this.loadHandler, false);
	 	this.assetsToLoad.push(sound.sfx);
	 	this.assetsSnd.push(sound.sfx)
	}

	mutedSound(bool){
		for (let i in this.assetsSnd){
			let sound = this.assetsSnd[i];

			sound.muted=bool;
		}
	}

	loadHandler=()=> 
	{
		this.assetsLoaded++;
		console.log("Loading..."+this.assetsToLoad.length);
		
		    
		if (this.assetsLoaded === this.assetsToLoad.length) 
		{
			console.log("All assets loaded");
			
			//if (started == undefined) {started = new Start();}
			//else{started = new Start();}
		}
	}

	LoadingScreen=()=> {//pantalla de carga
		




		ctx.save();

		ctx.globalAlpha = this.alpha;
		ctx.fillStyle = "black";
		ctx.drawImage(images.loading.img,0,0,canvas.width, canvas.height);


		ctx.restore();


		animatedLoadingCar.current += animatedLoadingCar.velocity;
		if (animatedLoadingCar.current >= animatedLoadingCar.end) animatedLoadingCar.current = 0;

		ctx.save();
		ctx.translate(Math.floor(this.assetsLoaded/this.assetsToLoad.length*(canvas.width)), canvas.height-170);
		ctx.drawImage(images.carLoading.img, Math.floor(animatedLoadingCar.current)* images.carLoading.img.width/2, 0, images.carLoading.img.width/2, images.carLoading.img.height,
		images.carLoading.img.width/-2, images.carLoading.img.height/-2, (images.carLoading.img.width/2)*5, images.carLoading.img.height*5)
		ctx.restore();


		ctx.save();
		ctx.globalAlpha = this.alpha;
		ctx.fillStyle="#022a44";
		ctx.font = '25pt MyFont';
		ctx.textAlign = "center";



		

		if (this.assetsLoaded === this.assetsToLoad.length && this.press.enable) {
			
			if (this.press.alpha.current >= 0.9) {this.press.alpha.max=0;}
			if (this.press.alpha.current <= 0.1) {this.press.alpha.max=1;}

			this.press.alpha.current=lerp(this.press.alpha.current, this.press.alpha.max, 0.1);
			this.DetectingDevice();
			ctx.save();
			ctx.globalAlpha = this.press.alpha.current;
			ctx.fillText("Press to Enter", canvas.width/2, 570 );
			ctx.restore();
		}else{
			ctx.fillText("Loading... " + Math.floor(this.assetsLoaded/this.assetsToLoad.length*(100)) + "%",
			canvas.width/2, 570 );
		}
		

		ctx.restore();
		
	}

	DetectingDevice()
	{
		if (device=="" && Input.mouseFire[0]) {
			device = "pc";
		}

		if (device=="" && Input.touch[0]) {
			device = "android";
		}

		if (device =="pc" && !Input.mouseFire[0] || device =="android" && !Input.touch[0]) {
			this.press.enable=false;
			//startMusic(sound.clickBtn);
		}
	}
}

let Assets = new LoadAssets();

Assets.LoadImage(images.money);
Assets.LoadImage(images.player);

Assets.LoadImage(images.flash01);
Assets.LoadImage(images.flash02);
Assets.LoadImage(images.flash03);
Assets.LoadImage(images.flash04);
Assets.LoadImage(images.smoke01);
Assets.LoadImage(images.smoke);
Assets.LoadImage(images.shockwave2);

Assets.LoadImage(images.magnetSpark);
Assets.LoadImage(images.magnetShockwave);
Assets.LoadImage(images.timeDrecrease);
Assets.LoadImage(images.timeDrecrease2);


Assets.LoadImage(images.invincible);

Assets.LoadImage(images.spark);
Assets.LoadImage(images.impact);
Assets.LoadImage(images.cursorP);

Assets.LoadImage(images.stage);

Assets.LoadImage(images.enemy1);
Assets.LoadImage(images.enemy2);
Assets.LoadImage(images.enemy3);
Assets.LoadImage(images.enemy4);
Assets.LoadImage(images.bomb);

Assets.LoadImage(images.loading);
Assets.LoadImage(images.carLoading)

Assets.LoadImage(images.mMenuBtn);
Assets.LoadImage(images.pMenuBtn);
Assets.LoadImage(images.goMenuBtn);
Assets.LoadImage(images.cMenuBtn);
Assets.LoadImage(images.menuBG);
Assets.LoadImage(images.menuBGAnim);
Assets.LoadImage(images.creditBG);
Assets.LoadImage(images.creditBGAnim);
Assets.LoadImage(images.pause);

Assets.LoadImage(images.shopcard);
Assets.LoadImage(images.shopexit);
Assets.LoadImage(images.buyS);
Assets.LoadImage(images.buyF);
Assets.LoadImage(images.shopBG);
Assets.LoadImage(images.shopBGAnim);

Assets.LoadImage(images.magnet);
Assets.LoadImage(images.extralife);
Assets.LoadImage(images.rainmoney);
Assets.LoadImage(images.shield);
Assets.LoadImage(images.hyperspeed);
Assets.LoadImage(images.impulse);

Assets.LoadImage(images.outCamera);
Assets.LoadImage(images.pauseBtn);
Assets.LoadImage(images.pcControl);
Assets.LoadImage(images.androidControl);
Assets.LoadImage(images.flag);
Assets.LoadImage(images.clock);
Assets.LoadImage(images.distance);


//******************** SOUND ************************
Assets.LoadSound(sound.mouseOver);
Assets.LoadSound(sound.mouseClick);
Assets.LoadSound(sound.mainMenu);
Assets.LoadSound(sound.play1);
Assets.LoadSound(sound.play2);
Assets.LoadSound(sound.victory1);
Assets.LoadSound(sound.victory2);
Assets.LoadSound(sound.money);
Assets.LoadSound(sound.explosion);
Assets.LoadSound(sound.impulse);
Assets.LoadSound(sound.item);
Assets.LoadSound(sound.enemyHit);
Assets.LoadSound(sound.enemyAlert);
Assets.LoadSound(sound.invincible);
Assets.LoadSound(sound.magnet1);
Assets.LoadSound(sound.magnet2);