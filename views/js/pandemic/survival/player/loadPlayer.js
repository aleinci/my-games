function loadPlayer()
{
	obj.speedX = 1;
	obj.speedY = 1;
	obj.danger=false;


	if (obj.life > obj.maxLife) {obj.life = obj.maxLife;}
	if (obj.shield > obj.maxShield) {obj.life = obj.maxShield;}
	if (obj.life <= 0) {obj.life=0; obj.state = "death"; delete obj;}
	if (obj.shield <= 0) {obj.shield=0;}
	
	playerInvincibility();

	playerUpdate();

	if(obj.laser){
		playerLaserPoint();
	}
	triangle();
	
	
	
	
	if(obj.state != "death"){
		obj.weapon.moveBullet();
		//obj.sprite.renderer();
		playerAnim();
	}
	
	
}


function VisionRange(){
	let a = camera.viewport;

	ctx.save();
	ctx.globalAlpha=0.5;
	ctx.translate(obj.x,obj.y);
	ctx.fillRect((a.width*1.5)/-2, (a.height*1.5)/-2, a.width*1.5, a.height*1.5);
	ctx.restore();
}
