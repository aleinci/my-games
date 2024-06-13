class Player
{
	constructor(x,y,w,h,r)
	{
		this.obj = new GameObject(x,y,w,h,r);
		this.stepX={i:0,m:2};
		this.imgScale=2.5;
		this.obj.loadMove={current:0, max: 0.5,}
		this.obj.newPos = [-100,0,100];
		this.obj.pos = 1;
		this.obj.spd = 5;
		this.obj.speed = 5;//increase speed in hud.js
		this.obj.maxSpeed = 5;
		this.obj.minSpeed = 2;
		this.obj.physics={
				x:0,
				speed:7,
				maxSpeed:7,
				friction:0.8,
		}
		//this.obj.time = 20;
		this.obj.time = {current:50, extraTime:30, distance:150, extraDis:150, extraC:1.0, extraMax:2};
		this.obj.state = "live";

		this.upgrade={
			invincible:dui[0],
			invincibility:[5,7,10],
			extralife:dui[1],
			life:[1,2],
			magnetTime:dui[2],
			magnet:[8,13],
			rMoneyTime:dui[3],
			rainMoney:[5,7,10],

			//buy
			hyperSpeed:dui[4],
		}

		this.obj.invincibility = 0;
		this.obj.maxInvincibility = this.upgrade.invincibility[this.upgrade.invincible];
		this.obj.extraLife = 0;

		this.obj.camera ={
			shaking:{x:0,y:0, px:5, time:0, max:0.3}
		}
	}

	playerMove()
	{
		let p = this.obj;

		p.loadMove.current+=Time.deltaTime;

		p.physics.x *= p.physics.friction;
		p.physics.speed = lerp(p.physics.speed, p.physics.maxSpeed,0.1);
		p.rotate = lerp(p.rotate, 0, 0.05);
		if (Input.GetKey["a"] && p.pos > 0 || Input.GetKey[37] && p.pos > 0 ) {
			//p.pos--;
			//p.loadMove.current = 0;
			p.rotate = lerp(p.rotate, -25*Math.PI/180, 0.05);
			p.physics.x = -p.physics.speed;
		}
		if (Input.GetKey["d"] && p.pos < 2 || Input.GetKey[39] && p.pos < 2 ) {
			//p.pos++;
			//p.loadMove.current = 0;
			p.rotate = lerp(p.rotate, 25*Math.PI/180, 0.05);
			p.physics.x = p.physics.speed;
		}

		//p.x = lerp(p.x, p.newPos[p.pos], 0.1);

		//p.transform.translate(0,-p.speed);

		this.touchPlayerMove();

		p.transform.translate(p.physics.x,-p.speed);

		let cam = {
			x: (0) + this.obj.camera.shaking.x,
			y: (p.y-(300)) + this.obj.camera.shaking.y,
		}
		
		if (p.y < camera.viewport.top+800) {camera.moveTo(cam.x,cam.y);}
		
		if (p.x >= 260) {p.x = 260;}
		else if(p.x <= -260){p.x = -260;}

	}

	draw()
	{
		let i = images.player.img;

		this.stepX.i+=0.2;

		if (this.stepX.i>this.stepX.m) {this.stepX.i = 0;}

		CreateImage(i, i.width/2, 0, i.width/2, i.height, 
			this.obj.x, this.obj.y, i.width, i.height, 
			Math.floor(this.stepX.i), 0, this.imgScale, this.imgScale*1.2, 1, this.obj.rotate);

		//this.obj.Draw("color", "lightblue");
	}

	touchPlayerMove()
	{
		let p = this.obj;
		for(let i=0; i<Input.touchCount; i++)
		{
			let j = Input.touchPosition[i];

			if (j.x <= canvas.width/2) {
				 p.rotate = lerp(p.rotate, -25*Math.PI/180, 0.05);
	             p.physics.x = -p.physics.speed;
	        }else{
	        	p.rotate = lerp(p.rotate, 25*Math.PI/180, 0.05);
	        	p.physics.x = p.physics.speed;
	        }
			
		}
	}

	hit()
	{
		if (this.obj.invincibility <=0) 
		{
			if(this.obj.extraLife <= 0){
				//this.obj.state = "death";
				//this.obj.speed *= 0.1;
				if (playerHub.distance.current < 450) {
					player.time.current -= 2;

				}else{
					player.time.current -= 5;
				}

				cP_TDecrease.spawm(player.x,player.y);
				this.obj.physics.speed *= 0.5;
				this.obj.spd -= this.obj.speed;
				this.obj.camera.shaking.time = this.obj.camera.shaking.max;

				//death_menu.save=0;
			}
			else
			{
				this.obj.extraLife--;
				this.addInvincibility(2);
			}
		}
	}

	addInvincibility(time)
	{
		this.obj.invincibility = time;
	}

	invincibilityPlayer()
	{
		if (this.obj.invincibility > 0 && this.obj.state != "death") {
			this.obj.state="invincible";
			this.obj.invincibility-=Time.deltaTime;
			startMusic(sound.invincible);
			sound.invincible.sfx.volume=0.6;
			if (sound.invincible.sfx.currentTime >= sound.invincible.sfx.duration-0.2) {
				sound.invincible.sfx.currentTime=0;
			}
		}else{
			//evita que se actualize infinitamente a estado vivo aun que muera
			if (this.obj.invincibility < 1 && this.obj.invincibility >-1) {
				this.obj.invincibility=-2;
				this.obj.state="live"; 
			}	
		}
	}

	hyperSpeed()
	{
		hyperSpd.speed*=0.9;

		if (hyperSpd.time > 0 ) 
		{
			
			hyperSpd.time-=Time.deltaTime;
		
			hyperSpd.speed = hyperSpd.max;

		}
		else{//si es menor o igua la 0
			hyperSpd.enable = false;
			if (hyperSpd.time < 1) {
				if(hyperSpd.time !=-2){this.obj.state="live";}
				hyperSpd.time = -2;
				
			}	
		}
	}

	update()
	{
		this.cameraHit();
		this.checkpoint();

		if (this.obj.state!="death" && startPlay) 
		{
			this.obj.spd = lerp(this.obj.spd, this.obj.maxSpeed, 0.02);

			this.invincibilityPlayer();
			if (this.upgrade.hyperSpeed != "0") {this.hyperSpeed();}
			
			this.playerMove();
		}
		this.draw();
	}

	checkpoint()
	{
		if(startPlay){
			if (this.obj.time.current > 0) {
				this.obj.time.current-=Time.deltaTime;
			}

			if (playerHub.distance.current >= this.obj.time.distance) {
				this.obj.time.distance += this.obj.time.extraDis * this.obj.time.extraC;
				this.obj.time.current += this.obj.time.extraTime;

				distancePH.start = playerHub.distance.current;
				distancePH.goal = this.obj.time.distance - playerHub.distance.current; 
				
				if (this.obj.time.extraC < this.obj.time.extraMax) {
					this.obj.time.extraC += 0.1;
				}
			}

			if (this.obj.time.current <= 0) {
				this.obj.state="death";
				
			}
		}
	}

	cameraHit()
	{
		if (this.obj.camera.shaking.time > 0) 
		{
			this.obj.camera.shaking.time -= Time.deltaTime;
			this.obj.camera.shaking.x = Random(0, this.obj.camera.shaking.px);
			this.obj.camera.shaking.y = Random(0, this.obj.camera.shaking.px);	
		}
		else{
			this.obj.camera.shaking.x = 0;
			this.obj.camera.shaking.y = 0;
		}
	}
}

function InstantiatePlayer(){
	pl = new Player(0,300,50,50,0);
	player = pl.obj;
}

function DestroyPlayer(){
	delete pl;
}