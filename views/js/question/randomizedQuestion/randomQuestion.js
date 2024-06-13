var randomized;//var randomizar las preguntas
var maxCount = 0;//var cuenta par detener el randomizado de la pregunta
var QuestionLv = 1;//var nivel 


var questionFailed = false;//si es 0 se actualiza la variable questionErr para sabes en que pregunta esta y 1 deja de actualizar
var questionErr;//evita que salga la misma pregunta

function randomQuest(lvl) 
{
	
	if (maxCount<5)//aumentar numero para pregunta random
	{
		maxCount++;
	}

	if (maxCount<2) //randomizando pregunta
	{
		randomized = Math.floor(Math.random()*lvl.length);
	}

	if (questionErr == randomized && questionFailed) 
	{
		textOpacity=0;
		maxCount=0;
	}else
	{
		textOpacity=1;
		questionFailed=false;
		questionErr = randomized;
	}
}


