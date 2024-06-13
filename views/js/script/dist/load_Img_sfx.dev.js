"use strict";

var assetsToLoad = [],
    assetsLoaded = 0;
var transci = 1;

function transicion() {
  if (transci > 0) {
    transci -= 0.02;
  }

  if (transci < 0) {
    transci = 0;
  }

  ctx.save();
  ctx.globalAlpha = transci;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function recolor() {}

function LoadingScreen() {
  //pantalla de carga
  var color1 = ""; //darkcolor

  var color2 = ""; //normalcolor
  //cambiar color de la barra de carga

  if (assetsLoaded < assetsToLoad.length * 0.25) {
    color1 = "#FF0000";
    color2 = "#BB0000";
  }

  if (assetsLoaded >= assetsToLoad.length * 0.25 && assetsLoaded < assetsToLoad.length * 0.50) {
    color1 = "#BB9600";
    color2 = "#FFCD00";
  }

  if (assetsLoaded >= assetsToLoad.length * 0.50 && assetsLoaded < assetsToLoad.length * 0.75) {
    color1 = "#93BB00";
    color2 = "#C8FF00";
  }

  if (assetsLoaded >= assetsToLoad.length * 0.75) {
    color1 = "#30BB00";
    color2 = "#23FF00";
  }

  ctx.save();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "gray";
  ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 - 10, 200, 20);
  ctx.fillStyle = color1;
  ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 - 10, assetsLoaded / assetsToLoad.length * 200, 20);
  ctx.fillStyle = color2;
  ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 - 10, assetsLoaded / assetsToLoad.length * 200, 10);
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "white";
  ctx.font = '15pt Impact';
  ctx.textAlign = "center";
  ctx.fillText("Loading... ", canvas.width / 2, canvas.height / 2 - 20);
  ctx.fillStyle = "black";
  ctx.fillText(Math.floor(assetsLoaded / assetsToLoad.length * 100) + "%", canvas.width / 2 + 1, canvas.height / 2 + 9);
  ctx.fillStyle = "white";
  ctx.fillText(Math.floor(assetsLoaded / assetsToLoad.length * 100) + "%", canvas.width / 2, canvas.height / 2 + 8);
  ctx.fillText("Please wait", canvas.width / 2, canvas.height / 2 + 35);
  ctx.restore();
}

function loadHandler() {
  //script de carga	
  if (mMenu) {
    assetsLoaded++; //Display "Loading" in the console while assets are being loaded
    //console.log("Loading...");
    //If everthing is loaded, do this:

    if (assetsLoaded === assetsToLoad.length) {//Make the game play, possibly by changing its state from "loading" to "playing"
      //console.log("All assets loaded");
      //transci = 1;
    }
  }
}

function LoadImage() {
  //imagenes
  fondo = new Image();
  fondo.src = "views/img/Texture/space.jpg";
  energy = new Image();
  energy.src = "views/img/Texture/energy.png";
  nave = new Image();
  nave.src = "views/img/Texture/nv.png"; //pausa

  pauseI = new Image();
  pauseI.src = "views/img/Texture/pause/pause.png";
  start = new Image();
  start.src = "views/img/Texture/pause/btn-start.png";
  reanudar = new Image();
  reanudar.src = "views/img/Texture/pause/resume.png";
  exit = new Image();
  exit.src = "views/img/Texture/pause/exit.png";
  btnPausa = new Image();
  btnPausa.src = "views/img/Texture/pause/pause buttons.png"; //main menu

  playM = new Image();
  playM.src = "views/img/Texture/mainMenu/play.png";
  playB = new Image();
  playB.src = "views/img/Texture/mainMenu/playbtn.png";
  btnflechas = new Image();
  btnflechas.src = "views/img/Texture/mainMenu/arrows-btn.png";
  bordeSel = new Image();
  bordeSel.src = "views/img/Texture/mainMenu/bordeMap.png";
  sMapColor = new Image();
  sMapColor.src = "views/img/Texture/mainMenu/select C_M2.png";
  nameBox = new Image();
  nameBox.src = "views/img/Texture/mainMenu/nameBox2.png";
  btnCredit = new Image();
  btnCredit.src = "views/img/Texture/mainMenu/buttonCredits.png";
  btnCTG = new Image();
  btnCTG.src = "views/img/Texture/mainMenu/buttonCTG.png";
  btnLeader = new Image();
  btnLeader.src = "views/img/Texture/mainMenu/buttonLeader.png"; //game over

  gameO = new Image();
  gameO.src = "views/img/Texture/gameOver/Game Over.png";
  btnGO = new Image();
  btnGO.src = "views/img/Texture/gameOver/btnGO.png";
  sabias_q = new Image();
  sabias_q.src = "views/img/Texture/gameOver/You know what.png";
  sQuit = new Image();
  sQuit.src = "views/img/Texture/gameOver/Quit.png";
  menuScore = new Image();
  menuScore.src = "views/img/Texture/gameOver/score.png"; //mapas

  map0 = new Image();
  map0.src = "views/img/Texture/maps/background/FA 1-01.jpg";
  map1 = new Image();
  map1.src = "views/img/Texture/maps/background/FA 2-02.jpg";
  map2 = new Image();
  map2.src = "views/img/Texture/maps/background/FA 3-03.jpg";
  map3 = new Image();
  map3.src = "views/img/Texture/maps/background/FA 4-04.jpg";
  map4 = new Image();
  map4.src = "views/img/Texture/maps/background/FA 5-05.jpg";
  map5 = new Image();
  map5.src = "views/img/Texture/maps/background/FA 6-06.jpg";
  map6 = new Image();
  map6.src = "views/img/Texture/maps/background/FA 7-07.jpg";
  map7 = new Image();
  map7.src = "views/img/Texture/maps/background/FA 8-08.jpg";
  map8 = new Image();
  map8.src = "views/img/Texture/maps/background/FA 9-09.jpg";
  map9 = new Image();
  map9.src = "views/img/Texture/maps/background/FA 10-10.jpg"; //tubos

  tubo0 = new Image();
  tubo0.src = "views/img/Texture/maps/tubes/peaks 1-01.png";
  tubo1 = new Image();
  tubo1.src = "views/img/Texture/maps/tubes/Tubes 2-01.png";
  tubo2 = new Image();
  tubo2.src = "views/img/Texture/maps/tubes/Tubes 3-01.png";
  tubo3 = new Image();
  tubo3.src = "views/img/Texture/maps/tubes/Tubes 4-01.png";
  tubo4 = new Image();
  tubo4.src = "views/img/Texture/maps/tubes/peaks 1-01.png"; //como jugar

  jugar = new Image();
  jugar.src = "views/img/Texture/play.png"; //creditos

  iCredits = new Image();
  iCredits.src = "views/img/Texture/credits/credits.png";
  iProgram = new Image();
  iProgram.src = "views/img/Texture/credits/developer.png";
  iCompM = new Image();
  iCompM.src = "views/img/Texture/credits/musicCom.png";
  iDesign = new Image();
  iDesign.src = "views/img/Texture/credits/background.png";
  iQuitC = new Image();
  iQuitC.src = "views/img/Texture/credits/exitC.png";

  if (mMenu) {
    fondo.addEventListener("load", loadHandler, false);
    energy.addEventListener("load", loadHandler, false);
    nave.addEventListener("load", loadHandler, false);
    pauseI.addEventListener("load", loadHandler, false);
    start.addEventListener("load", loadHandler, false);
    reanudar.addEventListener("load", loadHandler, false);
    exit.addEventListener("load", loadHandler, false);
    btnPausa.addEventListener("load", loadHandler, false);
    playM.addEventListener("load", loadHandler, false);
    playB.addEventListener("load", loadHandler, false);
    btnflechas.addEventListener("load", loadHandler, false);
    bordeSel.addEventListener("load", loadHandler, false);
    sMapColor.addEventListener("load", loadHandler, false);
    gameO.addEventListener("load", loadHandler, false);
    btnGO.addEventListener("load", loadHandler, false);
    sabias_q.addEventListener("load", loadHandler, false);
    sQuit.addEventListener("load", loadHandler, false);
    menuScore.addEventListener("load", loadHandler, false);
    nameBox.addEventListener("load", loadHandler, false);
    btnCredit.addEventListener("load", loadHandler, false);
    btnCTG.addEventListener("load", loadHandler, false);
    btnLeader.addEventListener("load", loadHandler, false);
    map0.addEventListener("load", loadHandler, false);
    map1.addEventListener("load", loadHandler, false);
    map2.addEventListener("load", loadHandler, false);
    map3.addEventListener("load", loadHandler, false);
    map4.addEventListener("load", loadHandler, false);
    map5.addEventListener("load", loadHandler, false);
    map6.addEventListener("load", loadHandler, false);
    map7.addEventListener("load", loadHandler, false);
    map8.addEventListener("load", loadHandler, false);
    map9.addEventListener("load", loadHandler, false);
    tubo0.addEventListener("load", loadHandler, false);
    tubo1.addEventListener("load", loadHandler, false);
    tubo2.addEventListener("load", loadHandler, false);
    tubo3.addEventListener("load", loadHandler, false);
    tubo4.addEventListener("load", loadHandler, false);
    iCredits.addEventListener("load", loadHandler, false);
    iProgram.addEventListener("load", loadHandler, false);
    iCompM.addEventListener("load", loadHandler, false);
    iDesign.addEventListener("load", loadHandler, false);
    iQuitC.addEventListener("load", loadHandler, false);
    assetsToLoad.push(fondo);
    assetsToLoad.push(energy);
    assetsToLoad.push(nave);
    assetsToLoad.push(pauseI);
    assetsToLoad.push(start);
    assetsToLoad.push(reanudar);
    assetsToLoad.push(exit);
    assetsToLoad.push(btnPausa);
    assetsToLoad.push(playM);
    assetsToLoad.push(playB);
    assetsToLoad.push(btnflechas);
    assetsToLoad.push(bordeSel);
    assetsToLoad.push(sMapColor);
    assetsToLoad.push(gameO);
    assetsToLoad.push(btnGO);
    assetsToLoad.push(sabias_q);
    assetsToLoad.push(sQuit);
    assetsToLoad.push(menuScore);
    assetsToLoad.push(nameBox);
    assetsToLoad.push(btnCredit);
    assetsToLoad.push(btnCTG);
    assetsToLoad.push(btnLeader);
    assetsToLoad.push(map0);
    assetsToLoad.push(map1);
    assetsToLoad.push(map2);
    assetsToLoad.push(map3);
    assetsToLoad.push(map4);
    assetsToLoad.push(map5);
    assetsToLoad.push(map6);
    assetsToLoad.push(map7);
    assetsToLoad.push(map8);
    assetsToLoad.push(map9);
    assetsToLoad.push(tubo0);
    assetsToLoad.push(tubo1);
    assetsToLoad.push(tubo2);
    assetsToLoad.push(tubo3);
    assetsToLoad.push(tubo4);
    assetsToLoad.push(iCredits);
    assetsToLoad.push(iProgram);
    assetsToLoad.push(iCompM);
    assetsToLoad.push(iDesign);
    assetsToLoad.push(iQuitC);
  }
}

function LoadSound() {
  //sonido
  //sonido
  exp = new Audio("views/img/sfx/Explosion7.wav");
  pts = new Audio("views/img/sfx/Pickup_Coin39.wav");
  hitC = new Audio("views/img/sfx/Hit_Hurt2.wav");
  changeS = new Audio("views/img/sfx/Powerup4.wav");
  point = new Audio("views/img/sfx/Pickup_Coin71.wav"); //musica

  music1 = new Audio("views/img/sfx/music/Solve The Puzzle.ogg"); //listo

  music2 = new Audio("views/img/sfx/music/Karibu Watu Wangu.ogg");
  music3 = new Audio("views/img/sfx/music/Spring Village.ogg");
  music4 = new Audio("views/img/sfx/music/Mall.ogg"); //listo

  music5 = new Audio("views/img/sfx/music/Friends.ogg"); //listo

  music6 = new Audio("views/img/sfx/music/Goliath's Foe.ogg");
  music7 = new Audio("views/img/sfx/music/1st Sonata - Snowy Stars.ogg");
  music8 = new Audio("views/img/sfx/music/Interplanetary Odyssey.ogg"); //listo

  music9 = new Audio("views/img/sfx/music/Su Turno.ogg");
  music10 = new Audio("views/img/sfx/music/Lyonesse.ogg"); //listo
  //loadedmetadata / canplaythrough

  if (mMenu) {
    music1.addEventListener("loadedmetadata", loadHandler, false);
    music2.addEventListener("loadedmetadata", loadHandler, false);
    music3.addEventListener("loadedmetadata", loadHandler, false);
    music4.addEventListener("loadedmetadata", loadHandler, false);
    music5.addEventListener("loadedmetadata", loadHandler, false);
    music6.addEventListener("loadedmetadata", loadHandler, false);
    music7.addEventListener("loadedmetadata", loadHandler, false);
    music8.addEventListener("loadedmetadata", loadHandler, false);
    music9.addEventListener("loadedmetadata", loadHandler, false);
    music10.addEventListener("loadedmetadata", loadHandler, false);
    exp.addEventListener("loadedmetadata", loadHandler, false);
    pts.addEventListener("loadedmetadata", loadHandler, false);
    hitC.addEventListener("loadedmetadata", loadHandler, false);
    changeS.addEventListener("loadedmetadata", loadHandler, false);
    point.addEventListener("loadedmetadata", loadHandler, false);
    assetsToLoad.push(music1);
    assetsToLoad.push(music2);
    assetsToLoad.push(music3);
    assetsToLoad.push(music4);
    assetsToLoad.push(music5);
    assetsToLoad.push(music6);
    assetsToLoad.push(music7);
    assetsToLoad.push(music8);
    assetsToLoad.push(music9);
    assetsToLoad.push(music10);
    assetsToLoad.push(exp);
    assetsToLoad.push(pts);
    assetsToLoad.push(hitC);
    assetsToLoad.push(changeS);
    assetsToLoad.push(point);
  }
}