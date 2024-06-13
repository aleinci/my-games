class EnemyE extends EnemyMold
{
	constructor(push, x, y, speed, life, defense, attack, damage, point)
	{
		super(push, x, y, speed, life, defense, attack, damage, point);

		this.addNew();
	}

	addNew=()=>
	{
		let j = this.push[this.push.length-1];

		this.skin(images.enemy.e5.img);
		j.obj.stun={
			color:"red",
			distance:350,
			normalSpeed:1,
			lowSpeed:0.7,
			charge:0,
			maxCharge:50,
		};
		
	}

	stun()
	{
		
		for ( let i in this.push )
		{
			let j = this.push[i];

			///obj.speedX = j.obj.stun.normalSpeed;
			///obj.speedY = j.obj.stun.normalSpeed;

			if (obj.state != "death" && obj.invincibility <= 0 &&
				CircleCollider(j.obj.x, j.obj.y, j.obj.stun.distance, obj.x, obj.y, obj.sprite.getSize().width/2)) 
			{
				j.obj.stun.charge++;

				if (j.obj.stun.charge > j.obj.stun.maxCharge) {
					j.obj.stun.color="blue";
					obj.speedX = j.obj.stun.lowSpeed;
					obj.speedY = j.obj.stun.lowSpeed;
				}
			}else
			{
				j.obj.stun.color="red";
				j.obj.stun.charge=0;
			}



			ctx.save();
			ctx.beginPath();
			ctx.strokeStyle=j.obj.stun.color;
			ctx.lineWidth=3;
			ctx.arc(j.obj.x, j.obj.y, j.obj.stun.distance, 1, Math.PI*2)
			ctx.stroke();
			ctx.restore();
		}
	}

	Update()
	{
		collision(obj.bullet, enemy.e);
		this.render();
		//this.Attack();
		this.rotate();
		this.stun();
		this.move();
		

	}
}

let enemyE = new EnemyE(enemy.e, 500, 500, 7, 4, 15, 5, 5, 20);