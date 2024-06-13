let camera = new Camera(ctx);
let camera2 = new Camera(ctx);
let device = ""// "pc" or "mobile"
let state = "open";



class Start extends MonoBehaviour
{
	Awake()
	{
		survivalGameStart();
		
	}
	Update()
	{
		if (state=="open") {
			deltaTimeStart();
			resolution.resizeCanvas();

			
			
			if (Assets.assetsLoaded === Assets.assetsToLoad.length && !Assets.press.enable) {
				
				if (Assets.alpha > 0) {Assets.alpha-=0.1;}
				survivalGameUpdate();
			}

			if(Assets.alpha > 0){
				Assets.LoadingScreen();
			}
			
			deltaTimeEnd();
		}
	}

	
}


window.onblur = function() {
  state="close";
  stopMusic(sound.musicMM);
  stopMusic(sound.music1);
  stopMusic(sound.music2);
  stopMusic(sound.music3);
  if (gameState.playing) {
  	gameState.playing=false;
  	gameState.pauseM=true;
  }
}
window.onfocus = function() {
   state="open";
}

new Start();