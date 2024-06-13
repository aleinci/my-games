var assetsToLoad = [],
    assetsLoaded = 0;


var transci = 1;


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
	var position = 0;

	ctx.save();


	ctx.fillStyle = "black";
	ctx.fillRect(0,0,canvas.width, canvas.height);
	ctx.drawImage(ifondo,0,0,canvas.width, canvas.height);


	ctx.drawImage(ibar, 0, 0, ibar.width, ibar.height/2, 
		canvas.width/2-200, canvas.height/2-10+ position, 400, 70)

	ctx.drawImage(ibar, 0, ibar.height/2, assetsLoaded/assetsToLoad.length*(ibar.width), ibar.height/2, 
		canvas.width/2-200, canvas.height/2-10+ position, assetsLoaded/assetsToLoad.length*(400), 70);
	

	ctx.restore();

	ctx.save();
	ctx.fillStyle="white";
	ctx.font = '20pt Impact';
	ctx.textAlign = "center";
	
	
	ctx.fillStyle="black";
	ctx.fillText("Loading", canvas.width/2+2, canvas.height/2-15+2+ position );
	ctx.fillText(Math.floor(assetsLoaded/assetsToLoad.length*(100)) + "%", canvas.width/2+2, canvas.height/2+37+2+ position)
	
	ctx.fillStyle="white";
	ctx.fillText("Loading", canvas.width/2, canvas.height/2-15+ position );
	ctx.fillText(Math.floor(assetsLoaded/assetsToLoad.length*(100)) + "%", canvas.width/2, canvas.height/2+37 + position);
	ctx.restore();
	
}


function loadHandler() {//script de carga	
	//if (mMenu) {
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
	ifondo = new Image();
	ifondo.src = srcImg + "ifondo.png";

	ibar = new Image();
	ibar.src = srcImg + "progress-bar.png";

	fondo = new Image();
	fondo.src = srcImg + "space.jpg";

	abcd = new Image();
	abcd.src = srcImg + "game/abcd.png";

	public = new Image();
	public.src = srcImg + "game/public.png";

	public2 = new Image();
	public2.src = srcImg + "game/public2.png";

	textBox = new Image();
	textBox.src = srcImg + "game/cajaTexto.png";

	heart = new Image();
	heart.src = srcImg + "game/heart.png";

	hudI = new Image();
	hudI.src = srcImg + "game/hud.png";

	hudTextI = new Image();
	hudTextI.src = srcImg + "game/hudTexto.png";

	pausePlay = new Image();
	pausePlay.src = srcImg + "game/pausa boton.png";

	coachteen = new Image();
	coachteen.src = srcImg + "game/coachteen.png";

	confeti = new Image();
	confeti.src = srcImg + "win_lose/animacion conf.png";

	light = new Image();
	light.src = srcImg + "win_lose/luz.png";

	score = new Image();
	score.src = srcImg + "win_lose/score.png";

	lvlBox = new Image();
	lvlBox.src = srcImg + "win_lose/lvl.png";

	lvlH = new Image();
	lvlH.src = srcImg + "game/hLvl.png";

	lifeBox = new Image();
	lifeBox.src = srcImg + "win_lose/life.png";

	circl = new Image();
	circl.src = srcImg + "menu/circle.png";

	btMenu = new Image();
	btMenu.src = srcImg + "menu/simple/playBtn.png";

	mCredits = new Image();
	mCredits.src = srcImg + "menu/menuCreditos.png";

	btPause = new Image();
	btPause.src = srcImg + "pause/pauseBtn.png";

	menuPause = new Image();
	menuPause.src = srcImg + "pause/menuPause.png";


	infoX = new Image();
	infoX.src = srcImg + "X.png";




	//if (mMenu) {
		ifondo.addEventListener("load", loadHandler, false);
		ibar.addEventListener("load", loadHandler, false);
		fondo.addEventListener("load", loadHandler, false);
		abcd.addEventListener("load", loadHandler, false);
		public.addEventListener("load", loadHandler, false);
		public2.addEventListener("load", loadHandler, false);
		textBox.addEventListener("load", loadHandler, false);
		heart.addEventListener("load", loadHandler, false);
		hudI.addEventListener("load", loadHandler, false);
		hudTextI.addEventListener("load", loadHandler, false);
		pausePlay.addEventListener("load", loadHandler, false);
		coachteen.addEventListener("load", loadHandler, false);
		confeti.addEventListener("load", loadHandler, false);
		light.addEventListener("load", loadHandler, false);
		score.addEventListener("load", loadHandler, false);
		lvlBox.addEventListener("load", loadHandler, false);
		lvlH.addEventListener("load", loadHandler, false);
		lifeBox.addEventListener("load", loadHandler, false);
		circl.addEventListener("load", loadHandler, false);
		btMenu.addEventListener("load", loadHandler, false);
		mCredits.addEventListener("load", loadHandler, false);
		btPause.addEventListener("load", loadHandler, false);
		menuPause.addEventListener("load", loadHandler, false);
		infoX.addEventListener("load", loadHandler, false);
		


		assetsToLoad.push(ifondo);
		assetsToLoad.push(ibar);
		assetsToLoad.push(fondo);
		assetsToLoad.push(abcd);
		assetsToLoad.push(public);
		assetsToLoad.push(public2);
		assetsToLoad.push(textBox);
		assetsToLoad.push(heart);
		assetsToLoad.push(hudI);
		assetsToLoad.push(hudTextI);
		assetsToLoad.push(pausePlay);
		assetsToLoad.push(coachteen);
		assetsToLoad.push(confeti);
		assetsToLoad.push(light);
		assetsToLoad.push(score);
		assetsToLoad.push(lvlBox);
		assetsToLoad.push(lvlH);
		assetsToLoad.push(lifeBox);
		assetsToLoad.push(circl);
		assetsToLoad.push(btMenu);
		assetsToLoad.push(mCredits);
		assetsToLoad.push(btPause);
		assetsToLoad.push(menuPause);
		assetsToLoad.push(infoX);
		
	//}


}


function LoadSound() {//sonido

	//sfx
	sfCorrect = new Audio(srcSfx + "correct.mp3");

	sfIncorrect = new Audio(srcSfx + "incorrect.mp3");

	sfGameOver = new Audio(srcSfx + "gameOver.mp3");
	sfNewRecord = new Audio(srcSfx + "newRecord.mp3");

	boo = new Audio(srcSfx + "boo.mp3");
	applause = new Audio(srcSfx + "applause.mp3");

	sTime = new Audio(srcSfx + "tictoc.mp3");
	sTime1 = new Audio(srcSfx + "tictocx2.mp3");
	sTime2 = new Audio(srcSfx + "tictocx3.mp3");
	sTime3 = new Audio(srcSfx + "tictocx4.mp3");
	click1 = new Audio(srcSfx + "click1.mp3");
	click2 = new Audio(srcSfx + "click2.mp3");

    //music
    music1 = new Audio(srcMsc + "bensound-theelevatorbossanova.mp3");
    suspense = new Audio(srcMsc + "suspense.mp3");
    
  

//loadedmetadata / canplaythrough
    //if (mMenu) {
	    sfCorrect.addEventListener("loadedmetadata", loadHandler, false);
	    sfIncorrect.addEventListener("loadedmetadata", loadHandler, false);
	    sfGameOver.addEventListener("loadedmetadata", loadHandler, false);
	    sfNewRecord.addEventListener("loadedmetadata", loadHandler, false);
	    boo.addEventListener("loadedmetadata", loadHandler, false);
	    applause.addEventListener("loadedmetadata", loadHandler, false);
	    sTime.addEventListener("loadedmetadata", loadHandler, false);
	    sTime1.addEventListener("loadedmetadata", loadHandler, false);
	    sTime2.addEventListener("loadedmetadata", loadHandler, false);
	    sTime3.addEventListener("loadedmetadata", loadHandler, false);
	    click1.addEventListener("loadedmetadata", loadHandler, false);
	    click2.addEventListener("loadedmetadata", loadHandler, false);

	    music1.addEventListener("loadedmetadata", loadHandler, false);
	    suspense.addEventListener("loadedmetadata", loadHandler, false);
	   

	    assetsToLoad.push(sfCorrect);
	    assetsToLoad.push(sfIncorrect);
	    assetsToLoad.push(sfGameOver);
	    assetsToLoad.push(sfNewRecord);
	    assetsToLoad.push(boo);
	    assetsToLoad.push(applause);
	    assetsToLoad.push(sTime);
	    assetsToLoad.push(sTime1);
	    assetsToLoad.push(sTime2);
	    assetsToLoad.push(sTime3);
	    assetsToLoad.push(click1);
	    assetsToLoad.push(click2);

	    assetsToLoad.push(music1);
	    assetsToLoad.push(suspense);
	   
	//}

}

function stopMusic(music){
	music.pause();
	music.currentTime=0;
}