let victoryAnim=
{
	x:hudPos.xL-60,
	y:200,
	width:60,
	height:80,
	alpha:0,

	count:0,
	inAnim:false,
	lif:false,
}

let pvAnim1 =[];

function victoryAnimation() {
	if (victoryAnim.count<1 && life < maxLife) 
	{
		enabled=false;

		if (life < maxLife) {victoryAnim.lif=true;}
		else{victoryAnim.lif=false;}
	}

	victoryAnim.count++;

//DRAW
	if (victoryAnim.count<2) {sound.lifeUp.play();}
	if (victoryAnim.count<50) {createParticleVAnim();}//crear particulas
	
	moveParticleAnimV();
	drawParticleAnimV();

	

	
		if (victoryAnim.count>110 && victoryAnim.inAnim) {
			if(victoryAnim.lif){lifeAnim.inAnim=true;}
			victoryAnim.inAnim=false;
			victoryRestartAnimation();
			enabled=true;
		}
}




function createParticleVAnim (){
	if(Math.floor(Math.random()*4) < 2){
		pvAnim1.push({
			x:canvas.width/2+70,
			//y:200+160,
			//y:200,
			y:canvas.height/2+75,
			width:20+ Math.floor(Math.random()*20),
			height:40 + Math.floor(Math.random()*10),
			rotate:Math.floor(Math.random()*30),
			rot:Math.floor(Math.random()*3),
			speedRot:(Math.random()*(10-3))*0.03,
			speedUp:Math.floor(Math.random()*5 + 1),
			img:Math.floor(Math.random()*3),
			time:0,
			endTime:Math.floor(Math.random()*(30+20)),
			alpha:0.1,
		});

		pvAnim1.push({
			x:canvas.width/2-70,
			//y:200+160,
			//y:200,
			y:canvas.height/2+75,
			width:20+ Math.floor(Math.random()*20),
			height:40 + Math.floor(Math.random()*10),
			rotate:Math.floor(Math.random()*30),
			rot:Math.floor(Math.random()*3),
			speedRot:(Math.random()*(10-3))*0.03,
			speedUp:Math.floor(Math.random()*5 + 1),
			img:Math.floor(Math.random()*3),
			time:0,
			endTime:Math.floor(Math.random()*(30+20)),
			alpha:0.1,
		});
	}
}

function moveParticleAnimV()
{
	for (i in pvAnim1) 
	{
		let j = pvAnim1[i];


		

        if (victoryAnim.lif) 
        	{
        		if (j.time<j.endTime/2) 
        		{
        			j.x += j.speedUp * Math.sin(j.rotate);
       				j.y -= j.speedUp * Math.cos(j.rotate);
        		}
        		else
        		{
        			if (j.x<canvas.width/2) {j.x+=10;}
        			else{j.x-=10;}
        			if (j.y>40) {j.y-=18;}
        			//else{j.x--;}
        		}
        	}
        	else
        	{
        		j.x += j.speedUp * Math.sin(j.rotate);
       			j.y -= j.speedUp * Math.cos(j.rotate);
        	}

		//MOVE
		//j.y-=j.speedUp;

		//ROTATE
		if (j.speedRot==0) {j.speedRot=1;}
		if (j.rot==1) 
		{
			//j.rotate+=j.speedRot;
		}
		else if(j.rot==2)
		{
			//j.rotate-=j.speedRot;
		}

		//LIFE
		j.time++;

		if (j.time < 10) {
			j.alpha+=0.1;
			if (j.alpha>1) {j.alpha=1;}
		}
		if (j.time > j.endTime) {
			j.alpha-=0.1;
			if (j.alpha<0) {j.alpha=0;}
		}
		if (j.y<40) {j.time=j.endTime;}
		if (j.alpha==0) {
			delete pvAnim1[i];
			pvAnim1.filter(item => item);
		}
	}
}
function drawParticleAnimV()
{
	for (i in pvAnim1) 
	{
		let j = pvAnim1[i];

		if (j.img==1) 
		{
			ctx.save();
			//ctx.globalCompositeOperation="lighter";
			ctx.globalAlpha=j.alpha;
			ctx.translate(j.x, j.y);
			ctx.rotate(j.rotate);
			ctx.drawImage(animFX, animFX.width/2*0, 0, animFX.width/2, animFX.height/2, 
				j.width/-2, j.width/-2, j.width, j.width);
			ctx.restore();
		}
		if (j.img==2) 
		{
			ctx.save();
			//ctx.globalCompositeOperation="lighter";
			ctx.globalAlpha=j.alpha;
			ctx.translate(j.x, j.y);
			ctx.rotate(j.rotate);
			ctx.drawImage(animFX, animFX.width/2*1, 0, animFX.width/2, animFX.height/2, 
				j.width/-2, j.width/-2, j.width, j.width);
			ctx.restore();
		}
	}
}

function victoryRestartAnimation()
{
	victoryAnim=
	{
		x:hudPos.xL-60,
		y:200,
		//width:130,
		//height:160,
		width:60,
		height:80,
		alpha:0,

		count:0,
		inAnim:false,
	}
}