function InstantiateMagnet(){
	magnet = [];

	magnetCircle = [];

	i_magnet = new Item(magnet, 2000, images.magnet.img);

	i_magnet.addEventCollider=()=>{
		i_magnet.createCircle();
	}

	i_magnet.createCircle=()=>	{
		for(let i in magnetCircle){
			delete magnetCircle[i];
		}

		magnetCircle.push({
			obj:new GameObject(player.x, player.y, 100, 100, 0),
			duration:pl.upgrade.magnet[pl.upgrade.magnetTime],
		});
	}

	i_magnet.moveCircle=(i,j)=>
	{
		j.duration-=Time.deltaTime;
		j.obj.x = player.x;
		j.obj.y = player.y;

		if (j.duration <= 0){ 
			delete magnetCircle[i];
			cP_magnet.shockwaveDelete();
		} else {
			cP_magnet.spawm(player.x, player.y);
		}
	}


	i_magnet.collisionCircle=(i,j)=>
	{
		for(let o in money)
		{
			let l = money[o];

			if (CircleCollider(j.obj.x, j.obj.y, j.obj.width, l.obj.x, l.obj.y, l.obj.width/2 )) l.state="magnet";
		}
	}

	i_magnet.EventPost=()=>
	{
		for(let i in magnetCircle)
		{
			let j = magnetCircle[i];

			i_magnet.moveCircle(i,j);
			i_magnet.collisionCircle(i,j);
		}
		magnetCircle = magnetCircle.filter(item => item);
	}
}

function DestroyMagnet()
{
	delete magnet;
	delete i_magnet;
	delete magnetCircle;
}


