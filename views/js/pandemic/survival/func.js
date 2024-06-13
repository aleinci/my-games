function Gameplay()
{
	if (sound.music1.sfx.currentTime >= sound.music1.sfx.duration*0.98) {sound.music1.sfx.currentTime=0}
	
	soundSFXVol();
	stopMusic(sound.music3);
	stopMusic(sound.musicMM);
	startMusic(sound.music1);
	startMusic(sound.music2);

	cameraSettings();

	loadBlock();


	enemyCollisionUpdate();

	camera.begin();
	
	
		Map();
		
		drawBlock();
		loadPlayer();
		loadEnemy();
		

		updateSurvivalItems();

		
		

		

			
	camera.end();

	if (obj.danger && obj.invincibility<=0) {
		hitCamera();
	}
	if (obj.specialStats.enable) {
		specialCamera();
		
	}
	//***************** Screen *******************
	CursorRender();
	updateSurvivalHud();
}



function soundSFXVol(){
	volumeSfx(sound.footstepG1, 0.5);
	volumeSfx(sound.footstepG2, 0.5);
	volumeSfx(sound.footstepG3, 0.5);
	volumeSfx(sound.footstepC1, 0.5);
	volumeSfx(sound.footstepC2, 0.5);
	volumeSfx(sound.footstepC3, 0.5);

	volumeSfx(sound.hitTo1, 0.3);
	volumeSfx(sound.hitTo2, 0.3);
	volumeSfx(sound.hitTo3, 0.3);
}
