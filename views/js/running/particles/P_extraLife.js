function Instantiate_particleExtraL()
{
	cP_ExtraL = new Particle_ExtraLife();
}

function Destroy_particleExtraL()
{
	delete cP_ExtraL;
}

class Particle_ExtraLife
{
	constructor()
	{
		this.particle1 = [];
		this.particle2 = [];
	}

	create(particle,x,y,scale,rotate,direction,alpha,speed,life)
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
			cx:0,
			cy:0,
		});
	}

	spawm(x,y)
	{
		if (this.particle1.length == 0) {
			this.create(this.particle1, x, y, 0.5, 0, 0, 1, 0, 10);
		}

		if (this.particle1.length > 0 && this.particle1.length !=0) {
			let j = this.particle1[0];
			this.create(this.particle2, j.x, j.y, Random(1,3)*0.1, 0, Random(0,360)*Math.PI/180, 5, 2, 10);
		}
	}

	draw(i,j)
	{
		let particle_size=100;
		let img;

		if (player.extraLife==2) {img = images.flash03.img;}
		else{img = images.flash04.img;}
		
		ctx.save();
		//ctx.globalCompositeOperation="lighten";
		ctx.globalAlpha=j.alpha;
		ctx.translate(j.x, j.y);
		ctx.scale(j.scale, j.scale);
		ctx.rotate(j.rotate);
		ctx.drawImage(img, particle_size/-2, particle_size/-2, particle_size, particle_size);
		ctx.restore();
	}

	energy1(i,j)
	{
		j.x = lerp(j.x,player.x + Math.cos(j.cx * Math.PI/180)*55, 0.05);
		j.y = player.y - Math.sin(j.cy * Math.PI/180)*20;

		j.cx+=50 * Time.deltaTime;
		j.cy+=100 * Time.deltaTime;
	}

	Destroy(i)
	{
		if (player.extraLife == 0)
		{
			let j = this.particle1[0];
			for(let i=0; i<30; i++)
			{
				this.create(this.particle2, j.x, j.y, 1, 0, ((360/30)*i)*Math.PI/180, 5, 5, 10);
			}

			delete this.particle1[i]
		}
	}

	eParticle(i,j)
	{
		if (this.particle1.length > 0) {j.speed = 1; j.scale-=0.01;}
		else{j.speed = 10; j.scale-=0.05;}

			j.x += j.speed * Math.sin(j.direction);
			j.y -= j.speed * Math.cos(j.direction);
			j.y -= player.speed ;

		

		if (j.scale<=0) {delete this.particle2[i]}
	}

	update()
	{

		for(let i in this.particle1)
		{
			let j = this.particle1[i];

			this.energy1(i,j);
			this.draw( i, j);

			this.Destroy(i);
		}

		for(let i in this.particle2)
		{
			let j = this.particle2[i];

			this.eParticle(i,j);
			this.draw( i, j);
		}

		this.particle1 = this.particle1.filter(item => item);
		this.particle2 = this.particle2.filter(item => item);

		if (player.extraLife>0) {
			this.spawm(player.x,player.y)
		}
	}
}


