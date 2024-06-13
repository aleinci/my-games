var bestTseg 	= document.getElementById("score").innerHTML;


let zeroCombo	= 0;//si es igual a 0 no pasara nada
					//si es igual a 1 sumara el multiplicador y dara punto
					//si es igual a 2 reiniciara el multiplicador y dara puntos

let errLetter	= 0;//si es igual a 0 no pasara nada
					//si es igual a 1 restara el multiplicador de puntos por error

let sce 		= 0;
let score		= 0;
let combo		= 1;
let errMultiS	= 5;

let scoreLetter	= 10;
let scoreErr 	= 100;
let seCount		= 0;
let record = document.getElementById("score").innerHTML;
function Score() 
{
	if(life>0)
	{
		if (zeroCombo == 1) //combo
		{
			if (!mouse) 
			{
			sce+= combo * scoreLetter;
			combo++;
			zeroCombo=0;
		}
			
		}
		else if (zeroCombo == 2) 
		{
			sce*= 0.8;
			combo=1;
			
			zeroCombo=0;
		}



		if (errLetter == 1 && errMultiS>1) 
		{
			errMultiS--;
			errLetter=0;
		}

		if (hiddenWord.join("") == word.split("").join("") && seCount<1)//verificar si son iguales las palabras
		{
			seCount++;
			sce+=scoreErr*errMultiS;
		}
		else if(hiddenWord.join("") != word.split("").join(""))
		{
			seCount=0;
		}


		
		sce=Math.floor(sce);
		score = sce;

		if (sce>=record && life<=0) 
		{
			record=sce;
		}
	}
}




