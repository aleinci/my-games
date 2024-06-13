let Background = new GameObject(0,0,0,0,0);
let BackG = {width:0, height:0};
let timeStart ={current:0, limit:50, start:false};

let ready = new Text("", canvas.width/2,canvas.height/2,62,"Scare Arms","#022a44","center", true, "white", 4);


function survivalGameStart() {
	startPlayerObject();

		Background.sprite = new Sprite(Background,bg);
		Background.transform.scale(0.5,0.5);
		Background.sprite.bilinear=false;
}

function survivalGameUpdate() {
	
	
	
	if (gameState.playing) {
		/////////////////TIEMPO DE INICIO
		

		/////////////////

		Gameplay();

			if (timeStart.start) {
				timeStart.current++;
			}else{
				if (Input.mouseFire[0]) {
					timeStart.start=true;
				}
				let imgC= images.screen.control.img;
				
				ctx.save();
					ctx.globalAlpha=0.4;
					ctx.fillStyle="black";
					ctx.fillRect(0,0,canvas.width,canvas.height);
				ctx.restore();

				CreateImage(imgC, 0, 0, imgC.width, imgC.height, canvas.width/2, canvas.height/2, 700, 700, 0, 0, 1, 1, 1);
			}

			if (timeStart.current < timeStart.limit && gameState.playing) {
				if (timeStart.current < timeStart.limit/1.3 && timeStart.start) {
					sound.hitE1.sfx.play()
					sound.hitE2.sfx.play()
					ready.text="Ready";
				}else{
					sound.hitE1.sfx.play()
					sound.hitE2.sfx.play()
					sound.hitE3.sfx.play()
					ready.text="Go";
				}
				if (timeStart.start) {ready.Draw();}
				
				enemy.enabled = false;
				enemy.b.length = 0;
				enemy.basic2.length = 0;
				enemy.c.length = 0;
				enemy.d.length = 0;
				enemy.e.length = 0;
				enemy.count= 0;

			}else{enemy.enabled=true;}
		
		if (obj.state=="death") {deathMenu.start();}

		instanceController();
	}

	if(gameState.pauseM){
		pauseMenu.start();
	}
	
	if (gameState.mainM) {
		if(creditsM.enable){
			creditsM.start();
		}else{
			mainMenu.start();
		}

	}
	
changeScene.change(changeScene.load.on, changeScene.load.off, changeScene.load.method);

	
		//shootPCControllers();
	


}