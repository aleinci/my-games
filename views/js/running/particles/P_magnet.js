function Instantiate_particleMagnet()
{
	P_magnet=
	{
		duration:30,
		spark:[],
		shockwave:[],
	}

	cP_magnet = new Particle_Magnet();
}

function Destroy_particleMagnet()
{
	delete P_magnet;
	delete cP_magnet;
}

class Particle_Magnet
{
	create(particle,x,y,scale,rotate,alpha, sx, sy, sw, sh, step, rx, ry,)
	{
		this.particle = particle;
		
		this.particle.push({
			x:x,
			y:y,
			scale:scale,
			rotate:rotate,
			alpha:alpha,
			sx:sx,
			sy:sy,
			sw:sw,
			sh:sh,
			step:step,
			rx:rx,
			ry:ry,
			ad:0,
		});
		
	}

	spawm(x,y)
	{	
		let k = images.magnetShockwave.img;
		let j = images.magnetSpark.img;

		if(Random(0,30) < 2){//spark particle
			this.create(P_magnet.spark, x + Random(-50, 50) , y + Random(-50, 50) , {x:Random(3,8)*0.1, y:1}, Random(0,360)*Math.PI/180, 1, j.width/5, 0, j.width/5, j.height, Random(0,4), Random(-100,100), Random(-100,100));
		}
		if(P_magnet.shockwave.length==0){//shockwave particle
			this.create(P_magnet.shockwave, x , y , {x:2.3, y:1}, Random(0,360)*Math.PI/180, 1, 0, 0, k.width, k.height, 0);
		}
	}

	spark(i,j)
	{
		j.x = player.x + j.rx;
		j.y = player.y + j.ry;
		j.rotate = LookAt(j, player);
		j.alpha-=0.05;

		if (j.alpha <= 0) { delete P_magnet.spark[i];}
	}

	shockwave(i,j)
	{
		
		if (j.alpha <= 0.1) { j.ad = 0.01}
		if (j.alpha >= 0.9) { j.ad = -0.01}

		j.alpha+=j.ad;
		j.scale.x+=j.ad/5;
		j.x = player.x;
		j.y = player.y;

		
	}

	shockwaveDelete()
	{
		for(let i in P_magnet.shockwave)
		{
			delete P_magnet.shockwave[i];
		}
		P_magnet.shockwave = P_magnet.shockwave.filter(item => item);
	}

	soundEffect()
	{
		let r = Random(0,200)
		if (r < 2) {
			if (r==0) {
				stopMusic(sound.magnet1);
				stopMusic(sound.magnet2);
				startMusic(sound.magnet1);
			}else{
				stopMusic(sound.magnet1);
				stopMusic(sound.magnet2);
				startMusic(sound.magnet2);
			}
		}
	}

	draw(i,j,img){
		let particle_size=100;
		
		ctx.save();
		//ctx.globalCompositeOperation="lighten";
		ctx.globalAlpha=j.alpha;
		ctx.translate(j.x, j.y);
		ctx.scale(j.scale.x, j.scale.x);
		ctx.rotate(j.rotate);
		ctx.drawImage(img, j.sx * j.step, j.sy, j.sw, j.sh,
		 particle_size/-2, particle_size/-2, particle_size, particle_size);
		ctx.restore();

		this.soundEffect();
	}

	update()
	{

		for(let i in P_magnet.spark)
		{
			let j = P_magnet.spark[i];

			this.spark(i,j);
			this.draw( i, j, images.magnetSpark.img );
		}

		for(let i in P_magnet.shockwave)
		{
			let j = P_magnet.shockwave[i];

			this.shockwave(i,j);
			this.draw( i, j, images.magnetShockwave.img );
		}
		P_magnet.spark = P_magnet.spark.filter(item => item);
	}
}
