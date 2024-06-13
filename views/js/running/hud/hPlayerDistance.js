function InstantiateHudPDistance()
{
	distancePH={
		position:0,
		start:0,
		goal:player.time.distance,

		l:{
			x:60,
			y:-300,
			width:25,
			height:130,
		},
		update:function(){},
	}


	distancePH.update=()=>
	{
		let j = distancePH.l;
		let l = distancePH;

		//l.start = playerHub.distance.CMspd;
		//l.goal 	= player.time.distance;
		l.position = (((playerHub.distance.current - l.start) / l.goal)* j.height)+j.y - (j.height/2 - 3/2);
		//l.position = l.goal - l.start;

		ctx.save();
		ctx.scale(1,-1);
		ctx.translate(j.x, j.y);
		ctx.fillStyle="gray";
		ctx.fillRect(j.width/-2, j.height/-2 ,j.width, j.height);
		ctx.restore();

		ctx.save();
		ctx.scale(1,-1);
		ctx.translate(j.x, l.position);
		ctx.fillStyle="white";
		ctx.fillRect(j.width/-2+10, 3/-2 ,j.width+10, 3);
		ctx.restore();

		ctx.save();
		ctx.translate(j.x, (j.y *(-1))-(j.height/2+30))
		ctx.drawImage(images.flag.img, 44/-2, 44/-2, 44,44);
		ctx.restore();
	}

	
}

function DestroyHudPDistance()
{
	delete distancePH;
}