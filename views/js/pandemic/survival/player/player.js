let obj=new GameObject(0,0,0,0,0);
//let bullet=[];
let cursor = new GameObject(0,0,0,0,0);
//https://forums.unrealengine.com/t/tutorial-bullet-hell/42273

function startPlayerObject(){
	cursor.sprite = new Sprite(cursor, images.screen.cursor.img);
	cursor.transform.scale(0.1,0.1);
	obj.point = 0;
	obj.record=0;
	obj.oro = 0;

	obj.state="live";
	obj.laser=false;
	obj.x = 0;
	obj.y = 0;
	obj.danger = false;
	obj.invincibility = 0;
	obj.transform.scale(0.35,0.35)
	obj.cooldown = 5;
	obj.speed = 10;
	obj.speedX = 1;
	obj.speedY = 1;
	obj.sprite=new Sprite(obj,img)
	obj.life = 15;
	obj.maxLife = 15;
	obj.shield = 0;
	obj.maxShield = 10;
	obj.defense = 5;
	obj.specialStats ={
		enable:false,
		spd: 1.3,
		dmg: 1.5,
		cam: 1.5,
		combo:1,
		maxCombo:3,
		time:0,
		maxTime:60,
	}
	obj.attack=5;
	obj.power = 0;
	obj.maxPower = 100;
	obj.bullet =[];
	obj.weapon = setWeapon.stand;
	obj.weaponSfx = sound.weapon1.sfx;

	obj.collider = new BoxCollider(obj);

	obj.uSpeed ={
		stamina:120,
		maxStamina:120,
		minStamina:0,
		speed:1,
		maxSpeed:1.6,
		alpha:{current:0, max:0},
	}
	obj.randomW ={//random weapon
		current:0,
		max:2000,
	}
}

function playerUpdate()
{
	if (obj.weapon.ammo == Infinity) {
		obj.randomW.current++;
		if (obj.randomW.current >= obj.randomW.max) {
			obj.weapon = setWeapon.shootGun;
			obj.weapon.ammo = obj.weapon.maxAmmo;
		}
	}else{ obj.randomW.current=0; }

	obj.specialStats.time++;

	if (obj.specialStats.time >= obj.specialStats.maxTime) 
	{
		obj.specialStats.time = obj.specialStats.maxTime;
		obj.specialStats.combo = 1;
	}

	//***********************

	if (obj.power >= obj.maxPower && !obj.specialStats.enable) {
		obj.power == obj.maxPower;
		obj.specialStats.enable = true;
	}

	if (obj.specialStats.enable && obj.power > 0) {
		obj.power-=0.1;
		//createExplosion(obj.x, obj.y, 40,Random(0,360),["blue","lightblue", "white"]);
		//triangle();
	}
	else{obj.specialStats.enable=false;}
}

function playerVision(other)
{
	width = (camera.viewport.width/2)*1.5;
	height = (camera.viewport.height/2)*1.5;

	if (obj.x - width < other.x + other.sprite.getSize().width/2 &&
		obj.x + width > other.x - other.sprite.getSize().width/2 &&
		obj.y - height < other.y + other.sprite.getSize().height/2 &&
		obj.y + height > other.y - other.sprite.getSize().height/2) {
		return true;
	}
}

function playerVisionMap(x,y,width,height)
{
	cwidth = (camera.viewport.width/2)*1.5;
	cheight = (camera.viewport.height/2)*1.5;

	if (obj.x - cwidth < x + (width/2)/2 &&
		obj.x + cwidth > x - (width/2)/2 &&
		obj.y - cheight < y + (height/2)/2 &&
		obj.y + cheight > y - (height/2)/2) {
		return true;
	}
}

function collision(a,b)
{
	let listSound = [sound.hitE1, sound.hitE2, sound.hitE3];
	
	function resetSound(){
		for(let i in listSound){
			let j = listSound[i];

			j.sfx.currentTime=0;
		}
	}

	for(i in a){
		let j = a[i];
		for(o in b){

			
			let l = b[o];	

			if (CircleCollider(j.obj.x, j.obj.y, j.sprite.getSize().width/2,   l.obj.x, l.obj.y, l.obj.sprite.getSize().width/2)) {

				if(!obj.specialStats.enable)
				{
					obj.power += obj.weapon.point * obj.specialStats.combo;

					if (obj.specialStats.combo < obj.specialStats.maxCombo) 
					{
						obj.specialStats.time=0;
						obj.specialStats.combo++;
					}
				}
				for(let i = 0; i<2; i++){
					createExplosion(j.obj.x,j.obj.y, Random(8,10)*0.1,j.obj.rotate/Math.PI*180+180,["red","red", "red"]);
					
				}
				resetSound();
				listSound[Random(0,2)].sfx.play();
				DamageToEnemy(l);
				delete a[i];
			}
		}
	}
}

function playerInvincibility()
{
	if (obj.invincibility > 0)
	{
		obj.invincibility-= time.deltaTime*0.002;
	}
}

function addPlayerInvincibility(times)
{
	obj.invincibility = times;
}


function DamageToEnemy(enemy){
	
	let multiplier = 1;
	if (obj.specialStats.enable) {multiplier = obj.specialStats.dmg;}

	let setDamage = ((obj.attack +  obj.weapon.damage)  * multiplier) /  enemy.defense;

	enemy.life-=setDamage;
	//console.log(setDamage);
}

function DamageToPlayer(enemy)
{
	let listSound=[sound.hitE1, sound.hitE2, sound.hitE3];

	function resetSound(){
		for(let i in listSound){
			let j = listSound[i];

			j.sfx.currentTime=0;
		}
	}

	let setDamage = enemy.attack / obj.defense;

	if (obj.invincibility <= 0)
	{
		hudSurvival.life2.hit=true;

		resetSound();
		listSound[Random(0,2)].sfx.play();

		if (obj.shield > 0) {
			obj.shield -= Math.floor(setDamage);
		}else{
			obj.life -= Math.floor(setDamage);
		}
	}

	//console.log(setDamage);
}

function playerLaserPoint()
{
	ctx.save();
	ctx.fillStyle="red";
	ctx.globalAlpha=1;
	ctx.translate(obj.x, obj.y);
	ctx.rotate(obj.rotate);
	ctx.fillRect(2,0, 1,-camera.distance);
	ctx.globalCompositeOperation="lighter";
	ctx.fillRect(0,0, 5,-camera.distance);
	ctx.restore();
}

function CursorRender()
{
	if (document.body.style.cursor=="none" && device=="pc") {
		cursor.transform.position(Input.mousePosition.x,Input.mousePosition.y);
		if(device=="pc"){cursor.sprite.renderer();}
	}
	else if(document.body.style.cursor=="" && device=="pc"){
		document.body.style.cursor="none";
	}
	else {document.body.style.cursor="";}
}

function playerStamina()
{
	if (obj.uSpeed.stamina < obj.uSpeed.maxStamina) {obj.uSpeed.alpha.max = 1;}
	else{obj.uSpeed.alpha.max = 0;}

	obj.uSpeed.alpha.current = lerp(obj.uSpeed.alpha.current, obj.uSpeed.alpha.max, 0.2);

	ctx.save();
		ctx.translate(-330, 450);
		ctx.globalAlpha = obj.uSpeed.alpha.current;
		ctx.drawImage(images.stamina.img,
			0, 0, images.stamina.img.width/2, images.stamina.img.height,
			(images.stamina.img.width/2)/-2, images.stamina.img.height/-2, images.stamina.img.width/2, images.stamina.img.height);

		ctx.drawImage(images.stamina.img,
			images.stamina.img.width/2, 0, images.stamina.img.width/2, (obj.uSpeed.stamina / obj.uSpeed.maxStamina)*images.stamina.img.height,
			(images.stamina.img.width/2)/-2, images.stamina.img.height/-2, images.stamina.img.width/2, (obj.uSpeed.stamina / obj.uSpeed.maxStamina)*images.stamina.img.height);
		ctx.restore();
}

let plBody ={

	stateArm:"idle",
	stateLeg:"idle",
	view:"",
	change:false,
	weapon:  {step:1, ix:547,  iy:0, width:547, height:244, rotate:90*Math.PI/180, point:{x:547/-2, y:244/-2}, x:190, y:50},
	head:  {step:1, ix:750,  iy:0, width:352, height:408, rotate:0, point:{x:352/-2, y:408/-2}, x:0, y:0+500},
	body:  {step:1, ix:0,    iy:0, width:466, height:388, rotate:0, point:{x:466/-2, y:388/-2}, x:0, y:-200+500},

	armL:{step:1, ix:466,  iy:0, width:139, height:409, rotate:0, point:{x:139/-2, y:0},	 	x:-210, y:-50+500, anim:{current:0, num:1, min:-30, max:35,}},
	armR:{step:1, ix:605,  iy:0, width:145, height:410, rotate:0, point:{x:145/-2, y:0},	 	x:210, y:-50+500},

	legL:  {step:1, ix:1102, iy:0, width:174, height:281, rotate:0, point:{x:174/-2, y:0}, 	  	x:-120, y:-300+500, anim:{current:0, num:1, min:-1000, max:1000,}},
	legR:  {step:1, ix:1368, iy:0, width:171, height:281, rotate:0, point:{x:171/-2, y:0}, 	  	x:90, y:-300+500, anim:{current:0, num:-1, min:-100, max:100,}},

	footL: {step:1, ix:1276, iy:0, width:92,  height:165, rotate:0, point:{x:92/-2, y:0}, 	  	x:-100, y:-500+500, anim:{current:0, num:1, min:-30, max:35,}},
	footR: {step:1, ix:1539, iy:0, width:89,  height:174, rotate:0, point:{x:89/-2, y:0}, 	  	x:90, y:-500+500, anim:{current:0, num:1, min:-30, max:35,}},
}

function playerAnim()
{
	plBody.weapon.step = obj.weapon.weaponNum;
	ctx.save();
		ctx.translate(obj.x, obj.y);
		ctx.scale(0.3,0.3);
		ctx.rotate(obj.rotate);
		draw(images.player.img, plBody.footR);
		draw(images.player.img, plBody.footL);
		draw(images.player.img, plBody.legR);
		draw(images.player.img, plBody.legL);
		draw(images.player.img, plBody.body);
		draw(images.player.img, plBody.armL);
		draw(images.player.img, plBody.armR);
		drawW(images.weaponP.img, plBody.weapon);
		draw(images.player.img, plBody.head);
		playerStamina();
	ctx.restore();

	

	function draw(img,gb) {
		ctx.save();
			ctx.translate(gb.x, gb.y);
			ctx.scale(1,-1);
			ctx.rotate(gb.rotate);
			ctx.drawImage(img,
				gb.ix * gb.step, gb.iy, gb.width, gb.height,
				gb.point.x, gb.point.y, gb.width, gb.height);
		ctx.restore();
	}
	function drawW(img,gb) {
		ctx.save();
			ctx.translate(gb.x, gb.y);
			ctx.scale(0.5,-0.5);
			ctx.rotate(gb.rotate);
			ctx.drawImage(img,
				gb.ix * gb.step, gb.iy, gb.width, gb.height,
				gb.point.x, gb.point.y, gb.width, gb.height);
		ctx.restore();
	}


	function moveArm()
	{
		if (plBody.stateArm=="idle" && !Input.mouseFire[0]) 
		{
			plBody.armL.rotate=0;
			plBody.armR.rotate=0;
			plBody.armL.anim.current=0;
			plBody.weapon.x=150;
			plBody.weapon.rotate=120*Math.PI/180;
		}
		if (plBody.stateArm=="move") 
		{
			let listSoundStep=[sound.footstepG1, sound.footstepG2, sound.footstepG3];

			function currentStep(){
				for(let i in listSoundStep){
					let j = listSoundStep[i];

					j.sfx.currentTime=0;
				}
			}
			if (obj.x <= -3489 || obj.x >= 3489 || obj.y <= -2145 || obj.y >= 2145) {
				listSoundStep=[sound.footstepC1, sound.footstepC2, sound.footstepC3];
			}

			if (plBody.armL.anim.current >= plBody.armL.anim.max) {plBody.armL.anim.num=-1; currentStep(); listSoundStep[Random(0,2)].sfx.play();}
			if (plBody.armL.anim.current <= plBody.armL.anim.min) {plBody.armL.anim.num=1; currentStep(); listSoundStep[Random(0,2)].sfx.play();}
			if(plBody.stateArm == "move" || plBody.stateLeg == "move"){
				plBody.armL.anim.current += (obj.uSpeed.speed*3.2)*plBody.armL.anim.num; //3.2*
			}
			//console.log(plBody.armL.anim.current)
			
				plBody.armL.rotate=0;
				plBody.armR.rotate=0;
				plBody.weapon.x=150;
				plBody.weapon.rotate=120*Math.PI/180;
				//plBody.armL.rotate+=(plBody.armL.anim.num*Math.PI/180);
				plBody.armL.rotate=(plBody.armL.anim.current*Math.PI/180)/2;
				plBody.armR.rotate=(plBody.armL.anim.current*Math.PI/180)/2;


				plBody.weapon.x-=plBody.armL.anim.current*4;
				//plBody.armR.rotate+=(plBody.armL.anim.num*Math.PI/180);
			
			//lerp(plBody.armL.rotate, point, 0.01);
		}

		
	}moveArm();

	function moveLeg()
	{
		if (plBody.stateLeg=="idle") 
		{

			plBody.legL.y=-300+500;
			plBody.legR.y=-300+500;
			plBody.legL.rotate=0;
			plBody.legR.rotate=0;

			plBody.footL.y=-500+500;
			plBody.footR.y=-500+500;
			plBody.footL.x=-100;
			plBody.footR.x=90;
		}
		else if(plBody.stateLeg=="move" )
		{
			
			if(plBody.view == "N"){	
				plBody.legL.y-=plBody.armL.anim.num*5;
				plBody.legR.y+=plBody.armL.anim.num*5;
	
				plBody.footL.y-=plBody.armL.anim.num*10;
				plBody.footR.y+=plBody.armL.anim.num*10;
			}
			else if (plBody.view == "E") {
				plBody.legL.rotate=(plBody.armL.anim.current*Math.PI/180)/2;
				plBody.legR.rotate=-(plBody.armL.anim.current*Math.PI/180)/2;

				plBody.footL.x-=plBody.armL.anim.num*8;
				plBody.footR.x+=plBody.armL.anim.num*8;
			}

		}
	}moveLeg();

	function attack(){
		if (Input.mouseFire[0] || shotButton.joystickF.enable || plBody.stateArm=="attack") {
			plBody.armL.rotate=(-20*Math.PI/180);
			plBody.armR.rotate=(20*Math.PI/180);
			plBody.weapon.rotate=(90*Math.PI/180);
			plBody.weapon.x=0;
		}
	}attack();
}

function moveLegNS()
{
	let min1 = 0;
	let midA = 359;
	let midB = 314;
	let max1 = 45;

	let min2 = 125;
	let max2 = 225;
	let rotate = Math.floor(obj.rotate / Math.PI*180);

	if (rotate >= min1 && rotate <= max1 ||
		rotate >= midB && rotate <= midA ||
		rotate >= min2 && rotate <= max2) {
		plBody.view = "N";
		if (!plBody.true) {resetAnim()}
		plBody.true = true;
	}else{
		if (plBody.true) {resetAnim()}
		plBody.true = false;
		plBody.view = "E";
	}
}

function moveLegEO()
{
	let min1 = 45;
	let max1 = 125;

	let min2 = 225;
	let max2 = 314;
	let rotate = Math.floor(obj.rotate / Math.PI*180);

	if (rotate >= min1 && rotate <= max1 ||
		rotate >= min2 && rotate <= max2) {
		if (!plBody.true) {resetAnim()}
		plBody.view = "N";
		plBody.true = true;
	}else{
		if (plBody.true) {resetAnim()}
		plBody.true = false;
		plBody.view = "E";
	}
}

function moveLegNO()
{
	let min1 = 90;
	let max1 = 180;

	let min2 = 270;
	let max2 = 360;
	let rotate = Math.floor(obj.rotate / Math.PI*180);

	if (rotate >= min1 && rotate <= max1 ||
		rotate >= min2 && rotate <= max2) {
		if (!plBody.true) {resetAnim()}
		plBody.view = "N";
		plBody.true = true;
	}else{
		if (plBody.true) {resetAnim()}
		plBody.true = false;
		plBody.view = "E";
	}
}
function moveLegNE()
{
	let min1 = 0;
	let max1 = 90;

	let min2 = 180;
	let max2 = 270;
	let rotate = Math.floor(obj.rotate / Math.PI*180);

	if (rotate >= min1 && rotate <= max1 ||
		rotate >= min2 && rotate <= max2) {
		if (!plBody.true) {resetAnim()}
		plBody.view = "N";
		plBody.true = true;
	}else{
		if (plBody.true) {resetAnim()}
		plBody.true = false;
		plBody.view = "E";
	}
}

function resetAnim()
{
	plBody.armL.anim.current=0;
	//plBody.weapon.x=150;


	plBody.legL.y=-300+500;
	plBody.legR.y=-300+500;
	plBody.legL.rotate=0;
	plBody.legR.rotate=0;

	plBody.footL.y=-500+500;
	plBody.footR.y=-500+500;
	plBody.footL.x=-100;
	plBody.footR.x=90;
}