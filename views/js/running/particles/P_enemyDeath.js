function Instantiate_particleEnemyDeath()
{
	cP_EnemyDeath = new Particle_EnemyDeath(10);
}

function Destroy_particleEnemyDeath()
{
	delete cP_EnemyDeath;
}

class Particle_EnemyDeath
{
	constructor(maxParticle)
	{
		this.particle = [];
		this.particle2 = [];
		this.particle3 = [];
		this.particle4 = [];
		this.maxParticle = maxParticle;	
	}

	create(particle, x, y, rotate, scale, speed, life)
	{
		particle.push({
			x:x,
			y:y,
			rotate:rotate,
			scale:scale,
			alpha:1,
			life:{current:0, max:life},
			speed:speed,
			effect:"",
			scl:false,
			scaleImpulse:1,
		});
	}

	spawm(x,y)
	{
		for(let i=0; i<20; i++)
		{
			this.create(this.particle, x, y, Random(0,360)*Math.PI/180, Random(3,15)*0.1, Random(30,40), 0.5);
		}

		for(let i=0; i<2; i++)
		{
			this.create(this.particle2, x, y, Random(0,360)*Math.PI/180, 0.2, 0, 0.5);
		}
		this.create(this.particle3, x, y, 0, 0, 0.2, 0.5);
	}
	spawm2(x,y)
	{
		this.create(this.particle4, x, y, 0, 1, 0, 0);
	}

	draw(i,j,img)
	{
		let size = 100;
		
		ctx.save();
		ctx.globalCompositeOperation=j.effect;
		ctx.globalAlpha = j.alpha;
		ctx.translate(j.x, j.y);
		ctx.rotate(j.rotate);
		ctx.scale(j.scale, j.scale);
		ctx.drawImage(img, size/-2, size/-2, size, size);
	    

	    ctx.restore();
	}

	moveSpark(i,j)
	{
		j.x += j.speed * Math.sin(j.rotate);
		j.y -= j.speed * Math.cos(j.rotate);
		j.y -= player.speed;

		j.speed *=0.75;
		j.scale*=0.9;

		j.life.current+=Time.deltaTime;
		if (j.life.current>j.life.max) {delete this.particle[i];}

	}

	moveImpact(i,j)
	{
		j.effect="lighter";
		j.y -= player.speed;
		j.life.current+=Time.deltaTime;
		j.scaleImpulse*=0.65;
		j.scale+=j.scaleImpulse;
		
		if (j.life.current>= j.life.max/2) {j.alpha*=0.7;}

		if(j.life.current>j.life.max){delete this.particle2[i];}
		
		//if (!j.scl) {j.scale*=1.3;}
		//else{j.scale*=0.5*Time.deltaTime;}
	}

	moveSW(i,j)
	{
		j.effect="lighter";
		j.y -= player.speed;
		j.scaleImpulse*=0.65;
		j.scale+=j.scaleImpulse;

		if (j.life.current>= j.life.max/2) {j.alpha*=0.8;}
		
		j.life.current+=Time.deltaTime;
		if (j.life.current>j.life.max) {delete this.particle3[i];}
	}

	moveTrails(i,j)
	{
		j.y -= player.speed;
		//j.effect="lighter";
		j.alpha-=0.05;
		j.scale*=0.95;

		if (j.alpha <= 0.1) {delete this.particle4[i];}
	}

	update()
	{
		

		for(let i in this.particle)//spark
		{
			let j = this.particle[i];

			this.moveSpark(i,j);

			this.draw(i,j,images.spark.img);
		}

		for(let i in this.particle2)//Impact
		{
			let j = this.particle2[i];

			this.moveImpact(i,j);

			this.draw(i,j,images.impact.img);
		}

		for(let i in this.particle3)//Impact
		{
			let j = this.particle3[i];

			this.moveSW(i,j);

			this.draw(i,j,images.magnetShockwave.img);
		}

		for(let i in this.particle4)//Impact
		{
			let j = this.particle4[i];

			this.moveTrails(i,j);

			this.draw(i,j,images.flash02.img);
		}

		

		this.particle = this.particle.filter(item => item);
		this.particle2 = this.particle2.filter(item => item);
		this.particle3 = this.particle3.filter(item => item);
		this.particle4 = this.particle4.filter(item => item);

		
		
	}
}


