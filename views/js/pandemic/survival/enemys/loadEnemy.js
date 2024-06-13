
function loadEnemy()
{
	enemy.list = [enemy2B.push, efe.push, enemyC.push, enemyD.push, enemyE.push];
	if(enemy.count < enemy.limit && enemy.enabled && obj.state !="death"){
		
		if(Math.floor(Math.random()*400 < enemy.spawn))
		{
			let random = Math.floor(Math.random()* enemy.enemyLvl.length);
			enemy.enemyLvl[random].new();
		}
	}

	collision(obj.bullet, enemy.basic2);
	enemy2B.render();
	enemy2B.rotate();
	enemy2B.move();
	enemy2B.Attack();
	if (obj.danger) {
		//sound.music2.sfx.currentTime = sound.music1.sfx.currentTime;
		//sound.music2.sfx.play();
		sound.music1.sfx.volume=0;
		sound.music2.sfx.volume=1;
	}else{
		
		//sound.music2.sfx.pause();
		sound.music1.sfx.volume=1;
		sound.music2.sfx.volume=0;
	}
	//enemy2B.AI();
	//enemy2B.Update();
	
	efe.Update();
	enemyC.Update();
	enemyD.Update();
	enemyE.Update();

	enemyLvl();

	enemyParticleDeath();
}


function enemyLvl()
{

	enemy.difficulty = [
		[ enemy.limit=5, enemy.spawn=3,  min=0, max=100,
			enemy.enemyLvl=[enemy2B]
		],

		[ enemy.limit=6, enemy.spawn=4, min=100, max=300,
			enemy.enemyLvl=[enemy2B,enemy2B, efe]
		],

		[ enemy.limit=7, enemy.spawn=4, min=300, max=500,
			enemy.enemyLvl=[enemy2B, efe]
		],

		[ enemy.limit=8, enemy.spawn=4, min=500, max=800,
			enemy.enemyLvl=[enemy2B, efe, enemyC]
		],

		[ enemy.limit=9, enemy.spawn=4, min=800, max=1100,
			enemy.enemyLvl=[enemy2B, efe, enemyC, enemyD]
		],

		[ enemy.limit=10, enemy.spawn=5, min=1100, max=Infinity,
			enemy.enemyLvl=[enemy2B, efe, enemyC, enemyD, enemyE]
		],
	];


	if (obj.point >= enemy.difficulty[enemy.lvl][3]) {
		enemy.lvl++;
	}

	if(obj.point >= enemy.difficulty[enemy.lvl][2] && obj.point <= enemy.difficulty[enemy.lvl][3])
	{
		enemy.limit = enemy.difficulty[enemy.lvl][0];
		enemy.spawn = enemy.difficulty[enemy.lvl][1];
		enemy.enemyLvl =enemy.difficulty[enemy.lvl][4]
	}
}