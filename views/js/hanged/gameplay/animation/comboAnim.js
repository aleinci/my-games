let comboAnim=
{
	x:hudPos.xC,
	y:0,
	width:60,
	height:80,
	alpha:0,

	count:0,
	inAnim:false,
}

let pcAnim1 =[];

function comboAnimation() {
	if (comboAnim.count<1) 
	{
		//comboRestartAnimation();
		sound.lifeDown.play();
	}
	enabled=false;
	comboAnim.count++;

//DRAW

	if (comboAnim.count<50) {createParticleCAnim();}//crear particulas
	
	moveParticleAnimC();
	

	ctx.save();
	ctx.globalAlpha=comboAnim.alpha;
	ctx.drawImage(anim, 0, 221, 191, 220, 
				comboAnim.x, comboAnim.y, comboAnim.width, comboAnim.height);

	//ctx.drawImage(anim, 200, 40, 260, 179, 
	//			comboAnim.x+150, comboAnim.y, comboAnim.width, comboAnim.height);
	ctx.restore();
	drawParticleAnimC();



//ANIM


	if (comboAnim.alpha < 1 && comboAnim.count<20) {comboAnim.alpha+=0.1;}
	if (comboAnim.alpha>1 && comboAnim.count<20) {comboAnim.alpha=1;}

	if (comboAnim.alpha > 0 && comboAnim.count>40) {comboAnim.alpha-=0.1;}
	if (comboAnim.alpha<0 && comboAnim.count>40) {comboAnim.alpha=0;}

	if (comboAnim.alpha < 1 && comboAnim.count<12) {comboAnim.y+=5;}
	if( comboAnim.alpha>=1&& comboAnim.count< 40){comboAnim.y+=2}
	if (comboAnim.count>70) {comboAnim.y+=0;}

	if (comboAnim.count<=55) {cColor.r2=90; cColor.g2=53; cColor.b2=253; cColor.speed=7;}
	if (comboAnim.count>55) {cColor.r2=0; cColor.g2=0; cColor.b2=0; cColor.speed=7;}

	
		if (comboAnim.count>110 && comboAnim.inAnim) 
		{
			enabled=true;
			comboAnim.inAnim=false;
			zeroCombo=2;
			comboRestartAnimation();
		}
}




function createParticleCAnim (){
	//if(Math.floor(Math.random()*10) < 2){
		pcAnim1.push({
			x:(comboAnim.x - 30)+ Math.floor(Math.random()*(comboAnim.width+60)),
			//y:200+160,
			//y:200,
			y:comboAnim.y*0.5,
			width:20+ Math.floor(Math.random()*20),
			height:40 + Math.floor(Math.random()*10),
			rotate:0,
			rot:Math.floor(Math.random()*3),
			speedRot:(Math.random()*(10-3))*0.03,
			speedUp:Math.floor(Math.random()*5 + 1),
			img:Math.floor(Math.random()*3),
			time:0,
			endTime:Math.floor(Math.random()*(30+20)),
			alpha:0.1,
		});
	//}
}

function moveParticleAnimC()
{
	for (i in pcAnim1) 
	{
		let j = pcAnim1[i];



		//MOVE
		j.y+=j.speedUp;

		//ROTATE
		if (j.speedRot==0) {j.speedRot=1;}
		if (j.rot==1) 
		{
			j.rotate+=j.speedRot;
		}
		else if(j.rot==2)
		{
			j.rotate-=j.speedRot;
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
		if (j.alpha==0) {
			delete pcAnim1[i];
			pcAnim1.filter(item => item);
		}

	}
}
function drawParticleAnimC()
{
	for (i in pcAnim1) 
	{
		let j = pcAnim1[i];

		if (j.img==1) 
		{
			ctx.save();
			//ctx.globalCompositeOperation="lighter";
			ctx.globalAlpha=j.alpha;
			ctx.translate(j.x, j.y);
			ctx.rotate(j.rotate);
			ctx.drawImage(anim, 174*0, anim.height-167, 174, 167, 
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
			ctx.drawImage(anim, 174*0, anim.height-182, 174, 182, 
				j.width/-2, j.width/-2, j.width, j.width);
			ctx.restore();
		}
	}
}

function comboRestartAnimation()
{
	comboAnim=
	{
		x:hudPos.xC,
		y:0,
		width:60,
		height:80,
		alpha:0,

		count:0,
		inAnim:false,
	}
}