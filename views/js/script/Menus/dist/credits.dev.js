"use strict";

var crMoving = 0;
var crImg = 0;
var actCredits = false;
var tst = 0; //transicion

var tstA = false;
var tstB = false;
var starCdt = true;
var ipY = 150,
    icY = 150,
    idY = 320;
var iPMv = 0,
    iCMv = 0,
    iDMv = 0;
var creditsQt = {
  x: canvas.width - 45,
  y: 5,
  width: 40,
  height: 40
};

function creditosFT() {
  //moviendo texto
  iPMv += 2;
  iCMv += 2;
  iDMv += 2;
  ipY += Math.cos(iPMv * Math.PI / 90) * 1;
  icY += Math.cos(iCMv * Math.PI / 90) * 1;
  idY += Math.cos(iDMv * Math.PI / 90) * 1;

  if (starCdt) {
    crImg = Math.floor(Math.random() * 10);
  }

  starCdt = false;

  if (crMoving <= -map1.width) {
    crMoving = 0;
    tstB = false;
    tstA = true;
  }

  if (tstA) {
    randomImgTransition();
  }

  crMoving -= 4; //imagen

  ctx.save();
  ImgCredits();
  ctx.restore(); //transicion

  ctx.save();
  ctx.globalAlpha = tst;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.globalAlpha = 0.3;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore(); //texto

  ctx.save(); //   IMG           X                 Y    WIDTH  HEIGHT

  ctx.drawImage(iCredits, canvas.width / 2 - 100, 5, 200, 70);
  ctx.drawImage(iProgram, canvas.width / 2 - 100 - 200, ipY, 200, 70);
  ctx.drawImage(iCompM, canvas.width / 2 - 100 + 200, icY, 200, 70);
  ctx.drawImage(iDesign, canvas.width / 2 - 200, idY, 400, 120);
  ctx.drawImage(iQuitC, creditsQt.x, creditsQt.y, creditsQt.width, creditsQt.height);
  ctx.restore();

  if (cX > creditsQt.x && cX < creditsQt.x + creditsQt.width && cY > creditsQt.y && cY < creditsQt.y + creditsQt.height && mouse && actCredits) {
    actCredits = false;
  }
}

function randomImgTransition() {
  if (!tstB) {
    tst += 0.1;
  } else {
    tst -= 0.1;
  }

  if (tst >= 1) {
    tstB = true;
    crImg = Math.floor(Math.random() * 10);
  }

  if (tst < 0) {
    tstA = false;
    tst = 0;
  }
}

function ImgCredits() {
  switch (crImg) {
    case 0:
      ctx.drawImage(map0, 0, 0, map1.width, map1.height, 0 + crMoving, 0, map1.width, canvas.height);
      ctx.drawImage(map0, 0, 0, map1.width, map1.height, map1.width + crMoving, 0, map1.width, canvas.height);
      break;

    case 1:
      ctx.drawImage(map1, 0, 0, map1.width, map1.height, 0 + crMoving, 0, map1.width, canvas.height);
      ctx.drawImage(map1, 0, 0, map1.width, map1.height, map1.width + crMoving, 0, map1.width, canvas.height);
      break;

    case 2:
      ctx.drawImage(map2, 0, 0, map1.width, map1.height, 0 + crMoving, 0, map1.width, canvas.height);
      ctx.drawImage(map2, 0, 0, map1.width, map1.height, map1.width + crMoving, 0, map1.width, canvas.height);
      break;

    case 3:
      ctx.drawImage(map3, 0, 0, map1.width, map1.height, 0 + crMoving, 0, map1.width, canvas.height);
      ctx.drawImage(map3, 0, 0, map1.width, map1.height, map1.width + crMoving, 0, map1.width, canvas.height);
      break;

    case 4:
      ctx.drawImage(map4, 0, 0, map1.width, map1.height, 0 + crMoving, 0, map1.width, canvas.height);
      ctx.drawImage(map4, 0, 0, map1.width, map1.height, map1.width + crMoving, 0, map1.width, canvas.height);
      break;

    case 5:
      ctx.drawImage(map5, 0, 0, map1.width, map1.height, 0 + crMoving, 0, map1.width, canvas.height);
      ctx.drawImage(map5, 0, 0, map1.width, map1.height, map1.width + crMoving, 0, map1.width, canvas.height);
      break;

    case 6:
      ctx.drawImage(map6, 0, 0, map1.width, map1.height, 0 + crMoving, 0, map1.width, canvas.height);
      ctx.drawImage(map6, 0, 0, map1.width, map1.height, map1.width + crMoving, 0, map1.width, canvas.height);
      break;

    case 7:
      ctx.drawImage(map7, 0, 0, map1.width, map1.height, 0 + crMoving, 0, map1.width, canvas.height);
      ctx.drawImage(map7, 0, 0, map1.width, map1.height, map1.width + crMoving, 0, map1.width, canvas.height);
      break;

    case 8:
      ctx.drawImage(map8, 0, 0, map1.width, map1.height, 0 + crMoving, 0, map1.width, canvas.height);
      ctx.drawImage(map8, 0, 0, map1.width, map1.height, map1.width + crMoving, 0, map1.width, canvas.height);
      break;

    case 9:
      ctx.drawImage(map9, 0, 0, map1.width, map1.height, 0 + crMoving, 0, map1.width, canvas.height);
      ctx.drawImage(map9, 0, 0, map1.width, map1.height, map1.width + crMoving, 0, map1.width, canvas.height);
      break;

    default:
      ctx.drawImage(map0, 0, 0, map1.width, map1.height, 0 + crMoving, 0, map1.width, canvas.height);
      ctx.drawImage(map0, 0, 0, map1.width, map1.height, map1.width + crMoving, 0, map1.width, canvas.height);
  }
}