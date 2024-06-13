function Instantiate_Shop()
{
	shop_menu = {	
		invincible:new ShopCard(0,0,"buy",images.shield.img, [400,700], 0),
		life:new ShopCard(0,0,"buy",images.extralife.img, [900], 1),
		magnet:new ShopCard(0,0,"buy",images.magnet.img, [500], 2),
		rainMoney:new ShopCard(0,0,"buy",images.rainmoney.img, [300,700], 3),
		hyperSpeed:new ShopCard(0,0,"buy",images.hyperspeed.img, [1000], 4),
		itemNumber:5,//cantidad de items que hay en la tienda
		money:{x:50, y:65, size:32},
		animation:0,
		animationbg:{current:0, max:80},
		
		update:function(){},
		shopping: new Shopping(),
		camera:new Camera(ctx),
		x:0,
		y:0,
		exit:new Button(700,50, 140, 70,   /**/   0, 0, images.shopexit.img.width, images.shopexit.img.height,/**/ 0, 0),
	};




	shop_menu.camera.zoomTo(400);
	shop_menu.camera.moveTo(0,70);

	shop_menu.exit.img = images.shopexit.img;

	shop_menu.exit.event=()=>{mode="menu";}

	shop_menu.invincible.event=()=>{
	
		shopData("invincible");
		shop_menu.shopping.buy();
	}

	shop_menu.life.event=()=>{
	
		shopData("life");
		shop_menu.shopping.buy();
	}

	shop_menu.magnet.event=()=>{
	
		shopData("magnet");
		shop_menu.shopping.buy();
	}

	shop_menu.rainMoney.event=()=>{
	
		shopData("rainMoney");
		shop_menu.shopping.buy();
	}
	
	shop_menu.hyperSpeed.event=()=>{
	
		shopData("hyperSpeed");
		shop_menu.shopping.buy();
	}

	shop_menu.update=()=>
	{
		startMusic(sound.mainMenu);

		let bgshp = images.shopBG.img;

		shop_menu.animationbg.current++;
		if (shop_menu.animationbg.current >= shop_menu.animationbg.max) {
			shop_menu.animationbg.current = 0;
		}
		
		CreateImage(bgshp, 0, 0, bgshp.width, bgshp.height, (canvas.width/2+40)-shop_menu.animationbg.current, (canvas.height/2+40)-shop_menu.animationbg.current, bgshp.width, bgshp.height, 0, 0, 1, 1, 1, 0);



		let anim = images.shopBGAnim.img;

		shop_menu.animation++;
		if (shop_menu.animation >= 20) {
			shop_menu.animation = 0;
		}

		CreateImage(anim, 0, 0, anim.width, anim.height, (canvas.width/2 + shop_menu.animation)-10, 50, anim.width, anim.height, 
			0, 0, 1, 1, 1, 0);

		CreateImage(anim, 0, 0, anim.width, anim.height, (canvas.width/2 - shop_menu.animation)+10, canvas.height-50, anim.width, anim.height, 
			0, 0, 1, 1, 1, 0);


		let array = [shop_menu.invincible, shop_menu.life,
		shop_menu.magnet, shop_menu.rainMoney, shop_menu.hyperSpeed];
		
		let size = 70;
		let margin = 20;
		let slotX =[-size-margin, 0, size+margin];
		let slotY ={margin:size*2, ceil:0};
		
		pos(array[0],slotX[0], slotY.margin * 0);
		pos(array[1],slotX[1], slotY.margin * 0);
		pos(array[2],slotX[2], slotY.margin * 0);
		
		pos(array[3],slotX[0], slotY.margin * 1);
		pos(array[4],slotX[1], slotY.margin * 1);
		
		function pos(card,x,y)
		{
			card.x = x;
			card.y = y;
		}
		
		shop_menu.camera.begin();

			shop_menu.invincible.update();
			shop_menu.life.update();
			shop_menu.magnet.update();
			shop_menu.rainMoney.update();
			shop_menu.hyperSpeed.update();
			shop_menu.shopping.update();

		shop_menu.camera.end();

		CreateImage(images.rainmoney.img, 0, 0, images.rainmoney.img.width, images.rainmoney.img.height, shop_menu.money.x, shop_menu.money.y/1.4, shop_menu.money.size*2, shop_menu.money.size*2, 
			0, 0, 1, 1, 1, 0);

		CreateText(dataP[3], shop_menu.money.x + shop_menu.money.size*1.5, shop_menu.money.y, shop_menu.money.size,"MyFont","white","left",1);

		shop_menu.exit.update();

	}
}

class ShopCard
{
	constructor(x,y,type, itemImg, price, lvl)
	{
		this.dui = lvl;
		this.lvl = dui[this.dui];
		this.price = price;
		this.x = x;
		this.y = y;
		this.type = type; //"upgrade" or "buy"
		this.scale = 2;
		this.img = images.shopcard.img;
		this.itemImg = itemImg;

		this.buttom = {x:0, y:30, w:50, h:15};
		this.onClick= false;
	}

	draw()
	{

		let scale = 1;
		

		//card base
		drawing(this.x + 0, this.y + 0, 70, 92, 0,0, this.img);
		
		//card item
		drawing(this.x + 0, this.y - 20, 40, 40, 70,0, this.img);

		//item image
		ctx.save();
		ctx.translate(this.x + 0, this.y - 20 );
		ctx.drawImage(this.itemImg, 38/-2, 38/-2, 38, 38);
		ctx.restore();

		//card item lvl
		drawing(this.x + 0, this.y - 3.5, 40, 7, 70,40, this.img);

		//card buttom
		drawing(this.x + 0, this.y + 30, 50, 15, 70,47, this.img);


		//money
		this.lvl = dui[this.dui];
		ctx.save();
		ctx.translate(this.x - 18, this.y + 10 );
		ctx.drawImage(images.rainmoney.img, 12/-2, 12/-2, 12, 12);
		ctx.fillStyle="black";
		ctx.font="8pt MyFont";
		if (parseInt(this.lvl) == this.price.length) ctx.fillText("- - - -", 12,4);
		else ctx.fillText(this.price[parseInt(this.lvl)], 12,4);
		ctx.restore();

		

		function drawing(x,y, width, height, ix, iy, img)
		{
			ctx.save();
			ctx.translate(x , y );
			ctx.scale(scale, scale)
			ctx.drawImage(img, ix, iy, width, height, 
				width/-2, height/-2, width , height )
			ctx.restore();
		}
	}


    pc()
    {
    	let mouse = shop_menu.camera.screenToWorld(Input.mousePosition.x, Input.mousePosition.y);
    	let btn = {x:this.buttom.x + this.x, y:this.buttom.y + this.y};

    	let overbutton = mouse.x > btn.x - this.buttom.w/2 &&
    		mouse.x < btn.x + this.buttom.w/2 &&
    		mouse.y > btn.y - this.buttom.h/2 &&
    		mouse.y < btn.y + this.buttom.h/2;

    	if (overbutton && Input.mouseFire[0] && !this.onClick) {this.onClick = true;}
    	if (overbutton && !Input.mouseFire[0] && this.onClick) 
    	{
    		this.onClick = false;
    		this.event();
    	}
    	else if(!Input.mouseFire[0] && this.onClick){ this.onClick = false; }

    }

    android()
    {
    	//for (var i = 0; i < Input.touchCount; i++) 
    	//{
			let j = Input.touchPosition[0];

	    	let touch = shop_menu.camera.screenToWorld(j.x, j.y);
	    	let btn = {x:this.buttom.x + this.x, y:this.buttom.y + this.y};

	    	let overbutton = touch.x > btn.x - this.buttom.w/2 &&
	    		touch.x < btn.x + this.buttom.w/2 &&
	    		touch.y > btn.y - this.buttom.h/2 &&
	    		touch.y < btn.y + this.buttom.h/2;

	    	if (overbutton && Input.touch[0] && !this.onClick) {this.onClick = true;}
	    	if (overbutton && !Input.touch[0] && this.onClick) 
	    	{
	    		this.onClick = false;
	    		this.event();
	    	}
	    	else if(!Input.touch[0] && this.onClick){this.onClick = false; }
    	//}
    }

    clickbuttom()
    {
    	if (device == "pc") { this.pc(); }
    	else{ this.android(); }
    }
    
    event(){}
	
	update()
	{
		this.clickbuttom();
		this.draw();
	}
}

class Shopping
{
	constructor()
	{
		this.box = [];
		this.x = 0;
		this.y = -30;
		this.ym = 70;
		this.yf = -30;

		this.width = 150;
		this.height = 80;
		this.alpha = 0;
		this.life = {current:1.6, max:1.2};
		this.imgS = "";

		this.img;
	}

	draw()
	{	
		if (this.imgS=="true") {this.img = images.buyS.img;}
		else{this.img = images.buyF.img;}
		
		ctx.save();
		ctx.globalAlpha = this.alpha;
		ctx.translate(this.x, this.y);
		ctx.drawImage(this.img, this.width/-2, this.height/-2, this.width, this.height);
		ctx.restore();
	}

	animation()
	{

		if (this.life.current <= this.life.max) 
		{
			this.life.current+=Time.deltaTime;
			this.alpha = lerp(this.alpha, 1, 0.1);
			this.y = lerp(this.y, this.ym, 0.05);
		}
		else 
		{
			
			this.alpha = lerp(this.alpha, 0, 0.1);
			this.y = lerp(this.y, this.yf, 0.05);
		}
	}

	buy()
	{
		this.y = 170;
		this.alpha = 0;
		this.life.current = 0;
	}

	update()
	{
		this.animation();
		this.draw();
	}
}