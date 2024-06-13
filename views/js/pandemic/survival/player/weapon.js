class Weapon 
{
	constructor(img, maxAmmo, maxTime, damage, speed, point)
	{
		this.weaponNum 	= 0;
		this.maxAmmo 	= maxAmmo;
		this.ammo 		= this.maxAmmo;
		this.time 		= 0;
		this.maxTime 	= maxTime;
		this.speed 		= speed;
		this.damage 	= damage;
		this.point 		= point;
	}
	generate()
	{

	}

	reload()
	{
		this.ammo = this.maxAmmo;
	}

	createBullet(deg)
	{
		let degress = deg * Math.PI/180;
		obj.bullet.push({
		obj:new GameObject(obj.x,obj.y,0,0,obj.rotate + degress),
		speed:25,
		sprite:0,
		life:5,
		time:0,
		attack:3,
		damage:3,
		img:0,
		});

		for(i in obj.bullet){
			let j = obj.bullet[i];
			j.sprite=new  Sprite(j.obj, images.bullet.img);
			//j.sprite.setPixel(100);
			j.obj.transform.scale(1,1);

			j.sprite.Step(obj.weapon.weaponNum,0);
			j.sprite.pixelSize.x=60; // ancho de la imagen /4( 4 tipos de balas )
			j.sprite.pixelSize.y=60;//alto de la imagen completa
			j.sprite.Padding(60,0);//mismo valos q pixelSize x 
			//j.delete = Destroy(bullet[i]);

		}
	}

	moveBullet()
	{
		for(i in obj.bullet){

			let j = obj.bullet[i];

			
			//j.obj.sprite.setPixel(100);
			//j.obj.transform.scale(0.1,0.1);

			if (obj.weapon.ammo == 0) {
				obj.weapon = setWeapon.stand;
			}

			j.sprite.renderer();
			j.time++;
			if (j.time> j.life*1000/60) {delete obj.bullet[i]}


			j.obj.transform.translate(j.speed * Math.sin(j.obj.rotate),-j.speed * Math.cos(j.obj.rotate));
			
		}
	}

	add(i,j){}

	delete(i,j)
	{
		this.add(i,j);

		delete obj.bullet[i];

		//if(j == undefined){
		//	obj.bullet.length=0;
		//}		//obj.bullet = obj.bullet.filter(function(obj.bullet);

		/*obj.bullet = obj.bullet.filter(function (el) {
 			 return el != undefined;
		});*/

		
	}
}


//img, maxAmmo, maxTime, damage, speed, charge
let setWeapon={
	stand: new Weapon( "", Infinity, 1, 5, 15, 1 ),
	shootGun: new Weapon( "", 22, 2, 3, 15 , 0.8 ),
	m4: new Weapon( "", 50, 0.3, 1.7, 18 , 0.5 ),
	rocket: new Weapon( "", 8, 5, 10, 18 , 5 ),
	flame: new Weapon( "", 180, 0.1, 2, 18 , 0.3 ),
}

setWeapon.stand.generate=()=>
{
	setWeapon.stand.name = "stand";
	setWeapon.stand.createBullet(0);
	setWeapon.stand.add=(i,j)=>{
		
	}
}

setWeapon.shootGun.generate=()=>
{
	setWeapon.stand.name = "shootGun";
	for (let i = 0; i < 3; i++) {
		setWeapon.shootGun.createBullet(-5+(5*i));
	}
}

setWeapon.m4.generate=()=>
{
	setWeapon.stand.name = "m4";
	setWeapon.m4.createBullet(0);
}

setWeapon.rocket.generate=()=>
{
	
}

setWeapon.flame.generate=()=>
{
	setWeapon.stand.name = "flame";
	setWeapon.flame.createBullet(Random(-20,20));	
}

