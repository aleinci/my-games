var randomTypeWord;		//escoje palabra aleatoria
var randomWord;
var one			=0;//en 1 frame genera los espacios para adivinar la palabra
var two			=0;//en 2 frame se genera un numero aleatorio para randomTypeWord
var maxTwo = 5;
var type="";
function randomizedWord () {
	if (two<maxTwo && !mouse) //palabra random
	{
		if (mouse) {two=0;}
		two++;
		randomTypeWord= Math.floor(Math.random()*wordList.length);
		randomWord= Math.floor(Math.random()*wordList[randomTypeWord].length);
	}
	else
	{
		if (one<1 && !mouse) //crear espacios con "_"
		{
			space();
			one++;
			if (life<maxLife) {
				//life++;
				//lifeAnim.inAnim=true;
			}
		}
	}
	typeWord();
}
function RandomRestart()
{
	errMultiS = 5;
	hiddenWord.length = 0;
	incorrect.length = 0;
	one=0;
	two=0;
}

function typeWord()
{
	switch(randomTypeWord)
	{
		case 0: type="it's an animal"; break
		case 1: type="found in nature"; break
		case 2: type="found in all cities"; break
	}
}