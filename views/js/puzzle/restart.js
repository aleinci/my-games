function FullRestart()
{
	animRestart();
	QuestRestart();
	gameOver.alpha=0;
	//ui.time=150;
	playing=false;

}

function FullQuit()
{
	animRestart();
	QuestRestart();
	gameOver.alpha=0;
	ui.time=150;
	ui.score=0;
	playing=false;
	saveSound=0;
}


function animRestart()
{
	animRandom=
	{
		on:true,
		time:0,
		blur:new GameObject(canvas.width/2, canvas.height/2, 450, 450, 0),
	}
}

function QuestRestart()
{
	question =
	{
		on:false,

		time:0,
		count:0,
		array:[],
		arText:[],
		one:false,

		x:canvas.width/2,
		y:0,
		alpha:0,
		quest : new Text("pregunta",0, 0, 25, "Arial", "purple", "center"),
		cubo : new GameObject(0, 0, 700,362,0),
		answer:[
			a={
				text:new Text("",0, 500, 17, "Arial", "white", "center"),
				img:new GameObject(0, 500, 180,80,0),
				active:false,
			},
			b={
				text:new Text("",0, 500, 17, "Arial", "white", "center"),
				img:new GameObject(0, 500, 180,80,0),
				active:false,
			},
			c={
				text:new Text("",0, 500, 17, "Arial", "white", "center"),
				img:new GameObject(0, 500, 180,80,0),
				active:false,
			},
			d={
				text:new Text("",0, 500, 17, "Arial", "white", "center"),
				img:new GameObject(0, 500, 180,80,0),
				active:false,
			},
		]
	}
}