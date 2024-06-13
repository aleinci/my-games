function Instantiate_particleInvincible()
{
	cP_Invincible = new Particle_Invincible();
}

function Destroy_particleInvincible()
{
	delete cP_Invincible;
}

class Particle_Invincible
{
	constructor()
	{
		this.particle = [];
		this.r = 50; //radio de spawm
	}

	create(x,y)
	{
		this.particle.push({
			x:x,
			y:y,
			direction:0,
			alpha:1,
			a:1,
			scale:Random(1,7) * 0.1,
			stepX:Random(0,3),
			stepY:Random(0,1),
		});
	}

	draw(i,j,img)
	{
		let size = 100;
		
		ctx.save();
		ctx.globalAlpha=j.alpha;
		ctx.translate(j.x, j.y);
		ctx.scale(j.scale, j.scale);
		ctx.drawImage(img, img.width/4 * j.stepX, img.height/2 * j.stepY, img.width/4, img.height/2,
			size/-2, size/-2, size, size);
		ctx.restore();
		
		//ctx.save();
		//ctx.globalAlpha=j.alpha;
		//ctx.translate(j.x, j.y);
		//ctx.scale(j.scale, j.scale);
		//ctx.drawImage(img, img.width/4 * j.stepX, img.height/2 * j.stepY, img.width/4, img.height/2,
		//	size/-2, size/-2, size, size);
		//ctx.restore();
	}

	move(i,j)
	{
		if (j.alpha>= 0.95) { j.a = -1;}

		j.alpha +=0.05 * j.a;
		//j.scale+=0.05 * j.a;
		j.scale+=(j.scale* 0.05) * j.a;

		//j.y -=player.speed; 

		

		if (j.alpha <= 0) {delete this.particle[i];}
	}

	update()
	{


		if (player.invincibility > 0) 
		{
			this.create(Random(player.x - this.r, player.x + this.r), Random(player.y - this.r, player.y + this.r))
		}
		for(let i in this.particle)
		{
			let j = this.particle[i];

			this.draw(i, j, images.invincible.img);
			this.move(i,j);
		}

		this.particle = this.particle.filter(item => item);
	}
}
