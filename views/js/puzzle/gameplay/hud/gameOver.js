function GOStart() {
	gameOver =
	{
		alpha:0,
		background:new GameObject(canvas.width/2, canvas.height/2, 600,500,0),
		//retry:new Button(ws,0,0,170,70, ws.width/2, ws.height/2,ws.width/2, ws.height/2, true),
		exit:new Button(img.btn_pauseRM,canvas.width/2-85, 700,170,70, img.btn_pauseRM.width/2, img.btn_pauseRM.height/2, img.btn_pauseRM.width/2, img.btn_pauseRM.height/2, false),
		
		score:new Text("2", canvas.width/2, 465, 40, "Arial", "#257f2f"),
		scoreR:new Text("4", canvas.width/2, 553, 40, "Arial", "#257f2f"),
	}
}

function GameOver ()
{
	if (gameOver.alpha<1) {gameOver.alpha+=0.05;}
	
	gameOver.background.alpha = gameOver.alpha;
	gameOver.score.alpha = gameOver.alpha;
	gameOver.scoreR.alpha = gameOver.alpha;
	gameOver.exit.alpha = gameOver.alpha;

	gameOver.exit.stepX = 1;
	
	gameOver.background.Draw("image", img.gameOver);
	//gameOver.retry.Draw();
	gameOver.exit.Draw();
	gameOver.exit.event=()=>
	{
		btnChange.btnG_M=true;
		FullQuit();
		sound.click.play();
	}


	gameOver.score.text=ui.score;
	gameOver.score.Draw();

	gameOver.scoreR.text=ui.best;
	gameOver.scoreR.Draw();

	Save();	
}