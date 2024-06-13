function AAStart()
{	
	animAnswer = 
	{
		enabled:false,
		count:0,
		box:new GameObject(canvas.width/2, canvas.height/2, 320, 200, 0),
		text:new Text("I", canvas.width/2, canvas.height/2, 25,"Arial", "blue", "center", true, "red", 5),
		alpha:0,
		y:0,
		img:"",
	}
}

function AnimAnswer() 
{

	animAnswer.box.alpha=animAnswer.alpha;
	animAnswer.text.alpha=animAnswer.alpha;

	animAnswer.box.y=animAnswer.y;
	animAnswer.text.y=animAnswer.y;

	animAnswer.box.Draw("image", animAnswer.img);
	//animAnswer.text.Draw();


	animAnswer.count++;


	//movimiento
	if (animAnswer.count <= 20) 
	{
		animAnswer.alpha+=0.05;
		
		if (animAnswer.count>10) {
			animAnswer.y+=5;
		}else{
			animAnswer.y+=20;
		}
	}

	if (animAnswer.count > 50 && animAnswer.count <=70) 
	{
		animAnswer.alpha-=0.05;

		if (animAnswer.alpha<0) 
		{
			animAnswer.alpha=0;
		}

		if (animAnswer.count<60) {
			animAnswer.y+=5;
		}else{
			animAnswer.y+=20;
		}
	}
	if(animAnswer.count>70)//FINISH
	{
		started.Start();
		animAnswer.enabled = false;
		animAnswer.y=0;
		animAnswer.count=0;
		animAnswer.alpha=0;
		playing=false;
	}

	
}