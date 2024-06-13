function CDStart() 
{
	credits=
	{
		background: new GameObject(canvas.width/2, canvas.height/2, 700, 700),
		exit:new Button(img.btn_exit, canvas.width -80, 10, 70, 70, 0, 0, img.btn_exit.width, img.btn_exit.height),
		txt:new Text("CREDITS",canvas.width/2, 100,30, "Arial Black", "white", "center"),
		drawTxt:function funci(text, x, y, size)
		{
			credits.txt.text=text;
			credits.txt.x=x;
			credits.txt.y=y;
			credits.txt.size=size;
			credits.txt.Draw();
		},
	}
}
function Credits()
{
	credits.background.Draw("color","black");
	credits.background.alpha=0.5;

	credits.exit.Draw();
	credits.exit.event=()=>{
		sound.click.play();
		menu.creditsEnabled=false;
	}


	credits.drawTxt("CREDITS",canvas.width/2, 100,30);

	credits.drawTxt("Programmer", canvas.width/2, 200, 25);
	
	credits.drawTxt("Alejandro Inciarte", canvas.width/2, 240, 20);


	credits.drawTxt("Sound effect and music", canvas.width/2, 340, 30);

	credits.drawTxt("www.zapsplat.com", canvas.width/2, 380, 20);
	credits.drawTxt("www.bensound.com/royalty-free-music", canvas.width/2, 410, 20);


	credits.drawTxt("Graphic design", canvas.width/2, 510, 30);
	credits.drawTxt("Alejandro Inciarte", canvas.width/2, 550, 20);



	

	
	
}