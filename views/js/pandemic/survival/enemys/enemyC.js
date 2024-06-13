class EnemyC extends EnemyMold
{
	constructor(push, x, y, speed, life, defense, attack, damage, point)
	{
		super(push, x, y, speed, life, defense, attack, damage, point);
	}

	addNew=()=>
	{
		let j = this.push[this.push.length-1];
		j.obj.r = 400;
		j.timeAtk.current=49;
		j.timeAtk.max=50;
		j.minSpeed = this.speed;
		j.maxSpeed = 18;
		this.skin(images.enemy.e3.img);
		
	}

	jump()
	{
		for(let i in this.push)
		{
			let j = this.push[i];

			if(j.obj.rEnable)
			{
				j.obj.rotate=(LookAt(j.obj, obj));
			}

			if(CircleCollider(j.obj.x, j.obj.y, j.obj.r, obj.x, obj.y, obj.sprite.getSize().width/2) ){
				
				j.obj.rEnable=false;
				j.speed=j.maxSpeed;
				j.speedX=1;
				j.speedY=1;

			}else{
				
				j.obj.rEnable=true;
				j.speed= j.minSpeed = this.speed;
				
			}
		}
	}

	Update()
	{
		collision(obj.bullet, enemy.c);
		this.render();
		this.Attack();
		//this.rotate();
		this.jump();
		this.move();
	}
}
let enemyC = new EnemyC(enemy.c, 100,0,7,5,5,20, 25,30);