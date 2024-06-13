var gameEnd = false;
var geCount = 0;
var geMove = 0;
//var alp=false;
//var alpha=100;

function endGame() {
	noPlay = true;
	
	var lStep = (life -2)*(-1);
/*
	if (!alp) {
		alpha+=5;
	}else{
		alpha-=5;
	}
	if (alpha < 101) {alp=false;}
	if (alpha>149) {alp=true;}
*/
	

	if (geCount<400 && life >0)//continuar jugando (aun con vidas)
	{
		boo.play();
		geCount++;

		ctx.save();//fondo oscuro
		ctx.globalAlpha=0.4;
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.restore();

		ctx.save();
		//ctx.globalCompositeOperation = 'lighter';
		//ctx.filter = "brightness("+alpha+"%)";
		
		
		ctx.drawImage(lifeBox, 0, 247*lStep, lifeBox.width, lifeBox.height/3,
			canvas.width/2-(600/2), canvas.height-(250/2)-(geMove), 600, 250);

		ctx.font ="50pt Calibri";
		ctx.textAlign="center";

		ctx.fillStyle="black";
		ctx.fillText( "Life",canvas.width/2+2, canvas.height-20-geMove+2);

		ctx.fillStyle="white";
		ctx.fillText( "Life",canvas.width/2, canvas.height-20-geMove);
		
		ctx.font ="35pt Calibri";

		//SOLO CORAZON
		ctx.drawImage(heart, 0, heart.height/2, heart.width, heart.height/2,
					canvas.width/2-35, canvas.height+20-geMove, 70, 70);

		ctx.drawImage(heart, 0, 0, heart.width/life*(life-1), heart.height/2,
					canvas.width/2-35, canvas.height+20-geMove, 70/life, 70);

		/*////CORAZON Y NUMERO DE VIDAS
		ctx.drawImage(heart, 0, heart.height/2, heart.width, heart.height/2,
					canvas.width/2-45, canvas.height+30-geMove, 40, 40);

		ctx.drawImage(heart, 0, 0, heart.width/life*(life-1), heart.height/2,
					canvas.width/2-45, canvas.height+30-geMove, 40/life, 40);

		ctx.fillStyle="black";
		ctx.fillText("x"+ (life-1),canvas.width/2+17+2, canvas.height+60-geMove+2);
		ctx.fillStyle="white";
		ctx.fillText("x"+ (life-1) ,canvas.width/2+17, canvas.height+60-geMove);*/
		ctx.restore();

		if (geMove<=300 ||geMove>=500) {geMove+=40;}
			else{geMove+=5;}
		if (geMove>1000) {
			boo.currentTime=0;
			boo.pause();
			gameEnd = false; 
			noPlay = false;
			geMove=0;
			geCount=0;
			resFailed();
		}
	}else{//fin del juego (sin vidas / pierdes)
		if (geCount<148) {geCount++;}
		totalTimeAct= false;

		ctx.save();//fondo oscuro
		ctx.globalAlpha=0.4;
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.restore();


		ctx.save();
		ctx.drawImage(lifeBox, 0, 247*lStep, lifeBox.width, lifeBox.height/3,
			canvas.width/2-(600/2), 0-(250/2)- 15 +(geMove), 600, 250);
		ctx.font ="50pt Calibri";

		ctx.fillStyle="black";
		ctx.textAlign="center";
		ctx.fillText( "Game Over",canvas.width/2+2, 0+geMove+2);

		ctx.fillStyle="white";
		ctx.textAlign="center";
		ctx.fillText( "Game Over",canvas.width/2, 0+geMove);
		ctx.restore();

		if (geCount >= 148) {
			scoreB();
		}


		if (geMove<=200) {geMove+=40;}
			else if(geMove >= 200 && geMove <= 400){geMove+=5;}
		if (geCount>160) {
			gameEnd = false; 
			//noPlay = false;
			geMove=0;
			geCount=0;
			btnG_M = true;
		}	
	}
}



