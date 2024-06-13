function gameplay() 
{
	sound.music.volume=0.5;
	sound.music.play();
	
	if (life>0) {changeKeyBoard();}
	keyboardDraw();
	if (!mouseCancel && life>0 && enabled)
	{
		keyPress();
	}
	game();

	Animate();

	if (life<=0) {scoreBoard();}
}

function Animate()
{
	if (lifeAnim.inAnim) {lifeAnimation();}
	if (comboAnim.inAnim) {comboAnimation();}
	if (victoryAnim.inAnim) {victoryAnimation();}
	if (defeatAnim.inAnim) {defeatAnimation();}
}

function menuMn()
{
	mainMenu();
}