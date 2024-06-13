function InstantiateHudInvincibility()
{
	playerHub.invincible = {
		obj:new GameObject(canvas.width-85, 300, 30, 300),
	}
}

function HudInvincibility()
{
	let j = playerHub.invincible.obj
	ctx.save();
	ctx.translate(j.x, j.y)
	ctx.scale(1,-1);
	ctx.fillStyle="gray";
	ctx.fillRect(j.width/-2, j.height/-2, j.width, j.height);
	ctx.fillStyle="blue";
	ctx.fillRect(j.width/-2, j.height/-2, j.width, (player.invincibility/player.maxInvincibility)*j.height);
	ctx.restore();

	ctx.save();
	ctx.translate(j.x, 148-30);
	ctx.drawImage(images.shield.img, 44/-2, 44/-2, 44,44);
	ctx.restore();
}