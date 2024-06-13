function Instantiate_particleMoney()
{
	P_money=
	{
		duration:30,
		flash01:[],
		flash02:[],
		smoke01:[],
	}

	cP_money = new Particle_Money();
}

function Destroy_particleMoney()
{
	delete P_money;
	delete cP_money;
}
class Particle_Money
{
	create(particle,x,y,scale,rotate,direction,alpha,speed,life)
	{
		this.particle = particle;
		
		this.particle.push({
			x:x,
			y:y,
			scale:scale,
			rotate:rotate,
			direction:direction,
			alpha:alpha,
			speed:speed,
			life:life,
			alphaLimit:true,
		});
		//console.log(this.particle[this.particle.lenght-1].scale.x);
	}

	spawm(x,y)
	{	
		for(let i=0; i<6; i++){//star flash particle
			this.create(P_money.flash01, x , y , {x:Random(1,3)*0.1, y:Random(1,3)*0.1}, 0, Random(0,360)*Math.PI/180, 1, Random(1,4), {current:0, max:30});
		}

		for(let i=0; i<4; i++){//star flash particle//smoje particle
			//this.create(P_money.smoke01, x + Random(-40,40), y + Random(-40,40), {x:Random(6,10)*0.1, y:Random(6,10)*0.1}, Random(0,360)*Math.PI/180, 0, 1, 2, {current:0, max:30});
		}

		for(let i=0; i<1; i++){//star flash particle//flash particle
			this.create(P_money.flash02, x, y, {x:1, y:1}, 0, 0, 1, 0, {current:0, max:30});		
		}
		
	}

	flash01(i,j)
	{
		j.life.current++;
		let x= j.speed * Math.sin(j.direction);
		let y= -j.speed * Math.cos(j.direction);

		j.y +=y;
		j.x += x;

		if (j.life.current <= 1) {j.alpha=0;}

		if(j.alpha >= 1) j.alphaLimit=false;
		if(j.alpha <= 0) j.alphaLimit=true;
		
		

		if (j.alphaLimit) j.alpha+=0.05;
		else j.alpha-=0.05

		if (j.life.current >= j.life.max) { delete P_money.flash01[i];}
	}
	
	flash02(i,j)
	{
		j.life.current++;
		j.scale.x +=0.1;
		j.scale.y +=0.1;
		
		if (j.scale.x>=1) {j.alpha-=0.1;}

		if (j.life.current <= 1) {j.scale.x=0; j.scale.y=0;}

		if (j.alpha<=0.2) {delete P_money.flash02[i];}
	}

	smoke01(i,j)
	{
		j.life.current++;
		j.alpha-= 0.02;
		j.y -= j.speed;

		if (j.alpha <=0) {j.alpha = 0}

		//if (life.current <= 1) {j.alpha=0;}

		//if(j.alpha >= 1) j.alphaLimit=false;
		//if(j.alpha < 0) 0;
			

		
		

		//if (j.alphaLimit) j.alpha+=0.1;
		//else j.alpha-=0.1

		if (j.life.current >= j.life.max) { delete P_money.flash02[i]}
	}

	draw(i,j,img){
		let particle_size=100;

		ctx.save();
		//ctx.globalCompositeOperation="lighten";
		ctx.globalAlpha=j.alpha;
		ctx.translate(j.x, j.y);
		ctx.scale(j.scale.x, j.scale.x);
		ctx.rotate(j.rotate);
		ctx.drawImage(img, particle_size/-2, particle_size/-2, particle_size, particle_size);
		ctx.restore();
	}

	update()
	{
	
		for(let i in P_money.flash01)
		{
			let j = P_money.flash01[i];

			this.flash01(i,j);
			this.draw( i, j, images.flash01.img );
		}

		for(let i in P_money.flash02)
		{
			let j = P_money.flash02[i];

			this.flash02(i,j);
			this.draw( i, j, images.flash02.img );
		}

		for(let i in P_money.smoke01)
		{
			let j = P_money.smoke01[i];

			this.smoke01(i,j);
			this.draw( i, j, images.smoke01.img );
		}
	}
}
