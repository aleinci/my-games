function Instantiate_DeathMenu()
{
	death_menu = {
		play:new Button(canvas.width/2 + 140  ,600, 140, 70,  images.pMenuBtn.img.width/2, 0, images.pMenuBtn.img.width/2, images.pMenuBtn.img.height, 0, 0, true),
		exit:new Button(canvas.width/2 - 140  ,600, 140, 70,  images.pMenuBtn.img.width/2, 0, images.pMenuBtn.img.width/2, images.pMenuBtn.img.height, 1, 0, true),
		update:function(){},
		save:-1,
		saveEnable:false,
		record:false,
	};
	

	death_menu.play.img=images.goMenuBtn.img;
	death_menu.exit.img=images.goMenuBtn.img;


	death_menu.play.event=()=>{
		Instantiate_Game();
		extractData();
		mode="playing";
	}

	death_menu.exit.event=()=>{
		extractData();
		mode="menu";
	}

	death_menu.update=()=>
	{
		if (!death_menu.saveEnable) {
			death_menu.saveEnable = true;
			death_menu.save = 0;
		}

		if (death_menu.save==0) {
			death_menu.save=1;
			save.enable=true;
			save.progress();
		}
		ctx.save();
		ctx.globalAlpha=0.5;
		ctx.fillRect(canvas.width/2-500/2,canvas.height/2-500/2, 500,500);
		ctx.restore();

		death_menu.play.update();
		death_menu.exit.update();

		let space ="                    ";
		CreateText("Game Over", canvas.width/2, 220, 36, "MyFont", "white", "center", 1);
		CreateText("Score:", canvas.width/2-180, 320, 24, "MyFont", "white", "", 1);
		CreateText("Record:", canvas.width/2-180, 400, 24, "MyFont", "white", "", 1);
		CreateText("Money:", canvas.width/2-180, 480, 24, "MyFont", "white", "", 1);

		CreateText(playerHub.distance.current,  canvas.width/2+100, 320, 24, "MyFont", "white", "", 1);
		CreateText(save.values.record, 			canvas.width/2+100, 400, 24, "MyFont", "white", "", 1);
		CreateText(parseInt(dataP[3]) + playerHub.money, 	canvas.width/2+100, 480, 24, "MyFont", "white", "", 1);

		if (death_menu.record) {cP_Record.update();}

		function music()
		{
			if (death_menu.record) 
			{

				if (sound.victory1.sfx.currentTime <= sound.victory1.sfx.duration-0.2) {
	
					startMusic(sound.victory1);
	
					volumeSfx(sound.victory2, 0);
					sound.victory2.sfx.currentTime=0;
					
					stopMusic(sound.victory2);
				}
				else
				{
					if (sound.victory2.sfx.volume < 0.95) {
						sound.victory2.sfx.volume += 0.01;
					}else{sound.victory2.sfx.volume = 1;}

					sound.victory2.sfx.play();
					startMusic(sound.victory2);


				}
			}
			else
			{
				if (sound.victory1.sfx.currentTime <= sound.victory1.sfx.duration-0.2) {
	
					startMusic(sound.victory1);
				}
			}
		}
		music();
		
	}
}
