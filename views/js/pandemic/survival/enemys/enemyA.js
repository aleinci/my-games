



let enemy2B =new EnemyMold(enemy.basic2,  10, 40, 5,5,5,5,5,5);
enemy2B.Update=()=>
{
	collision(obj.bullet, enemy.basic2);
	enemy2B.render();
	enemy2B.rotate();
	enemy2B.move();
	enemy2B.AI();
}


