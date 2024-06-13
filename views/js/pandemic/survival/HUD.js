let hudSurvival ={
	life: new GameObject(0,0,0,0,0),
	pause: new Button(canvas.width/2, 30, 50, 50,
		0,0,0,0,1,1,true),
	life2:{
		x:0,
		y:30,
		rx:0,
		ry:0,
		maxDistance:15,
		hit:false,
		time:0,
		maxTime:20,
	},
	temp:{
		h:0,
		h2:"0",
		m:0,
		m2:"0",
		day:0,
		text:new Text("", 5,200,32,"Bebas Neue","#022a44","left", true, "white", 4),
	},
	ammo:new Text("", 5,200,20,"Bebas Neue","black", "center"),

	shield2:{
		x:0,
		y:430,
		rx:0,
		ry:0,
	}
}
function startSurvivalHud()
{
	//hudSurvival.life.sprite = new Sprite(hudSurvival.life, covid1);
	//hudSurvival.life.sprite.bilinear=false;
}
startSurvivalHud();

function updateSurvivalHud()
{
	

	/*hudSurvival.life.sprite.renderer();
	hudSurvival.life.transform.scale(15,7)
	hudSurvival.life.transform.position(180,83)*/
	let i = hudSurvival.life2;
	let e = hudSurvival.shield2

	if (i.hit && i.time < i.maxTime) 
	{
		i.time++;
		if (obj.shield > 0) {
			e.rx=Math.floor(Math.random()*i.maxDistance)- i.maxDistance/2;
			e.ry=Math.floor(Math.random()*i.maxDistance)- i.maxDistance/2;
		}else{
			i.rx=Math.floor(Math.random()*i.maxDistance)- i.maxDistance/2;
			i.ry=Math.floor(Math.random()*i.maxDistance)- i.maxDistance/2;
		}
	}else{
		i.rx=0;
		i.ry=0;
		e.rx=0;
		e.ry=0;
		i.time=0;
		i.hit=false;
	}
	



	ctx.save();
	ctx.scale(0.15, 0.15)
	ctx.drawImage(images.hud.life.img, 
		0, 0, images.hud.life.img.width, images.hud.life.img.height/2,
		i.rx + i.x, i.ry + i.y, images.hud.life.img.width, images.hud.life.img.height/2);
	ctx.drawImage(images.hud.life.img, 
		0, images.hud.life.img.height/2, (obj.life/obj.maxLife)*2014, images.hud.life.img.height/2,
		i.rx + i.x+354, i.ry + i.y+2, (obj.life/obj.maxLife)*2014, images.hud.life.img.height/2);



	//shield
	
	ctx.drawImage(images.hud.shield.img, 
		0, 0, images.hud.shield.img.width, images.hud.shield.img.height/2,
		e.rx + e.x, e.ry + e.y, images.hud.shield.img.width, images.hud.shield.img.height/2);

	
	ctx.drawImage(images.hud.shield.img, 
		0, images.hud.shield.img.height/2, (obj.shield/obj.maxShield)*2014, images.hud.shield.img.height/2,
		e.rx + e.x+354, e.ry + e.y, (obj.shield/obj.maxShield)*2014, images.hud.shield.img.height/2);
	ctx.restore();

	

	ctx.save();
		ctx.translate(canvas.width, 0);
		ctx.scale(-0.4, 0.4)
		

		ctx.drawImage(hudW, 0, 433, 479, 145,
			405, 0, 479, 145);
		ctx.drawImage(hudW, 0, 578, (obj.power/obj.maxPower)*464, 145,
			413, 0, (obj.power/obj.maxPower)*464, 145);// shell bar

		
		ctx.drawImage(hudW, 0,0, 434, 433,
			0,0, 434, 433);//base weapon
	ctx.restore();

	




	TextTH("Point: " + obj.point, 5, 180);
	//TextTH("Z: " + enemy.count, 5,225);
	
	

	function TextTH(text, x, y)
	{
		hudSurvival.temp.text.text = text;
		hudSurvival.temp.text.x = x;
		hudSurvival.temp.text.y = y;
		hudSurvival.temp.text.Draw();
	}

	function buttom(Variable, img, iwidth, iheight, iy){
		Variable.img = img;
		Variable.iwidth = iwidth;
		Variable.iheight = iheight;
		Variable.iy = iy;

		Variable.draw();
		Variable.clicked();
	}

	if(obj.state != "death"){
		buttom(hudSurvival.pause, images.hud.pause.img, images.hud.pause.img.width,
				images.hud.pause.img.height, 0);

		hudSurvival.pause.event=()=>{
			changeScene.load.change(changeScene.pauseM, changeScene.playing, "fast");
		}
	}


	
	Ammo(obj.weapon.ammo, 730, 120);

	function  Ammo(text, x, y){
		hudSurvival.ammo.text = text;
		hudSurvival.ammo.x = x;
		hudSurvival.ammo.y = y;
		hudSurvival.ammo.Draw();
	}

	function weaponImg(){
		ctx.save();
		ctx.translate(740,60);
		ctx.scale(0.15,0.15);
		ctx.drawImage(images.items.weapon.img,
			512*obj.weapon.weaponNum, 0, 512, images.items.weapon.img.height,
			512/-2, images.items.weapon.img.height/-2, 512, images.items.weapon.img.height);
		ctx.restore();
	}
	weaponImg();
	boxWeapon();
}


