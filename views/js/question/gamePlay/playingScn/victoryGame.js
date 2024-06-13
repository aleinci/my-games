var gameVictory = false;
var gvCount = 0;

var lFocal ={
	x:canvas.width/2-(290/2),
	y:-40,
	width:290,
	height:700,
	ang:0,
	count:0,
}

var confetes =[];
var limitConfets=30;//time limit
var conftsCount=0;// count

function victoryGame() 
{
	noPlay = true;
	
	if (QuestionLv < 10) //victoria antes del lvl 10
	{
		if (gvCount<130) 
		{
			applause.play();

			gvCount++;

			ctx.save();//fondo oscuro
			ctx.globalAlpha=0.4;
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.restore();

			ctx.save();
			ctx.drawImage(lvlBox, canvas.width/2-(600/2), canvas.height/2-(250/2), 600, 250);
			ctx.textAlign = "center";

			ctx.fillStyle = "black";
			ctx.font ="55pt calibri";
			ctx.fillText("Question", canvas.width/2 + 2, canvas.height/2 - 20 + 2);
			ctx.font ="45pt calibri";
			ctx.fillText(QuestionLv+1, canvas.width/2 + 2, canvas.height/2 + 70 + 2);

			ctx.fillStyle = "white";
			ctx.font ="55pt calibri";
			ctx.fillText("Question", canvas.width/2, canvas.height/2 - 20);
			ctx.font ="45pt calibri";
			ctx.fillText(QuestionLv+1, canvas.width/2, canvas.height/2 + 70);
			ctx.restore();

			lighting();
			if (conftsCount < limitConfets)
			{
				conftsCount++;
				spamwConfe();
			}
			moveConfe();
			drawConfe();

		}else
		{
			for(i in confetes){
				delete confetes[i];
			}
			applause.currentTime=0;
			applause.pause();
			conftsCount=0;
			resSuccess();
			gvCount=0; 
			noPlay= false; 
			gameVictory=false;
		}
	}

	else//victoria lvl 10
	{
		totalTimeAct= false;

		if (gvCount<150) {gvCount++; applause.play();}

		if (gvCount<150) {lighting();}

		if (gvCount>=150) {
			ctx.save();
			ctx.globalAlpha=0.5;
			ctx.fillStyle="black";
			ctx.fillRect(0,0,canvas.width, canvas.height);
			ctx.restore();

			lighting();

			tgsDraw();//no mostrar preguntas
			QuestionLv=11;
			scoreB();

		}

		if (gvCount<250) 
		{
			//lighting();
			spamwConfe();
			moveConfe();
			drawConfe();
		}else
		{
			conftsCount=0;
			gvCount=0; 
			noPlay= false; 
			gameVictory=false;
			btnG_M = true;
		}
	}

}

function lighting()
{
	//movimiento
	lFocal.count+=0.08;

	lFocal.ang = Math.cos(lFocal.count)/1.5;
	

	//imagenes
	ctx.save();//botton de play
	ctx.globalCompositeOperation = 'lighter';
	ctx.translate(lFocal.x + lFocal.width/2 -200,lFocal.y);
	ctx.rotate(lFocal.ang);
	ctx.drawImage(light, lFocal.width/-2, lFocal.height/-2 + lFocal.height/2, lFocal.width, lFocal.height);
	ctx.restore();


	ctx.save();//botton de play
	ctx.globalCompositeOperation = 'lighter';
	ctx.translate(lFocal.x + lFocal.width/2 +200,lFocal.y);
	ctx.rotate(-lFocal.ang);
	ctx.drawImage(light, lFocal.width/-2, lFocal.height/-2 + lFocal.height/2, lFocal.width, lFocal.height);
	ctx.restore();
}


function drawConfe()
{
//confetis

		
	for(i in confetes){
		var confet = confetes[i];
		confet.step+=0.15;

		if (confet.step>8) {confet.step=0;}
		
		ctx.save();//botton de pausa
		ctx.translate(confet.x, confet.y)
		ctx.rotate(confet.ang);
		ctx.drawImage(confeti, 100 * Math.floor(confet.step), 100 * confet.color, 100, 100,
			confet.width/-2, confet.height/-2, confet.width, confet.height);
		ctx.restore();

		if (confet.y > 850 || confet.x < 10 || confet.x > 810) {delete confetes[i];}
	}
}

function moveConfe()
{
	for(i in confetes){
		var confet = confetes[i];
		confet.x+=confet.speedX;
		confet.speedX *= 0.9;

		confet.gravitySpeed += confet.gravity;
		confet.y += confet.speedY + confet.gravitySpeed;
	    confet.speedY *= 0.9;


		confet.y -=   2 * Math.sin(confet.direction);
		
		if (confet.posne==1) {
			confet.ang+=0.1 ;
		}else{confet.ang-=0.1;}

		if (confet.timing<1) {
			confet.timing++;
			//confet.gravitySpeed -=8;
			//confet.speedX+=30;
		}

		//jugar con el confeti
		if (mMouse.x + mMouse.width >confet.x &&
			mMouse.x < confet.width + confet.x &&
			mMouse.y + mMouse.height >confet.y &&
			mMouse.y < confet.height + confet.y && mouse) 
		{
			if (mMouse.x + mMouse.width/2 < confet.x + confet.width/2) {confet.speedX+=5;}
			if (mMouse.x + mMouse.width/2 > confet.x + confet.width/2) {confet.speedX-=5;}
			if (mMouse.y + mMouse.height/2 < confet.y + confet.height/2) { confet.gravitySpeed +=3;}
			if (mMouse.y + mMouse.height/2 > confet.y + confet.height/2) { confet.gravitySpeed -=3;}
		}
	}
}

function spamwConfe()
{
	
 confetes.push({
	x:Math.floor(Math.random()*canvas.width),
	//x:canvas.width/2-(100/2)+Math.floor(Math.random()*170),
	y:-50+Math.floor(Math.random()*100),
	//y:canvas.width/2-(100/2)+50+Math.floor(Math.random()*100),
	width:20,
	height:20,
	coY:0,
	ang:0,
	step:0,
	direction:Math.floor(Math.random()*70),
	speedX:0,
	speedY:0,
	gravitySpeed:0,
	gravity:0.20,
	timing:0,
	color: Math.floor(Math.random()*5),
	posne:Math.floor(Math.random()*2)
})

}