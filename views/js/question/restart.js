function restart() 
{
	QuestionLv = 1;

	maxCount = 0;
	success= "";
	verify= false;
	
	time = true;
	seg = maxseg;

	life = 2;

	textSize =25;
	textOpacity = 0;

	soundGO=0;

	pressButton = false;
	
	buttonA.press=false;
	buttonB.press=false;
	buttonC.press=false;
	buttonD.press=false;

	buttonA.color = 0;
	buttonB.color = 0;
	buttonC.color = 0;
	buttonD.color = 0;

	gameStart = true;
	gameVictory = false;
	gameEnd = false;
	noPlay = false;

	gsCount = 0;
	gvCount = 0;
	geCount = 0;

	geMove=0;
	conftsCount=0;

	totalTimeAct= true;
	tSeg =0;
	tMin =0;
	tSmD ="0";

	save = true;
	
	for (i in confetes){
		delete confetes[i];
	}
	sxCaIc =0;
}

function resSuccess()
{
	buttonA.color = 0;
	buttonB.color = 0;
	buttonC.color = 0;
	buttonD.color = 0;
	buttonA.press=false;
	buttonB.press=false;
	buttonC.press=false;
	buttonD.press=false;
	vCount = 0;
	seg = maxseg;
	time=true;
	verify = false;
	textSize =25;
	textOpacity = 0;
	if (QuestionLv<10) 
	{
		QuestionLv++;
	}
	maxCount = 0;
	pressButton = false;
	questionFailed=false;

	for (i in confetes){
		delete confetes[i];
	}
	sxCaIc =0;
}

function resFailed()
{
	buttonA.color = 0;
	buttonB.color = 0;
	buttonC.color = 0;
	buttonD.color = 0;
	buttonA.press=false;
	buttonB.press=false;
	buttonC.press=false;
	buttonD.press=false;
	vCount = 0;
	time=true;
	verify = false;
	if (life>0) {
		QuestionLv = QuestionLv;
		life--;
	}else{
		QuestionLv = 1;//reemplazar por funcion que mande al menu de inicio
		life = 2;
	}
	maxCount = 0;
	pressButton = false;
	seg = maxseg;
	textSize =25;
	textOpacity = 0;

	questionFailed=true;

	for (i in confetes){
		delete confetes[i];
	}
	sxCaIc =0;
}