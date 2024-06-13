//instancias de los botones al final
class Button 
{
	constructor()
	{
		this.x=0;
		this.y=0;
		this.width=50;
		this.height=50;

		this.ix=0;
		this.iy=0;
		this.iwidth=50;
		this.iheight=50;
		this.stepX=0;
		this.stepY=0;
		this.DRstp=false;//false= abajo | true = derecha 

		this.click=false;
		//this.img = new Image();
		this.img;
		this.img=this.draw;
	}

	draw = () =>
	{
		ctx.save();
		ctx.drawImage(this.img ,this.ix * this.stepX, this.iy * this.stepY, this.iwidth, this.iheight,
		this.x, this.y, this.width, this.height);
		ctx.restore();
	}

	event = () =>
	{
		console.log("se ha precionado un boton");
		
	}

	clicked = () =>
	{
		if (cX > this.x &&
			cX < this.x + this.width &&
			cY > this.y &&
			cY < this.y + this.height && mouse) 
		{
			this.click = true;
			if (this.DRstp) {this.stepX=1;}
			if (!this.DRstp) {this.stepY=1;}
		}

		if (this.click && !mouse) 
		{
			this.click=false;
			if (this.DRstp) {this.stepX=0;}
			if (!this.DRstp) {this.stepY=0;}
			this.event();
			sound.click.play();
		}
	}
}


//main menu
let btnPlay = new Button();
let btnCredits = new Button();
let btnCT = new Button();
let btnLeader = new Button();

//pause ini
let btnst = new Button();
//pause menu
let btnQuit = new Button();
let btnResume = new Button();
//score board
let btnSB = new Button();




