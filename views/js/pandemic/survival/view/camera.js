let cameraZoom = 1;

function cameraSettings()
{
	cameraZoom = 1;


	let x = 0;
	let y = 0;
	
	if (obj.specialStats.enable) {
		cameraZoom = obj.specialStats.cam;
		specialCamera()
	}
	if (obj.danger && obj.invincibility<=0) {
		cameraZoom = 0.9;
		x = shakeCamera(5);
		y = shakeCamera(5);
		hitCamera();
	}

	//ctx.clearRect(0,0,canvas.width,canvas.height);

	camera.zoomTo(lerp( camera.distance, 1000 * cameraZoom, 0.15 ));

	camera.moveTo(lerp(x + camera.lookAt[0], obj.x + cameraLookToPoint.x* cameraLookToPoint.distance, 		0.15),
				  lerp(y + camera.lookAt[1], obj.y + cameraLookToPoint.y* cameraLookToPoint.distance, 		0.15))
}

function shakeCamera(lvl)
{
	return Math.floor(Math.random()*lvl);
}

let hitScreen={ current:0, allow:1, scale:1 }

let specialScreen={ current:0, allow:1 }

function hitCamera()
{
	hitScreen.current = lerp(hitScreen.current, hitScreen.allow, 0.1);
	hitScreen.scale = lerp(hitScreen.scale, 2, 0.1);

	if (hitScreen.scale >= 1.9) {hitScreen.scale = 1;}
	if (hitScreen.current >= 0.9) {hitScreen.allow = 0;}
	else if (hitScreen.current <= 0.1) {hitScreen.allow = 1;}

	ctx.save();
	ctx.globalAlpha=hitScreen.current;
	ctx.translate(400, 400);
	ctx.scale(hitScreen.scale, hitScreen.scale);
	ctx.drawImage(images.screen.hit.img, 800/-2, 800/-2, 800,800);
	
	//ctx.drawImage(images.screen.hit.img,800/-2,800/-2,800,800);
	ctx.restore();
	
}

function specialCamera()
{
	specialScreen.current = lerp(specialScreen.current, specialScreen.allow, 0.1);


	if (specialScreen.current >= 0.9) {specialScreen.allow = 0;}
	else if (specialScreen.current <= 0.1) {specialScreen.allow = 1;}

	ctx2.save();
	//ctx.globalCompositeOperation=""
	ctx2.globalAlpha=specialScreen.current;
	ctx2.drawImage(images.screen.special.img, 0, 0, 800,800);
	ctx2.restore();
	
}