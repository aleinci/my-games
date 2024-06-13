var vCount = 0;//variable de contador 
var verify=false;//activa la funcion questionVerify
var success= "";//respuesta correcta "yes" respuesta incorrecta "no"
var sxCaIc =0;
function questionVerify() 
{
	vCount++;
	time=false;

	if (vCount> 50)//verificando respuesta
	{
		//===========A============
		if (buttonA.press)
		{
			if (quest.a == quest.correct) 
			{
				buttonA.color = 2;
				success = "yes";
				if(sxCaIc==0){
					sxCaIc=1;
					sfCorrect.play();
				}
			}else
			{
				buttonA.color = 3;
				success = "no";
				if(sxCaIc==0){
					sxCaIc=1;
					sfIncorrect.play();
				}
			}
		}
		//===========B============
		if (buttonB.press)
		{
			if (quest.b == quest.correct) 
			{
				buttonB.color = 2;
				success = "yes";
				if(sxCaIc==0){
					sxCaIc=1;
					sfCorrect.play();
				}
			}else
			{
				buttonB.color = 3;
				success = "no";
				if(sxCaIc==0){
					sxCaIc=1;
					sfIncorrect.play();
				}
			}
		}

		//===========C============
		if (buttonC.press)
		{
			if (quest.c == quest.correct) 
			{
				buttonC.color = 2;
				success = "yes";
				if(sxCaIc==0){
					sxCaIc=1;
					sfCorrect.play();
				}
			}else
			{
				buttonC.color = 3;
				success = "no";
				if(sxCaIc==0){
					sxCaIc=1;
					sfIncorrect.play();
				}
			}
		}

		//===========D============
		if (buttonD.press)
		{
			if (quest.d == quest.correct) 
			{
				buttonD.color = 2;
				success = "yes";
				if(sxCaIc==0){
					sxCaIc=1;
					sfCorrect.play();
				}
			}else
			{
				buttonD.color = 3;
				success = "no";
				if(sxCaIc==0){
					sxCaIc=1;
					sfIncorrect.play();
				}
			}
		}

		if (!buttonA.press && !buttonB.press && !buttonC.press && !buttonD.press) 
		{
			success = "no";
		}
	}else{
		music1.volume=0.1;
		suspense.play();
	}

	if (vCount>200) 
	{
		if (success == "yes") 
		{//resetear valores para pasar al sig nivel
			//victoryGame();
			gameVictory = true;
			//resSuccess();
		}else if (success == "no") 
		{//resetear valores y volver al meno
			//resFailed();
			gameEnd= true;
		}
	}

}