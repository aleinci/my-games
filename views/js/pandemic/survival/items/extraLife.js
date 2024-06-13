let survivalItems={
	//life:new GameObject(0,-120,0,0,0),
	life:[],
	shield:[],

	weapon:[],
}

function SpawnLifeSurvival(x,y)
{
	if (x== undefined || y == undefined) {x=0; y=0;}
	survivalItems.life.push({
		obj:new GameObject(x,y,0,0,0),
		animY:{current:y, point:0, max:y+30, min:y},
	});

	for(let i in survivalItems.life)
	{
		let j = survivalItems.life[i];

		j.obj.sprite = new Sprite(j.obj, images.items.health.img);
		j.obj.bubble = new Sprite(j.obj, images.items.bubble.img);
		j.obj.bubble.scale.x=0.7;
		j.obj.bubble.scale.y=0.7;
		j.obj.bubble.alpha=0.5;
		j.obj.bubble.operation="lighter";



		j.obj.transform.scale(0.2,0.2);
		j.obj.health = 5;
		j.obj.life = 0;
		j.obj.maxLife = 5;
		

	}
	sound.buble1.sfx.play();
}
//SpawnLifeSurvival(0,-600)
function renderLifeSurvival() 
{
	for(let i in survivalItems.life)
	{
		let j = survivalItems.life[i];

		if(playerVision(j.obj)){
			j.obj.bubble.alpha=0.5;
			j.obj.bubble.renderer();
			j.obj.sprite.renderer();
			j.obj.bubble.alpha=0.2;
			j.obj.bubble.renderer();
		}

		j.obj.life += time.deltaTime*0.001;
		if (j.obj.life > j.obj.maxLife) {delete survivalItems.life[i]}


		//move
		j.animY.current = lerp(j.animY.current, j.animY.point, 0.05);

		if (j.animY.current >= j.animY.max-2) {j.animY.point= j.animY.min}
		if (j.animY.current <= j.animY.min+2) {j.animY.point= j.animY.max}

		j.obj.y = j.animY.current;
		
	}
}

function startSurvivalItems()
{
	let i = survivalItems;
	
	i.shield.sprite = new Sprite(i.shield, covid1);

}


function updateSurvivalItems(){
	renderLifeSurvival();
	renderWeaponSurvival();
	renderShieldSurvival();

	let i = survivalItems;

		itemsCollision(obj, survivalItems.life, "life")
		itemsCollision(obj, survivalItems.shield, "shield")
		itemsCollisionW(obj, survivalItems.weapon);
}

function itemsCollision( player, item, type )
{
	for(let o in item)
	{
		let l = item[o];

		let aw 	= player.sprite.getSize().width /2;
		let ah 	= player.sprite.getSize().height /2;
		let bw 	= l.obj.sprite.getSize().width/2;
		let bh 	= l.obj.sprite.getSize().height/2;

		if (player.x + aw > l.obj.x - bw &&
			player.x - aw < l.obj.x + bw &&
			player.y + ah > l.obj.y - bh &&
			player.y - ah < l.obj.y + bh ) 
		{
			switch(type)
			{
				case "life":
					player.life += l.obj.health;
					delete item[o];
					
				break

				case "shield":
					player.shield = player.maxShield;
					delete item[o];
				break
			}
			sound.buble2.sfx.play();
		}
	}
}