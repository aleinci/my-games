"use strict";

puntos = 0;
var save = "false";
var saveTime = 0;
record0 = document.getElementById("stage0").innerHTML;
record1 = document.getElementById("stage1").innerHTML;
record2 = document.getElementById("stage2").innerHTML;
record3 = document.getElementById("stage3").innerHTML;
record4 = document.getElementById("stage4").innerHTML;
record5 = document.getElementById("stage5").innerHTML;
record6 = document.getElementById("stage6").innerHTML;
record7 = document.getElementById("stage7").innerHTML;
record8 = document.getElementById("stage8").innerHTML;
record9 = document.getElementById("stage9").innerHTML;

function puntaje() {
  if (play.estado == "vivo" && touchPlay) {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.strokeStyle = 'black';
    ctx.font = "50px Impact";
    ctx.textAlign = "center";
    ctx.fillText(puntos, canvas.width / 2, 100);
    ctx.strokeText(puntos, canvas.width / 2, 100);
    ctx.restore();
  }

  if (play.estado == "muerto" && saveTime < 1) {
    saveTime++;
    save = "true";

    switch (mapN) {
      case 0:
        if (puntos >= record0) {
          record0 = puntos;
          document.getElementById("stage0").innerHTML = record0;
          ajaxPost();
        }

        break;

      case 1:
        if (puntos >= record1) {
          record1 = puntos;
          document.getElementById("stage1").innerHTML = record1;
          ajaxPost();
        }

        break;

      case 2:
        if (puntos >= record2) {
          record2 = puntos;
          document.getElementById("stage2").innerHTML = record2;
          ajaxPost();
        }

        break;

      case 3:
        if (puntos >= record3) {
          record3 = puntos;
          document.getElementById("stage3").innerHTML = record3;
          ajaxPost();
        }

        break;

      case 4:
        if (puntos >= record4) {
          record4 = puntos;
          document.getElementById("stage4").innerHTML = record4;
          ajaxPost();
        }

        break;

      case 5:
        if (puntos >= record5) {
          record5 = puntos;
          document.getElementById("stage5").innerHTML = record5;
          ajaxPost();
        }

        break;

      case 6:
        if (puntos >= record6) {
          record6 = puntos;
          document.getElementById("stage6").innerHTML = record6;
          ajaxPost();
        }

        break;

      case 7:
        if (puntos >= record7) {
          record7 = puntos;
          document.getElementById("stage7").innerHTML = record7;
          ajaxPost();
        }

        break;

      case 8:
        if (puntos >= record8) {
          record8 = puntos;
          document.getElementById("stage8").innerHTML = record8;
          ajaxPost();
        }

        break;

      case 9:
        if (puntos >= record9) {
          record9 = puntos;
          document.getElementById("stage9").innerHTML = record9;
          ajaxPost();
        }

        break;

      default:
        if (puntos >= record0) {
          record0 = puntos;
          document.getElementById("stage0").innerHTML = record0;
          ajaxPost();
        }

    }
  }
}