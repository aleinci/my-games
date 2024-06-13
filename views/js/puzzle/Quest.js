let questBoxC = new ClickObject(true);

let question =
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
			text:new Text("",0, 500, 17, "Arial", "#007f7f", "center"),
			img:new GameObject(0, 500, 180,80,0),
			active:false,
		},
		b={
			text:new Text("",0, 500, 17, "Arial", "#007f7f", "center"),
			img:new GameObject(0, 500, 180,80,0),
			active:false,
		},
		c={
			text:new Text("",0, 500, 17, "Arial", "#007f7f", "center"),
			img:new GameObject(0, 500, 180,80,0),
			active:false,
		},
		d={
			text:new Text("",0, 500, 17, "Arial", "#007f7f", "center"),
			img:new GameObject(0, 500, 180,80,0),
			active:false,
		},
	]
}



function Question()
{
	clearInterval(ui.interval);
	// randomQuestion();

	// if (question.alpha<1) 
	// {
	// 	question.alpha+=0.05;
	// 	question.y+=3;
	// }

	// question.cubo.alpha=question.alpha;
	// question.quest.alpha=question.alpha;

	// //pregunta
	// question.cubo.x=question.x;
	// question.cubo.y=question.y+0;
	
	// question.quest.x=question.x;
	// question.quest.y=question.y+0;

	GiveTimeScore();
	FullRestart();
	//started.Start();
	//question.answer[i].active=false;
	question.on=false;
	animAnswer.enabled=true;
	sound.correct.play();
	animAnswer.img=img.correct;


	// for (var i = 0; i < question.answer.length; i++) 
	// {
		//GameTime();
				
		//questBoxC.action1=()=>{question.answer[i].active=true;}
		// questBoxC.action1=()=>{


			// if (question.answer[i].text.text == selectImage[random][1]) {
			// 	//GameTime();
			// 	GiveTimeScore();
			// 	FullRestart();
			// 	//started.Start();
			// 	question.answer[i].active=false;
			// 	question.on=false;
			// 	animAnswer.enabled=true;
			// 	sound.correct.play();
			// 	animAnswer.img=img.correct;
			// }else{	
			// 	TimeFail(5);
			// 	FullRestart();
			// 	//started.Start();
			// 	question.answer[i].active=false;
			// 	question.on=false;
			// 	animAnswer.enabled=true;
			// 	sound.incorrect.play();
			// 	animAnswer.img=img.incorrect;
			// }
		// }
		
	// 	questBoxC.onObject(question.answer[i].img);

		
	// 	question.answer[i].img.alpha=question.alpha;
	// 	question.answer[i].text.alpha=question.alpha;

	// 	question.answer[i].img.x = 100+(200*i);
	// 	//question.answer[i].text.x = 100+(200*i);

	// 	question.answer[i].img.y = question.y + 650;
	// 	//question.answer[i].text.y = question.y + 610;

	// 	question.answer[i].img.Draw("image", img.borde_anwers);
	// 	//question.answer[i].text.Draw();
	// 	Text_Quest(question.answer[i].text.text, 102+(200*i), question.y + 640, 160, 19, 18, "#007f7f");

	 // }




	// question.cubo.Draw("image",img.quest_box);
	// //question.quest.text=;
	// //question.quest.Draw();
	// Text_Cube();
}

function randomQuestion()
{
	question.time++;
	if (question.time<10) 
	{
		question.array=[selectImage[random][1], question.arText[0], question.arText[1], question.arText[2]];
	}

	if (question.time >10 && question.time < 15)
	{
		let random = Math.floor(Math.random()*question.array.length)
		question.answer[question.count].text.text = question.array[random];


		question.count+=1;
		delete question.array[random];
		question.array = question.array.filter(item => item);
	}

	if (question.one==false)
	{
		for(var i = 0; i < selectImage.length; i++)
		{	
			question.arText.push(
				selectImage[i][1],
			);
			if (question.arText[i] == selectImage[random][1]) {
				delete question.arText[i];
				question.arText = question.arText.filter(item => item);
			}
			
		}

		question.one=true;
	}
	if (question.arText.length>3) 
	{
		var randomized = Math.floor(Math.random()*(question.arText.length-1));
		
		delete question.arText[randomized];
		question.arText = question.arText.filter(item => item);
	}
	question.quest.text=selectImage[random][2];//

}

function GiveTimeScore()
{
	if (ui.count <=15) {
		SetScore(400+ui.time/2+100);
		ui.time+=20;
	}
	if (ui.count > 15 && ui.count <= 30) {
		SetScore(270+ui.time/2+100);
		ui.time+=15;
	}
	if (ui.count > 30 && ui.count <= 45) {
		SetScore(140+ui.time/2+100);
		ui.time+=10;
	}
	if (ui.count > 45) {
		SetScore(60+ui.time/2+100);
		ui.time+=5;
	}
}

function TimeFail(time)
{
	SetScore(100);
	ui.time -= time;
}





function Text_Cube()
{
	var words = question.quest.text.split(' ');
        var line = '';

	var maxWidth = 485;
    var lineHeight = 28;
    var x = question.x;
	var y = question.y;

     
     
	ctx.save();
		ctx.textAlign="center";
		ctx.globalAlpha = question.alpha;
		ctx.font = '25pt Arial';
	    ctx.fillStyle = 'black';
	        
	        for(var n = 0; n < words.length; n++) {

	          var testLine = line + words[n] + ' ';
	          var metrics = ctx.measureText(testLine);
	          var testWidth = metrics.width;
	          if (testWidth > maxWidth && n > 0) {
	            ctx.fillText(line, x, y );
	            line = words[n] + ' ';
	            y += lineHeight;
	          }
	          else {
	            line = testLine;
	          }
	        }
	        
	        
	     ctx.fillText(line, x, y);

	ctx.restore();
}



function Text_Quest(text, x, y, w, h, t, color)
{
	var words = text.split(' ');
        var line = '';

	var maxWidth = w;
    var lineHeight = h;
    var x = x;
	var y = y;

     
     
	ctx.save();
		ctx.textAlign="center";
		ctx.globalAlpha = question.alpha;
		ctx.font = t+'pt Arial';
	    ctx.fillStyle = color;
	        
	        for(var n = 0; n < words.length; n++) {

	          var testLine = line + words[n] + ' ';
	          var metrics = ctx.measureText(testLine);
	          var testWidth = metrics.width;
	          if (testWidth > maxWidth && n > 0) {
	            ctx.fillText(line, x, y );
	            line = words[n] + ' ';
	            y += lineHeight;
	          }
	          else {
	            line = testLine;
	          }
	        }
	        
	        
	     ctx.fillText(line, x, y);

	ctx.restore();
}