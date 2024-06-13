class EnemyD extends EnemyMold
{
	constructor(push, x, y, speed, life, defense, attack, damage, point)
	{
		super(push, x, y, speed, life, defense, attack, damage, point);

		this.addNew();
	}

	addNew=()=>
	{
		this.arrow();
	}

	arrow()
	{
		let j = this.push[this.push.length-1];

		this.skin(images.enemy.e4.img);
		j.obj.arrow = [];
		j.obj.bow ={
			time:0,
			maxTime:150,
			distance:800,
		}
	}

	createArrow()
	{
		for(let i in this.push)
		{
			let j = this.push[i];

			j.obj.bow.time=0;

			j.obj.arrow.push({
				obj:new GameObject(j.obj.x, j.obj.y, 0, 0, j.obj.rotate),
				speed: 25,
				life:0,
				maxLife:200,
			});

			for(let o in j.obj.arrow)
			{
				let l = j.obj.arrow[o];

				

				l.obj.attack = this.push[i].attack;
				l.obj.damage = this.push[i].attack;

				l.obj.sprite= new Sprite(l.obj, images.enemy.a4.img);
			}
		}
	}

	createAlert(i,j)
	{
		for(let i in this.push)
		{
			let j = this.push[i];
			
			ctx.save();
			ctx.beginPath();
			ctx.strokeStyle = "red";
			ctx.lineWidth = 4;
			ctx.moveTo(j.obj.x, j.obj.y);
			ctx.lineTo(obj.x, obj.y);
			ctx.stroke();
			ctx.restore();
		}
	}

	moveArrow(i,j,o,l)
	{
		let x = l.speed * Math.sin(l.obj.rotate);
		let y = -l.speed * Math.cos(l.obj.rotate);
		l.obj.transform.translate(x,y);
	}

	renderArrow(i,j,o,l)
	{
		this.collision(i,j,o,l);
		//delete j.obj.spike[o];
		l.obj.sprite.renderer();

		l.life++;
		if (l.life >= l.maxLife) {delete j.obj.arrow[o];}
	}

	timeArrow()
	{	
		for(let i in this.push)
		{
			let j = this.push[i];

			if (obj.state != "death" && obj.invincibility <= 0 &&
			  CircleCollider(j.obj.x, j.obj.y, j.obj.bow.distance, obj.x, obj.y, 0)) 
			{
				j.obj.bow.time++;
				if (j.obj.bow.time >= (2.5/4)*j.obj.bow.maxTime) {this.createAlert();}

				if (j.obj.bow.time > j.obj.bow.maxTime) {this.createArrow();}

				j.speedX=0;
				j.speedY=0;
			}else{
				j.speedX=1;
				j.speedY=1;
				j.obj.bow.time=0;
			}
		}
	}

	collision(i,j,o,l)
	{
		if(CircleCollider(obj.x, obj.y, obj.sprite.getSize().width/2,  l.obj.x, l.obj.y, l.obj.sprite.getSize().width/2))
		{
			obj.danger=true;
			DamageToPlayer(l.obj);
			delete j.obj.arrow[o];
		}
	}

	Update()
	{
		collision(obj.bullet, enemy.d);
		this.render();
		//this.Attack();
		this.rotate();
		this.timeArrow();
		this.move();


		for(let i in this.push)
		{
			let j = this.push[i];

			

			for(let o in j.obj.arrow)
			{
				let l = j.obj.arrow[o];

				this.renderArrow(i,j,o,l);
				this.moveArrow(i,j,o,l);
			}
		}
	}
}

let enemyD = new EnemyD(enemy.d, 500, 500, 9, 8, 6, 30, 30, 40);