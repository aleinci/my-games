block = [];
blk = [];
function blocke(img,x,y,collision,scale){
	
		block.push({
			obj:new GameObject(x,y,0,0,0),
			hp:500,
			hpMax:500,
			respawn:{current:0, max:1000},
			state:"live",
			collision:collision,
			scale:scale,
			img:img,

		});
		blk.push({
			txt:"blocke("+img+", "+x+", "+y+", "+collision+", "+scale+")",
		})

		for(let i in block){

		let o = block[i].obj;

		o.tag="solid";
		o.sprite = new Sprite(o,img);
		
	}
}







function drawBlock() {
	for (i in block){
		let j = block[i].obj;
		let j2= block[i];

		j.sprite.img = j2.img;

		j.transform.scale(0.3+j2.scale,0.3+j2.scale)

		if(playerVision(j)){

			if(j2.state == "live"){
				j.sprite.renderer();
			}else{
				if (j2.respawn.current==0) {
					for(let i=0; i < 4; i++)
					{
						createEnemyParticleDeath(j.x, j.y, 0.25, 90*(i+1))
					}
				}
				if (obj.state == "live") { j2.respawn.current++; }
				
				if (j2.respawn.current >= j2.respawn.max) {
					j2.respawn.current = 0;
					j2.state = "live";
					j2.hp = j2.hpMax;
				}
			}
		}
	}
}

function blockCol(obj){
	listSound=[sound.hitTo1, sound.hitTo2, sound.hitTo3];

	

	for (i in obj){
		let j = obj[i];

		for (o in block){
			let l = block[o].obj;
			let la = block[o];

			let aw 	= obj.sprite.getSize().width /2;
			let ah 	= obj.sprite.getSize().height /2;
			let bw 	= l.sprite.getSize().width/2;
			let bh 	= l.sprite.getSize().height/2;

			if(la.collision == "rect"){
				if (obj.x + aw > l.x - bw &&
					obj.x - aw < l.x + bw &&
					obj.y + ah > l.y - bh &&
					obj.y - ah < l.y + bh &&
					la.state == "live" && obj.state == "live") 
				{
					la.hp--;
					listSound[Random(0,2)].sfx.play();

					if (la.hp <= 0) {la.state = "death";}

					if (obj.x + aw > l.x - bw && obj.x + aw < l.x) {obj.x--;}
				
					if (obj.x - aw < l.x + bw && obj.x - aw > l.x) {obj.x++;}
				
					if (obj.y + ah > l.y - bh && obj.y + ah <l.y) { obj.y--;}
					
					if (obj.y - ah < l.y + bh  && obj.y - ah >l.y) { obj.y++;}
				}
			}
			if (la.collision == "circle" || la.collision == "circle1") {
				if (CircleCollider(obj.x, obj.y, aw, l.x, l.y, bw) &&
					la.state == "live" && obj.state == "live") 
				{
					if (la.collision == "circle") {la.hp--;}

					listSound[Random(0,2)].sfx.play();
					
					if (la.hp <= 0) {la.state = "death";}

					if (obj.x < l.x) {obj.x--;}
					if (obj.x > l.x) {obj.x++;}
					if (obj.y < l.y) {obj.y--;}
					if (obj.y > l.y) {obj.y++;}
				}
			}

		}
	}
}

function blockColB(){
	let hitList =[sound.hitT1, sound.hitT2, sound.hitT3];

	function soundReset(){
		for(let i in hitList){
			let j = hitList[i];

			j.sfx.currentTime=0;
		}
	}

	for (i in obj.bullet){
		let j = obj.bullet[i];

		for (o in block){
			let l = block[o].obj;
			let la = block[o];

			let aw 	= j.sprite.getSize().width /2;
			let ah 	= j.sprite.getSize().height /2;
			let bw 	= l.sprite.getSize().width/2;
			let bh 	= l.sprite.getSize().height/2;

			if (j.obj.x + aw > l.x - bw &&
				j.obj.x - aw < l.x + bw &&
				j.obj.y + ah > l.y - bh &&
				j.obj.y - ah < l.y + bh && 
				la.state == "live" && obj.state == "live") 
			{
				soundReset();
				hitList[Random(0,2)].sfx.play();
				createExplosion(j.obj.x,j.obj.y, Random(8,10)*0.1,j.obj.rotate/Math.PI*180+180,["red","red", "red"]);
				triangle();
				obj.weapon.delete(i, j);
				//delete obj.bullet[i];
			} 

		}
	}
}


function loadBlock()
{
	let e1 = enemy.list;

	blockCol(obj);
	blockColB();
	


	//colisionEnemyBlock(enemy2B.push);
	//colisionEnemyBlock(efe.push);

	
	

	for(let i in e1)
	{
		let j = e1[i];
		colisionEnemyBlock(j);
	}

	function colisionEnemyBlock(enemy)
	{
		for(let i in enemy){
			let j = enemy[i];

			blockCol(j.obj);
		}
	}
}






			