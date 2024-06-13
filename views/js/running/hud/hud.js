function InstantiateHud()
{
	playerHub={
		distance:{current:0, currentMeter:0, meter:10, 
			Cspd:1, Cmax:2.5, CMspd:0, Mspd:500
		},
		money:0,
		pause:new Button(canvas.width-50,50, 70, 70, images.pauseBtn.img.width/2, 0, images.pauseBtn.img.width/2, images.pauseBtn.img.height, 0, 0, true),
	}

	playerHub.pause.img=images.pauseBtn.img;
	playerHub.pause.event=()=>{
		mode="pause";
	}
}

function DestroyHud()
{
	delete playerHub;
}

function hudDraw()
{
	CreateImage(images.distance.img, 0, 0, 16,16, 50, 50-7.5, 34, 34, 0, 0, 1, 1, 1, 0);	
	CreateText(playerHub.distance.current,70,50,15,"MyFont","white", "left",1, true, "black", 5);

	CreateImage(images.clock.img, 0, 0, 16,16, 50, 90-7.5, 40, 40, 0, 0, 1, 1, 1, 0);
	CreateText(parseInt(player.time.current),70,90,15,"MyFont","white", "left",1, true, "black", 5);

	CreateImage(images.money.img, 0, 0, 16,16, 50, 130-7.5, 30, 30, 0, 0, 1, 1, 1, 0);
	CreateText(playerHub.money,70,130,15,"MyFont","white", "left",1, true, "black", 5);
	
}

function hudDistance()
{
	if(player.state != "death")
	{
		let p = playerHub.distance;

		p.currentMeter+= player.speed*0.1;

		if (p.currentMeter > p.meter ) {
			p.currentMeter -= p.meter;
			p.current++;
		}

		if (p.Cspd < p.Cmax) 
		{
			p.CMspd += player.speed*0.1;

			if (p.CMspd > p.Mspd) 
			{
				p.CMspd -= p.Mspd;
				p.Cspd+=0.05;
			}
			
		}
		player.speed = (player.spd + hyperSpd.speed) * p.Cspd;//increase speed
	}
}


function hudUpdate()
{
	hudDistance();
	playerHub.pause.update();
	if (player.invincibility > 0) {	
		HudInvincibility();
	}

	if (hyperSpd.enable) {HudHyperSpeed();}
	hudDraw();
	distancePH.update();

	hpoCamera.update();
}