let lifeAnim=
{
	x:hudPos.xL-60,
	y:200,
	width:60,
	height:80,
	alpha:0,

	count:0,
	inAnim:false,
}

let plAnim1 =[];
let pr=0;
function lifeAnimation() {
	if (lifeAnim.count<1) 
	{
		enabled=false;
		sound.lifeUp2.play();
		//lifeRestartAnimation();
	}
	lifeAnim.count++;

//DRAW

	if (lifeAnim.count<50) {createParticleLAnim();}//crear particulas
	
	moveParticleAnim();
	drawParticleAnim();

	ctx.save();
	ctx.globalAlpha=lifeAnim.alpha;
	ctx.drawImage(anim, 0, 0, 191, 220, 
				lifeAnim.x, lifeAnim.y, lifeAnim.width, lifeAnim.height);

	ctx.drawImage(anim, 200, 40, 260, 179, 
				lifeAnim.x+lifeAnim.width, lifeAnim.y, lifeAnim.width, lifeAnim.height);
	ctx.restore();



//ANIM

	if (lifeAnim.alpha < 1 && lifeAnim.count<20) {lifeAnim.alpha+=0.1;}
	if (lifeAnim.alpha>1 && lifeAnim.count<20) {lifeAnim.alpha=1;}

	if (lifeAnim.alpha > 0 && lifeAnim.count>40) {lifeAnim.alpha-=0.1;}
	if (lifeAnim.alpha<0 && lifeAnim.count>40) {lifeAnim.alpha=0;}

	if (lifeAnim.alpha < 1 && lifeAnim.count<12) {lifeAnim.y-=8;}
	if( lifeAnim.alpha>=1&& lifeAnim.count< 40){lifeAnim.y-=3}
	if (lifeAnim.count>70) {lifeAnim.y-=0;}
	

	if (lifeAnim.count<=55) {lColor.r2=54; lColor.g2=255; lColor.speed=7;}
	if (lifeAnim.count>55) {lColor.r2=0; lColor.g2=0; lColor.speed=7;}

	
		if (lifeAnim.count>110 && lifeAnim.inAnim) {
			enabled=true;
			life++;
			lifeAnim.inAnim=false;
			lifeRestartAnimation()
		}
}




function createParticleLAnim (){
	//if(Math.floor(Math.random()*10) < 2){
		plAnim1.push({
			x:(lifeAnim.x - 20)+ Math.floor(Math.random()*(lifeAnim.width*2+40)),
			//y:200+160,
			//y:200,
			y:lifeAnim.y + lifeAnim.height,
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

function moveParticleAnim()
{
	for (i in plAnim1) 
	{
		let j = plAnim1[i];



		//MOVE
		j.y-=j.speedUp;

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
			delete plAnim1[i];
			plAnim1.filter(item => item);
		}

	}
}
function drawParticleAnim()
{
	for (i in plAnim1) 
	{
		let j = plAnim1[i];

		if (j.img==1) 
		{
			ctx.save();
			//ctx.globalCompositeOperation="lighter";
			ctx.globalAlpha=j.alpha;
			ctx.translate(j.x, j.y);
			ctx.rotate(j.rotate);
			ctx.drawImage(anim, 174*1, anim.height-167, 174, 167, 
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
			ctx.drawImage(anim, 174*2, anim.height-182, 174, 182, 
				j.width/-2, j.width/-2, j.width, j.width);
			ctx.restore();
		}
	}
}

function lifeRestartAnimation()
{
	lifeAnim=
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