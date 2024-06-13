function InstantiateMovement() {
	movement = new Movement(0, 0, 50, 50);

}

class Movement {
	constructor(x, y, w, h) {
		this.mov = [];
	}

	create() {
		this.mov.push( {
			obj: new GameObject( Random(-300, 300), camera.viewport.top-100, 50, 50, 0),
			speed: 18,
			lock: false,
			step:0,
			maxStep:5,
		})
	}

	draw (i, j) { 
		let img = images.impulse.img;
		let w = 120;
		let h = 125;

		j.step += 0.3;
	

		if (j.step >= j.maxStep) {j.step = 0;}

		//j.obj.Draw( "color", "red" );

		ctx.save();
		ctx.translate(j.obj.x, j.obj.y);
		ctx.drawImage(img, img.width/5 * Math.floor(j.step), 0, img.width/5, img.height,
					w/-2, h/-2, w, h);
		ctx.restore();
	}

	collision(i, j) {
		
		if ( CircleCollider( j.obj.x, j.obj.y, 
			j.obj.width, player.x, player.y, 50 ) ) {
			if (!j.lock)	{
				player.spd += j.speed;
				startMusic(sound.impulse);
				j.lock = true;
			}

		}

		if (j.obj.y > camera.viewport.bottom+150) {
			delete this.mov[i];
		}
	}

	update( ) {
		if ( Random(0, 3000) < 2 ) {
			this.create();
		}
		for (let i in this.mov) { 
			let j = this.mov[i];
			this.draw(i, j); 
			this.collision(i, j);
		}

		this.mov = this.mov.filter(item => item);
	}
}
