var gaming= false;
//color 0 = azul 	 /normal
//color 1 = amarillo /espera
//color 2 = verde 	 /correcto
//color 3 = rojo 	 /incorrecto

var buttonA =
{
	x:canvas.width/2-(350/2)-185+5,
	y:550,
	width:350,
	height:100,
	press:false,
	color:0,
}

var buttonB =
{
	x:canvas.width/2-(350/2)+185+5,
	y:550,
	width:350,
	height:100,
	press:false,
	color:0,
}

var buttonC =
{
	x:canvas.width/2-(350/2)-185+5,
	y:550+100,
	width:350,
	height:100,
	press:false,
	color:0,
}

var buttonD =
{
	x:canvas.width/2-(350/2)+185+5,
	y:550+100,
	width:350,
	height:100,
	press:false,
	color:0,
}

var questionBox =
{
	x:canvas.width/2-(650/2),
	y:330,
	width:650,
	height:200,
}



var quest;//variable para pasar el array de cada nivel
var dX = 300,
	dY = 110,
	dW = 30,
	dH = 70;

var textSize =22;
var textOpacity = 0;

//var a = 0;
var time = true;
var maxseg=60;
var seg = maxseg;
var life = 2;


var publicCount =0;
var publicY =0;
function game() 
{
	//cScene();
	

	if (time && seg>0 && gaming && !noPlay && seg<maxseg) {timeSound();}//sonido reloj

	if (!gameStart) {lvlRQ();}

		if(gameVictory)//mover publico
		{
			publicCount+=1;
		
			publicY = Math.cos(publicCount)*3;
		}else{//dejar de mover
			publicCount=0;
		}

		ctx.save();//public
		ctx.drawImage(public, 0, publicY, canvas.width, 426);
		ctx.drawImage(public2, 0, publicY+426, canvas.width, 426);
		ctx.drawImage(hudTextI, 34, 400, canvas.width-55, 426);
		
		ctx.drawImage(hudTextI, -canvas.width+89, 400, canvas.width-55, 426);
		ctx.drawImage(hudTextI, canvas.width-21, 400, canvas.width-55, 426);
		ctx.restore();
	
		ctx.save();//botton de pausa
		
		ctx.drawImage(hudI, 0, 0, canvas.width, 150);
		ctx.restore();

		if (!gameStart) {fgsDraw();}
		else{tgsDraw();}

		ctx.save();//botton de pausa
		ctx.fillStyle="green";
		ctx.drawImage(pausePlay, pausePlay.width/2 * btnStart.step, 0, pausePlay.width/2, pausePlay.height,
			btnStart.x, btnStart.y, btnStart.width, btnStart.height);
		//ctx.fillRect(btnStart.x, btnStart.y, btnStart.width, btnStart.height);
		ctx.restore();

		///
		ctx.save();
		ctx.fillStyle="white";
		ctx.font="25pt Calibri";
		ctx.textAlign="center";

		ctx.fillText("lvl", 170, 35);
		ctx.drawImage(lvlH, 170-90/2, 50, 90, 50);
		ctx.fillText(QuestionLv, 170, 83);

		ctx.fillText("life"/*+life*/, 55 , 35);

		ctx.font="20pt Calibri";
		ctx.fillStyle="black";
		ctx.fillText("Time", canvas.width/2+1, 28);
		ctx.fillStyle="white";
		ctx.fillText("Time", canvas.width/2, 27);
		ctx.font="35pt Calibri";
		ctx.fillStyle="black";
		ctx.fillText(seg, canvas.width/2+1, 66);
		ctx.fillStyle="white";
		ctx.fillText(seg, canvas.width/2, 65);
		
		ctx.restore();


		//VIDAS----------------------------------
		for (var e = 0; e < 2; e++) {
			ctx.save();
			ctx.drawImage(heart, 0, heart.height/2, heart.width, heart.height/2,
			10 +(50*e), 55, 40, 40);
			ctx.restore();
		}

		for (var i = 0; i < life; i++) {
				ctx.save();

				ctx.drawImage(heart, 0, 0, heart.width, heart.height/2,
					10 +(50*i), 55, 40, 40);
				ctx.restore();
			}
		//---------------------------------------
		questionErrActu=true;
	
	music1.volume=0.7;
	music1.play();

	if (verify) {questionVerify();}// verificando respuesta

}

function lvlRQ() //mostrar pregunta segun el nivel
{
	switch(QuestionLv)
	{
		case 1:
 			quest= lvl1[randomized];
		break;

		case 2:
 			quest= lvl2[randomized];
		break;

		case 3:
 			quest= lvl3[randomized];
		break;

		case 4:
 			quest= lvl4[randomized];
		break;

		case 5:
 			quest= lvl5[randomized];
		break;

		case 6:
 			quest= lvl6[randomized];
		break;

		case 7:
 			quest= lvl7[randomized];
		break;

		case 8:
 			quest= lvl8[randomized];
		break;

		case 9:
 			quest= lvl9[randomized];
		break;

		case 10:
 			quest= lvl10[randomized];
		break;

		default:
			quest= lvl1[randomized];
		
	}
}

function tgsDraw()//game start true
{
	ctx.save();
		//pregunta
		
		ctx.drawImage(textBox, questionBox.x, questionBox.y, questionBox.width, questionBox.height);
		ctx.globalAlpha = 0.7;
		ctx.drawImage(coachteen, questionBox.x + questionBox.width/2 - (75), questionBox.y + questionBox.height/2 - (40), 150, 80);
		
		ctx.globalAlpha = 1;
		//A
		ctx.fillStyle=buttonA.color;
		ctx.drawImage(abcd, 0, 0, abcd.width, 104,
		buttonA.x, buttonA.y, buttonA.width, buttonA.height);
		ctx.fillStyle="white";
		ctx.font="25pt Calibri";
		ctx.fillText("A", buttonA.x+24, buttonA.y+buttonA.height/2+10);

		//B
		ctx.fillStyle=buttonB.color;
		ctx.drawImage(abcd, 0, 0, abcd.width, 104,
		buttonB.x, buttonB.y, buttonB.width, buttonB.height);
		ctx.fillStyle="white";
		ctx.font="25pt Calibri";
		ctx.fillText("B", buttonB.x+24, buttonB.y+buttonB.height/2+10);

		//C
		ctx.fillStyle=buttonC.color;
		ctx.drawImage(abcd, 0, 0, abcd.width, 104,
		buttonC.x, buttonC.y, buttonC.width, buttonC.height);
		ctx.fillStyle="white";
		ctx.font="25pt Calibri";
		ctx.fillText("C", buttonC.x+24, buttonC.y+buttonC.height/2+10);

		//D
		ctx.fillStyle=buttonD.color;
		ctx.drawImage(abcd, 0, 0, abcd.width, 104,
		buttonD.x, buttonD.y, buttonD.width, buttonD.height);
		ctx.fillStyle="white";
		ctx.font="25pt Calibri";
		ctx.fillText("D", buttonD.x+24, buttonD.y+buttonD.height/2+10);	

	ctx.restore();
}

 
function fgsDraw()// gamestart false
{
	//var lineheight = 20;
	//var words = quest.question.split(' ');


	var words = decodeHTMLEntities(quest.question).split(' ');
        var line = '';

	var maxWidth = 479;
      var lineHeight = 26;
      var x = (canvas.width - maxWidth) / 2;
      var y = 390;
     
     
ctx.save();

	ctx.font = textSize+'pt Calibri';
    ctx.fillStyle = 'black';
        
    ctx.drawImage(textBox, questionBox.x, questionBox.y, questionBox.width, questionBox.height);
    ctx.globalAlpha = 0.7;
    ctx.drawImage(coachteen, questionBox.x + questionBox.width/2 - (210/2), questionBox.y + questionBox.height/2 - (120/2), 210, 120);
    ctx.globalAlpha = textOpacity;
        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {

            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }

        if (y > 486) {textSize--;textOpacity=0;}
        else{textOpacity=1;}
        
      
     
      
      
      
     

		
    
		
		//pregunta

		ctx.fillText(line, x, y);
		
		
		ctx.globalAlpha=1;
		//A
		buttonAnswer("A", buttonA, quest.a)

		//B
		buttonAnswer("B", buttonB, quest.b)

		//C
		buttonAnswer("C", buttonC, quest.c)

		//D
		buttonAnswer("D", buttonD, quest.d)

		ctx.restore();
}

function buttonAnswer (answerIndicator, btn, answers) {
	let words = decodeHTMLEntities(answers).split(' ');
  let line = '';

	let maxWidth = btn.width/2 + btn.width/6;
  let lineHeight = 20;
  let x = btn.x+90;
  let y = btn.y+btn.height/2-6;

	ctx.drawImage(abcd, 0, 104*btn.color, abcd.width, 104,
	btn.x, btn.y, btn.width, btn.height);

	ctx.fillStyle="white";
	ctx.font="25pt Calibri";
	ctx.fillText(answerIndicator, btn.x+24, btn.y+btn.height/2+10);
	ctx.font="18pt Calibri";

	for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;
    
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
      
    }
    else {
      line = testLine;
    }
  }
	ctx.fillText(line, x, y);
}

function decodeHTMLEntities(text) {
  return text.replace(/&quot;/g, '"')
             .replace(/&apos;/g, "'")
             .replace(/&#039;/g, "'")
             .replace(/&pi;/g, "π")
             .replace(/&amp;/g, "&")
             .replace(/&lt;/g, "<")
             .replace(/&gt;/g, ">")
             .replace(/&aacute;/g, "á")
             .replace(/&eacute;/g, "é")
             .replace(/&iacute;/g, "í")
             .replace(/&oacute;/g, "ó")
             .replace(/&uacute;/g, "ú")
             .replace(/&Aacute;/g, "Á")
             .replace(/&Eacute;/g, "É")
             .replace(/&Iacute;/g, "Í")
             .replace(/&Oacute;/g, "Ó")
             .replace(/&Uacute;/g, "Ú")
             .replace(/&euro;/g, "€");
}


function timeSound(){
	var sa=3.9;
	var sb=1.9;
	var sc=0.8;
	var sd=0.3;
	if (seg>15) {sTime.play();}
	else{
		sTime.pause();
		sTime.currentTime=0;
	}
	

	if (seg <= 15 && seg>10) {sTime1.play();}
	else{
		sTime1.pause();
		sTime1.currentTime=0;
	}

	if (seg <= 10 && seg>0) {sTime2.play();}
	else{
		sTime2.pause();
		sTime2.currentTime=0;
	}

	if (verify) {
		sTime.pause();
		sTime1.pause();
		sTime2.pause();
		sTime3.pause();
		sTime.currentTime=0;
		sTime1.currentTime=0;
		sTime2.currentTime=0;
		sTime3.currentTime=0;
	}


	if (sTime.currentTime>= sa) {sTime.currentTime=0;}
	if (sTime1.currentTime>= sb) {sTime1.currentTime=0;}
	if (sTime2.currentTime>= sc) {sTime2.currentTime=0;}
	if (sTime3.currentTime>= sd) {sTime3.currentTime=0;}

}
