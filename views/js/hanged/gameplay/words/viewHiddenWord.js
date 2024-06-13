var word;			//toma una palabra del array wordList
var mouseCancel = false;
var mcCount=0;


function game()
{

	if (mouseCancel) 
	{
		mcCount++;
	}
	if (mcCount>=30) {
		mouseCancel=false;
		mcCount=0;
		RandomRestart();
	}
	
	randomizedWord();
	//word="mountain";
	word = wordList[randomTypeWord][randomWord];
//if (hiddenWord.length != word.length && mcCount>=30) {console.log("que pedo que pedo xdxd");space();}

	ctx.save()
		ctx.fillStyle="#78b162";
		ctx.font="25pt Arial";
		ctx.textAlign="center";
		//ctx.fillText("letra precionada", canvas.width/2, canvas.height/2-40);
		//ctx.fillText(letra, canvas.width/2, canvas.height/2);
		ctx.fillText("Clue!", canvas.width/2, canvas.height/2-150);
		if (two>=maxTwo) 
		{
			ctx.fillText(type, canvas.width/2, canvas.height/2-100);	
		}


		for (var e = 0; e < word.length; e++)//bucle para sustituir los espacios "_" por las letras
		{
			var text = word[e];
			

			if (letra == text && mouse && !mouseCancel) 
			{
				lifeCount++;
				if (hiddenWord[e]=="_") {zeroCombo=1;}
				hiddenWord[e]=letra;
			}
			
			ctx.textAlign="center";
			if (two>=maxTwo) 
			{
				ctx.fillText(hiddenWord[e], canvas.width/2-25*(hiddenWord.length-1)/2+(25*e), canvas.height/2+75);
			}
			

		}


		if (hiddenWord.join("") == word.split("").join("") && !keyTouch)//verificar si son iguales las palabras
		{
			mouseCancel=true;
			victoryAnim.inAnim=true;
		}

		//subtractLife();
		for(i in keyboard)
	{
		var k = keyboard[i];

		if (cX > changeKeyB.x &&
			cX < changeKeyB.x+changeKeyB.width &&
			cY > changeKeyB.y &&
			cY < changeKeyB.y+changeKeyB.height &&
			mouse) {}
			else{
				if(life>0 && enabled){subtractLife();}
			}
	}
	ctx.restore();
	drawM();
	Score();
	hiddenWord = hiddenWord.filter(item => item);

	
}

function space() {//espacio antes de adivinar las letras
	for (var i = 0; i < word.length; i++) {
		hiddenWord.push("_");
	}
}

function subtractLife()
{
	if (lifeCount< 1 && !word.includes(letra) && mouse) 
	{

		errLetter=1;
		//zeroCombo=2;
		lifeCount++;
		life--;
		if (combo>1) {defeatAnim.inAnim=true;}
		incorrect.push(letra);
		if (incorrect.length >5) {
			delete incorrect[0];
			incorrect = incorrect.filter(item => item);
		}
		//console.log(letra+" : "+text)
	}
	if (!mouse) 
	{
		lifeCount=0;
	}
	for (var i=0; i<incorrect.length; i++) {
			var txt = incorrect[i];
			//if (letra== txt) {delete incorrect[incorrect.length-1]}	
			//console.log(i);
		}
}