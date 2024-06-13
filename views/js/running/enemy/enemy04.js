function InstantiateEnemy04()
{
	sEnemy04 = new Enemy4(3, images.enemy4.img, 1000);
}

function DestroyEnemy04()
{
	delete sEnemy04;
}

class Enemy4 extends Enemy
{
	constructor(speed, img, spawm)
	{
		super(speed, img, spawm);
	}

	createEnemy=(x,y)=>
	{
		this.enemy.push({
			obj:new GameObject(x, y, 50,50,0),
			state:"live",
			speed:this.speed,
			step:0,
			imgScale:3.5,
			death:{
				time:{current:0, max:50,},
				direction:0,
				speed:7,
				angle:30,
			},
			addons:{
				startPos:Random(-80,80),
				timePos:0,
				constX:0,
				direction:Random(0,1),
				spd:2,
			},
		});
		let j = this.enemy[this.enemy.length-1]; 
	}

	move(i,j)
	{
		if (j.addons.timePos < 1) {
			j.addons.timePos++;
			j.obj.x = j.addons.startPos;
		}

		if (j.addons.direction == 0) {j.addons.constX -= j.addons.spd;}
		else{j.addons.constX += j.addons.spd;}

		j.obj.transform.translate( Math.sin(j.addons.constX * Math.PI / 90) * 8,
		 j.speed );
	}
}

