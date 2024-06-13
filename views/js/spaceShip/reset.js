function reinicio() 
{
	play={
		estado:"vivo",
		flip:1,
		modo:"fuego",
		modoN:0,
		DelayM:0,
		changeM:false,
		x:200,
		y:200,
		speedX:0,
		speedY:0,
		speed:3,
		width:45,
		height:28,
		gravity:0.20,
		gravitySpeed:0,
		accelerate:-3.5,
		accelerateD:0.5,
		maxJump:1,
		peso:0,
		spX:1,
		spY:1,
		ang:0,
	}

	for(i in obs1)
	{
		delete obs1[i];
	}

	aGravity=true;

	touchPlay = false;
	touchCount = 0;

	velocityO = 0;

	puntos = 0;

	count = 50;

	me = 0;
	
	movingB = 0;

	save = "false";
	
	saveTime=0;

	rvCount=0;
	invVelocity =false;

	//music reset


	if (!retry) 
	{
		music1.pause();
	   	music1.currentTime = 0;

	   	music2.pause();
	   	music2.currentTime = 0;

	   	music3.pause();
	   	music3.currentTime = 0;

	   	music4.pause();
	   	music4.currentTime = 0;

	   	music5.pause();
	   	music5.currentTime = 0;

	   	music6.pause();
	   	music6.currentTime = 0;

	   	music7.pause();
	   	music7.currentTime = 0;

	   	music8.pause();
	   	music8.currentTime = 0;

	   	music9.pause();
	   	music9.currentTime = 0;

	   	music10.pause();
	   	music10.currentTime = 0;
 	}

 	retry=false;
}