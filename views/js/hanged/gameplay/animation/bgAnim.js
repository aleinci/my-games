bgAnim=[];
bgColor=
{
	speed:1,

	r: Math.floor(Math.random()*254),
	g: Math.floor(Math.random()*254),
	b: Math.floor(Math.random()*254),

	r2: Math.floor(Math.random()*254),
	g2: Math.floor(Math.random()*254),
	b2: Math.floor(Math.random()*254),

	alpha:0.65,
	time:0,
	mTime:200,
}

function drawBgAnim()
{
	for(i in bgAnim)
	{
		let j = bgAnim[i];

		ctx.save();
		ctx.translate(j.x, j.y);
		ctx.rotate(j.rotate);
		ctx.drawImage(bGAnim, j.size/-2, (j.size*2)/-2, j.size, j.size*2);
		ctx.restore();
	}

	moveBgAnim();
	createBgAnim();
	changeColorBG();
}

function moveBgAnim()
{
	for(i in bgAnim)
	{
		let j = bgAnim[i];

		j.time++;

		if (j.rot ==1) {j.rotate+=j.speedRot;}
		else{j.rotate-=j.speedRot;}

		if (j.time < j.endTime/2) {j.size+=j.speedSize;;}
		else{j.size-=j.speedSize;}

		if (j.alpha<1 && j.time<j.endTime) {j.alpha+=0.1};
		if (j.alpha>1) {j.alpha=1;}
		if (j.time >= j.endTime) {j.alpha-=0.1;}

		if (j.alpha<=0) {delete bgAnim[i];}
		bgAnim.filter(item => item);
	}
}

function createBgAnim()
{
	if (Math.floor(Math.random()*20) < 2)
	{
		//let ratio = 16/9;
		//let randomSizeW= 20+ Math.floor(Math.random()*20);
		//let sizeH = randomSizeW * ratio;

		bgAnim.push({
			x:Math.floor(Math.random()*canvas.width),
			y:Math.floor(Math.random()*canvas.height),
			//width:randomSizeW,
			size:Math.floor(Math.random()*20),
			speedSize:Math.random()*1,
			//height:sizeH,
			rotate:Math.floor(Math.random()*30),
			rot:Math.floor(Math.random()*3),
			speedRot:(Math.random()*(10-3))*0.01,
			time:0,
			endTime:Math.floor(Math.random()*(30+50)),
			alpha:0.1,
		});
	}
}

function changeColorBG()
{
	if (bgColor.r<= bgColor.r2+5 && bgColor.r>= bgColor.r2-5 &&
		bgColor.g<= bgColor.g2+5 && bgColor.g>= bgColor.g2-5 &&
		bgColor.b<= bgColor.b2+5 && bgColor.b>= bgColor.b2-5)
	{
		bgColor.r2 = Math.floor(Math.random()*254);
		bgColor.g2 = Math.floor(Math.random()*254);
		bgColor.b2 = Math.floor(Math.random()*254);
	}

	if (bgColor.r<bgColor.r2) {bgColor.r+= bgColor.speed;}
	else{bgColor.r-=bgColor.speed;}

	if (bgColor.g<bgColor.g2) {bgColor.g+= bgColor.speed;}
	else{bgColor.g-=bgColor.speed;}

	if (bgColor.b<bgColor.b2) {bgColor.b+= bgColor.speed;}
	else{bgColor.b-=bgColor.speed;}

	ctx.save();
	ctx.globalCompositeOperation="hard-light";//lighten soft-light hard-light
	ctx.globalAlpha=bgColor.alpha;
	ctx.fillStyle="rgb("+bgColor.r+","+bgColor.g+","+bgColor.b+")";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.restore();
}