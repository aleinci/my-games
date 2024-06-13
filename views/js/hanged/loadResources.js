var assetsToLoad = [],
    assetsLoaded = 0;

var transci = 1;

let sound={};

function transicion() 
{
	if (transci>0) {
		transci-=0.02;
	}if (transci<0) {transci=0;}

	ctx.save();
	ctx.globalAlpha = transci;
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.restore();
}

function recolor() {
	
}

function LoadingScreen() {//pantalla de carga
	var color1 ="";//darkcolor
	var color2 ="";//normalcolor

	//cambiar color de la barra de carga
	if (assetsLoaded < assetsToLoad.length*0.25) {
		color1 ="#FF0000";
		color2 ="#BB0000";
	}
	if (assetsLoaded >= assetsToLoad.length*0.25 && assetsLoaded < assetsToLoad.length*0.50) {
		color1 ="#BB9600";
		color2 ="#FFCD00";
	}
	if (assetsLoaded >= assetsToLoad.length*0.50 && assetsLoaded < assetsToLoad.length*0.75) {
		color1 ="#93BB00";
		color2 ="#C8FF00";
	}
	if (assetsLoaded >= assetsToLoad.length*0.75) {
		color1 ="#30BB00";
		color2 ="#23FF00";
	}




	ctx.save();

	ctx.fillStyle = "black";
	ctx.fillRect(0,0,canvas.width, canvas.height)

	ctx.fillStyle = "gray";
	ctx.fillRect(canvas.width/2-100, canvas.height/2-10, 200, 20)

	ctx.fillStyle = color1;
	ctx.fillRect(canvas.width/2-100, canvas.height/2-10, assetsLoaded/assetsToLoad.length*(200), 20);
	
	ctx.fillStyle = color2;
	ctx.fillRect(canvas.width/2-100, canvas.height/2-10, assetsLoaded/assetsToLoad.length*(200), 10);

	ctx.restore();

	ctx.save();
	ctx.fillStyle="white";
	ctx.font = '15pt Impact';
	ctx.textAlign = "center";
	ctx.fillText("Loading... ", canvas.width/2, canvas.height/2-20 );
	
	ctx.fillStyle="black";
	ctx.fillText(Math.floor(assetsLoaded/assetsToLoad.length*(100)) + "%", canvas.width/2+1, canvas.height/2+9 )
	
	ctx.fillStyle="white";
	ctx.fillText(Math.floor(assetsLoaded/assetsToLoad.length*(100)) + "%", canvas.width/2, canvas.height/2+8 );
	
	ctx.fillText("Please wait", canvas.width/2, canvas.height/2+35 );
	ctx.restore();
	
}


function loadHandler() {//script de carga	
	//if (scene.menuM) {
		assetsLoaded++;
		    //Display "Loading" in the console while assets are being loaded
		//console.log("Loading...");
		    //If everthing is loaded, do this:
		if (assetsLoaded === assetsToLoad.length) {
		      //Make the game play, possibly by changing its state from "loading" to "playing"
			//console.log("All assets loaded");
			//transci = 1;
			
		}	
	//}
}

function LoadImage() {//imagenes
	kbd = new Image();
	kbd.src= img.keyboard;

	anim = new Image();
	anim.src= img.anim;

	animFX = new Image();
	animFX.src= img.animFX;

	barMenu = new Image();
	barMenu.src= img.barMenu;

	mMenuBtn = new Image();
	mMenuBtn.src= img.mMenuBtn;
	
	mPauseBtn = new Image();
	mPauseBtn.src= img.mPauseBtn;

	pauseBtn = new Image();
	pauseBtn.src= img.pauseBtn;

	menuP = new Image();
	menuP.src= img.menuP;

	background = new Image();
	background.src= img.background;

	bGAnim= new Image();
	bGAnim.src = img.bGAnim;

	ui_box= new Image();
	ui_box.src = img.ui_box;

	gameOver= new Image();
	gameOver.src = img.gameOver;


	//if (scene.menuM) {
		kbd.addEventListener("load", loadHandler, false);
		anim.addEventListener("load", loadHandler, false);
		animFX.addEventListener("load", loadHandler, false);
		barMenu.addEventListener("load", loadHandler, false);
		mMenuBtn.addEventListener("load", loadHandler, false);
		mPauseBtn.addEventListener("load", loadHandler, false);
		pauseBtn.addEventListener("load", loadHandler, false);
		menuP.addEventListener("load", loadHandler, false);

		background.addEventListener("load", loadHandler, false);
		bGAnim.addEventListener("load", loadHandler, false);
		ui_box.addEventListener("load", loadHandler, false);
		gameOver.addEventListener("load", loadHandler, false);
		


		assetsToLoad.push(kbd);
		assetsToLoad.push(anim);
		assetsToLoad.push(animFX);
		assetsToLoad.push(barMenu);
		assetsToLoad.push(mMenuBtn);
		assetsToLoad.push(mPauseBtn);
		assetsToLoad.push(pauseBtn);
		assetsToLoad.push(menuP);

		assetsToLoad.push(background);
		assetsToLoad.push(bGAnim);
		assetsToLoad.push(ui_box);
		assetsToLoad.push(gameOver);
		
	//}


}


function LoadSound() {//sonido
	//sonido
	
	sound.click = new Audio(sfx.click);
	sound.click.addEventListener("loadedmetadata", loadHandler, false);
	assetsToLoad.push(sound.song);

	sound.keyboard = new Audio(sfx.keyboard);
	sound.keyboard.addEventListener("loadedmetadata", loadHandler, false);
	assetsToLoad.push(sound.keyboard);

	sound.lifeDown = new Audio(sfx.lifeDown);
	sound.lifeDown.addEventListener("loadedmetadata", loadHandler, false);
	assetsToLoad.push(sound.lifeDown);

	sound.lifeDown2 = new Audio(sfx.lifeDown2);
	sound.lifeDown2.addEventListener("loadedmetadata", loadHandler, false);
	assetsToLoad.push(sound.lifeDown2);

	sound.lifeUp = new Audio(sfx.lifeUp);
	sound.lifeUp.addEventListener("loadedmetadata", loadHandler, false);
	assetsToLoad.push(sound.lifeUp);

	sound.lifeUp2 = new Audio(sfx.lifeUp2);
	sound.lifeUp2.addEventListener("loadedmetadata", loadHandler, false);
	assetsToLoad.push(sound.lifeUp2);

	sound.gameOver1 = new Audio(sfx.gameOver1);
	sound.gameOver1.addEventListener("loadedmetadata", loadHandler, false);
	assetsToLoad.push(sound.gameOver1);

	sound.gameOver2 = new Audio(sfx.gameOver2);
	sound.gameOver2.addEventListener("loadedmetadata", loadHandler, false);
	assetsToLoad.push(sound.gameOver2);

    //musica

    sound.music = new Audio(sfx.music);
	sound.music.addEventListener("loadedmetadata", loadHandler, false);
	assetsToLoad.push(sound.music);
    
    

//loadedmetadata / canplaythrough

	    


}

function stopMusic(music){
	music.pause();
	music.currentTime=0;
}