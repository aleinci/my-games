function survivalButtonControllers(){
	shotButton ={
		fire:"",
		joystickF:"",
		move:"",
		joystickM:"",
		speed:"",
	}
	let scale = 0.7;

	shotButton.fire = new GameObject(650,600,0,0,0);
	shotButton.fire.sprite = new Sprite(shotButton.fire, images.android.img);
	shotButton.fire.sprite.alpha=0.5;
	shotButton.fire.transform.scale(scale,scale);
	shotButton.fire.sprite.operation="lighter";
	shotButton.fire.sprite.PixelSize(306, 306);
	shotButton.fire.sprite.Padding(306,0);
	shotButton.fire.sprite.Step(1,0);

	shotButton.joystickF = new GameObject(650,600,0,0,0);
	shotButton.joystickF.sprite = new Sprite(shotButton.joystickF, images.android.img);
	shotButton.joystickF.transform.scale(scale,scale);
	shotButton.joystickF.sprite.alpha=0.7;
	shotButton.joystickF.enable = false;
	shotButton.joystickF.sprite.PixelSize(78, 78);
	shotButton.joystickF.sprite.Padding(612,0);
	shotButton.joystickF.sprite.Step(1,0);

	shotButton.move = new GameObject(150,600,0,0,0);
	shotButton.move.sprite = new Sprite(shotButton.move, images.android.img);
	shotButton.move.sprite.alpha=0.5;
	shotButton.move.transform.scale(scale,scale);
	shotButton.move.sprite.operation="lighter";
	shotButton.move.sprite.PixelSize(306, 306);
	shotButton.move.sprite.Padding(306,0);
	shotButton.move.sprite.Step(0,0);

	shotButton.joystickM = new GameObject(150,600,0,0,0);
	shotButton.joystickM.sprite = new Sprite(shotButton.joystickM, images.android.img);
	shotButton.joystickM.transform.scale(scale,scale);
	shotButton.joystickM.sprite.alpha=0.7;
	shotButton.joystickM.enable = false;
	shotButton.joystickM.sprite.PixelSize(78, 78);
	shotButton.joystickM.sprite.Padding(612,0);
	shotButton.joystickM.sprite.Step(1,0);

	shotButton.speed = new GameObject(700,425,0,0,0);
	shotButton.speed.sprite = new Sprite(shotButton.speed, images.android.img);
	shotButton.speed.transform.scale(0.6,0.6);
	shotButton.speed.sprite.alpha=0.7;
	shotButton.speed.sprite.operation="lighter";
	shotButton.speed.enable = false;
	shotButton.speed.sprite.PixelSize(162, 162);
	shotButton.speed.sprite.Padding(690,0);
	shotButton.speed.sprite.Step(1,0);
	

}

survivalButtonControllers();

function survivalTouchControllers(){


	

	if ( obj.weapon.time <= obj.weapon.maxTime * time.deltaTime) {
		obj.weapon.time++;
	}
	
	speedOutFor();
	render();



	cameraLookToPoint.x=0;
	cameraLookToPoint.y=0;
	obj.laser=false;
	plBody.stateLeg="idle";
	plBody.stateArm="idle";

	/*if(shotButton.joystickM.enable){
		plBody.stateLeg="move";
		plBody.stateArm="move";
	}*/

	for(let i=0; i<Input.touchCount; i++)
	{
		let j = Input.touchPosition[i];


		//let l = Input.touchPosition[i];

		j.using=false;

		if (Input.touchPosition.length > 1) {
			//j = Input.touchPosition[1];
			//l = Input.touchPosition[0];
		}else
		{
			//j = Input.touchPosition[0];
			//ssl = Input.touchPosition[1];
		}

		speedInFor(j);

		if (j.x < canvas.width/2) {move(j,i);}
		if (j.x > canvas.width/2){shoot(j,i);}
		
		if(shotButton.joystickM.enable){
				plBody.stateLeg="move";
				plBody.stateArm="move";
			}
		
			
	}

	for(i in Input.touchPosition){
		let j = Input.touchPosition[i];
		
		if (!Input.touch[i]) {
			j.using=false;
			shotButton.joystickM.enable=false;
			shotButton.joystickF.enable=false;
		}
	}
	



	//FUNCTIONS **************************
	function render()
	{
		shotButton.fire.sprite.renderer();
		shotButton.joystickF.sprite.renderer();

		shotButton.move.sprite.renderer();
		shotButton.joystickM.sprite.renderer();

		shotButton.speed.sprite.renderer();
		
		shotButton.joystickF.transform.position(shotButton.fire.x, shotButton.fire.y);
		shotButton.joystickM.transform.position(shotButton.move.x, shotButton.move.y);
	}

	function move(input,i)
	{
		let multiplier = 1;
		if (obj.specialStats.enable) {multiplier = obj.specialStats.spd;}
		
		if(input.x < canvas.width/2 && !shotButton.joystickM.enable && input.using==false)
		{
			input.using=true;
			shotButton.joystickM.enable=true;
		}

		if (shotButton.joystickM.enable ) 
		{
			input.using=true;
			shotButton.joystickM.transform.position(input.x, input.y);

			let speed= obj.uSpeed.speed;
			let x= (obj.speed * speed) * obj.speedX * multiplier * Math.sin(LookAt(shotButton.move, shotButton.joystickM));
			let y= (obj.speed * speed) * obj.speedY * multiplier * Math.cos(LookAt(shotButton.move, shotButton.joystickM));

			 obj.transform.translate(x,-y);

			 let dir = LookAt(shotButton.move, shotButton.joystickM)/Math.PI*180;

			

			let  up = dir > 0 && dir < 45 || dir < 360 && dir > 315;
			let down = dir > 135 && dir < 225;
			let right = dir > 45 && dir < 135;
			let left = dir > 225 && dir < 315;

			if (up) {//up
			 	//plBody.stateArm="move"; 
				//plBody.stateLeg="move";

				if (left) {moveLegNO();}
				else if (right){moveLegNE();}
				else{moveLegNS();}
			}
			if (down) {//down
				//plBody.stateArm="move"; 
				//plBody.stateLeg="move";

				if (left) {moveLegNE();}
				else if (right){moveLegNO();}
				else{moveLegNS();}
			}

			if (right) {//right
				//plBody.stateArm="move"; 
				//plBody.stateLeg="move";

				if (up) {moveLegNE();}
				else if (down){moveLegNO();}
				else{moveLegEO();}
			}

			if (left) {//left
				//plBody.stateArm="move"; 
				//plBody.stateLeg="move";

				if (up) {moveLegNO();}
				else if (down){moveLegNE();}
				else{moveLegEO();}
			}
			
		}


	}

	function shoot(input,i)
	{
		obj.laser=true;

		if (input.x > canvas.width/2 && !shotButton.joystickF.enable && input.using==false && !shotButton.speed.enable)
		{
			input.using=true;
			shotButton.joystickF.enable=true;

		}

		//if (shotButton.joystickF.enable ) 
		//{

			input.using=true;
			shotButton.joystickF.transform.position(input.x,input.y);

				

			if(!shotButton.speed.enable){	
				obj.transform.rotate(LookAt(shotButton.fire, shotButton.joystickF));
				plBody.stateArm="attack";

				cameraLookToPoint.x = -(((shotButton.joystickF.x - shotButton.fire.x)-0.5)/(shotButton.fire.sprite.getSize().width/2 - shotButton.joystickF.sprite.getSize().width));/////////////
				cameraLookToPoint.y = -(((shotButton.joystickF.y - shotButton.fire.y)-0.5)/(shotButton.fire.sprite.getSize().height/2 - shotButton.joystickF.sprite.getSize().height));
			}

			
			if( shotButton.joystickF.enable && obj.weapon.time >obj.weapon.maxTime * time.deltaTime && obj.weapon.ammo > 0){
				obj.weaponSfx.currentTime=0;
				obj.weaponSfx.play();
				obj.weapon.time=0;
				obj.weapon.ammo--;
				obj.maxBullet--;
				obj.weapon.generate();
				
			}
		//}
		if (cameraLookToPoint.x > 1) {cameraLookToPoint.x=1;}
		if(cameraLookToPoint.x < -1) {cameraLookToPoint.x=-1;}
		
		if (cameraLookToPoint.y > 1) {cameraLookToPoint.y=1;}
		if(cameraLookToPoint.y < -1) {cameraLookToPoint.y=-1;}
		//shotButton.joystickF.transform.position(shotButton.fire.x + cameraLookToPoint.x * 70, shotButton.fire.y + cameraLookToPoint.y * 70);
	}

	function speedInFor(input)
	{
		let a = 40;
		let x = shotButton.speed.x - input.x;
		let y = shotButton.speed.y - input.y;
			
		if (a> Math.sqrt((x*x)+(y*y)) && obj.uSpeed.stamina > 0 && !shotButton.joystickF.enable) {
			obj.uSpeed.stamina--;
			obj.uSpeed.speed = obj.uSpeed.maxSpeed;
			shotButton.speed.enable=true;
		}
	}



	function speedOutFor() 
	{
		if (obj.uSpeed.stamina < obj.uSpeed.maxStamina && !shotButton.speed.enable){
			obj.uSpeed.stamina++;
		}
		shotButton.speed.enable=false;
		obj.uSpeed.speed = 1;
	}
}



