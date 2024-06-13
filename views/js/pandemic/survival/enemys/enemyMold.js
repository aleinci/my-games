enemy=
{
	//basic:[],
	enabled:false,
	basic2:[],
	b:[],
	c:[],
	d:[],
	e:[],

	numero:0,
	col:false,
	count:0,
	limit:1,
	spawn:2,

	difficulty:[],
	lvl:0,
	enemyLvl:[],
	list:[],
	particleD:[],
}



class EnemyMold
{
	constructor(push, x, y, speed, life, defense, attack, damage, point){

		this.push=push;
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.life = life;
		this.maxLife = life;
		this.defense = defense;
		this.attack = attack;
		this.damage = damage;
		this.point = point;


		this.push.push({
			obj: new GameObject(Math.floor(Math.random()*canvas.width)-canvas.width/2, Math.floor(Math.random()*canvas.height)-canvas.height/2,0,0,0),
			speed:speed,
			speedX:1,
			speedY:1,
			life:life,
			maxLife:life,
			defense:defense,
			attack:attack,
			damage:damage,
			timeAtk:{current:0, max:100},
			state:"moving",
			point:point,
			enableRender:true,
		});
		this.dropRate={
			max:100,
			empty:50,
			item:{
				offensive:25,
				defensive:25,
				itemO:[SpawnWeaponSurvival],
				itemD:[SpawnLifeSurvival, SpawnShieldSurvival],
			},
		}
		enemy.count++;
		this.instantiate();
		
		this.addNew();

	}

	addNew(){}

	skin(skin)
	{
		for (let i in this.push) 
		{
			let j = this.push[i];
			j.obj.sprite.img = skin;
		}
	}

	new()
	{

		this.push.push({
			obj: new GameObject(obj.x + Random(canvas.width, canvas.width+200)-canvas.width/2, obj.y + Random(canvas.height, canvas.height+200)-canvas.height/2,0,0,0),
			speed:this.speed,
			speedX:1,
			speedY:1,
			life:this.life,
			maxLife:this.life,
			defense:this.defense,
			attack:this.attack,
			damage:this.damage,
			timeAtk:{current:0, max:100},
			state:"moving",
			point:this.point,
			enableRender:true,
		});
		this.dropRate={
			max:100,
			empty:50,
			item:{
				offensive:25,
				defensive:25,
				itemO:[SpawnWeaponSurvival],
				itemD:[SpawnLifeSurvival, SpawnShieldSurvival],
			},
		}
		enemy.count++;
		this.instantiate();

		this.addNew();
	}

	anim(i)
	{
		//for (let i = 0; i < this.push.length; i++){
			let j2 = this.push[i].obj.sprite.anim;
			let l = this.push[i];
			
			if (l.state == "moving") {

				if (j2.current.h <= 5) {j2.max.h=300;}
				else if(j2.current.h >= 295) {j2.max.h=0;}
			}

			if (l.state == "attack") {

				//if (j2.current.y == 0) {j2.max.y =350;}
				//else if(j2.current.y >= 345) {j2.max.y=0;}

			}

			j2.current.x = lerp(j2.current.x, j2.max.x, 0.1) * Math.sin(l.obj.rotate);
			j2.current.y = -lerp(j2.current.y, j2.max.y, 0.1) * Math.cos(l.obj.rotate);
			j2.current.w = lerp(j2.current.w, j2.max.w, 0.1);
			j2.current.h = lerp(j2.current.h, j2.max.h, 0.1);


		//}
	}

	drop( x, y ){
		if (Math.floor(Math.random()* this.dropRate.max) > this.dropRate.empty) {
			if (Math.floor(Math.random()* this.dropRate.max - this.dropRate.empty) <= this.dropRate.item.offensive) 
			{		
					let weapon = ["shootgun", "m4", "flame"];
					let weaponR = Math.floor(Math.random() * weapon.length); 
					let random = Math.floor(Math.random() * this.dropRate.item.itemO.length);

					this.dropRate.item.itemO[random](x,y,weapon[weaponR]);
					//console.log("drop de armas")
			}
			else
			{
				let random = Math.floor(Math.random() * this.dropRate.item.itemD.length);
				this.dropRate.item.itemD[random](x,y);
				//console.log("drop de vida o defensa")
			}
		}else{
			//console.log("no hay drop")
		}
	}

	instantiate(img)
	{
		for (let i in this.push){
			let j = this.push[i];

			/////////////////////////////
			j.obj.rEnable = true;
			j.obj.state="live";
			j.obj.sprite = new Sprite(j.obj, images.enemy.e1.img);
			j.obj.transform.scale(0.2,0.2);
			j.obj.collider= new BoxCollider(j.obj);
			j.obj.sprite.bilinear=false;
			j.obj.follow={
				f:"player",
				point:[],
				obj:[],
			}
			j.obj.followPoint = [];
			j.obj.followPlayer ;
			//this.lifeBar(j)
		}	
	}


	Attack()
	{
		for(let i in this.push){
			let j = this.push[i];
			if (j.timeAtk.current <= j.timeAtk.max && j.state != "pDeath") {
				j.timeAtk.current++;
			}

			if (j.timeAtk.current> j.timeAtk.max && j.state == "attack" && j.state != "pDeath") {
				DamageToPlayer(j);
				j.timeAtk.current = 0;
			}

			if (j.state == "pDeath") {j.timeAtk.current=0;}
		}
	}

	rotate()
	{
		for(let i in this.push){

			let j = this.push[i];
			
			j.obj.rotate=(LookAt(j.obj, obj));
			if (j.obj.follow.f=="player") {
				if(j.obj.rEnable)
				{
					j.obj.rotate=(LookAt(j.obj, obj));
				}
			}else{
				if (j.obj.follow.point.length > 0) {
						let a = j.obj.sprite.getSize().width/2;
						let x = j.obj.x - j.obj.follow.point[0].x;
						let y = j.obj.y - j.obj.follow.point[0].y;

						if(j.obj.rEnable)
						{
							j.obj.rotate=(LookAt(j.obj, j.obj.follow.point[0]));
						}
						
						if (a> Math.sqrt((x*x)+(y*y))) {
							delete j.obj.follow.point[0];
							j.obj.follow.point = j.obj.follow.point.filter(item => item);
						}
				}else{
					j.obj.follow.f="player";
				}	
			}
		}
	}

	move()
	{
		
		for(let i in this.push){
			let j = this.push[i];

			j.obj.transform.translate((j.speed * j.speedX) * Math.sin(j.obj.rotate), (-j.speed * j.speedY) * Math.cos(j.obj.rotate));

			//if (j.life <=0) { delete enemy.basic[i]; }
		}
	}

	lifeBar(j, i)
	{
		let x = j.obj.x - j.obj.sprite.getSize().width/2;
		let y = j.obj.y - 120;
		let width = 150;
		let height = 30;
		let iwidth =  images.enemy.barHP.img.width;
		let iheight =  images.enemy.barHP.img.height;
		//j.obj.txt = new Text(j.life, 0,0,16,"Arial","black","center");
		if(playerVision(j.obj)){
			ctx.save();
			ctx.drawImage(images.enemy.barHP.img,
						0,0, iwidth, iheight/2,
						x, y, width, height);

			ctx.drawImage(images.enemy.barHP.img,
						0, iheight/2, (j.life/j.maxLife)*iwidth, iheight/2,
						x, y, (j.life/j.maxLife)*width, height);
			ctx.restore();
		}
	}

	render()
	{	//this.anim();
		this.playerCollision()
		for(let i in this.push){
			let j = this.push[i];
			this.anim(i);
			this.lifeBar(j, i);

			//j.obj.txt.Draw();
			if(playerVision(j.obj)){
				j.obj.sprite.renderer();
			}
			

			this.death(j, i)
		}
	}

	death(j, i)
	{
		let listSound=[sound.enemyDeath1, sound.enemyDeath2];

		function resertSound(){
			for(let i in listSound){
				let j = listSound[i];

				j.sfx.currentTime=0;
			}
		}

		if (j.life <= 0) 
		{
			for(let i=0; i < 4; i++)
			{
				createEnemyParticleDeath(j.obj.x, j.obj.y, 0.25, 90*(i+1))
			}

			resertSound();
			listSound[Random(0,1)].sfx.play();

			this.drop(j.obj.x, j.obj.y);
			enemy.count--;
			obj.point += j.point;
			delete this.push[i];

			
		}
	}

	playerCollision()
	{
		for(let i in this.push){
			let j = this.push[i];
			let w1 = j.obj.sprite.getSize().width/2;
			let h1 = j.obj.sprite.getSize().height/2;

			let w2 = obj.sprite.getSize().width/2;
			let h2 = obj.sprite.getSize().height/2;

			if (j.obj.x + w1 > obj.x - w2 &&
				j.obj.x - w1 < obj.x + w2 &&
				j.obj.y + h1 > obj.y - h2 &&
				j.obj.y - h1 < obj.y + h2 ) 
			{
				j.speedY=0;
				j.speedX=0;
				if(obj.invincibility <= 0 && obj.state != "death"){
					obj.speedX=0.6;
					obj.speedY=0.6;
				}
				j.state="attack";
				obj.danger=true;
				//hudSurvival.life2.hit=true;
			}else{
				j.speedY=1;
				j.speedX=1;
				//obj.speedX=1;
				//obj.speedY=1;
				j.state="moving";
				//obj.danger=false;
			}

			if (obj.state =="death") {
				j.state = "pDeath";
				j.speedY=0;
				j.speedX=0;
				obj.danger=false;
			}
		}
	}

	npcCollision(npc)
	{
		for(let i in this.push){
			let j = this.push[i];

			for(let o in npc){
				let l = npc[o];

				let w1 = j.obj.sprite.getSize().width/2;
				let h1 = j.obj.sprite.getSize().height/2;

				let w2 = l.obj.sprite.getSize().width/2;
				let h2 = l.obj.sprite.getSize().height/2;


				//console.log(CircleCollider(j.obj.x, j.obj.y, w1, l.obj.x, l.obj.y, w2))

				if(CircleCollider(j.obj.x, j.obj.y, w1, l.obj.x, l.obj.y, w2)){
					l.speedY=-1;
					l.speedX=-1;
					j.speedY=-1;
					j.speedX=-1;

					
				}else{
					l.speedY=1;
					l.speedX=1;
					j.speedY=1;
					j.speedX=1;
				}
			}
		}
	}

	AI()
	{
		for(let i in this.push)
		{
			let j = this.push[i];


			let circle ={
				x:j.obj.x,
				y:j.obj.y,
				r:55,
				rotate:j.obj.rotate,
			}

		

			ctx.save();
			
			ctx.beginPath();
			for(let p=0; p<5; p++){

				

				//let x =getPointRect(point.top).x;
				//let y = getPointRect(point.top).y;
				let x = circle.x + Math.cos(((circle.rotate-1.65)*3) * Math.PI/9)*(p*circle.r);
				let y = circle.y + Math.sin(((circle.rotate-1.65)*3) * Math.PI/9)*(p*circle.r);

				for(let o in block)
				{
					let l = block[o].obj;

					let distance = circle.r + l.sprite.getSize().width/2;
					let xx = x - l.x;
					let yy = y - l.y;

					let disPlayer = {
						x:j.obj.x - obj.x,
						y:j.obj.y - obj.y,
					};
					let disBlock = {
						x:j.obj.x - l.x,
						y:j.obj.y - l.y,
					};
					let dis = {
						obj: Math.sqrt((disPlayer.x * disPlayer.x) + (disPlayer.y * disPlayer.y)),
						block:Math.sqrt((disBlock.x * disBlock.x) + (disBlock.y * disBlock.y)),
					};


					
						if (distance> Math.sqrt((xx*xx)+(yy*yy))) {
							if (dis.obj > dis.block) {
								j.obj.follow.point=[{
									x:(-l.sprite.getSize().width*3 + j.obj.x) * Math.cos(j.obj.rotate),
									y:j.obj.y * Math.sin(j.obj.rotate),
								}];
								j.obj.follow.f="point";
								enemy.col=true;
							}
							
						}else{enemy.col=false;}



					
					
				}

				
				ctx.arc(x, y, 50, 1, Math.PI*2)
				
				ctx.arc(j.obj.x, j.obj.y, 170, 1, Math.PI*2)
			

			}
			
			ctx.stroke();
			ctx.restore();

			
		}
	}

	Update(){}
}



