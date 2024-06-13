let defeatAnim=
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

let pdAnim1 =[];



function defeatAnimation() {
	if (defeatAnim.count<1 && life < maxLife) 
	{
		
		//if (life < maxLife) {defeatAnim.lif=true;}
		//else{defeatAnim.lif=false;}
	}
	enabled=false;
	defeatAnim.count++;

//DRAW
//if(song.currentTime>0.2){song.currentTime=0.1;}

//console.log(song.currentTime);

	if (defeatAnim.count<50) {createParticleDAnim(); sound.lifeDown2.play();}//crear particulas
	
	moveParticleAnimD();
	drawParticleAnimD();

	

	
		if (defeatAnim.count>110 && defeatAnim.inAnim) {
			comboAnim.inAnim=true;
			defeatAnim.inAnim=false;
			defeatRestartAnimation();
			enabled=true;
		}
}




function createParticleDAnim (){
	if(Math.floor(Math.random()*4) < 2){
		pdAnim1.push({
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

		pdAnim1.push({
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

function moveParticleAnimD()
{
	for (i in pdAnim1) 
	{
		let j = pdAnim1[i];


		

        		if (j.time<1) 
        		{
        			j.x += j.speedUp * Math.sin(j.rotate);
       				j.y -= j.speedUp * Math.cos(j.rotate);
        		}
        		else
        		{
        			if (j.x<240) {j.x+=10;}
        			else{j.x-=10;}
        			if (j.y>40) {j.y-=18;}
        			//else{j.x--;}
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
			delete pdAnim1[i];
			pdAnim1.filter(item => item);
		}
	}
}
function drawParticleAnimD()
{
	for (i in pdAnim1) 
	{
		let j = pdAnim1[i];

		if (j.img==1) 
		{
			ctx.save();
			//ctx.globalCompositeOperation="lighter";
			ctx.globalAlpha=j.alpha;
			ctx.translate(j.x, j.y);
			ctx.rotate(j.rotate);
			ctx.drawImage(animFX, animFX.width/2*0, animFX.height/2, animFX.width/2, animFX.height/2, 
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
			ctx.drawImage(animFX, animFX.width/2*1, animFX.height/2, animFX.width/2, animFX.height/2, 
				j.width/-2, j.width/-2, j.width, j.width);
			ctx.restore();
		}
	}
}

function defeatRestartAnimation()
{
	defeatAnim=
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