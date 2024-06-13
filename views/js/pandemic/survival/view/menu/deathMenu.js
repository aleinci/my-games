let deathMenu ={
	background:{},
	resurrect:new Button(255, 676, 295, 170,
		0,0,0,0,1,1,false),
	quit:new Button(545, 676, 295, 170,
		0,0,0,0,1,1,true),

	time:{current:0, max:50,},
	txt:new Text("", 0, 0, 52, "Bebas Neue", "#012942"),
	start:function(){},
}


deathMenu.start=()=>
{
	document.body.style.cursor="";
	ctx.save();
	ctx.drawImage(images.screen.gameOver.img,0,0,canvas.width, canvas.height);
	ctx.restore();
	deathMenu.resurrect.img = images.mainMenu.button.img;
	deathMenu.resurrect.iwidth = images.mainMenu.button.img.width;
	deathMenu.resurrect.iheight = images.mainMenu.button.img.height/4;
	
	Save();

	deathMenu.resurrect.event=()=>{
		
		reset.resurrect();	
	}

	//////////////////////////////////////

	deathMenu.quit.img = images.mainMenu.button.img;
	deathMenu.quit.iwidth = images.mainMenu.button.img.width;
	deathMenu.quit.iheight = images.mainMenu.button.img.height/4;
	deathMenu.quit.iy = images.mainMenu.button.img.height/4 *1;
	

	deathMenu.quit.event=()=>{
		
		changeScene.load.change(changeScene.mainM, changeScene.playing, "low");
		reset.quit();
		deathMenu.time.current=0;
	}

	
	deathMenu.time.current++;
	if(deathMenu.time.current > deathMenu.time.max)
	{
		deathMenu.resurrect.clicked();
		deathMenu.quit.clicked();
	}

	
	function Textd(x,y,text){
		deathMenu.txt.x = x;
		deathMenu.txt.y = y;
		deathMenu.txt.text = text;
		deathMenu.txt.Draw();
	}
	Textd(356, 459, obj.point);
	Textd(451, 524, obj.record);
}
