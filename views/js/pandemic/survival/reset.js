let reset = {
	resurrect:function(){},
	quit:function(){},
}

reset.resurrect=()=>
{
	addPlayerInvincibility(5);
	obj.life = obj.maxLife;
	obj.state="live";
	enemy.b.length = 0;///
	startPlayerObject();
	survivalItems.life.length=0;
	survivalItems.shield.length=0;
	survivalItems.weapon.length=0;
	timeStart ={current:0, limit:70};

	enemy.count = 0;
	enemy.lvl=0;
	pauseMenu.qConfirm=false;
	for (let i in enemy.list)
	{
		let j = enemy.list[i];
		for (let o in j)
		{
			delete j[o];
		}
	}
}

reset.quit=()=>
{
	startPlayerObject();
	obj.life = obj.maxLife;
	obj.state="live";
	enemy.b.length = 0;
	startPlayerObject();
	survivalItems.life.length=0;
	survivalItems.shield.length=0;
	survivalItems.weapon.length=0;
	timeStart ={current:0, limit:70};


	enemy.count = 0;
	enemy.lvl=0;
	pauseMenu.qConfirm=false;
	for (let i in enemy.list)
	{
		let j = enemy.list[i];
		for (let o in j)
		{
			delete j[o];
		}
	}
}
