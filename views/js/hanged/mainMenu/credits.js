let creditsText=
[
	["Credits",""],
	["Programmer", "Alejandro Inciarte"],
	["Background designer and ","interface designer", "Alejandro Inciarte"],
	["Music and SFX", "www.zapsplat.com", "www.bensound.com/royalty-free-music"],
]
let closeCredits = 
{
	x:canvas.width-60,
	y:10,
	width:50,
	height:50,
	press:false,
}

function Credits()
{
	if (cX > closeCredits.x &&
		cX < closeCredits.x + closeCredits.width &&
		cY > closeCredits.y &&
		cY < closeCredits.y + closeCredits.height &&
		mouse) 
		{
			closeCredits.press=true;
		}

	if (!mouse && closeCredits.press) 
		{
			closeCredits.press=false;
			btnChange.btnC_M=true;
		}

	
	ctx.save();
	ctx.fillStyle="black";
	//ctx.fillRect(closeCredits.x, closeCredits.y, closeCredits.width, closeCredits.height);
	ctx.beginPath();
	ctx.strokeStyle="#c3c3c3";
	ctx.fillStyle="white";
	ctx.textAlign="center";

	//exit button
	
	text("X", closeCredits.x+closeCredits.width/2, closeCredits.y+closeCredits.height-4, 50, 8)

	//credits
	text(creditsText[0][0], canvas.width/2, 50, 50, 8)
	

	//programer
	text(creditsText[1][0],canvas.width/2,180, 40, 5)
	text(creditsText[1][1],canvas.width/2,180+60, 30, 4)
	
	//graphic design
	text(creditsText[2][0],canvas.width/2,340, 40, 5)
	text(creditsText[2][1],canvas.width/2,340+45, 40, 5)
	text(creditsText[2][2],canvas.width/2,340+105, 30, 4)


	//music and sfx
	text(creditsText[3][0],canvas.width/2,575, 40, 5)
	text(creditsText[3][1],canvas.width/2,575+60, 30, 4)
	text(creditsText[3][2],canvas.width/2,575+100, 30, 4)

	//bg itf
	/*ctx.strokeText(creditsText[2][0],40,90);
	ctx.fillText(creditsText[2][0],40,90);
	ctx.strokeText(creditsText[2][1],40,90);
	ctx.fillText(creditsText[2][1],40,90);
	ctx.strokeText(creditsText[2][2],40,90);
	ctx.fillText(creditsText[2][2],40,90);*/
	ctx.restore();
	
	
	function text(text, x, y, size, line){

		ctx.lineWidth = line; 
		ctx.font = size+"pt Calibri";
		
		ctx.strokeText(text, x, y);
		ctx.fillText(text, x, y);
	}
	
}