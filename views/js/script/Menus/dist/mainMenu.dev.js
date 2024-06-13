"use strict";

var btnPlay = {
  x: canvas.width / 2 - 224 / 2,
  y: canvas.height / 2 - 80 / 2,
  width: 224,
  height: 100
};
var btnUp = {
  // boton vehiculo
  x: canvas.width / 2 - 250,
  y: canvas.height / 2 - 60 / 2 - 60,
  width: 60,
  height: 50,
  pos: 0
};
var vehicle = {
  //imagen del vehiculo
  x: canvas.width / 2 - 250,
  y: canvas.height / 2 - 60 / 2,
  width: 60,
  height: 60
};
var btnDown = {
  // boton vehiculo
  x: canvas.width / 2 - 250,
  y: canvas.height / 2 - 60 / 2 + 70,
  width: 60,
  height: 50,
  pos: 0
};
var btnUpM = {
  // boton mapa
  x: canvas.width / 2 + 180,
  y: canvas.height / 2 - 60 / 2 - 60,
  width: 60,
  height: 50,
  pos: 0
};
var maps = {
  //imagen del mapa
  x: canvas.width / 2 + 180,
  y: canvas.height / 2 - 60 / 2,
  width: 60,
  height: 60
};
var btnDownM = {
  // boton mapa
  x: canvas.width / 2 + 180,
  y: canvas.height / 2 - 60 / 2 + 70,
  width: 60,
  height: 50,
  pos: 0
};
var btCredit = {
  x: 5,
  y: canvas.height - 75,
  width: 100,
  height: 70
};
var btLeader = {
  x: canvas.width - 105,
  y: canvas.height - 75,
  width: 100,
  height: 70,
  link: ""
};
var btCTG = {
  x: canvas.width / 2 - 50,
  y: canvas.height - 75,
  width: 100,
  height: 70,
  link: "https://games.coachteen.academy/gamepage"
};
var contadorV = false; //solo si el true se preciona el boton

var vehicleN = 0; //numero del vehiculo

var contadorM = false; //solo si el true se preciona el boton

var mapN = 0; //numero del mapa

var plg = 0; //animacion del boton PLAY

var user = document.getElementById("userN").innerHTML; //detectar usuario

var user2 = document.getElementById("userN2").innerHTML; //usuario nuevo

function mainMenu() {
  ctx.save(); //FONDO

  bgMap();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "red"; //ctx.fillRect(btnPlay.x, btnPlay.y, btnPlay.width, btnPlay.height);

  ctx.fillStyle = 'white';
  ctx.font = '18pt Small Fonts';
  ctx.textAlign = "center"; //ctx.fillText('PLAY', canvas.width/2, canvas.height/2);

  ctx.drawImage(playB, playB.width / 2 * plg, 0, playB.width / 2, playB.height, btnPlay.x, btnPlay.y, btnPlay.width, btnPlay.height);
  ctx.restore();

  if (cX > btnPlay.x && cX < btnPlay.x + btnPlay.width && cY > btnPlay.y && cY < btnPlay.y + btnPlay.height && mouse == true && actCredits == false) {
    plg = 1;
  } else if (plg == 1 && !mouse) {
    plg = 0;
    reinicio();
    mMenu = !mMenu;
  }

  selectVehicle();
  selectMap();
  /*
  	ctx.save();//******************* CUADRADO NEGRO... BORRAR AL FINAL
  	ctx.fillStyle = "black";
  	ctx.fillRect(mMouse.x, mMouse.y, mMouse.width, mMouse.height);
  	ctx.restore();
  */
  //mostrar usuario

  /*
  ctx.save();
  ctx.drawImage(nameBox, 0, 0, 170, 50);
  ctx.font = "18px Impact";
  ctx.fillStyle = "black";
  
  if (user=="") {
  	ctx.fillText("Account: "+user2, 6, 31);
  	ctx.fillStyle = "yellow";
  	ctx.fillText("Account: "+user2, 5, 30);
  }else{
  	ctx.fillText("Account: "+user, 6, 31);
  	ctx.fillStyle = "yellow";
  	ctx.fillText("Account: "+user, 5, 30);
  }
  
  ctx.restore();
  */
}

function selectVehicle() {
  x = 150;
  y = 94;
  width = 150;
  height = 94;
  ctx.save();
  ctx.fillStyle = "blue";
  ctx.drawImage(sMapColor, sMapColor.width / 2, 0, sMapColor.width / 2, sMapColor.height, vehicle.x - 150 / 4, vehicle.y - 150, 150, 70); //SELECT COLOR

  carrito();
  ctx.drawImage(bordeSel, vehicle.x, vehicle.y, vehicle.width, vehicle.height);
  ctx.drawImage(btnflechas, x * btnUp.pos, y * 0, width, height, btnUp.x, btnUp.y, btnUp.width, btnUp.height);
  ctx.drawImage(btnflechas, x * btnDown.pos, y, width, height, btnDown.x, btnDown.y, btnDown.width, btnDown.height);
  ctx.restore();
  mMenuButtons();
}

function mMenuButtons() {
  if (cX > btnUp.x && cX < btnUp.x + btnUp.width && cY > btnUp.y && cY < btnUp.y + btnUp.height && mouse == true && actCredits == false) {
    btnUp.pos = 1;

    if (!contadorV && vehicleN < 9) {
      pts.play();
      vehicleN++;
      contadorV = true;
    }
  } else {
    btnUp.pos = 0;
  }

  if (cX > btnDown.x && cX < btnDown.x + btnDown.width && cY > btnDown.y && cY < btnDown.y + btnDown.height && mouse == true && actCredits == false) {
    if (!contadorV && vehicleN > 0) {
      pts.play();
      vehicleN--;
      contadorV = true;
    }

    btnDown.pos = 1;
  } else {
    btnDown.pos = 0;
  }

  if (mouse == false) {
    contadorV = false;
  } //botones de mapas  *************************************************


  if (cX > btnUpM.x && cX < btnUpM.x + btnUpM.width && cY > btnUpM.y && cY < btnUpM.y + btnUpM.height && mouse == true && actCredits == false) {
    btnUpM.pos = 1;

    if (!contadorM && mapN < 9) {
      pts.play();
      mapN++;
      contadorM = true;
    }
  } else {
    btnUpM.pos = 0;
  }

  if (cX > btnDownM.x && cX < btnDownM.x + btnDownM.width && cY > btnDownM.y && cY < btnDownM.y + btnDownM.height && mouse == true && actCredits == false) {
    if (!contadorM && mapN > 0) {
      pts.play();
      mapN--;
      contadorM = true;
    }

    btnDownM.pos = 1;
  } else {
    btnDownM.pos = 0;
  }

  if (mouse == false) {
    contadorM = false;
  } //BOTONES CREDITOS, PUNTOS Y REGRESAR PAG


  ctx.save();
  ctx.drawImage(btnCredit, btCredit.x, btCredit.y, btCredit.width, btCredit.height);
  ctx.drawImage(btnCTG, btCTG.x, btCTG.y, btCTG.width, btCTG.height);
  ctx.drawImage(btnLeader, btLeader.x, btLeader.y, btLeader.width, btLeader.height);
  ctx.restore();

  if (cX > btCTG.x && cX < btCTG.x + btCTG.width && cY > btCTG.y && cY < btCTG.y + btCTG.height && mouse == true && actCredits == false) {
    window.location = btCTG.link;
  }

  if (cX > btCredit.x && cX < btCredit.x + btCredit.width && cY > btCredit.y && cY < btCredit.y + btCredit.height && mouse == true && actCredits == false) {
    actCredits = true;
    starCdt = true;
    iPMv = 0;
    iCMv = 0;
    iDMv = 0;
  }

  if (cX > btLeader.x && cX < btLeader.x + btLeader.width && cY > btLeader.y && cY < btLeader.y + btLeader.height && mouse == true && actCredits == false) {//console.log("leader");
  }
}

function carrito() {
  ctx.drawImage(nave, nave.width / 10 * vehicleN, 0, nave.width / 10, nave.height, vehicle.x, vehicle.y, vehicle.width, vehicle.height);
  /*switch(vehicleN)
  {
  	case 0:
  		ctx.drawImage(tank, vehicle.x, vehicle.y, vehicle.width, vehicle.height);
  	break;
  	case 1:
  		ctx.drawImage(nave, vehicle.x, vehicle.y, vehicle.width, vehicle.height);
  	break;
  	default:
  	ctx.drawImage(tank, vehicle.x, vehicle.y, vehicle.width, vehicle.height);
  }*/
}

function selectMap() {
  x = 150;
  y = 94;
  width = 150;
  height = 94;
  ctx.save();
  ctx.fillStyle = "blue";
  ctx.drawImage(sMapColor, 0, 0, sMapColor.width / 2, sMapColor.height, maps.x - 150 / 4, maps.y - 150, 150, 70); //SELECT MAP

  mapaS();
  ctx.drawImage(bordeSel, maps.x, maps.y, maps.width, maps.height);
  ctx.drawImage(btnflechas, x * btnUpM.pos, y * 0, width, height, btnUpM.x, btnUpM.y, btnUpM.width, btnUpM.height);
  ctx.drawImage(btnflechas, x * btnDownM.pos, y, width, height, btnDownM.x, btnDownM.y, btnDownM.width, btnDownM.height);
  ctx.restore();
  mMenuButtons();
}

function mapaS() {
  switch (mapN) {
    case 0:
      ctx.drawImage(map0, 84, 10, 180, 180, maps.x, maps.y, maps.width, maps.height);
      break;

    case 1:
      ctx.drawImage(map1, 0, 50, 400, 400, maps.x, maps.y, maps.width, maps.height);
      break;

    case 2:
      ctx.drawImage(map2, 0, 590, 400, 400, maps.x, maps.y, maps.width, maps.height);
      break;

    case 3:
      ctx.drawImage(map3, 0, 500, 400, 400, maps.x, maps.y, maps.width, maps.height);
      break;

    case 4:
      ctx.drawImage(map4, 0, 500, 400, 400, maps.x, maps.y, maps.width, maps.height);
      break;

    case 5:
      ctx.drawImage(map5, 0, 550, 400, 400, maps.x, maps.y, maps.width, maps.height);
      break;

    case 6:
      ctx.drawImage(map6, 0, 550, 400, 400, maps.x, maps.y, maps.width, maps.height);
      break;

    case 7:
      ctx.drawImage(map7, 100, 550, 380, 380, maps.x, maps.y, maps.width, maps.height);
      break;

    case 8:
      ctx.drawImage(map8, 50, 500, 180, 180, maps.x, maps.y, maps.width, maps.height);
      break;

    case 9:
      ctx.drawImage(map9, 0, 450, 400, 400, maps.x, maps.y, maps.width, maps.height);
      break;

    case 10:
      ctx.drawImage(fondo, maps.x, maps.y, maps.width, maps.height);
      break;

    default:
      ctx.drawImage(map0, maps.x, maps.y, maps.width, maps.height, maps.x, maps.y, maps.width, maps.height);
  }
}

function bgMap() {
  switch (mapN) {
    case 0:
      ctx.drawImage(map0, 0, 0, map1.width, map1.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(map0, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
      break;

    case 1:
      ctx.drawImage(map1, 0, 0, map1.width, map1.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(map1, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
      break;

    case 2:
      ctx.drawImage(map2, 0, 0, map1.width, map1.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(map2, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
      break;

    case 3:
      ctx.drawImage(map3, 0, 0, map1.width, map1.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(map3, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
      break;

    case 4:
      ctx.drawImage(map4, 0, 0, map1.width, map1.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(map4, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
      break;

    case 5:
      ctx.drawImage(map5, 0, 0, map1.width, map1.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(map5, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
      break;

    case 6:
      ctx.drawImage(map6, 0, 0, map1.width, map1.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(map6, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
      break;

    case 7:
      ctx.drawImage(map7, 0, 0, map1.width, map1.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(map7, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
      break;

    case 8:
      ctx.drawImage(map8, 0, 0, map1.width, map1.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(map8, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
      break;

    case 9:
      ctx.drawImage(map9, 0, 0, map1.width, map1.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(map9, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
      break;

    case 10:
      ctx.drawImage(fondo, 0, 0, fondo.width, fondo.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(fondo, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
      test();
      break;

    default:
      ctx.drawImage(map0, 0, 0, map1.width, map1.height, 0 + movingB, 0, map1.width, canvas.height);
      ctx.drawImage(map0, 0, 0, map1.width, map1.height, map1.width + movingB, 0, map1.width, canvas.height);
  }
} //solo opciones para el modo tester numero mapN = 10


var delay = 0;
var delayAct = false;
var actiG = "ON";

function test() {
  tx = canvas.width / 2 - 75;
  ty = 5;
  tw = 150;
  th = 75;
  ctx.save();
  ctx.fillStyle = "blue";
  ctx.fillRect(tx, ty, tw, th);
  ctx.fillStyle = "white";
  ctx.font = '18pt Small Fonts';
  ctx.textAlign = "center";
  ctx.fillText("gravity: " + actiG, tx + 75, ty + 37.5);
  ctx.restore();

  if (aGravity) {
    actiG = "ON";
  } else {
    actiG = "OFF";
    play.ang = 0;
  }

  if (delayAct && delay < 10) {
    delay++;
  } else {
    delay = 0;
    delayAct = false;
  }

  if (cX > tx && cX < tx + tw && cY > ty && cY < ty + th && delay == 0) {
    delayAct = true;
    aGravity = !aGravity;
  }
}