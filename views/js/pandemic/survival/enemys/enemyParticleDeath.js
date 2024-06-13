function createEnemyParticleDeath(x,y, size, direction)
{
	enemy.particleD.push({
		x:x,
		y:y,
		size:size,
		speed:15,
		direction:direction * Math.PI/180,
		rotation:{rot:0, speed:Random(-1,1),},
		scale:1,
		timeLife:{current:0, max:15,},
		alpha:1,

		img:Random(0,3),
	})
}

function enemyParticleDeath()
{
	let imgP = [images.enemy.smoke1, images.enemy.smoke2,
				images.enemy.smoke3,images.enemy.smoke4];
	for (let i in enemy.particleD)
	{
		let j = enemy.particleD[i];

		//DELETE FOR TIME-------
		j.timeLife.current++;
		j.alpha = lerp(j.alpha, 0, 0.05);
		j.scale = lerp(j.scale, 0, 0.07);
		j.rotation.rot += (j.rotation.speed *10)*Math.PI/180; 

		if (j.timeLife.current >= j.timeLife.max) {delete enemy.particleD[i];}


		//MOVE------
		j.x += j.speed * Math.sin(j.direction);
		j.y -= j.speed * Math.cos(j.direction);


		//RENDER------
		ctx.save();
			ctx.translate(j.x,j.y);
			ctx.rotate(j.rotation.rot);
			ctx.globalAlpha=j.alpha;
			ctx.scale(j.scale, j.scale);
			ctx.drawImage(imgP[j.img].img,(imgP[j.img].img.width * j.size)/-2,(imgP[j.img].img.height * j.size)/-2,
				imgP[j.img].img.width * j.size,imgP[j.img].img.height * j.size);
		ctx.restore();

	}
}

////////////////////////////////

explosion = [];
function createExplosion(x,y, size, direction,color)
{
	explosion.push({
		x:x,
		y:y,
		speed:30,
		direction:(direction + (Random(-30, 30))) * Math.PI/180,
		rotation:{rot:0, speed:Random(-5,5),},
		timeLife:{current:0, max:3,},
		alpha:{max:1,min:0},
		size:size,
	});
}

function triangle()
{
	for (let i in explosion)
	{
		let j = explosion[i];

		//DELETE FOR TIME-------
		j.timeLife.current++;
		j.alpha.max = lerp(j.alpha.max, j.alpha.min, 0.3);

		if (j.timeLife.current >= j.timeLife.max) {delete explosion[i];}


		//MOVE------
		j.x += j.speed * Math.sin(j.direction);
		j.y -= j.speed * Math.cos(j.direction);


		//RENDER------
		ctx.save();
		ctx.globalCompositeOperation="lighten";
		ctx.translate(j.x,j.y);
		ctx.rotate(j.direction);
		ctx.scale(j.size, j.size);
		ctx.drawImage(images.spark.img, images.spark.img.width/-2, images.spark.img.height/-2, images.spark.img.width, images.spark.img.height);
		ctx.restore();
	}
}
