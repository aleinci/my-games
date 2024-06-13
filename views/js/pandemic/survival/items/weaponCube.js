function SpawnWeaponSurvival(x,y, weaponType)
{
	if (x== undefined || y == undefined) {x=0; y=0;}
	survivalItems.weapon.push({
		obj:new GameObject(x,y,0,0,0),
		type:weaponType,
		animY:{current:y, point:0, max:y+30, min:y},
	});

	for(let i in survivalItems.weapon)
	{
		let j = survivalItems.weapon[i];

		j.obj.sprite = new Sprite(j.obj,images.items.weapon.img);
		j.obj.health = 5;
		j.obj.life = 0;
		j.obj.maxLife = 5;
		j.obj.weaponNum;

		j.obj.bubble = new Sprite(j.obj, images.items.bubble.img);
		j.obj.bubble.scale.x=0.7;
		j.obj.bubble.scale.y=0.7;
		j.obj.bubble.alpha=0.5;
		j.obj.bubble.operation="lighter";

		j.obj.transform.scale(0.25,0.25);

		j.obj.box = new GameObject(x,y,0,0,0);
		j.obj.box.control ={current:0, point: 0, enable:false};
		j.obj.box.sprite = new Sprite(j.obj.box, images.hud.box.img);
		//j.obj.weaponType = weaponType;
	}
	sound.buble1.sfx.play();
}

function renderWeaponSurvival() 
{
	for(let i in survivalItems.weapon)
	{
		let j = survivalItems.weapon[i];

		function stepSprite(step)
		{
			j.obj.sprite.Step(step,0);
			j.obj.sprite.pixelSize.x=512; // ancho de la imagen /4
			j.obj.sprite.pixelSize.y=images.items.weapon.img.height;
			j.obj.sprite.Padding(512,0);
			//console.log(j.obj.sprite.pixelSize.x)
		}

		switch(j.type)
		{
			case "stand":
				stepSprite(0);
				j.obj.weaponNum=0;
			break;
			
			case "shootgun":
				stepSprite(1);
				j.obj.weaponNum=1;
			break

			case "m4":
				stepSprite(2);
				j.obj.weaponNum=2;
			break
			case "flame":
				stepSprite(3);
				j.obj.weaponNum=3;
			break
		}
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
		if (j.obj.life > j.obj.maxLife) {delete survivalItems.weapon[i]}
	}
}

function boxWeapon(){
	for(let i in survivalItems.weapon)
	{
		let j = survivalItems.weapon[i];

		if (j.obj.box.control.enable) {j.obj.box.control.point = 1;}
		else{j.obj.box.control.point = 0;}

		j.obj.box.control.current = lerp(j.obj.box.control.current, j.obj.box.control.point, 0.1);

		j.obj.box.sprite.alpha = j.obj.box.control.current;
		j.obj.box.transform.scale(0.4,0.4);
		j.obj.box.x=700;
		j.obj.box.y=256;
		//j.obj.box.sprite.img = images.hud.box.img;
		j.obj.box.sprite.renderer();

		let width = 512;
		let height = images.items.weapon.img.height;

		CreateImage(images.items.weapon.img, 
			width, 0, width, height, 
			740, 256, width, height, 
			j.obj.weaponNum, 0, 0.13, 0.13, j.obj.box.sprite.alpha);

		if(device=="pc")
		{
			CreateText("F",655,282,52,"Bebas Neue","white","center",j.obj.box.sprite.alpha);
		}
		else{
			CreateImage(images.hud.grab.img,0,0,images.hud.grab.img.width, images.hud.grab.img.height,
				655, 256, images.hud.grab.img.width, images.hud.grab.img.height,
				0,0, 0.3, 0.3, j.obj.box.sprite.alpha);
		}
	}
}



function itemsCollisionW( player, item )
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
			player.y - ah < l.obj.y + bh) 
		{
			l.obj.box.control.enable=true;

			if(Input.GetKey["f"])
			{
				sound.buble2.sfx.play();
				SwitchWeapon(l);
				delete item[o];
				player.weapon.reload();
			}

			for(let i = 0; i < Input.touchCount; i++)
			{
				let p = {
					x:Input.touchPosition[i].x,
					y:Input.touchPosition[i].y,
				}

				if(CircleCollider(p.x, p.y, 20, l.obj.box.x, l.obj.box.y, l.obj.box.sprite.getSize().width/2))
				{
					sound.buble2.sfx.play();
					SwitchWeapon(l);
					delete item[o];
					player.weapon.reload();
				}
			}

		}else{l.obj.box.control.enable=false;}
	}


	function SwitchWeapon(l){
		switch(l.type)
		{
			case "stand":
				player.weapon = setWeapon.stand;
				player.weapon.weaponNum = 0;
				obj.weaponSfx=sound.weapon1.sfx;
			break

			case "shootgun":
				player.weapon = setWeapon.shootGun;
				player.weapon.weaponNum = 1;
				obj.weaponSfx=sound.weapon2.sfx;
			break

			case "m4":
				player.weapon = setWeapon.m4;
				player.weapon.weaponNum = 2;
				obj.weaponSfx=sound.weapon3.sfx;
			break

			case "flame":
				player.weapon = setWeapon.flame;
				player.weapon.weaponNum = 3;
				obj.weaponSfx=sound.weapon4.sfx;
			break
		}
	}
}