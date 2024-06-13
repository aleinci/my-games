//instancias de los botones al final
class Button 
{
	constructor(x,y,width,height,ix,iy,iwidth,iheight,stepX,stepY,)
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

		this.click=false;
		//this.img = new Image();
		this.img;
		this.img=this.draw;
		this.press = Input.mouseFire[0];

		this.normalWidth = width;
		this.normalHeight = height;
		this.m_over = false;
		this.m_overS = 0;
	}

	draw = () =>
	{
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.fillStyle="green";
		//ctx.fillRect(this.width/-2, this.height/-2, this.width, this.height);
		ctx.drawImage(this.img ,this.ix * this.stepX, this.iy * this.stepY, this.iwidth, this.iheight,
		this.width/-2, this.height/-2, this.width, this.height);
		ctx.restore();
	}

	event = () =>
	{
		console.log("se ha precionado un boton");
	}

	animationMO(){}

	mouseover()
	{
		this.width = this.normalWidth * 1.2;
		this.height = this.normalHeight * 1.2;
		this.animationMO();
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

			if ( mouse.x > this.x - this.width/2 &&
				mouse.x < this.x - this.width/2 + this.width &&
				mouse.y > this.y - this.height/2 &&
				mouse.y < this.y - this.height/2 + this.height && 
				!this.click) 
			{
				this.mouseover();
				this.m_over = true;

				if (this.m_overS == 0) {
					stopMusic(sound.mouseOver);
					startMusic(sound.mouseOver);
				}
				this.m_overS=1;
			}
			else{this.m_overS=0;}
			
			if (mo) 
			{
				this.click = true;	
			}

			if (this.click && !Input.mouseFire[0] ) 
			{
				this.click=false;
				//sound.clickBtn.sfx.currentTime=0;
				//sound.clickBtn.sfx.play();
				this.event();
				stopMusic(sound.mouseClick);
				startMusic(sound.mouseClick);
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
				this.m_over = true;
				this.click = true;
				
			}
		}
		if (this.click && !Input.touch[0] ) 
			{
				this.click=false;
				//sound.clickBtn.sfx.currentTime=0;
				//sound.clickBtn.sfx.play();
				this.event();
				stopMusic(sound.mouseClick);
				startMusic(sound.mouseClick);
			}
	}

	update()
	{
		
		this.m_over = false;
		this.width = this.normalWidth;
		this.height = this.normalHeight;
		this.clicked();
		this.draw();
	}
}
