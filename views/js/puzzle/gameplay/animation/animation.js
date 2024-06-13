animRandom={
	on:true,
	time:0,
	back:0,
	blur:new GameObject(canvas.width/2, canvas.height/2, 450, 450, 0),
	random:0,
	select:false,
}

function animated()
{
	
	
	if (animRandom.time==0) 
	{
		empty.x=450;
		empty.y=450;
		empty.speed=150;
		animatedAlpha(0.3);
	}
	if (animRandom.time<1) {
		empty.x=550;
		empty.y=550;
	}
	animRandom.time++;
	
	
	
	//animRandom.random = Math.floor(Math.random()*4)+1;
	if (!animRandom.select) {animRandom.random = Math.floor(Math.random()*4)+1;}

	if(animRandom.random != animRandom.back){	
		//animRandom.select=true;
		animatedMovement(animRandom.random);
	}
	
	

	if (animRandom.time>100) 
	{
		empty.speed=10;
		animRandom.on=false;
		animatedAlpha(1);
		//animRandom.blur.filter="none";
	}
}

function animatedMovement(random)
{
	switch(random)
	{
		case 1:
			animatedRandom(-1,0,0,0);//-x
			animRandom.back=3;
		break;
		case 2:
			animatedRandom(0,-1,0,0);//-y
			animRandom.back=4;
		break;
		case 3:
			animatedRandom(0,0,1,0);//+x
			animRandom.back=1;
		break;
		case 4:
			animatedRandom(0,0,0,1);//+y
			animRandom.back=2;
		break;
	}
	return animRandom.back;
}

function animatedRandom(x,y,w,h)
{
	for(this.i in mindBreak)
	{
		let j = mindBreak[this.i];

		if (empty.object.x== empty.x && empty.object.y == empty.y) {
			if (empty.object.x + empty.object.width+w> j.object.x&&
				empty.object.x+x< j.object.x + j.object.width &&
				empty.object.y + empty.object.height+h> j.object.y&&
				empty.object.y+y< j.object.y + j.object.height && !j.select)
			{
				if (x==-1){empty.x-=empty.object.width;}
				if (w==1) {empty.x+=empty.object.width;}
				if (y==-1){empty.y-=empty.object.width;}
				if (h==1) {empty.y+=empty.object.width;}
				j.select=true;
			}
		}

		if (empty.object.x== empty.x && empty.object.y == empty.y) {animRandom.select=false;}
	}
}

function animatedAlpha(alpha) 
{
	for(this.i in mindBreak)
	{
		let j = mindBreak[this.i];

		j.object.alpha=alpha;
	}
	empty.object.alpha=alpha;
}