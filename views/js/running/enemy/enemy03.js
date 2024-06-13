function InstantiateEnemy03()
{
	sEnemy03 = new Enemy3(10, images.enemy3.img, 700);
}

function DestroyEnemy03()
{
	delete sEnemy03;
}

class Enemy3 extends Enemy
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
				timeAtk:{current:0, max:2}
			},
		});
		let j = this.enemy[this.enemy.length-1]; 
	}

	move(i,j)
	{
		j.addons.timeAtk.current+=Time.deltaTime;

		if (j.addons.timeAtk.current<j.addons.timeAtk.max) {
			j.obj.x = lerp(j.obj.x, player.x, 0.08);
			j.speed *=0.95;
			j.obj.rotate=LookAt(j.obj, player)+(180 * (Math.PI/180));

			if (j.addons.timeAtk.current>=j.addons.timeAtk.max*0.85 &&
				j.addons.timeAtk.current<=j.addons.timeAtk.max*0.86) {
				stopMusic(sound.enemyAlert);
				startMusic(sound.enemyAlert);
			}
		}else{
			j.obj.rotate=0;
			j.speed = 15;
		}

		
		
		j.obj.transform.translate(0,j.speed - player.speed);
	}
}

