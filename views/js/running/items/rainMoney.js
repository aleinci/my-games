function InstantiateRainMoney()
{
	rainMoney = [];

	RMfx ={
		time:pl.upgrade.rainMoney[pl.upgrade.rMoneyTime],
		max:pl.upgrade.rainMoney[pl.upgrade.rMoneyTime],
	}

	i_rainMoney = new Item(rainMoney, 4000, images.rainmoney.img);
	
	i_rainMoney.addEventCollider=()=>{
		RMfx.time = 0;
		sMoney.rainMoney=true;
	}
}

function updateRainM_FX()
{
	if (RMfx.time < RMfx.max) {
		RMfx.time += Time.deltaTime;
		sEnemy01.explosion();
		sEnemy02.explosion();
		sEnemy03.explosion();
		sEnemy04.explosion();
	}else{
		sMoney.rainMoney=false;
	}
}

function DestroyRainMoney() {
	delete RMfx;
	delete rainMoney;
	delete i_rainMoney;
}