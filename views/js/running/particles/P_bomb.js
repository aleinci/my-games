function Instantiate_particleBomb()
{
	cP_Bomb = new Particle_Bomb();
}

function Destroy_particleBomb()
{
	delete cP_Bomb;
}

class Particle_Bomb
{
	constructor()
	{
		this.particle1 = [];
		this.particle2 = [];
	}

	create(particle,x,y,scale,rotate,direction,alpha,speed,life,size)
	{
		particle.push({
			x:x,
			y:y,
			scale:scale,
			rotate:rotate,
			direction:direction,
			alpha:alpha,
			speed:speed,
			life:life,
			death:0,
			cx:0,
			cy:0,
			size:size,
		
		});
	}

	spawm(x,y)
	{
		for(let i=0; i<10; i++)
		{
			//numero * i /10;
			this.create(this.particle1, x, y, Random(4,7)*0.1, Random(0,360)*Math.PI/180, Random(0,360)*Math.PI/180, 1, Random(15,20), 1, 16);	
		}
		this.create(this.particle2, x, y, 0.1, 0, 0, 1, 0, 0, 34);	
	}

	draw(i,j,img)
	{
		let particle_size = 100;
		let sizeImage = j.size;

		ctx.save();
		//ctx.globalCompositeOperation="lighten";
		ctx.globalAlpha=j.alpha;
		ctx.translate(j.x, j.y);
		ctx.scale(j.scale, j.scale);
		ctx.rotate(j.rotate);
		ctx.drawImage(img, 0, 0, sizeImage, sizeImage,
		 particle_size/-2, particle_size/-2, particle_size, particle_size);
		ctx.restore();
	}

	smoke(i,j)
	{
		//j.scale*=1.1;
		//j.alpha-=0.05;
		j.x += j.speed * Math.sin(j.direction);
		j.y -= j.speed * Math.cos(j.direction);
		j.speed*=0.85;
		j.death+=Time.deltaTime;

		if (j.speed <= 0.3) {j.alpha*=0.92;}
		if (j.alpha <= 0.1) {delete this.particle1[i]}
	}

	shockwave(i,j)
	{
		j.scale*=1.2;
		
		j.death+=Time.deltaTime;

		if (j.death>=0.18) {j.alpha-=0.1;}
		if (j.alpha<=0.1) {delete this.particle2[i]}
	}

	update()
	{
		
		for(let i in this.particle1)
		{
			let j = this.particle1[i];

			this.smoke(i,j);
			this.draw( i, j, images.smoke.img );

		}

		for(let i in this.particle2)
		{
			let j = this.particle2[i];

			this.shockwave(i,j);
			this.draw( i, j, images.shockwave2.img );
		}

		this.particle1 = this.particle1.filter(item => item);
		this.particle2 = this.particle2.filter(item => item);
	}
}

