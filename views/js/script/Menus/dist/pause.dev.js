"use strict";

var salir = {
  x: canvas.width / 2 - 100 / 2 - 110,
  y: canvas.height / 2 + 50,
  width: 120,
  height: 100
};
var continued = {
  x: canvas.width / 2 - 100 / 2 + 110,
  y: canvas.height / 2 + 50,
  width: 120,
  height: 100
};
var startBtn = {
  x: canvas.width - 50 - 5,
  y: 5,
  width: 50,
  height: 50
};

function pausaBoton() {
  ctx.save();
  ctx.fillStyle = "red";

  if (cX > startBtn.x && // boton de pausa
  cX < startBtn.x + startBtn.width && cY > startBtn.y && cY < startBtn.y + startBtn.height && play.estado == "vivo") {
    paused = !paused;
    ctx.drawImage(reanudar, startBtn.x, startBtn.y, startBtn.width, startBtn.height); //imagen de reanudar
  } else {
    ctx.drawImage(start, startBtn.x, startBtn.y, startBtn.width, startBtn.height); //imagen de pausa
  }

  ctx.restore();
}

function pausa() {
  ctx.save();
  ctx.fillStyle = "red";
  ctx.drawImage(pauseI, canvas.width / 2 - pauseI.width / 2, canvas.height / 2 - pauseI.height / 2, pauseI.width, pauseI.height); // pausa
  //	ctx.fillRect( continued.x, continued.y, continued.width-10, continued.height-10);// reanudar
  //	ctx.fillRect( salir.x, salir.y, salir.width, salir.height);// salir

  ctx.drawImage(btnPausa, 0, 0, btnPausa.width / 2, btnPausa.height / 2, continued.x, continued.y, continued.width - 10, continued.height - 10); // reanudar

  ctx.drawImage(btnPausa, 0, btnPausa.height / 2, btnPausa.width / 2, btnPausa.height / 2, salir.x, salir.y, salir.width, salir.height); // salir

  ctx.restore();

  if (cX > salir.x && //boton de salir
  cX < salir.x + salir.width && cY > salir.y && cY < salir.y + salir.height) {
    reinicio();
    mMenu = !mMenu;
    paused = !paused;
  }

  if (cX > continued.x && // boton de reanudar
  cX < continued.x + continued.width && cY > continued.y && cY < continued.y + continued.height) {
    paused = !paused; //cuentaRegre = true;
  }
  /*if (cuentaRegre) 
  {
  	contadorPausa();
  }*/

}
/*
var cuentaRe = 180;
var cuentaRegre = false;
function contadorPausa() 
{
	cuentaRe--;

	ctx.save();
	ctx.font = "55pt Impact";
	ctx.textAlign = "center";
	ctx.fillStyle = "white";
	ctx.fillText(cuentaRe, canvas.width/2 ,canvas.height/2 );//PUNTOS
	ctx.restore();

	if (cuentaRe <= 0) {
		cuentaRe = 180;
		paused = !paused;
		cuentaRegre = false;
		
	}
}*/