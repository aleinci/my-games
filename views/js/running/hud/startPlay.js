function InstantiateStartP()
{
	startPlay=false;

	player.spd=0;

	strPlayAlpha = {
		c:0,
		e:false,
	};
}

function updateStartP()
{
	if (!startPlay) 
	{
		ctx.save();
		ctx.globalAlpha=0.6;
		ctx.fillStyle="black";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		ctx.restore();

		if (strPlayAlpha.c > 0.9) {strPlayAlpha.e=true;}
		else if (strPlayAlpha.c < 0.1) {strPlayAlpha.e=false;}

		if (strPlayAlpha.e) {strPlayAlpha.c-=0.03;}
		else {strPlayAlpha.c+=0.03;}



		if (device=="pc") 
		{
			let img = images.pcControl.img;
			CreateImage(img, 0, 0, img.width, img.height, canvas.width/2, canvas.height/2, img.width, img.height, 0, 0, 5, 5, 1, 0);
			CreateText("Click to play",canvas.width/2,canvas.height/2 + (img.height/2*5) + 100, 20, "MyFont", "white", "center", strPlayAlpha.c);

			if (Input.mouseFire[0]) {startPlay=true;}
		}

		if (device=="android") 
		{
			let img = images.androidControl.img;
			CreateImage(img, 0, 0, img.width, img.height, canvas.width/2, canvas.height/2, img.width, img.height, 0, 0, 5, 5, 1, 0);
			CreateText("Tab to play",canvas.width/2,canvas.height/2 + (img.height/2*5) + 100, 20, "MyFont", "white", "center", strPlayAlpha.c);

			for(let i=0; i<Input.touchCount;i++)
			{
				if (Input.touch[i]) {startPlay=true;}
			}
		}

		if (startPlay) 
		{
			player.spd=5;
		}
	}
}