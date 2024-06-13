function SAStart()
{
	ui.best = document.getElementById("score").innerHTML;
}

let saveSound=0;


function Save() 
{	
	if (ui.score > ui.best) 
	{
		if (saveSound==0) {
			sound.gameOver2.play();
			saveSound=1;
		}
		ajaxPost();
		document.getElementById("score").innerHTML = ui.score;
		ui.best=ui.score;
	}else{
		if (saveSound==0) {
			sound.gameOver1.play();
			saveSound=1;
		}
	}
	
}