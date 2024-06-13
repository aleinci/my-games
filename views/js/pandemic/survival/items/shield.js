function SpawnShieldSurvival(x,y)
{
	if (x== undefined || y == undefined) {x=0; y=0;}
	survivalItems.shield.push({
		obj:new GameObject(x,y,0,0,0),
		animY:{current:y, point:0, max:y+30, min:y},
	});

	for(let i in survivalItems.shield)
	{
		let j = survivalItems.shield[i];

		j.obj.sprite = new Sprite(j.obj, images.items.shield.img);
		j.obj.bubble = new Sprite(j.obj, images.items.bubble.img);
		j.obj.bubble.scale.x=0.7;
		j.obj.bubble.scale.y=0.7;
		j.obj.bubble.alpha=0.5;
		j.obj.bubble.operation="lighter";

		j.obj.transform.scale(0.2,0.2);

		j.obj.life = 0;
		j.obj.maxLife = 5;


		
	}
	sound.buble1.sfx.play();
}
//SpawnShieldSurvival(0,600)
function renderShieldSurvival() 
{
	for(let i in survivalItems.shield)
	{
		let j = survivalItems.shield[i];

		if(playerVision(j.obj)){
			j.obj.bubble.renderer();
			j.obj.sprite.renderer();
		}

		//move
		j.animY.current = lerp(j.animY.current, j.animY.point, 0.05);

		if (j.animY.current >= j.animY.max-2) {j.animY.point= j.animY.min}
		if (j.animY.current <= j.animY.min+2) {j.animY.point= j.animY.max}

		j.obj.y = j.animY.current;

		j.obj.life += time.deltaTime*0.001;
		if (j.obj.life > j.obj.maxLife) {delete survivalItems.shield[i]}
	}
}