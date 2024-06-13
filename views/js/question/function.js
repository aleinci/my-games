function lvlScript() 
{
	if(QuestionLv == 1){question1();}
	if(QuestionLv == 2){question2();}
	if(QuestionLv == 3){question3();}
	if(QuestionLv == 4){question4();}
	if(QuestionLv == 5){question5();}
	if(QuestionLv == 6){question6();}
	if(QuestionLv == 7){question7();}
	if(QuestionLv == 8){question8();}
	if(QuestionLv == 9){question9();}
	if(QuestionLv == 10){question10();}
}

function gamePlay() 
{
	//startGame();
	jugability();
	game();
}

function lvlScene()
{
	if (gameVictory) {victoryGame();}
	if (gameStart) {startGame();}
	if (gameEnd) {endGame();}
}

function media() 
{
	
}

function hud() 
{
	
}

function menu() 
{
	startBtn();
}

function MainMenu() 
{
	mMenu();
}

