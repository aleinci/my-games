//instancias de los botones al final
class Button 
{
	constructor(x,y,width,height,ix,iy,iwidth,iheight,stepX,stepY,DRstp)
	{
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;

		this.ix=ix;
		this.iy=iy;
		this.iwidth=iwidth;
		this.iheight=iheight;
		this.stepX=stepX;
		this.stepY=stepY;
		this.DRstp=DRstp;//false= abajo | true = derecha 

		this.click=false;
		//this.img = new Image();
		this.img;
		this.img=this.draw;
		this.press = Input.mouseFire[0];
	}

	draw = () =>
	{
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.drawImage(this.img ,this.ix * this.stepX, this.iy * this.stepY, this.iwidth, this.iheight,
		this.width/-2, this.height/-2, this.width, this.height);
		ctx.restore();
	}

	event = () =>
	{
		console.log("se ha precionado un boton");
	}

	clicked = () =>
	{	
		if (device=="android") {this.touche();}
		else
		{
			let mouse = Input.mousePosition;

			let mo = mouse.x > this.x - this.width/2 &&
				mouse.x < this.x - this.width/2 + this.width &&
				mouse.y > this.y - this.height/2 &&
				mouse.y < this.y - this.height/2 + this.height && 
				Input.mouseFire[0] && !this.click;

			
			if (mo) 
			{
				this.click = true;
				
			}

			if (this.click && !Input.mouseFire[0] ) 
			{
				this.click=false;
				sound.clickBtn.sfx.currentTime=0;
				sound.clickBtn.sfx.play();
				this.event();
			}
		}
	}

	touche()
	{
		for (var i = 0; i < Input.touchCount; i++) {
			let j = Input.touchPosition[i];

			let to = j.x > this.x - this.width/2 &&
			j.x < this.x - this.width/2 + this.width &&
			j.y > this.y - this.height/2 &&
			j.y < this.y - this.height/2 + this.height && 
			Input.touch[i] && !this.click;

			if (to) 
			{
				this.click = true;
				
			}
		}
		if (this.click && !Input.touch[0] ) 
			{
				this.click=false;
				sound.clickBtn.sfx.currentTime=0;
				sound.clickBtn.sfx.play();
				this.event();
			}
	}
}
