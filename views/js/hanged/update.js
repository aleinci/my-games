var canvas= document.getElementById("canvas");
var ctx= canvas.getContext("2d");
let state="open";

let img={
	keyboard:srcImg + "keyboard.png",
	anim:srcImg + "anim2.png",
	animFX:srcImg + "victoryFX.png",
	mMenuBtn:srcImg + "btnMmenu.png",
	mPauseBtn:srcImg + "btnMpause.png",
	pauseBtn:srcImg + "btnPause.png",
	barMenu:srcImg + "barMenu3.png",
	menuP:srcImg + "menuP.png",
	background:srcImg + "background.png",
	bGAnim:srcImg + "bgAnim.png",
	ui_box:srcImg + "ui_box.png",
	gameOver:srcImg + "gameOver.png",
}
let sfx ={
	click:srcSfx + "click.mp3",
	keyboard:srcSfx + "keyboard.mp3",
	
	lifeUp:srcSfx + "lifeUp.mp3",
	lifeDown:srcSfx + "lifeDown.mp3",

	lifeUp2:srcSfx + "lifeUp2.mp3",
	lifeDown2:srcSfx + "lifeDown2.mp3",

	gameOver1:srcSfx + "gameOver1.mp3",
	gameOver2:srcSfx + "gameOver2.mp3",
	music:srcSfx + "bensound-perception.mp3",
}

let scene={
	menuM:true,
	credits:false,
	pause:false,
	gaming:false,
}

let maxfps = 60 ;
let fpsBox={
	x:0,
	y:0,
	width:130,
	height:35,
	move:false,
	on:false,
}

let frameCount = 0,
    currentFps = 0,
    drawInterval = 1 / maxfps * 1000,
    lastFps = new Date().getTime();

function Start() {
	
	

	LoadImage();
	LoadSound();



	var interval=setInterval(Update,drawInterval);
}


function Update()
{
	if(state=="open"){
		if (assetsLoaded === assetsToLoad.length ) {
			ctx.save();
			//ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.restore();

			//if (mouse) {mover--;}
			//else{mover++;}
			


			if(scene.gaming)
			{
				ctx.save();
			ctx.fillStyle="#d18fff";
			ctx.fillRect(0,0,canvas.width,canvas.height);
			ctx.restore();

				gameplay();
			}
			if (scene.pause) 
			{
				pauseMenu();
			}
			if (scene.menuM) 
			{
				ctx.save();
				ctx.drawImage(background,0,0,canvas.width,canvas.height);
				ctx.restore();
				drawBgAnim();

				menuMn();
				
			}

			if (scene.credits) 
			{
				ctx.save();
				ctx.drawImage(background,0,0,canvas.width,canvas.height);
				ctx.restore();
				drawBgAnim();
				Credits();
			}

			btnSceneChange();
			
			if (fpsBox.on) {frameRate();}
		}else
		{
			LoadingScreen();
		}
	}
}

function frameRate(){
	// Calculamos el tiempo desde el último frame.
	var thisFrame = new Date().getTime(),
        diffTime = Math.ceil((thisFrame - lastFps));
 
    if (diffTime >= 1000) {
      currentFps = frameCount;
      frameCount = 0.0;
      lastFps = thisFrame;
    }
 
    frameCount++;

    let lx=10;
    let ly=25;

    ctx.save();
    ctx.globalAlpha=0.3;
    ctx.fillStyle = '#000';
    ctx.fillRect(fpsBox.x, fpsBox.y,fpsBox.width,fpsBox.height);
    ctx.restore();

    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText( 'FPS: ' + currentFps + '/' + maxfps, lx+fpsBox.x, ly + fpsBox.y );
    ctx.restore();

    if (cX> fpsBox.x &&
    	cX < fpsBox.x+ fpsBox.width &&
    	cY> fpsBox.y &&
    	cY < fpsBox.y+ fpsBox.height && mouse) {fpsBox.move=true;}

    if (fpsBox.move && mouse) {fpsBox.x=cX; fpsBox.y=cY;}
	else{fpsBox.move=false;}
}

window.onblur = function() {
  state="close";
  stopMusic(sound.music)
  if (scene.gaming) {
  	scene.gaming=false;
  	scene.pause=true;
  }
}
window.onfocus = function() {
   state="open";
}



mouseAG();
Start();
