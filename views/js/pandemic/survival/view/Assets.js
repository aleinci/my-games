let images ={
	mainMenu:{
		button:{img:"", src:srcImg + "mainMenu/mainMenu.png",},
		credits:{img:"", src:srcImg + "mainMenu/credits.png",},
		loading:{img:"", src:srcImg + "mainMenu/loading.jpg",},
	},
	enemy:{
		barHP:{img:"", src:srcImg + "enemy/enemyHP.png"},
		e1:{img:"", src:srcImg + "enemy/covid1.png"},
		e2:{img:"", src:srcImg + "enemy/covid2.png"},
		e3:{img:"", src:srcImg + "enemy/covid3.png"},
		e4:{img:"", src:srcImg + "enemy/covid4.png"},
		e5:{img:"", src:srcImg + "enemy/covid5.png"},

		a2:{img:"", src:srcImg + "enemy/a/covid2.png"},
		a4:{img:"", src:srcImg + "enemy/a/covid4.png"},

		smoke1:{img:"", src:srcImg + "enemy/particle/smoke1.png"},
		smoke2:{img:"", src:srcImg + "enemy/particle/smoke2.png"},
		smoke3:{img:"", src:srcImg + "enemy/particle/smoke3.png"},
		smoke4:{img:"", src:srcImg + "enemy/particle/smoke4.png"},
	},
	screen:{
		hit:{img:"", src:srcImg + "screen/hitScreen.png"},
		special:{img:"", src:srcImg + "screen/specialScreen.png"},
		cursor:{img:"", src:srcImg + "screen/cursor.png"},
		gameOver:{img:"", src:srcImg + "screen/gameOver.jpg"},
		pauseMenu:{img:"", src:srcImg + "screen/pauseMenu.png"},
		pauseMenuQ:{img:"", src:srcImg + "screen/pauseMenuQ.png"},
		control:{img:"", src:srcImg + "screen/control.png"}
	},
	items:{
		health:{img:"", src:srcImg + "items/health.png"},
		shield:{img:"", src:srcImg + "items/shield.png"},
		weapon:{img:"", src:srcImg + "items/weapon.png"},
		bubble:{img:"", src:srcImg + "items/bubble.png"},
	},
	hud:{
		life:{img:"", src:srcImg + "hud/lifeBar.png"},
		shield:{img:"", src:srcImg + "hud/shieldBar.png"},
		energy:{img:"", src:srcImg + "hud/energy.png"},
		pause:{img:"", src:srcImg + "hud/pauseBtn.png"},
		box:{img:"", src:srcImg + "hud/box.png"},
		grab:{img:"", src:srcImg + "hud/grab.png"},
	},
	obstacles:{
		o1:{img:"", src:srcImg + "obstacles/o_1.png"},
		o2:{img:"", src:srcImg + "obstacles/o_2.png"},
		o3:{img:"", src:srcImg + "obstacles/o_3.png"},
	},

	android:{img:"", src:srcImg + "androidController.png"},
	player:{img:"", src:srcImg + "/player/player.png"},
	bullet:{img:"", src:srcImg + "/player/bullet.png"},
	spark:{img:"", src:srcImg + "/player/spark.png"},
	weaponP:{img:"", src:srcImg + "/player/weaponCharacter.png"},
	stamina:{img:"", src:srcImg + "player/playerEnergy.png"},
	objects:{img:"", src:srcImg + "objects.png"},
}

let sound = {
	//mainMenu:{sfx:"", src:srcMsc + "sound/1st Sonata - Snowy Stars.ogg",},
	clickBtn:{sfx:"", src:srcSfx + "UI/zapsplat_multimedia_button_click_007_53868.mp3",},
	buble1:{sfx:"", src:srcSfx + "items/zapsplat_cartoon_bubble_pop_007_40279.mp3",},
	buble2:{sfx:"", src:srcSfx + "items/zapsplat_cartoon_bubble_pop_005_40277.mp3",},

	footstepG1:{sfx:"", src:srcSfx + "player/footstep_grass1.mp3",},
	footstepG2:{sfx:"", src:srcSfx + "player/footstep_grass2.mp3",},
	footstepG3:{sfx:"", src:srcSfx + "player/footstep_grass3.mp3",},

	footstepC1:{sfx:"", src:srcSfx + "player/footstep_concrete1.mp3",},
	footstepC2:{sfx:"", src:srcSfx + "player/footstep_concrete2.mp3",},
	footstepC3:{sfx:"", src:srcSfx + "player/footstep_concrete3.mp3",},

	hitT1:{sfx:"", src:srcSfx + "hit/hit_tree1.mp3",},
	hitT2:{sfx:"", src:srcSfx + "hit/hit_tree2.mp3",},
	hitT3:{sfx:"", src:srcSfx + "hit/hit_tree3.mp3",},

	hitTo1:{sfx:"", src:srcSfx + "hit/touch_tree1.mp3",},
	hitTo2:{sfx:"", src:srcSfx + "hit/touch_tree2.mp3",},
	hitTo3:{sfx:"", src:srcSfx + "hit/touch_tree3.mp3",},

	hitE1:{sfx:"", src:srcSfx + "hit/hit_enemy1.mp3",},
	hitE2:{sfx:"", src:srcSfx + "hit/hit_enemy2.mp3",},
	hitE3:{sfx:"", src:srcSfx + "hit/hit_enemy3.mp3",},

	music1:{sfx:"", src:srcSfx + "music/music1.mp3",},
	music2:{sfx:"", src:srcSfx + "music/music2.mp3",},
	music3:{sfx:"", src:srcSfx + "music/music3.mp3",},

	musicMM:{sfx:"", src:srcSfx + "music/music_mMenu.mp3",},

	enemyDeath1:{sfx:"", src:srcSfx + "enemy/enemyDeath1.mp3",},
	enemyDeath2:{sfx:"", src:srcSfx + "enemy/enemyDeath2.mp3",},

	weapon1:{sfx:"", src:srcSfx + "weapon/weapon1.mp3",},
	weapon2:{sfx:"", src:srcSfx + "weapon/weapon2.mp3",},
	weapon3:{sfx:"", src:srcSfx + "weapon/weapon3.mp3",},
	weapon4:{sfx:"", src:srcSfx + "weapon/weapon4.mp3",},
}



let img = new Image();
img.src = srcImg + "Quit.png";

let bg = new Image();
bg.src = srcImg + "bg.png";//percorso_1.png

let boton = new Image();
boton.src = srcImg + "ball.png";






let hudW = new Image();
hudW.src = srcImg + "hud/weapon.png";

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
		var color1 ="";//darkcolor
		var color2 ="";//normalcolor

		//cambiar color de la barra de carga
		if (this.assetsLoaded < this.assetsToLoad.length*0.25) {
			color1 ="#FF0000";
			color2 ="#BB0000";
		}
		if (this.assetsLoaded >= this.assetsToLoad.length*0.25 && this.assetsLoaded < this.assetsToLoad.length*0.50) {
			color1 ="#BB9600";
			color2 ="#FFCD00";
		}
		if (this.assetsLoaded >= this.assetsToLoad.length*0.50 && this.assetsLoaded < this.assetsToLoad.length*0.75) {
			color1 ="#93BB00";
			color2 ="#C8FF00";
		}
		if (this.assetsLoaded >= this.assetsToLoad.length*0.75) {
			color1 ="#30BB00";
			color2 ="#23FF00";
		}




		ctx.save();

		ctx.globalAlpha = this.alpha;
		ctx.fillStyle = "black";
		ctx.drawImage(images.mainMenu.loading.img,0,0,canvas.width, canvas.height);


		ctx.restore();

		ctx.save();
		ctx.globalAlpha = this.alpha;
		ctx.fillStyle="#022a44";
		ctx.font = '25pt Bebas Neue';
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
			startMusic(sound.clickBtn);
		}
	}
}

let Assets = new LoadAssets();

Assets.LoadImage(images.mainMenu.loading);
Assets.LoadImage(images.mainMenu.credits);
Assets.LoadImage(images.mainMenu.button);

Assets.LoadImage(images.objects);
Assets.LoadImage(images.android);
Assets.LoadImage(images.player);
Assets.LoadImage(images.bullet);
Assets.LoadImage(images.spark);
Assets.LoadImage(images.stamina);
Assets.LoadImage(images.weaponP);

Assets.LoadImage(images.enemy.barHP);
Assets.LoadImage(images.enemy.e1);
Assets.LoadImage(images.enemy.e2);
Assets.LoadImage(images.enemy.e3);
Assets.LoadImage(images.enemy.e4);
Assets.LoadImage(images.enemy.e5);
Assets.LoadImage(images.enemy.a2);
Assets.LoadImage(images.enemy.a4);

Assets.LoadImage(images.enemy.smoke1);
Assets.LoadImage(images.enemy.smoke2);
Assets.LoadImage(images.enemy.smoke3);
Assets.LoadImage(images.enemy.smoke4);

Assets.LoadImage(images.screen.hit);
Assets.LoadImage(images.screen.special);
Assets.LoadImage(images.screen.cursor);
Assets.LoadImage(images.screen.gameOver);
Assets.LoadImage(images.screen.pauseMenu);
Assets.LoadImage(images.screen.pauseMenuQ);
Assets.LoadImage(images.screen.control);

Assets.LoadImage(images.items.health);
Assets.LoadImage(images.items.shield);
Assets.LoadImage(images.items.weapon);
Assets.LoadImage(images.items.bubble);

Assets.LoadImage(images.hud.life);
Assets.LoadImage(images.hud.shield);
Assets.LoadImage(images.hud.energy);
Assets.LoadImage(images.hud.pause);
Assets.LoadImage(images.hud.box);
Assets.LoadImage(images.hud.grab);

Assets.LoadImage(images.obstacles.o1);
Assets.LoadImage(images.obstacles.o2);
Assets.LoadImage(images.obstacles.o3);

///SOUND

//Assets.LoadSound(sound.mainMenu);
Assets.LoadSound(sound.clickBtn);
Assets.LoadSound(sound.buble1);
Assets.LoadSound(sound.buble2);

Assets.LoadSound(sound.footstepG1);
Assets.LoadSound(sound.footstepG2);
Assets.LoadSound(sound.footstepG3);
Assets.LoadSound(sound.footstepC1);
Assets.LoadSound(sound.footstepC2);
Assets.LoadSound(sound.footstepC3);

Assets.LoadSound(sound.hitT1);
Assets.LoadSound(sound.hitT2);
Assets.LoadSound(sound.hitT3);
Assets.LoadSound(sound.hitTo1);
Assets.LoadSound(sound.hitTo2);
Assets.LoadSound(sound.hitTo3);
Assets.LoadSound(sound.hitE1);
Assets.LoadSound(sound.hitE2);
Assets.LoadSound(sound.hitE3);

Assets.LoadSound(sound.music1);
Assets.LoadSound(sound.music2);
Assets.LoadSound(sound.music3);
Assets.LoadSound(sound.musicMM);

Assets.LoadSound(sound.enemyDeath1);
Assets.LoadSound(sound.enemyDeath2);

Assets.LoadSound(sound.weapon1);
Assets.LoadSound(sound.weapon2);
Assets.LoadSound(sound.weapon3);
Assets.LoadSound(sound.weapon4);


