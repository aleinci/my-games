let scene={
	menuM:true,
	credits:false,
	pause:false,
	gaming:false,
}
let state ="open";

let started;

class Start extends MasterClass
{
	Awake()
	{
		GOStart();
		MMStart();
		AAStart();
		UIStart();
		PUStart();
		SAStart();
		CDStart();
	}

	Start()
	{
		StartGP();
	}


	Update()
	{
		if (state=="open") {
	
			if (scene.gaming) 
				{
					GamePlay();
					if(animAnswer.enabled)
					{
						AnimAnswer();
					}
				}
			if (scene.pause) {Pause();}
			if (scene.menuM) {MainMenu();}
			btnSceneChange();
		}		
	}
}

window.addEventListener("touchend", function()//full screen android
{
	if( document.body.requestFullscreen)
	{
		document.body.webkitRequestFullscreen();
	}
});


window.onblur = function() {
  state="close";
  stopMusic(playMusic);
  if (scene.gaming) {
  	GameTimeStop();
  	scene.gaming=false;
  	scene.pause=true;
  	
  }
}
window.onfocus = function() {
   state="open";
}


