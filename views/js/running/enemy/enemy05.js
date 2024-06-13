function InstantiateEnemy05()
{
	sEnemy05 = new Enemy5(0, images.bomb.img, 500);
}

function DestroyEnemy05()
{
	delete sEnemy05;
}

class Enemy5 extends Enemy
{
	constructor(speed, img, spawm)
	{
		super(speed, img, spawm);
		this.rCollision = 30;
	}

	createEnemy=(x,y)=>
	{
		this.enemy.push({
			obj:new GameObject(x, y, 50,50,0),
			state:"live",
			speed:this.speed,
			death:{
				time:{current:0, max:50,},
				direction:0,
				speed:7,
				angle:30,
			},
			addons:{
				bomb:{
					x:x,
					y:y,
					radio:120,
					time:0.4,
					enable:false,
					explosion:false,
					stepX:0,
					stepY:0,
					stp:[[4,0], [2,1]],
					animSpeed:0.1,
					spark:[],
				},
				shockwave:{
					x:x,
					y:y,
					radio:140,
					push:4,
					time:1,
				}
				
			},
		});
		let j = this.enemy[this.enemy.length-1]; 
	}

	createSpark(i,j)
	{
		let posY;
		let step = Math.floor(j.addons.bomb.stepX);
		if (step == 0 || step == 4) { posY = 40; }
		else if(step == 1 || step == 3) { posY = 50; }
		else { posY = 60; }

		j.addons.bomb.spark.push({
			x:j.obj.x+10,
			y:j.obj.y-posY,
			w:Random(3,5),
			h:Random(4,7),
			r:Random(0,360)*Math.PI/180,
			speed:Random(4,7),
			life:0.05,
			sColor:Random(0,2),
			color:["white","yellow","orange"],
		});
	}

	drawSpark(i,j)
	{
		for(let o in j.addons.bomb.spark)
		{
			let p = j.addons.bomb.spark[o];

			this.moveSpark(i,j,o,p);

			ctx.save();
			ctx.globalCompositeOperation="lighting";
			ctx.translate(p.x, p.y);
			ctx.rotate(p.r);
			ctx.fillStyle=p.color[p.sColor];
			ctx.fillRect(p.w/-2, p.h/-2, p.w, p.h);
			ctx.restore();

		}
	}

	moveSpark(i,j,o,p)
	{
		p.x += p.speed * Math.sin(p.r);
		p.y -= p.speed * Math.cos(p.r);

		//delete
		p.life-=Time.deltaTime;
		if (p.life<=0) {delete j.addons.bomb.spark[o];}
	}

	draw(i,j,img)
	{
		if (!j.addons.bomb.enable) 
		{
			j.addons.bomb.animSpeed = 0.1;
			j.addons.bomb.stepX += j.addons.bomb.animSpeed;
			j.addons.bomb.stepY = 0;
			
			if (j.addons.bomb.stepX > j.addons.bomb.stp[0][0]) {
				j.addons.bomb.stepX=0;
			}
		}
		else
		{
			j.addons.bomb.animSpeed = 0.3;
			j.addons.bomb.stepX += j.addons.bomb.animSpeed;
			j.addons.bomb.stepY = 1;
			
			if (j.addons.bomb.stepX > j.addons.bomb.stp[1][0]) {
				j.addons.bomb.stepX=0;
			}
		}

		
		let step = Math.floor(j.addons.bomb.stepX);

		let x = 21;
		let y = 22;
		let w = 21;
		let h = 22;

		ctx.save();
		ctx.translate(j.obj.x, j.obj.y-5);
		ctx.rotate(j.obj.rotate);
		ctx.drawImage(img, x * step,y * j.addons.bomb.stepY,w,h,
			(j.obj.width*2)/-2, (j.obj.height*2)/-2, j.obj.width*2, j.obj.height*2);
		ctx.restore();
	}

	death(i,j)
	{
		j.obj.rotate+=deg(8);
		j.death.time.current++;

		let x = j.death.speed * Math.sin(j.death.direction);
		let y = -j.death.speed * Math.cos(j.death.direction);

		j.obj.transform.translate(x, y - player.speed);
		
		if (j.death.time.current >= j.death.time.max) {
			cP_EnemyDeath.spawm(j.obj.x, j.obj.y)
			delete this.enemy[i];
		}else{cP_EnemyDeath.spawm2(j.obj.x, j.obj.y);}
	}

	collision(i,j,r)
	{
		
		if (CircleCollider(j.addons.bomb.x, j.addons.bomb.y, j.addons.bomb.radio, player.x, player.y, player.width/2) && j.state=="live") 
		{
			j.addons.bomb.enable = true;
		}

		if (j.addons.bomb.enable) {j.addons.bomb.time-= Time.deltaTime;}

		if(j.addons.bomb.time <= 0) {j.addons.bomb.explosion = true;}
			
		if(CircleCollider(j.obj.x, j.obj.y, r, player.x, player.y, player.width/2) && j.state=="live"){
		
			if (player.state=="live") {
				j.addons.bomb.explosion = true;

			}else if (player.state=="invincible" || player.state=="hyperSpeed") {
				j.state="death";
				j.death.direction = Random(-j.death.angle,j.death.angle) * Math.PI/180;
			}
		}
	}

	bomb(i,j)
	{
		if(CircleCollider(j.addons.shockwave.x, j.addons.shockwave.y, j.addons.shockwave.radio, player.x, player.y, player.width/2) &&
			j.addons.shockwave.time > 0) 
		{
			if (player.x > j.obj.x) { player.physics.x += j.addons.shockwave.push;} 
			else {player.physics.x -= j.addons.shockwave.push;}

			if (player.y > j.obj.y) { player.spd -= j.addons.shockwave.push;} 
			else {player.spd += j.addons.shockwave.push;}
		}
		else
		{
			startMusic(sound.explosion);
			cP_Bomb.spawm(j.obj.x, j.obj.y);
			delete this.enemy[i];
		}
	}


	update()
	{
		this.difficulty();

		for(let i in this.enemy)
		{
			let j = this.enemy[i];

			this.createSpark(i,j);

			if(j.state=="death"){//death animation
				this.death(i,j);
			}
			
			if (j.state=="live") {
				this.move(i,j);
			}

			this.collision(i,j,this.rCollision);

			if (j.addons.bomb.explosion) {this.bomb(i,j);}

			this.draw(i,j,this.img);
			this.drawSpark(i,j);
			this.drawCollision(i,j,this.rCollision);

			if(j.obj.y > camera.viewport.bottom+100) delete this.enemy[i];
		}
		this.spawm(this.spawmN.lvl[this.spawmN.current]);

		this.enemy = this.enemy.filter(item => item);
	}
}



