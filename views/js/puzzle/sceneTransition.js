var sceneTransition = 0;
var sceneCount = 0;
var sceneTT = true;


//SceneT = "yes" si quiero que alla transicion(para cambios de menus) o "no" para
//que no alla ninguna transicion y el cambio sea de inmediato(para pausa) 
//dejar vacio el sceneT se tomara como "no"

var btnChange={
	btnM_G : false,//menu a juego
	btnG_P : false,//juego a pausa
	btnP_G : false,//pausa a juego
	btnP_M : false,//pausa a menu
	btnG_M : false,//juego a menu
	btnM_C : false,//menu a creditos
	btnC_M : false,//creditos a menu
}
function cScene(SceneT) 
{
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

	if (btnChange.btnP_M) //saliendo del juego
	{
		cScene("yes");
	}

	if (btnChange.btnM_G) //iniciando juego
	{
		cScene("yes");
	}
	
	if (btnChange.btnP_G) //jugando
	{
		cScene("no");
	}

	if (btnChange.btnG_P) //pausa
	{
		cScene("no");
	}

	if (btnChange.btnG_M) //pausa
	{
		cScene("yes");
	}
	if (btnChange.btnM_C) //pausa
	{
		cScene("no");
	}
	if (btnChange.btnC_M) //pausa
	{
		cScene("no");
	}
}

function bscChangeAndExit(SceneT) {

	if (btnChange.btnP_M) //pausa a menu
	{
		scene.menuM = true;
		scene.pause = false;
		if (SceneT == "yes" && sceneCount> 102) {btnChange.btnP_M=false;}
		else if (SceneT=="no"){btnChange.btnP_M=false;}
	}

	if (btnChange.btnP_G) // pausa a gaming
	{
		scene.gaming = true;
		scene.pause = false;
		if (SceneT == "yes" && sceneCount> 102) {btnChange.btnP_G=false;}
		else if (SceneT=="no"){btnChange.btnP_G=false;}
	}

	if (btnChange.btnG_P) // gaming a pausa
	{
		scene.pause = true;
		scene.gaming = false;
		if (SceneT == "yes" && sceneCount> 102) {btnChange.btnG_P=false;}
		else if (SceneT=="no"){btnChange.btnG_P=false;}
	}

	if (btnChange.btnM_G) // menu a gaming
	{
		scene.gaming = true;
		scene.menuM = false;
		if (SceneT == "yes" && sceneCount> 102) {btnChange.btnM_G=false;}
		else if (SceneT=="no"){btnChange.btnM_G=false;}
	}

	if (btnChange.btnG_M) // menu a gaming
	{
		scene.menuM = true;
		scene.gaming = false;
		if (SceneT == "yes" && sceneCount> 102) {btnChange.btnG_M=false;}
		else if (SceneT=="no"){btnChange.btnG_M=false;}
	}

	if (btnChange.btnM_C) // menu a gaming
	{
		scene.credits = true;
		scene.menuM = false;
		if (SceneT == "yes" && sceneCount> 102) {btnChange.btnM_C=false;}
		else if (SceneT=="no"){btnChange.btnM_C=false;}
	}
	if (btnChange.btnC_M) // menu a gaming
	{
		scene.menuM = true;
		scene.credits = false;
		if (SceneT == "yes" && sceneCount> 102) {btnChange.btnC_M=false;}
		else if (SceneT=="no"){btnChange.btnC_M=false;}
	}
}

