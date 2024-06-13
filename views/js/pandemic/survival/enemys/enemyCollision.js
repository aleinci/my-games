function enemyCollision(e1, e2)
{
	for (let i in e1)
	{
		let j = e1[i];

		for (let o in e2)
		{
			let l = e2[o];

			if (CircleCollider(j.obj.x, j.obj.y, j.obj.sprite.getSize().width/2, l.obj.x, l.obj.y, l.obj.sprite.getSize().width/2)) 
			{
				if (j.obj.x < l.obj.x) {j.obj.x--; l.obj.x++;}
				else{j.obj.x++; l.obj.x--;}

				if (j.obj.y < l.obj.y) {j.obj.y--; l.obj.y++;}
				else{j.obj.y++; l.obj.y--;}
			}
		}
	}
}

function enemyCollisionUpdate()
{
	let e1 = enemy.list;
	let e2 = enemy.list;

	for(let i in e1)
	{
		let j = e1[i];

		for(let o in e2)
		{
			let l = e2[o];

			enemyCollision( j, l );
		}
	}
}