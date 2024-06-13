function Instantiate_particleRecord()
{
	cP_Record = new Particle_Record();
}

function Destroy_particleRecord()
{
	delete cP_Record;
}

class Particle_Record
{
	constructor()
	{
		this.particle1 = [];
		this.particle2 = [];
	}

	create(particle,x,y,rotate,direction,alpha,speed,life)
	{
		particle.push({
			x:x,
			y:y,
			width:Random(4,8),
			height:Random(4,8),
			rotate:rotate,
			direction:direction,
			alpha:alpha,
			speed:speed,
			life:life,
			death:0,
			color:["lightblue","lightgreen", "yellow", "orange", "red", "pink"],
			rColor:Random(0,5),
		});
	}

	spawm()
	{
		this.create(this.particle1, Random(0, canvas.width), -10, Random(0,360)*Math.PI/180, Random(0,360)*Math.PI/180, 1, Random(3,7), Random(2,5));
	}

	draw(i,j,img)
	{
		ctx.save();
		//ctx.globalCompositeOperation="lighten";
		ctx.globalAlpha=j.alpha;
		ctx.translate(j.x, j.y);
		ctx.rotate(j.rotate);
		ctx.fillStyle=j.color[j.rColor];
		ctx.fillRect(j.width/-2, j.height/-2, j.width, j.height);
		ctx.restore();
	}

	move(i,j)
	{
		j.y+=j.speed;
		j.life -= Time.deltaTime;

		if (j.life <= 0) {delete this.particle1[i];}
	}

	

	update()
	{
		this.spawm();
		for(let i in this.particle1)
		{
			let j = this.particle1[i];

			this.move(i,j);
			this.draw( i, j, images.cursorP.img );

		}

		this.particle1 = this.particle1.filter(item => item);
	}
}


Instantiate_particleRecord();