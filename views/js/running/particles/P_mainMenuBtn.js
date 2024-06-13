function Instantiate_particleMmenuBtn()
{
	cP_MmenuBtn = new Particle_MainMenuBtn();
}

function Destroy_particleMmenuBtn()
{
	delete cP_MmenuBtn;
}

class Particle_MainMenuBtn
{
	constructor()
	{

		this.particle1 = [];
		this.particle2 = [];
		/*this.border = {
			img:img,
			x:x,
			y:y,
			width:width,
			height:height,
			ix:ix,
			iy:iy,
			iwidth:iwidth,
			iheight:iheight,
			scale:scale,
			alpha:alpha,
		}*/
	}

	create(img,x,y,width,height,ix,iy,iwidth,iheight,scale,alpha)
	{
		this.particle1.push({
			img:img,
			x:x,
			y:y,
			width:width,
			height:height,
			ix:ix,
			iy:iy,
			iwidth:iwidth,
			iheight:iheight,
			scale:scale,
			alpha:alpha,
		});
	}

	spawm(img,x,y,width,height,ix,iy,iwidth,iheight,scale,alpha)
	{	
		if (this.particle1.length == 0) {
			this.create(img, x, y, width, height, ix, iy, iwidth, iheight, scale, alpha);
		}
		
	}

	draw(i,j,img)
	{
		ctx.save();
		ctx.globalAlpha=j.alpha;
		ctx.translate(j.x, j.y);
		ctx.scale(j.scale, j.scale);
		ctx.drawImage(j.img, j.ix, j.iy, j.iwidth, j.iheight,
		 j.width/-2, j.height/-2, j.width, j.height);
		ctx.restore();
	}

	trails(i,j)
	{
		j.scale+=0.01;
		j.alpha*=0.95;
		if (j.scale>=1.2) {j.alpha*=0.9;}
		if (j.scale>=1.5) {delete this.particle1[i]}
	}

	update()
	{
		
		for(let i in this.particle1)
		{
			let j = this.particle1[i];

			this.trails(i,j);
			this.draw( i, j );

		}
		this.particle1 = this.particle1.filter(item => item);
	}
}