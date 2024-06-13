function InstantiateHyperSpeed(){
	hyperSpeed = [];
	hyperSpd = {
		enable:false,
		max:8,
		speed:0,
		time:0,
		maxTime:10,
		acceleration:false,
	};
	i_hyperSpeed = new Item(hyperSpeed, 2500, images.hyperspeed.img);

	i_hyperSpeed.addEventCollider=()=>{
		hyperSpd.time = hyperSpd.maxTime;
		hyperSpd.enable = true;
		//player.state="hyperSpeed";
	}
}

function DestroyHyperSpeed(){
	delete hyperSpeed;
	delete i_hyperSpeed;
}

