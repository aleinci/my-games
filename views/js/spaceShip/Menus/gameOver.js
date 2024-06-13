var botons = {
	x: canvas.width/2 + 30,
	y: canvas.height/2 + 130,
	width:100*1.2,
	height:55*1.2,
	press:false,
	step:0,
}

var botons2 = {
	x: canvas.width/2 - 170,
	y: canvas.height/2 + 130,
	width:100*1.2,
	height:55*1.2,
	press:false,
	step:0,
}

var quitBtn = {
	x: 550,
	y: 160,
	width:70,
	height:70,
}

var sabiasQ = false;

var me = 0;// CONTADOR MENU REINICIAR
var retry = false;


function reiniciar() 
{
	
	if (play.estado == "muerto" && me <1){me+=0.02;}

	var width 	= 250;
	var height 	= 400;
	var x 		= canvas.width/2 - width/2;
	var y 		= canvas.height/2 - height/2;


	ctx.save();
	ctx.globalAlpha = me;
	ctx.fillStyle = "green";
	ctx.drawImage(menuScore, x, y+70, width, height-150);

	// imagen GAME OVER
	ctx.drawImage(gameO, canvas.width/2 - gameO.width/2, y, gameO.width, gameO.height);
	ctx.fillStyle = "white";
	
	//BOTON reiniciar
	ctx.drawImage(btnGO,btnGO.width/2 * botons.step,0, btnGO.width/2, btnGO.height/2,
				botons.x, botons.y, botons.width, botons.height);

	//boton salir al menu
	ctx.drawImage(btnGO, btnGO.width/2 * botons2.step, 0+btnGO.height/2, btnGO.width/2, btnGO.height/2,
				botons2.x, botons2.y, botons2.width, botons2.height);

	ctx.font = "25pt MyFont";
	ctx.textAlign = "center";
	
	ctx.lineWidth=4;
	ctx.strokeStyle="orange"
	ctx.strokeText(puntos, canvas.width/2 + 50,canvas.height/3 + 45)
	ctx.fillStyle = "white";
	ctx.fillText(puntos, canvas.width/2 + 50,canvas.height/3 + 45 );//PUNTOS
	scrStg();//RECORD
	//ctx.fillText(record, canvas.width/2 + 50,canvas.height/3 + 144 );//RECORD
	/*ctx.strokeStyle="orange";
	ctx.strokeText(puntos, canvas.width/2 + 50,canvas.height/3 + 50);
	ctx.strokeText(record, canvas.width/2 + 50,canvas.height/3 + 144);*/

	ctx.restore();
	
	//boton de reiniciar juego
	if (cX > botons.x &&
		cX < botons.x + botons.width &&
		cY > botons.y &&
		cY < botons.y + botons.height && mouse == true &&
		me>=1 && sabiasQ == false) 
	{
		botons.press = true;
	}

	if (botons.press && mouse == false) //restablecer valores y reiniciar juego
	{
		botons.press = false;
		retry=true;
		reinicio();
		
	}else{retry=false;}

	if (botons.press) // animacion del boton
	{
		botons.step = 1;
	}else
	{
		botons.step = 0;
	}

	//boton de salir al menu
	if (cX > botons2.x &&
		cX < botons2.x + botons2.width &&
		cY > botons2.y &&
		cY < botons2.y + botons2.height && mouse == true &&
		me>=1 && sabiasQ == false) 
	{
		botons2.press = true;
	}

	if (botons2.press && mouse == false) //restablecer valor e ir al menu
	{
		botons2.press = false;
		mMenu = !mMenu;
		reinicio();
	}

	if (botons2.press) // animacion del boton
	{
		botons2.step = 1;
	}else
	{
		botons2.step = 0;
	}

	//boton cerrar sabias que
	if (sabiasQ) 
	{

		//randomNSQ();
		//sabiasQue();
		// if (cX > quitBtn.x &&
		// cX < quitBtn.x + quitBtn.width &&
		// cY > quitBtn.y &&
		// cY < quitBtn.y + quitBtn.height && mouse && me >= 1) 
		// {
			contadorRSQ=0;
			sabiasQ = !sabiasQ;
			textSize=10;
			textOpacity =0;
		// }
	}
	

}

contadorRSQ = 0;//temporizador del sabias que


var randomSQ = 0;//numero para escojer al azar el sabias que


var textSize =10;
var textOpacity =0;
function sabiasQue()
{	
	//-------------------|
	didYouKnow();
	//-------------------|

	var nsq =[];

	var xt = 30;
	var yt = 30;
	var lineheight = 20;
	var lines = sq[randomSQ].split('\n');
//------------

	var words = sq[randomSQ].split(' ');
        var line = '';

	var maxWidth = 350;
	var maxHeidth = 315;
      var lineHeight = 24;
     



contadorRSQ++;
	if (contadorRSQ < 2) 
	{
		
		randomSQ = Math.floor(Math.random()*sq.length);
	}

	
	var width 	= 1.5*350;
	var height 	= 1.5*150;
	var x 		= canvas.width/2 - width/2;
	var y 		= canvas.height/2 - height/2;
	var textX =120;
	var textY =125;

	ctx.save();
	ctx.globalAlpha = 0.4;
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.restore();

	ctx.save();
	ctx.globalAlpha = me;
	//ctx.fillStyle = "red";
	
	ctx.drawImage(sabias_q, x, y, width, height);
	ctx.drawImage(sQuit, quitBtn.x, quitBtn.y, quitBtn.width, quitBtn.height);

	ctx.fillStyle = "black";
	ctx.font = ""+textSize+"pt MyFont";
	ctx.globalAlpha=textOpacity;
	//ctx.textAlign = "left";
	//ctx.fillText(sq[randomSQ], x+120, y+125 );
	/*for (var ee = 0; ee<lines.length; ee++)
   ctx.fillText(lines[ee], textX, textY + (ee*lineheight) );*/

   for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {

            ctx.fillText(line, x + textX, y + textY);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        if (y+textY > maxHeidth) {textSize--; textOpacity=0}
        else{textOpacity=1;}

    ctx.fillText(line, x + textX, y + textY);
	ctx.restore();

}
	


// 20 caracteres como max
//            		 | \n\ añadir hasta aqui




function randomNSQ() {
	nsq.push({
		n: Math.floor(Math.random()*sq.length),
	});
}
function scrStg() {
	switch (mapN)
	{
		case 0:
			ctx.strokeText(record0, canvas.width/2 + 50,canvas.height/3 + 140 );
			ctx.fillText(record0, canvas.width/2 + 50,canvas.height/3 + 140 );//RECORD
		break;

		case 1:
			ctx.strokeText(record1, canvas.width/2 + 50,canvas.height/3 + 140 );
			ctx.fillText(record1, canvas.width/2 + 50,canvas.height/3 + 140 );//RECORD
		break;

		case 2:
			ctx.strokeText(record2, canvas.width/2 + 50,canvas.height/3 + 140 );
			ctx.fillText(record2, canvas.width/2 + 50,canvas.height/3 + 140 );//RECORD
		break;

		case 3:
			ctx.strokeText(record3, canvas.width/2 + 50,canvas.height/3 + 140 );
			ctx.fillText(record3, canvas.width/2 + 50,canvas.height/3 + 140 );//RECORD
		break;

		case 4:
			ctx.strokeText(record4, canvas.width/2 + 50,canvas.height/3 + 140 );
			ctx.fillText(record4, canvas.width/2 + 50,canvas.height/3 + 140 );//RECORD
		break;

		case 5:
			ctx.strokeText(record5, canvas.width/2 + 50,canvas.height/3 + 140 );
			ctx.fillText(record5, canvas.width/2 + 50,canvas.height/3 + 140 );//RECORD
		break;

		case 6:
			ctx.strokeText(record6, canvas.width/2 + 50,canvas.height/3 + 140 );
			ctx.fillText(record6, canvas.width/2 + 50,canvas.height/3 + 140 );//RECORD
		break;

		case 7:
			ctx.strokeText(record7, canvas.width/2 + 50,canvas.height/3 + 140 );
			ctx.fillText(record7, canvas.width/2 + 50,canvas.height/3 + 140 );//RECORD
		break;

		case 8:
			ctx.strokeText(record8, canvas.width/2 + 50,canvas.height/3 + 140 );
			ctx.fillText(record8, canvas.width/2 + 50,canvas.height/3 + 140 );//RECORD
		break;

		case 9:
			ctx.strokeText(record9, canvas.width/2 + 50,canvas.height/3 + 140 );
			ctx.fillText(record9, canvas.width/2 + 50,canvas.height/3 + 140 );//RECORD
		break;

		default:
			ctx.strokeText(record0, canvas.width/2 + 50,canvas.height/3 + 140 );
			ctx.fillText(record0, canvas.width/2 + 50,canvas.height/3 + 140 );//RECORD
		
	}
}