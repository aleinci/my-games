var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var fondo;
var url = "";
let state="open";

var maxfps = 30;

var frameCount = 0,
    currentFps = 0,
    drawInterval = 1 / maxfps * 1000,
    lastFps = new Date().getTime();


function loadMedia() 
{
	
	

	LoadImage();
	LoadSound();
	

	fondo.onload = function()
	{

		var interval=window.setInterval(function(){
			if (time && seg>0 && gaming && !noPlay) {seg--;}

			if (totalTimeAct) {
				totalTimes();
			}
			
		},1000);
		
		var intervalo=window.setInterval(frameLoop,drawInterval);
	}
}


function dibujarFondo()
{
	ctx.save();
	ctx.fillStyle="blue";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	//ctx.drawImage(fondo,0,0,canvas.width,canvas.height);
	ctx.restore();
}


function frameLoop()
{
	
	if(state=="open"){

		if (assetsLoaded === assetsToLoad.length ) {
		
			if (!mouse && clickCount>0) {
				clickCount=0;
			}


			if(gaming){
				//dibujarFondo();
				lvlScript();
				gamePlay();
				media();
				hud();

				lvlScene();
			}



			if (start) {
				menu();

			}
			
			
			if (menuM) {
				if (!credit) {MainMenu();}
				else{credits();}
				transicion();
			}

		}else{
			LoadingScreen();
		}

		//cambio de escena
		btnSceneChange();

		//frameRate();
	}
}




var totalTimeAct= false;
var tSeg =0;
var tMin =0;
var tSmD ="0";
var totalT;

function totalTimes(){
	
	if (tSeg<10-1) {
		tSmD="0";
	}else{
		tSmD ="";
	}

	if (tSeg < 60-1) {
		tSeg++;
	}
	else{
		tSeg=0;
		tMin++;
		tSmD ="0";
	}

	totalT = tMin + ":" + tSmD + tSeg;
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




    ctx.save();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText( 'FPS: ' + currentFps + '/' + maxfps, 10, 15 );
    ctx.restore();
}


mouseAG();
loadMedia();


window.onblur = function() {
  state="close";
  stopMusic(music1);
  stopMusic(sTime);
  stopMusic(sTime3);
  stopMusic(sTime2);
  stopMusic(sTime1);
  stopMusic(applause);
  stopMusic(boo);
  if (gaming) {
  	gaming=false;
  	start=true;
  }
}
window.onfocus = function() {
   state="open";
}