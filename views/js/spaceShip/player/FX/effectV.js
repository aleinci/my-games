var pViento = [];

function dibujarVientoP() 
{	

	for (i in pViento)
	{
		var pV = pViento[i];

		if (Math.floor(Math.random()*50) < 5) { pV.color = "lightgray" }
		if (Math.floor(Math.random()*50) < 5) { pV.color = "gray" }
		if (Math.floor(Math.random()*50) < 5) { pV.color = "white" }

		ctx.save();
		ctx.globalAlpha = pV.opacity;
		ctx.fillStyle=pV.color;
		ctx.translate(pV.x, pV.y);
		ctx.rotate(pV.angle);
		ctx.fillRect(pV.width/-2, pV.height/-2, pV.width, pV.height);
		ctx.restore();

		
	}
}

function MovimientoVientoP() 
{
	

	for(i in pViento)
	{
		var pV = pViento[i];

		pV.y-=1;

		pV.contX++;

		pV.angle+=1;

		
		pV.x += Math.sin(pV.contX * Math.PI /10)*5

		//if (play.width/2 + play.x > pV.x) { pV.x -= Math.sin(pV.contX * Math.PI /10)*5; }
		//if (play.width/2 + play.x < pV.x) { pV.x += Math.sin(pV.contX * Math.PI /10)*5; }
		//pV.x -= pV.speed * Math.sin(pV.angle);
        //pV.y += pV.speed * Math.cos(pV.angle);

		pV.delete += 1;
		pV.opacity -= 0.1;

		if (pV.delete >= 30) // o 10
		{
			delete pViento[i];
		}

	}
}

function VientoP() 
{
	if (Math.floor(Math.random()*50) < 8)
	{
		pViento.push({
			x:play.x+Math.floor(Math.random()*50),
			contX:0,
			y:play.y+play.width-5,
			contY:0,
			width:5,
			height:5,
			speed:1,
			angle:1,
			color:"white",
			delete:0,
			opacity:1,
		});
	}
}