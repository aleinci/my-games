function InstantiateMoney(){
	money = [];
	sMoney = new Money(1);
}

function DestroyMoney(){
	delete money;
	delete sMoney;
}

class Money {

	constructor(point){

		this.point = point;
		this.spawmTime = {current:100, max:100, restore:100,};
		this.rainMoney = false;
		this.rm={
			time:0,
			max:0.4,
		}
	}

	createMoney(x,y){

		money.push({
			obj:new GameObject(x,y,50,50,0),
			point:this.point,
			anim:{current:0,max:0, speed:0.2},
			state:"none",
			direction:0,
		});

		let j = money[money.length-1]; 

		j.obj.sprite = new Sprite(j.obj, images.money.img);
		j.obj.transform.scale(3.5,3.5);
		j.obj.sprite.bilinear = false;

		this.spawmTime.current = 0;
	}

	move(i,j)
	{
		let x = 0;
		let y = 0;

		if (j.state=="magnet") {
			j.direction = LookAt(j.obj, player)
			x = (player.speed+3) * Math.sin(j.direction);
			y = -(player.speed+3) * Math.cos(j.direction);
		}

		j.obj.transform.translate(x,y)
	}

	draw(i,j){
			
		j.anim.current+= j.anim.speed;
		j.anim.max= 6;
		

		j.obj.sprite.Step(Math.floor(j.anim.current),0);
		j.obj.sprite.Padding(16,images.money.img.height); 
		j.obj.sprite.PixelSize(16,images.money.img.height); 
		

		j.obj.sprite.renderer();


		if (j.anim.current >= j.anim.max) j.anim.current = 0;
	}

	collision(i,j,r){
		if(CircleCollider(j.obj.x, j.obj.y, r, player.x, player.y, player.width)){
			cP_money.spawm(j.obj.x, j.obj.y);
			playerHub.money+=this.point;
			player.spd+=0.5;
			stopMusic(sound.money);
			startMusic(sound.money);
			delete money[i];
		}
	}

	update(){
		for(let i in money){

			let j = money[i];

			this.move(i,j);
			this.collision(i,j,20);
			this.draw(i,j);


			if(j.obj.y > camera.viewport.bottom+100) delete money[i];
			
			

		}
		this.spawmMoney();
	
		money = money.filter(item => item);
	}

	mLeft(){
		if (Random(0,600) < 2) 
		{
			let random=Random(0,100);

			let p1 = Random(-252,50);
			let p2 = Random(-252,252);
			if (random <=45)
			{
				for ( let i=0; i<3; i++ ){
					this.createMoney(p1+(50*i), camera.viewport.top -((55 + player.speed)*i));
				}
			}
			else
			{
				for ( let i=0; i<Random(3,8); i++ ){
					this.createMoney(p2, camera.viewport.top -((55 + player.speed)*i));
				}
			}
		}
	}

	mMid(){
		if (Random(0,600) < 2) 
		{
			let random=Random(0,100);

			let p1 = Random(-252,252);
			let p2 = Random(-252,50);
			let p3 = Random(-50,252);

			if(random <= 40)
			{
				for ( let i=0; i<Random(3,8); i++ ){
					this.createMoney(p1, camera.viewport.top -((55 + player.speed)*i));
				}
			}
			else if(random > 40 && random <= 70)//LEFT
			{
				for ( let i=0; i<3; i++ ){
					this.createMoney(p2-(50*i), camera.viewport.top -((55 + player.speed) *i));
				}
			}
			else//RIGHT
			{
				for ( let i=0; i<3; i++ ){
					this.createMoney(p3+(50*i), camera.viewport.top -((55 + player.speed) *i));
				}
			}

		}
	}

	mRight(){
		if (Random(0,600) < 2) 
		{
			let random=Random(0,100);
			let p1 = Random(-50,252);
			let p2 = Random(-252,252);
			if (random <=45)
			{
				for ( let i=0; i<3; i++ ){
					this.createMoney(p1-(50*i), camera.viewport.top -((55 + player.speed)*i));
				}
			}
			else
			{
				for ( let i=0; i<Random(3,8); i++ ){
					this.createMoney(p2, camera.viewport.top -((55 + player.speed)*i));
				}
			}
		}
	}

	spawmMoney(){
		
		if(!this.rainMoney)
		{

			if(this.spawmTime.current >= this.spawmTime.max && player.state!="death" && startPlay)
			{
				this.rm.time=0;
				this.mMid();
				this.mRight();
				this.mLeft();

			}else{
				this.spawmTime.current++;
			}
		}else{
			this.rm.time += Time.deltaTime;
			if (this.rm.time > this.rm.max) {
				this.rm.time=0;
				for ( let x=0; x<6; x++ ){
					this.createMoney(-200 + (80 * x), camera.viewport.top -((55 + player.speed)));
				}
			}
		}
	}

}
