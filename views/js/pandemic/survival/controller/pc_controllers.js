let cameraLookToPoint = { x:0, y:0 , distance:125}

//let nb = Infinity;
function shootPCControllers()
{
	let multiplier = 1;
	let speed = obj.uSpeed.speed;

	if (obj.specialStats.enable) {multiplier = obj.specialStats.spd;}

	cameraLookToPoint.x = (((Input.mousePosition.x + canvas.width/2)-0.5)/(canvas.width/2))-2;
	cameraLookToPoint.y = (((Input.mousePosition.y + canvas.height/2)-0.5)/(canvas.height/2))-2;
	
	
	//move
	plBody.stateLeg="idle";
	plBody.stateArm="idle";
	if (Input.GetKey["w"]) {
		obj.transform.translate(0,-(obj.speed * speed) * obj.speedX * multiplier);
		plBody.stateArm="move"; 
		plBody.stateLeg="move"; 

		if (Input.GetKey["a"]) {moveLegNO();}
		else if (Input.GetKey["d"]){moveLegNE();}
		else{moveLegNS();}
		
	}
	if (Input.GetKey["s"]) {
		obj.transform.translate(0,(obj.speed * speed) * obj.speedX * multiplier);
		plBody.stateArm="move"; 
		plBody.stateLeg="move"; 
	
		if (Input.GetKey["a"]) {moveLegNE();}
		else if (Input.GetKey["d"]){moveLegNO();}
		else{moveLegNS();}
	}
	if (Input.GetKey["a"]) {
		obj.transform.translate(-(obj.speed * speed) * obj.speedY * multiplier,0); 
		plBody.stateArm="move"; 
		plBody.stateLeg="move"; 

		if (Input.GetKey["w"]) {moveLegNO();}
		else if (Input.GetKey["s"]){moveLegNE();}
		else{moveLegEO();}
	}		
	if (Input.GetKey["d"]) {
		obj.transform.translate((obj.speed * speed) * obj.speedY * multiplier,0); 
		plBody.stateArm="move"; 
		plBody.stateLeg="move"; 

		if (Input.GetKey["w"]) {moveLegNE();}
		else if (Input.GetKey["s"]){moveLegNO();}
		else{moveLegEO();}
	}

	if (Input.GetKey[32] && obj.uSpeed.stamina > 0) {//speed******
		obj.uSpeed.stamina--;
		obj.uSpeed.speed = obj.uSpeed.maxSpeed;
	}else{
		if (obj.uSpeed.stamina < obj.uSpeed.maxStamina && Input.GetKey[32]==false){
			obj.uSpeed.stamina++;
		}
		obj.uSpeed.speed = 1;
	}




	//Fire*********************
	obj.laser=false;
	
	if (obj.weapon.time <= obj.weapon.maxTime * time.deltaTime) 
	{

		obj.weapon.time++;
	}else if(Input.mouseFire[0] && obj.weapon.time >obj.weapon.maxTime * time.deltaTime && obj.weapon.ammo > 0)
	{
		plBody.stateArm="attack";
		obj.weaponSfx.currentTime=0;
		obj.weaponSfx.play();
		//Instantiate();
		obj.weapon.time=0;
		obj.weapon.ammo--;
		obj.maxBullet--;
		obj.weapon.generate();
		
		
	}
	if (Input.mouseFire[0]) {obj.laser=true;}
	
	obj.transform.rotate(LookAt(obj, camera.screenToWorld(Input.mousePosition.x ,Input.mousePosition.y )))
}

function instanceController()
{
	if (device=="pc" && obj.state !="death") {
		shootPCControllers();
	}else if(device=="android" && obj.state !="death"){
		survivalTouchControllers();
		timeStart.start=true;
	}
}

