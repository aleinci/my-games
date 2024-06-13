function InstantiateEnemy01(){
	
	sEnemy01 = new Enemy( 200, images.enemy1.img,800);
}

function DestroyEnemy01()
{
	delete sEnemy01;
}

class Enemy
{
	constructor( speed, img, spawm, addons)
	{
		this.showCollision = false;
		this.enemy = [];
		this.speed = speed;
		this.img = img;
		this.rCollision = 30;
		this.spawmN = {
			lvl:[spawm, 
				(spawm*0.13)*5, 
				(spawm*0.13)*4, 
				(spawm*0.13)*3, 
				(spawm*0.13)*2, 
				(spawm*0.13)*1],
			
			current:0};
		this.addons = addons;
	}

	createEnemy(x,y)
	{
		this.enemy.push({
			obj:new GameObject(x, y, 50,50,0),
			step:0,
			imgScale:3.5,
			state:"live",
			speed:this.speed,
			death:{
				time:{current:0, max:50,},
				direction:0,
				speed:7,
				angle:30,
			},
		});
		let j = this.enemy[this.enemy.length-1]; 

		//j.obj.sprite = new Sprite(j.obj, images.this.enemy.img);
		//j.obj.transform.scale(0.5,0.5);
	}

	draw(i,j,img)
	{
		j.step+=0.2;

		if (j.step>1.8) {j.step = 0;}
		//j.obj.Draw("color","red");
		ctx.save();
		ctx.translate(j.obj.x, j.obj.y);
		ctx.rotate(j.obj.rotate);

		//ctx.drawImage(img, (j.obj.width*1.5)/-2, (j.obj.height*1.5)/-2, j.obj.width*1.5, j.obj.height*1.5);

		ctx.scale(j.imgScale, j.imgScale);
		ctx.drawImage(img, Math.floor(j.step)-0.5,0, img.width/2, img.height,
			(img.width/2)/-2, (img.height)/-2, img.width/2, img.height);

		ctx.restore();
	}

	collision(i,j,r)
	{
		if(CircleCollider(j.obj.x, j.obj.y, r, player.x, player.y, player.width/2) && j.state=="live"){
		
			if (player.state=="live") {
				pl.hit();
				cP_EnemyDeath.spawm(j.obj.x, j.obj.y);
				delete this.enemy[i];
				startMusic(sound.enemyHit);

			}else if (player.state=="invincible" || player.state=="hyperSpeed") {
				j.state="death";
				j.death.direction = Random(-j.death.angle,j.death.angle) * Math.PI/180;
				startMusic(sound.enemyHit);
			}
		}
	}
	move(i,j)
	{
		let x = 0;
		let y = j.speed*Time.deltaTime;
		j.obj.transform.translate(x, y);

	}

	difficulty()
	{
		if (playerHub.distance.current > (2000/this.spawmN.lvl.length)*(this.spawmN.current+1) &&
			this.spawmN.current < this.spawmN.lvl.length-1) 
		{
			this.spawmN.current++;
		}
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

	spawm(spawmRate)
	{
		
		if (Random(0,spawmRate) < 2 && player.state!="death" &&
		 RMfx.time >= RMfx.max && startPlay) 
		{
			if (player.y < camera.viewport.bottom) 
			{
				this.createEnemy(Random(-252,252), camera.viewport.top-100)
			}
		}
	}

	explosion()
	{
		for(let i in this.enemy)
		{
			let j = this.enemy[i];
			
			cP_EnemyDeath.spawm(j.obj.x, j.obj.y)
			delete this.enemy[i];
		}
	}

	drawCollision(i,j,r)
	{
		if(this.showCollision)
		{
			ctx.save();
			ctx.globalAlpha = 0.5;
			ctx.beginPath();
			ctx.fillStyle ="yellow";
			ctx.translate(j.obj.x, j.obj.y);
			ctx.arc(0, 0, r, 0, Math.PI*2);
			ctx.fill();
			ctx.restore();
		}
	}

	update()
	{
		this.difficulty();

		for(let i in this.enemy)
		{
			let j = this.enemy[i];

			if(j.state=="death"){//death animation
				this.death(i,j);
			}
			
			if (j.state=="live") {
				this.move(i,j);
			}

			this.collision(i,j,this.rCollision);

			this.draw(i,j,this.img);
			this.drawCollision(i,j,this.rCollision);

			if(j.obj.y > camera.viewport.bottom+100) delete this.enemy[i];
		}
		this.spawm(this.spawmN.lvl[this.spawmN.current]);

		this.enemy = this.enemy.filter(item => item);
	}

}

