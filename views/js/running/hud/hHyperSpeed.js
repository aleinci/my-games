function InstantiateHudHyperSpeed()
{
	playerHub.hyperSpeed = {
		obj:new GameObject(canvas.width-40, 300, 30, 300),
	}
}

function HudHyperSpeed(step)
{
	let j = playerHub.hyperSpeed.obj;

	ctx.save();
	ctx.translate(j.x, j.y)
	ctx.scale(1,-1);
	ctx.fillStyle="gray";
	ctx.fillRect(j.width/-2, j.height/-2, j.width, j.height);
	ctx.fillStyle="red";
	ctx.fillRect(j.width/-2, j.height/-2, j.width, (hyperSpd.time/hyperSpd.maxTime)*j.height);
	
	//ctx.drawImage(image.hyperSpeed, 200*step,0, 200,200,
	//				j.width/-2, j.height/-2, 100,100);
	ctx.restore();

	ctx.save();
	ctx.translate(j.x, 148-30);
	ctx.drawImage(images.hyperspeed.img, 44/-2, 44/-2, 44,44);
	ctx.restore();
}