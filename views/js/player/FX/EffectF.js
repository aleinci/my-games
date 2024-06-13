var pFuego = [];

function dibujarFuegoP() {	

	for (i in pFuego) {

		var pV = pFuego[i];

		ctx.save();
		ctx.globalCompositeOperation = 'lighter';
		ctx.globalAlpha = pV.opacity;
		ctx.fillStyle=pV.color;
		ctx.translate(pV.x-10, pV.y);
		ctx.rotate(pV.angle);
		//ctx.fillRect(pV.width/-2, pV.height/-2, pV.width, pV.height);
		ctx.drawImage(energy,pV.width/-2, pV.height/-2, pV.width+20, pV.height+20);
		ctx.restore();
		
	}

}

function MovimientoFuegoP() {

	for(i in pFuego) {

		var pV = pFuego[i];

		//pV.y-=1;
		pV.contX++;

		pV.y += Math.sin(play.y);
		pV.x += Math.cos(play.x);

		pV.x -= pV.speed + 5 * Math.sin(pV.angle) + (/*obsTimeSp*/velocityO * 0.7);
        pV.y += pV.speed * Math.cos(pV.angle);

		//if (play.width/2 + play.x > pV.x) { pV.x -= pV.speed * Math.sin(pV.angle); }
		//if (play.width/2 + play.x < pV.x) { pV.x += pV.speed * Math.sin(pV.angle); }
		//pV.x -= pV.speed * Math.sin(pV.angle);
        //pV.y += pV.speed * Math.cos(pV.angle);

		pV.delete += 1;
		pV.opacity -= 0.1;

		if (pV.delete >= 10) { // o 10
		
			delete pFuego[i];

		}

	}

}

function FuegoP() {

	pFuego.push({
		x:play.x-play.width+15,
		y:play.y-10,
		width:5,
		height:5,
		speed:1,
		angle:Math.floor(Math.random()*3.3),
		color:"yellow",
		delete:0,
		opacity:1,
		contX:0,
	});
	
}