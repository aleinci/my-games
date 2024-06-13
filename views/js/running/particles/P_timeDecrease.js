function Instantiate_particleTimeDecrease()
{
	cP_TDecrease = new Particle_TimeDecrease();
}

function Destroy_particleTimeDecrease()
{
	delete cP_TDecrease;
}

class Particle_TimeDecrease
{
	constructor()
	{
		this.particle1 = [];
	}

	create(particle,x,y,scale,alpha,speed,life)
	{
		particle.push({
			x:x,
			y:y,
			scale:scale,
			alpha:alpha,
			speed:speed,
			life:life,
		});
	}

	spawm(x,y)
	{
			this.create(this.particle1, x, y, 6, 1, 5, 0.3);
	}

	draw(i,j,img)
	{
		let particle_size ={w:images.timeDrecrease.img.width, h:images.timeDrecrease.img.height,};

		ctx.save();
		ctx.globalAlpha=j.alpha;
		ctx.translate(j.x, j.y);
		ctx.scale(j.scale, j.scale);
		ctx.drawImage(img, particle_size.w/-2, particle_size.h/-2, particle_size.w, particle_size.h);
		ctx.restore();
	}

	move(i,j)
	{
		j.y -= j.speed;
		j.speed*=0.95;
		j.life-=Time.deltaTime;

		if (j.life <= 0) {j.alpha -= 0.1;}

		if (j.alpha <= 0.1) {delete this.particle1[i];}
	}


	update()
	{
		for(let i in this.particle1)
		{
			let j = this.particle1[i];

			this.move(i,j);
			
			if (playerHub.distance.current < 450) {
				this.draw( i, j, images.timeDrecrease.img );
			
			}else{
				this.draw( i, j, images.timeDrecrease2.img );
			}
			
		}
		this.particle1 = this.particle1.filter(item => item);
	}
}

