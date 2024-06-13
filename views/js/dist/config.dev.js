"use strict";

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fondo;
var teclado = [];
var playing = false;
var movingB = 0;
var movingB2 = 0;

function loadMedia() {
  LoadImage();
  LoadSound();

  fondo.onload = function () {
    var intervalo = window.setInterval(frameLoop, 1000 / 60);
  };
}

function dibujarFondo() {
  ctx.save();
  bgMap();
  ctx.restore();
}

ctx.ImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
var mMenu = true;
var paused = false;

function frameLoop() {
  if (assetsLoaded === assetsToLoad.length) {
    if (paused) {
      pausa();
      return;
    }

    if (mMenu) {
      mainMenu();

      if (actCredits) {
        creditosFT();
      }

      cellRes(); //celular resolucion

      transicion(); //trancicion de la pantalla de carga al menu

      return;
    }

    movingB -= velocityO / 2;

    if (movingB <= -map1.width && play.estado == "vivo") {
      movingB = 0;
    }

    allMaps();
    allPlayer();
    allObstacles();
    HUD();
    menu();
    pausaBoton();
  } else {
    if (mMenu) {
      LoadingScreen();
    }
  }
}

function tecladoAG(e) {
  agregarTeclado(document, "keydown", function (e) {
    teclado[e.keyCode] = true;
  });
  agregarTeclado(document, "keyup", function (e) {
    teclado[e.keyCode] = false;
  });

  function agregarTeclado(elemento, nombreEvento, funcion) {
    if (elemento.addEventListener) {
      elemento.addEventListener(nombreEvento, funcion, false);
    } else if (elemento.attachEvent) {
      elemento.attachEvent(nombreEvento, funcion);
    }
  }
}

tecladoAG();
loadMedia();