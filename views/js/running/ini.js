let camera = new Camera(ctx);
let mode="menu";
let dataLoading=0;
let device ="";

class Start extends MonoBehaviour{

	Start(){
		InstantiateSaveProgress();
		//extractData();
		//Start_mMenu();
		//InstantiatePlayer();
		resolution.smoothing=true;
	}

	Update(){
		resolution.resizeCanvas();
		Time.Fstart();
		//mantener tamaño
		//resolution.WIDTH = resolution.CANVAS_WIDTH;
		//resolution.HEIGHT = resolution.CANVAS_HEIGHT;
		if (Assets.assetsLoaded === Assets.assetsToLoad.length && !Assets.press.enable) {
				
			if (Assets.alpha > 0) {Assets.alpha-=0.1;}
		

			if(mode=="menu"){
				main_menu.update();
			}
			else if(mode=="shop"){

				shop_menu.update();
			}
			else if(mode=="credits"){

				credits_menu.update();
			}
			else if(mode=="pause"){
			
				pause_menu.update();
			}
			else if (mode=="playing") {
					
				let	gm = game();
			}	
			Time.Fend();
			cP_Cursor.update();

		}
		

		if(Assets.alpha > 0){
			Assets.LoadingScreen();
			if (dataLoading == 0) { dataLoading = 1; }
			
			if (dui == undefined) { extractData(); return;}
			
			if (Assets.assetsLoaded === Assets.assetsToLoad.length && dataLoading == 1){
				InstantiateSaveProgress();
				dataLoading=2;
				
				Start_mMenu();
				Instantiate_particleMmenuBtn();
			}
		}

	}
}

function game(){
	
		//Time.Fstart();
		if (player.state != "death") {
			startMusic(musicPlaying[musicPRandom]);
			volumeSfx(musicPlaying[musicPRandom], 0.7);
			stopMusic(sound.victory1);
			stopMusic(sound.victory2);
		}else{
			stopMusic(musicPlaying[musicPRandom])
		}
		
		
		camera.begin();
			backgroundUpdate();
		
			//playerUpdate();
			movement.update();
			pl.update();
			sMoney.update();
			sEnemy01.update();
			sEnemy02.update();
			sEnemy03.update();
			sEnemy04.update();
			sEnemy05.update();
			cP_money.update();
			cP_magnet.update();
			i_invincible.update();
			i_magnet.update();
			i_extraL.update();
			i_rainMoney.update();

			

			if (pl.upgrade.hyperSpeed != "0") {i_hyperSpeed.update();}
				
			updateRainM_FX();
			cP_ExtraL.update();
			cP_Invincible.update();
			cP_EnemyDeath.update();
			cP_Bomb.update();
			cP_TDecrease.update();

		camera.end();

		if(player.state=="death") {death_menu.update();}
		
		hudUpdate();
		updateStartP();
		

		//Time.Fend();
		
}

start = new Start();


