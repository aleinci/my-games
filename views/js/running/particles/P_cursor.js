function Instantiate_particleCursor()
{
	cP_Cursor = new Particle_Cursor();
}

function Destroy_particleCursor()
{
	delete cP_Cursor;
}

class Particle_Cursor
{
	constructor()
	{
		this.particle1 = [];
		this.particle2 = [];
	}

	create(particle,x,y,scale,rotate,direction,alpha,speed,life,imgR)
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
			img:Random(0,imgR),
		});
	}

	spawm()
	{
		if (device=="pc") {
			let k = Input.mousePosition;

			if (Input.mouseFire[0]) {
				this.create(this.particle1, k.x, k.y, Random(2,3)*0.1, Random(0,360)*Math.PI/180, Random(0,360)*Math.PI/180, 1, 0.5, 1,4);
			}
				
			Input.eventUp=()=>{
				this.create(this.particle2, k.x, k.y, 0.1, 0, 0, 1, 0, 0.5,0);
			}
		}

		if(device=="android"){
			for(let l=0; l<Input.touchCount; l++)
			{
				let k = Input.touchPosition[l];
				if (Input.touch[l]) {
					
					this.create(this.particle1, k.x, k.y, Random(2,3)*0.1, Random(0,360)*Math.PI/180, Random(0,360)*Math.PI/180, 1, 0.5, 1,4);
				}
					
				Input.eventUp=()=>{
					this.create(this.particle2, k.x, k.y, 0.1, 0, 0, 1, 0, 0.5,0);
				}
			}
		}
	}

	draw(i,j,img)
	{
		let particle_size = 100;
		let sizeImage = 32;

		ctx.save();
		//ctx.globalCompositeOperation="lighten";
		ctx.globalAlpha=j.alpha;
		ctx.translate(j.x, j.y);
		ctx.scale(j.scale, j.scale);
		ctx.rotate(j.rotate);
		ctx.drawImage(img, sizeImage * j.img, 0, sizeImage, sizeImage,
		 particle_size/-2, particle_size/-2, particle_size, particle_size);
		ctx.restore();
	}

	trails(i,j)
	{
		j.x += j.speed * Math.sin(j.direction);
		j.y -= j.speed * Math.cos(j.direction);
		j.scale-=0.01;
		//j.alpha*=0.95;

		if (j.scale<=0) {delete this.particle1[i]}
	}

	shockwave(i,j)
	{
		j.scale*=1.15;
		j.alpha-=0.05;
		j.death+=Time.deltaTime;
		if (j.death>=j.life/2) {delete this.particle2[i]}
	}

	update()
	{
		this.spawm();
		for(let i in this.particle1)
		{
			let j = this.particle1[i];

			this.trails(i,j);
			this.draw( i, j, images.cursorP.img );

		}

		for(let i in this.particle2)
		{
			let j = this.particle2[i];

			this.shockwave(i,j);
			this.draw( i, j, images.magnetShockwave.img );
		}

		this.particle1 = this.particle1.filter(item => item);
		this.particle2 = this.particle2.filter(item => item);
	}
}


Instantiate_particleCursor();