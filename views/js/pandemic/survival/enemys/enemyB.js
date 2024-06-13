
class Enemy2 extends EnemyMold
{
	constructor(push, x, y, speed, life, defense, attack, damage, point)
	{
		super(push, x, y, speed, life, defense, attack, damage, point);

		//this.angle=-1.5707963267948983;
		
		//this.spike();
		//this.road=[];
	}
	addNew=()=>
	{
		this.spike();
		this.road=[];
	}
	spike()
	{
		//for(let i in this.push)
		//{
			this.skin(images.enemy.e2.img);
			let j = this.push[this.push.length-1];
			j.obj.spike =[]
			j.obj.time = 0;
			j.obj.clife = 0;
			j.obj.life = 150
			j.obj.charge = 0;
			j.obj.maxCharge = 300;
		//}
	}

	createSpike()
	{
		for(let i in this.push)
		{
			let j = this.push[i];

			if(j.obj.charge > j.obj.maxCharge){
				 
				 j.obj.charge=0;
				 j.obj.time= 0;

				for(let o =0; o < 4; o++){
					j.obj.spike.push({
						allow:true,
						obj:new GameObject(j.obj.x + Math.cos((90 * o) * (Math.PI/180))*80, j.obj.y + Math.sin((90 * o) * (Math.PI/180))*80, 0, 0, 0),
					});
				}

				for(let o in j.obj.spike)
				{
					let l = j.obj.spike[o];

					l.obj.attack = this.push[i].attack/2;
					l.obj.damage = 5;
					//l.obj.transform.scale(1,1);

					l.obj.sprite= new Sprite(l.obj, images.enemy.a2.img);
					//l.obj.sprite.PixelSize(x,y)
				}
			}
		}
	}

	timeSpike(i,j)
	{
		j.obj.charge++;
		
		if (j.obj.charge >= (3/4)*j.obj.maxCharge) {j.state = "attack";}

		if (j.obj.charge > j.obj.maxCharge) {

			delete this.push[i].obj.spike[o];
			j.obj.clife = 0;
			this.createSpike();
		}
	}

	destroySpikeBullet(i,j,o,l){
		for(let e in obj.bullet)
		{
			let b = obj.bullet[e];

			if (CircleCollider(b.obj.x, b.obj.y, b.sprite.getSize().width/2, l.obj.x, l.obj.y, l.obj.sprite.getSize().width/2)) {
				delete this.push[i].obj.spike[o];
			}
		}
	}

	moveSpike(i,j,o,l)
	{
		j.obj.time++;
		j.obj.clife++;

		if (j.obj.time < 5) {
			l.obj.transform.rotate( (90*o+90)*(Math.PI/180) )
		}else{
			//if (lerp(l.obj.rotate, LookAt(l.obj, obj), 0.1) >= LookAt(l.obj, obj)*0.9) {
			if (j.obj.time >= 5 && j.obj.time < 10) {
				l.obj.transform.rotate( lerp(l.obj.rotate, LookAt(l.obj, obj), 0.1) )
				
			}else{
				if (l.allow) {
					l.obj.transform.rotate( LookAt(l.obj, obj) )
				}
				
			}
		}

		// DELETE FOR TIME -----------

		if (j.obj.clife > j.obj.life) 
		{
			delete this.push[i].obj.spike[o];
			j.obj.clife = 0;
		}

		// DELETE FOR TIME -----------

		let x = 13* Math.sin(l.obj.rotate);
		let y = -13* Math.cos(l.obj.rotate);
		l.obj.transform.translate(x,y)
		//l.obj.transform.position(j.obj.x + Math.cos((this.angle * o) + Math.PI/180)*80, j.obj.y + Math.sin((this.angle * o) + Math.PI/180)*80)
	}

	renderSpike(i,j,o,l)
	{
		this.collision(i,j,o,l);
		l.obj.sprite.renderer();
	}
	collision(i,j,o,l)
	{
		if(CircleCollider(obj.x, obj.y, obj.sprite.getSize().width/2,  l.obj.x, l.obj.y, l.obj.sprite.getSize().width/2))
		{
			//console.log(this.push[i].attack)
			obj.danger=true;
			DamageToPlayer(l.obj);
			delete j.obj.spike[o];
		}

		if (CircleCollider(obj.x, obj.y, obj.sprite.getSize().width,  l.obj.x, l.obj.y, l.obj.sprite.getSize().width)) 
		{
			l.allow=false;
		}
	}

	Update()
	{
		collision(obj.bullet, enemy.b);

		this.render();
		this.rotate();
		this.move();
		this.Attack();
		
		

		for(let i in this.push)
		{
			let j = this.push[i];

			for(let o in j.obj.spike)
			{
				let l = j.obj.spike[o];


				this.destroySpikeBullet(i,j,o,l);
				this.renderSpike(i,j,o,l);
				this.moveSpike(i,j,o,l);

			}

			if(obj.state != "death" && obj.invincibility <= 0)
			{
				this.timeSpike(i,j);
			}
		}
		
	}

	
}

let efe = new Enemy2(enemy.b, 100,0,8,10,6,10, 10,10);

