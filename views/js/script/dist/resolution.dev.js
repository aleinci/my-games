"use strict";

//RESOLUCION *************************
var WIDTH = 680;
var HEIGHT = 480;
var CANVAS_WIDTH = 680;
var CANVAS_HEIGHT = 480;
var reso = false; //voltear pantalla de cell

function cellRes() {
  if (reso) {
    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }
}

var resizeCanvas = function resizeCanvas() {
  CANVAS_WIDTH = window.innerWidth - 5;
  CANVAS_HEIGHT = window.innerHeight - 5;
  var ratio = 16 / 9;

  if (CANVAS_HEIGHT < CANVAS_WIDTH / ratio) {//	CANVAS_WIDTH = CANVAS_HEIGHT * ratio ;
  } else {
    CANVAS_HEIGHT = CANVAS_WIDTH / ratio;
  }

  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  ctx.mozImageSmoothingEnabled = false;
  ctx.msImageSmoothingEnabled = false;
  ctx.ImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  canvas.style.width = ' ' + CANVAS_WIDTH + 'px';
  canvas.style.height = ' ' + CANVAS_HEIGHT + 'px';
};

resizeCanvas();
window.addEventListener('resize', function () {
  resizeCanvas();
}); //MOUSE *************************

var mouse = false;
var cX;
var cY;
var mMouse = {
  x: 0,
  y: 0,
  width: 50,
  height: 50
};

function mouseAG() {
  canvas.addEventListener("mousemove", function (e) {
    mMouse.x = (e.pageX - ctx.canvas.offsetLeft) / (CANVAS_WIDTH / WIDTH);
    mMouse.y = (e.pageY - ctx.canvas.offsetTop) / (CANVAS_HEIGHT / HEIGHT);
  });
  canvas.addEventListener("mousedown", function (e) {
    cX = (e.pageX - ctx.canvas.offsetLeft) / (CANVAS_WIDTH / WIDTH);
    cY = (e.pageY - ctx.canvas.offsetTop) / (CANVAS_HEIGHT / HEIGHT);
    mouse = true;
    e.preventDefault();
  });
  canvas.addEventListener("mouseup", function (e) {
    cX = false;
    cY = false;
    mouse = false;
  });
  canvas.addEventListener("touchstart", function (e) {
    cX = (e.touches[0].pageX - ctx.canvas.offsetLeft) / (CANVAS_WIDTH / WIDTH);
    cY = (e.touches[0].pageY - ctx.canvas.offsetTop) / (CANVAS_HEIGHT / HEIGHT);
    mouse = true;
  });
  canvas.addEventListener("touchend", function (e) {
    cX = false;
    cY = false;
    mouse = false;
  });
}

mouseAG();