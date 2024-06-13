var sceneTransition = 0;
var sceneCount = 0;
var sceneTT = true;


//SceneT = "yes" si quiero que alla transicion(para cambios de menus) o "no" para
//que no alla ninguna transicion y el cambio sea de inmediato(para pausa) 
//dejar vacio el sceneT se tomara como "no"


var btnM_G = false,//menu a juego
	btnG_P = false,//juego a pausa
	btnP_G = false,//pausa a juego
	btnP_M = false,//pausa a menu
	btnG_M = false;//menu a juego

function cScene(SceneT) {

	

	if (SceneT == "yes")
	{
		sceneCount++;

		//cerrar escena
		if (sceneTransition<= canvas.height && sceneCount<20) {
			sceneTransition+=50;
			
		}else if (sceneTransition != 850 && sceneCount>20 && sceneCount< 35){
			sceneTransition = 850;
		}
		//console.log(SceneE+" "+ SceneQ);
		//cambio de escena
		if (sceneCount > 40 ) 
		{
			bscChangeAndExit(SceneT);
		}


		//mostrar escena
		if (sceneTransition>= 0 && sceneCount>80 && sceneCount< 100) {
			sceneTransition-=50;
			
		}else if (sceneTransition != 0 && sceneCount>100 && sceneCount < 105){
			sceneTransition = 0;
		}

		//cerrar funcion de cambio de scena
		if (sceneCount> 102) {
			//bscExit();
			sceneCount = 0;
		}
	}else if (SceneT == "no")
	{
		bscChangeAndExit(SceneT);
		//bscExit();
	}

ctx.save();
ctx.fillStyle = "black";
ctx.fillRect(-5, -canvas.height - 200 + sceneTransition, canvas.width+10, canvas.height+200)
ctx.restore();

}
function btnSceneChange() {

	if (btnP_M) //saliendo del juego
	{
		cScene("yes");
	}

	if (btnM_G) //iniciando juego
	{
		cScene("yes");
	}
	
	if (btnP_G) //jugando
	{
		cScene("no");
	}

	if (btnG_P) //pausa
	{
		cScene("no");
	}

	if (btnG_M) //pausa
	{
		cScene("yes");
	}
}

function bscChangeAndExit(SceneT) {
	if (btnP_M) //pausa a menu
	{
		menuM = true;
		start = false;
		if (SceneT == "yes" && sceneCount> 102) {btnP_M=false;}
		else if (SceneT=="no"){btnP_M=false;}
	}

	if (btnP_G) // pausa a gaming
	{
		gaming = true;
		start = false;
		if (SceneT == "yes" && sceneCount> 102) {btnP_G=false;}
		else if (SceneT=="no"){btnP_G=false;}
	}

	if (btnG_P) // gaming a pausa
	{
		start = true;
		gaming = false;
		if (SceneT == "yes" && sceneCount> 102) {btnG_P=false;}
		else if (SceneT=="no"){btnG_P=false;}
	}

	if (btnM_G) // menu a gaming
	{
		gaming = true;
		menuM = false;
		if (SceneT == "yes" && sceneCount> 102) {btnM_G=false;}
		else if (SceneT=="no"){btnM_G=false;}
	}

	if (btnG_M) // menu a gaming
	{
		menuM = true;
		gaming = false;
		if (SceneT == "yes" && sceneCount> 102) {btnG_M=false;}
		else if (SceneT=="no"){btnG_M=false;}
	}
}

