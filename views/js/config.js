var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var fondo;
var teclado=[];

var playing = false;
var movingB = 0;
var movingB2 = 0;

var maxfps = 60 ;

var frameCount = 0,
    currentFps = 0,
    drawInterval = 1 / maxfps * 1000,
    lastFps = new Date().getTime();


function loadMedia() {

	
	LoadImage();
	LoadSound();



	fondo.onload = function(){


		var intervalo=window.setInterval(frameLoop,drawInterval);

		//var intervaloObj=window.setInterval(obst,5000);

	}
	
}

function dibujarFondo(){
	ctx.save();
	//ctx.globalAlpha = 0.1;
	bgMap();
	ctx.restore();
	//ctx.drawImage(fondo2,0 + moverF,0);
	//ctx.drawImage(fondo,0,0,canvas.width*1.5,canvas.height-20,moverF,0,3392,1000);
}
ctx.ImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;

var mMenu = true;
var paused = false;


function frameLoop(){
	

	if (exp.currentTime>0.6){exp.currentTime=0.1;}

	//if (teclado[39]) {paused = !paused;}
	if (assetsLoaded === assetsToLoad.length ) {
		
		if (paused) 
		{
			pausa();
			exp.pause();
			return;
		}

		if (mMenu)
		{
			mainMenu();

			if (actCredits) {creditosFT();}
			
			cellRes();//celular resolucion
			transicion();//trancicion de la pantalla de carga al menu
			//LoadingScreen();
			return;
		}
		
		movingB-= velocityO/2;
		if (movingB<= -map1.width && play.estado == "vivo") {movingB = 0}
		allMaps();
		allPlayer();

		allObstacles();
		HUD();
		menu();
		pausaBoton();
	}else{
		if (mMenu) {
			LoadingScreen();
		}
	}

	frameRate();
}

function tecladoAG(e){

	agregarTeclado(document,"keydown",function(e){
		teclado[e.keyCode]=true;
		
		//alert(e.keyCode);
	})

	agregarTeclado(document,"keyup",function(e){
		teclado[e.keyCode]=false;
	})

	function agregarTeclado(elemento, nombreEvento, funcion){
		if (elemento.addEventListener) {

			elemento.addEventListener(nombreEvento,funcion,false);

		}else if (elemento.attachEvent) {

			elemento.attachEvent(nombreEvento,funcion);

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




    ctx.save();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText( 'FPS: ' + currentFps + '/' + maxfps, 10, 15 );
    ctx.restore();
}








tecladoAG();
loadMedia();