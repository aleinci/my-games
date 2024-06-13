var pressButton = false;

function jugability() {
if (gaming) {btnStart.step=1;}
	if (cX > btnStart.x &&//pausa
		cX < btnStart.x + btnStart.width &&
		cY > btnStart.y &&
		cY < btnStart.y + btnStart.height &&
		mouse && gaming && !noPlay && !gameEnd && !gameVictory) {
		btnG_P=true;
		btnStart.step=0;
		totalTimeAct =false;
		
	}
	

	if (cX > buttonA.x &&//boton A
		cX < buttonA.x + buttonA.width &&
		cY > buttonA.y &&
		cY < buttonA.y + buttonA.height && mouse &&
		!pressButton && !noPlay) 
	{
		vCount = 0;
		pressButton = true;
		verify= true;
		buttonA.press=true;
		buttonA.color = 1;
	}

	if (cX > buttonB.x &&//boton B
		cX < buttonB.x + buttonB.width &&
		cY > buttonB.y &&
		cY < buttonB.y + buttonB.height && mouse &&
		!pressButton && !noPlay) 
	{
		vCount = 0;
		pressButton = true;
		verify= true;
		buttonB.press=true;
		buttonB.color = 1;
	}

	if (cX > buttonC.x &&//boton C
		cX < buttonC.x + buttonC.width &&
		cY > buttonC.y &&
		cY < buttonC.y + buttonC.height && mouse &&
		!pressButton && !noPlay) 
	{
		vCount = 0;
		pressButton = true;
		verify= true;
		buttonC.press=true;
		buttonC.color = 1;
	}

	if (cX > buttonD.x &&//boton D
		cX < buttonD.x + buttonD.width &&
		cY > buttonD.y &&
		cY < buttonD.y + buttonD.height && mouse &&
		!pressButton && !noPlay) 
	{
		vCount = 0;
		pressButton = true;
		verify= true;
		buttonD.press=true;
		buttonD.color = 1;
	}

	if (seg==0) 
	{
		verify= true;
	}
}