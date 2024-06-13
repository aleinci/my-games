function UIStart()
{
	ui =
	{
		barUp:new GameObject(canvas.width/2, 35, canvas.width, 70, 0),
		textT:new Text("Time", canvas.width/2, 24, 24, "Arial", "#45f5fb", "center", true, "#299bdb", 4),
		textP:new Text("Time", 10, 24, 24, "Arial", "#45f5fb", "center", true, "#299bdb", 4),
		pause:new Button(img.btn_pause,canvas.width-65, 5, 60, 60, img.btn_pause.width/2, img.btn_pause.height, img.btn_pause.width/2, img.btn_pause.height, true),
		time:150,
		score:0,
		best:0,
		interval:0,
		count:0,
	}
}

function UserInterfacePC() 
{
	//ui.barUp.Draw("color","black");

	ui_text("Time", canvas.width/2, 30);
	ui_icon(canvas.width/2, 34, 130, 40);
	ui_text(ui.time, canvas.width/2, 65);


	ui_text("Score", 90, 30);
	ui_icon(90, 34, 160, 40);
	ui_text(ui.score, 90, 65);
	

	ui.pause.Draw();
	//ui.pause.clicked();
	ui.pause.event=()=>{
		btnChange.btnG_P=true;
		GameTimeStop();
		sound.click.play();
	}
}

function GameTime()
{
	ui.interval =setInterval(function(){
		ui.time--;
		ui.count++;
	},1000);
}

function GameTimeStop()
{
	clearInterval(ui.interval);
}


function SetScore(score)
{
	this.score=score;
	ui.score+= Math.floor(this.score);
}


function ui_icon(x,y,w,h){
	this.x = x - w/2;

	ctx.save();
	ctx.drawImage(img.borde_ui, this.x, y, w, h);
	ctx.restore();
}

function ui_text(text, x, y){
	let t = ui.textT;
		
	t.x = x;
	t.y = y;
	t.text = text;
	t.Draw();
}


