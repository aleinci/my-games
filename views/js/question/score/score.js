var bestTime 	= 0;
var bestLvl		= document.getElementById("lvl").innerHTML;

var bestTmin 	= document.getElementById("min").innerHTML;
var bestTseg 	= document.getElementById("sec").innerHTML;
var bTSMD		= "0";

let soundGO = 0;

//var pLvl = document.getElementById("lvl").innerHTML;
//var pMin = document.getElementById("min").innerHTML;
//var pSeg = document.getElementById("sec").innerHTML;



var arrColor = [0, 1, 2, 3, 4, 5];
var colorBol= true;
var colAlpha2=0;

var color1 = 0;
var color2 = 1;

var scrBtn = {
	x:canvas.width/2-150,
	y:canvas.height/2-50+315,
	width: 300,
	height: 100,
}


function scoreB(){

	bestScore();

	//funcionamiento de la tabla
	var width 	= 700;
	var height 	= 500;
	var x 		= canvas.width/2-width/2;
	var y 		= canvas.height/2-height/2;


	if (color1 > arrColor.length-1) {color1=0;}
	if (color2 > arrColor.length-1) {color2=0;}


	if (colorBol) {
		//colAlpha1-=0.01;
		colAlpha2+=0.01;
	}else{
		//colAlpha1+=0.01;
		colAlpha2-=0.01;
	}


	if (colAlpha2<=0) {
		color2+=1;
	}

	if (colAlpha2>=1) {
		color1+=1;
	}


	if (colAlpha2>1) {colAlpha2=1; colorBol= false;}
	if (colAlpha2<0) {colAlpha2=0; colorBol= true;}


	//dibujar tabla
	ctx.save();
	ctx.drawImage(score, score.width/6 *(arrColor[color1]) , 0, score.width/6, score.height,
		x, y, width, height);
	ctx.restore();

	ctx.save();
	ctx.globalAlpha = colAlpha2;
	ctx.drawImage(score, score.width/6 *(arrColor[color2]) , 0, score.width/6, score.height,
		x, y, width, height);
	ctx.restore();

	ctx.save();
	ctx.fillStyle="black";
	ctx.font ="35pt Calibri";
	ctx.textAlign="center";

	//ACTUAL
	ctx.fillText(totalT, canvas.width/2+200, canvas.height/2-71);
	ctx.fillText(QuestionLv-1, canvas.width/2+200, canvas.height/2-10);

	//BEST
	ctx.fillText(bestTime, canvas.width/2+200, canvas.height/2-71 + 161);
	ctx.fillText(bestLvl, canvas.width/2+200, canvas.height/2-10 + 161);
	ctx.restore();

	ctx.save();
	ctx.drawImage(btPause, 0, btPause.height/3*1, btPause.width, btPause.height/3,
		scrBtn.x, scrBtn.y, scrBtn.width, scrBtn.height);
	ctx.restore();
	

	//ir al menu
	if (cX > scrBtn.x &&
		cX < scrBtn.x + scrBtn.width &&
		cY > scrBtn.y &&
		cY < scrBtn.y + scrBtn.height && mouse) 
	{
		click2.play();
		if (gameEnd) {geCount= 200;}
		if (gameVictory) {gvCount= 270;}
	}
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////


var newRecord = false;
var save = true;
function bestScore()
{
	if (save) {
		//SI Question lvl es igual
		if (QuestionLv-1 == bestLvl) 
		{
			if (tMin == bestTmin) 
			{
				if (tSeg < bestTseg) 
				{console.log("saved");
					bestTmin = tMin;
					bestTseg = tSeg;
					newRecord = true;

					document.getElementById("lvl").innerHTML = bestLvl;
					document.getElementById("min").innerHTML = bestTmin;
					document.getElementById("sec").innerHTML = bestTseg;

					
					ajaxPost();
				}
			}

			if (tMin < bestTmin) 
			{console.log("saved");
				bestTmin = tMin;
				bestTseg = tSeg;
				newRecord = true;

				document.getElementById("lvl").innerHTML = bestLvl;
				document.getElementById("min").innerHTML = bestTmin;
				document.getElementById("sec").innerHTML = bestTseg;

				
				ajaxPost();
			}
		}


		//SI Question lvl es mayor
		if (QuestionLv -1> bestLvl) 
		{console.log("saved");
			bestLvl 	= QuestionLv-1;
			bestTmin 	= tMin;
			bestTseg 	= tSeg;
			newRecord 	= true;

			document.getElementById("lvl").innerHTML = bestLvl;
			document.getElementById("min").innerHTML = bestTmin;
			document.getElementById("sec").innerHTML = bestTseg;

			
			ajaxPost();
		}

		if (newRecord) {
			if (soundGO==0) {
				soundGO=1;
				sfNewRecord.play();
			}
		}else{
			if (soundGO==0) {
				soundGO=1;
				sfGameOver.play();
			}
		}

	}




	//total tiempo 

	if (bestTseg<10-1) {
		bTSMD="0";
	}else{
		bTSMD ="";
	}

	bestTime = bestTmin + ":" + bTSMD + bestTseg;

	save = false;

	
	
}