let gameState={
	mainM:true,
	pauseM:false,
	creditsM:false,
	playing:false,
}
let changeScene={
	alpha:{i:0, e:1},
	time:0,
	maxTime:50,
	load:{on:"", off:"", method:"", change:function(){}},

	change:function(){},
	mainM:function(){},
	pauseM:function(){},
	creditsM:function(){},
	playing:function(){},
}
changeScene.load.change=(on, off, method)=>
{
	changeScene.load.on=on;
	changeScene.load.off=off;
	changeScene.load.method=method;
}

changeScene.mainM=(state)=>
{
	if (state=="off") {
		gameState.mainM=false;
	}
	else if(state=="on"){
		gameState.mainM=true;
	}
}

changeScene.pauseM=(state)=>
{
	if (state=="off") {
		gameState.pauseM=false;
	}
	else if(state=="on"){
		gameState.pauseM=true;
	}
}

changeScene.creditsM=(state)=>
{
	if (state=="off") {
		gameState.creditsM=false;
	}
	else if(state=="on"){
		gameState.creditsM=true;
	}
}

changeScene.playing=(state)=>
{
	if (state=="off") {
		gameState.playing=false;
	}
	else if(state=="on"){
		gameState.playing=true;
	}
}


changeScene.change=(on, off, method)=>
{
	if (method == "fast") {
		on("on");
		off("off");
		changeScene.load.on="";
		changeScene.load.off="";
		changeScene.load.method="";
	}else if(method == "low"){
		changeScene.time++;

		changeScene.alpha.i=lerp(changeScene.alpha.i, changeScene.alpha.e, 0.1);

		ctx.save();
		ctx.globalAlpha=changeScene.alpha.i;
		ctx.fillRect(0,0,canvas.width, canvas.height);
		ctx.restore();

		if (changeScene.time > changeScene.maxTime) {
			on("on");
			off("off");
			changeScene.time=0;
			changeScene.load.on="";
			changeScene.load.off="";
			changeScene.load.method="";
			changeScene.alpha.i=0;
		}
	}
}